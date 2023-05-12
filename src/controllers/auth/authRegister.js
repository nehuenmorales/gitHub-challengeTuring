const pool = require('../../db')
const { encrypt } = require('../../helper/HandleBcrypt')

async function register(req, res) {
    try {
        const { email, password } = req.body;

        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
        const user = users[0];
        if (user) { return res.status(404).send({ error: 'user alredy exist' }) }

        const passwordHash = await encrypt(password);
        const [rows] = await pool.query('INSERT INTO users(email, password) VALUES (?, ?)', [email, passwordHash]);

        res.send({
            id: rows.insertId,
            email,
            password: passwordHash
        })
    } catch (err) {
        return res.status(400).json(err);
    }

}

module.exports = {
    register
}
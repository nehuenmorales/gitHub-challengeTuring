const pool = require('../../db')
const { compare } = require('../../helper/HandleBcrypt')

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
        const user = rows[0]

        if (!user) { return res.status(404).send({ error: 'user not found' }) }

        const checkPassword = await compare(password, user.password)

        if (checkPassword) {
            res.send(user)
        } else {
            return res.status(409).send({
                error: 'invalid password'
            })
        }


    }
    catch (err) {
        return res.send(err);
    }
}

module.exports = {
    login
}
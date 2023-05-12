const pool = require('../../db')

async function createTask(req, res) {
    try {
        const { date, description } = req.body;
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [req.params.email])
        const user = users[0];
        if (!user) { return res.status(404).send({ error: 'user not found' }) }

        const [rows] = await pool.query('INSERT INTO tasks(date, description, user_id) VALUES (?, ?, ?)',
            [date, description, user.id]);

        res.send({
            id: rows.insertId,
            date,
            description
        })
    } catch (err) {
        return res.status(400).json(err);
    }

}

module.exports = {
    createTask
}
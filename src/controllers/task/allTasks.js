const pool = require('../../db')

async function allTasks(req, res) {
    try {
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [req.params.email])
        const user = users[0];
        if (!user) { return res.status(404).send({ error: 'user not found' }) }

        const [rows] = await pool.query('SELECT * FROM tasks WHERE user_id = ?', [user.id])

        res.send(rows)
    } catch (err) {
        return res.status(400).json(err);
    }

}

module.exports = {
    allTasks
}
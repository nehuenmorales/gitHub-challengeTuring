const { app } = require('./app')
require('./config.js')

const PORT = process.env.PORT || 300


app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})


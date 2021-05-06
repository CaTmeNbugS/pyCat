const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 3080

async function connectDB(){
    try{
        await mongoose.connect(config.get('DBURL'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true

        })
        app.listen(PORT, () => console.log(`Пивоварня в порте ${PORT} ....`))
    } catch(e){
        console.log(e.message)
        process.exit(1)
    }
}
connectDB()


const express = require('express')
const app = new express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var trainees = require('./routes/apiRouter')

mongoose.connect('mongodb://127.0.0.1:27017/gymdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, connected) => {
    if (!err) {
        console.log("MongoDB Connection Establised Successfully ")
    } else {
        console.log('DB connection err : ', err)
    }
})
// const connection = mongoose.connection;
// connection.once('open' ,() => { console.log( " MongoDB Connection Establised Successfully ") })

app.use(bodyParser.json())
app.use(cors())
app.use('/trainees', trainees)

app.listen(4000, () => console.log('listening on port 4000'))
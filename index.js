const express = require('express')
const app = express()
const port = 3000

// 몽고db connect
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wramkim:wramkimdbpw@boilerplate.94mrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Example app listening on port :' + port))
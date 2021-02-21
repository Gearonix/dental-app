const express = require('express');
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/test',(req,res) => {
    res.set('Access-Control-Allow-Origin','*')
    res.json({
        status : 200,
        message : 'OK'
    })
})
app.listen(8848,() => console.log('server started at port 8848'))


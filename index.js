const express = require('express')
const cors = require('cors')

const app = express()

const connection = mysql.createConnection(process.env.DATABASE_URL)

app.get('/', function(req,res,next){
    res.json({msg: 'Hello World'})
})

app.get('/attractions',function(req,res,next){
    connection.qurey(
        'SELECT * FROM attractions',
        function(er,results,fields){
            res.json(results)
        }
    )
})

app.listen(process.env.PORT || 3000)

const express = require('express')
const app = express()

const cors = require('cors');

const {MongoClient,ObjectId } = require('mongodb');
const {v4} = require('uuid')
const main = async () => {
    const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
    const client = new MongoClient(uri);
    try {
        await client.connect()
        return client
    } catch (e) {
        throwError()
    }
}
let db = null;

main().then((response) => {
    db = response.db('dental')
});
const ok = (data={}) => ({status : 200, message : "OK", data})
const error = (status=500,message='Request Error',data={}) => ({status,message,data})

app.use(cors())
app.use(express.json())

app.get('/',(req,res) => {
    db.collection('patient').find({creator_id : req.query.id}).toArray((err,result) =>{
        res.json(ok(result))
    } )
})
app.post('/',(req,res) => {
    const {fullname,phone} = req.body
    db.collection('patient').insertOne({fullname,phone,appointment : []},(err,result) => {
        res.json(ok(result.ops))
    })
})
app.put('/',(req,res) => {
    const {fullname,phone,id} = req.body
    db.collection('patient').updateOne({_id : new ObjectId(id)}, { $set : {fullname,phone}})
    res.send(ok(req.body))
})
app.delete('/',(req,res) => {
    db.collection('patient').deleteOne({_id : new ObjectId(req.body.id)})
    res.json(ok())
})
app.post('/tricks',(req,res) => {
    const {user_id,dent_number,diagnos,price,date,time} = req.body
    const data = {dent_number,diagnos,
        price,date,time,id : v4()}
    db.collection('patient').updateOne({_id : new ObjectId(user_id)},{$push : {appointment : data}})
    res.json(ok(data))
})
app.put('/tricks',(req,res) => {
    const {trick_id,dent_number,diagnos,price,date,time} = req.body
    db.collection('patient').updateOne({"appointment.id" : trick_id},
        {$set : {"appointment.$" :
                {dent_number,diagnos,
                    price,date,time,id: trick_id}}})
    res.json(ok())
})
app.delete('/tricks',(req,res) => {
    db.collection('patient').updateOne({"appointment.id" : req.body.id}, {$pull: {appointment : {id : req.body.id}}})
    res.json(ok())
})
app.put('/users/login',(req,res) => {
    // const {username,password} = req.body
    db.collection('users').find(req.body).toArray((err,result) => {
        if (result.length==0){
            res.json(error(404,'Wrong username or password.'))
            return
        }
        const {username,_id} = result[0]
        res.json(ok({username,_id}))
    })
})
app.post('/users/register',(req,res) => {
    db.collection('users').find({username : req.body.username}).toArray((err,result) => {
        if (result.length>0){
            res.json(error(500,'This name already exists.'))
            return
        }
        db.collection('users').insertOne(req.body,(err,result) => {
            const {username,_id} = result.ops[0]
            res.json(ok({username,_id}))
        })
    })

})



app.listen(6868,() => console.log('server started. port 6868'))

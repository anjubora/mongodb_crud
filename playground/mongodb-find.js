const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client) =>{
    if(err){
      return   console.log('unabe to connect')
    }
   
    console.log("successfully connected to mongo db")

    const db =client.db('TodoApp');
//     db.collection('todo').find().toArray().then( (result) =>{
// console.log(result[4])
//     },(err) =>{
//       console.log(err)
//     })

    db.collection('todo').find({name :'anju'}).count().then((result)=>{
      console.log(result)
    },(err) =>{
      console.log(err);
    })

  });

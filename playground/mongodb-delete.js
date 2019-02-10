const {MongoClient,ObjectID} = require('mongodb')
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client) =>{
    if(err){
      return   console.log('unabe to connect')
    }
   
    console.log("successfully connected to mongo db")

    const db =client.db('TodoApp')
//  db.collection('todo').findOneAndDelete({_id : ObjectID("5c4c4ae688b0871864c8d2dc")}).then((docs) =>{
//      console.log(docs)

//  },(err) =>{
//      console.log('error occured :',err)
//  })
 db.collection('todo').deleteOne({name :'anju'}).then( (result) =>{
     console.log(result)
 })

    client.close();
});

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client) =>{
    if(err){
      return   console.log('unabe to connect')
    }
   
    console.log("successfully connected to mongo db")

    const db =client.db('TodoApp')

     db.collection('todo').insertOne({name :'anju',branch :'cse'},(err,result) =>{
         if(err){
         return console.log(err)
         }
         console.log(result)
         //console.log(JSON.stringify(result.ops,undefined,2));

     });
    

    client.close();
});

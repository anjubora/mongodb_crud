const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client)=>{
if(err){
  return  console.log('unable to connect to server')
}
 
const db =client.db('TodoApp')
db.collection('todo').findOneAndUpdate({name :'ashu'},{$set:{name : 'shivam' }}, { returnOriginal : false}).then( (result) =>{
    console.log(result)


}
)


});
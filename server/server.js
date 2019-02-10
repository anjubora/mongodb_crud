  const mongoose =require('mongoose')
  mongoose.connect('mongodb://localhost:27017/notes',{ useNewUrlParser: true })
  mongoose.Promise=global.Promise
   
//   var todo =mongoose.model('note',{
//       text : {
//           type :String,
//           required : true,
//           minlength :1,

//       },
//       completed :{
//           type : Boolean,
//           default : false
//       },
//       completedat :{
//           type : Number,
//           default : null
//       }

//   })

//   var newtodo = new todo({text : 'cooking'});
//   newtodo.save().then((docs) =>{
// console.log(docs)
//   }, (error) =>{
//    console,log(error)
//   })
  
// var newtodo =new todo({text : 123})
// newtodo.save().then((docs)=>{
// console.log(docs)
// },(error) =>{
//     console.log(error)
// })

var user =mongoose.model('user',{
    email :{
        type :String,
        required :true,
        minlength :1,
        trim :true


    }
});

var newuser =new user({email :'anju@123'})
newuser.save().then( (result) =>{
    console.log(result)
},(error)=>{
    console.log(error)
})
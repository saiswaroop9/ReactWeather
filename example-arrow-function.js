var names = ['Swappy', 'Shiva', 'Ankit', 'Irfan'];
//
// names.forEach(function(name) {
//   console.log("Swaroop friend is " +' '+ name);
// });
//
// names.forEach((name)=>{
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name)=>console.log(name));

// var returnMe = (name)=> name +"!";
// console.log(returnMe("Swaroop"));
//
// var person = {
//   name : "Swaroop",
//   func: function(){
//     names.forEach((name)=>{
//       console.log(this.name + ' says hi to ' + name );
//     });
//   }
// };
//
// person.func();

function add (a,b){
  return a+b;
}

var addStatement = (a,b) =>{
  return a+b;
}
console.log(addStatement(10,20));
//addExpresions

var addExpresions = (a,b)=> a+b;
console.log(addExpresions(3,-2));

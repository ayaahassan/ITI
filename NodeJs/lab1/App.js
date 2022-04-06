var calc=require('./calculator');
console.log("add=",calc.add(3,4));
console.log("sub=",calc.sub(3,4));
console.log("mul=",calc.mul(3,4));
console.log("mul=",calc.mul('A',4));
 
var greetApp=require('./user');
try{
console.log(greetApp.greet("aya","1998-04-21"));
console.log(greetApp.greet("aya","2020"));

}
catch(e)
{
    console.log(e.message);
}
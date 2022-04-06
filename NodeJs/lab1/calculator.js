/*create custom module contain some methods
  add method, sub method, multi method 
for ex, 
add (1, 3) return 4 
Note: handle the error 
say I send add (A, 3) should be return error 
 */

var add=function(a,b){

    if (typeof a === 'number' && typeof b === 'number') {
       // console.log(a+b);
        return a+b;
      }
    return"error parameter";
}
var sub=function(a,b){

    if (typeof a === 'number' && typeof b === 'number') {
        return a-b;
      }
    return"error parameter";
}
var mul=function(a,b){

    if (typeof a === 'number' && typeof b === 'number') {
        return a*b;
      }
    return"error parameter";
}
//add(3,4);
module.exports = {
	add: add,
	sub: sub,
    mul: mul

}


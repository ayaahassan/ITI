
/*create custom module  
contain function constructor 
inheriting from emitter  
this function has on and emit  
I can send data from emit and log in on function */ 
var EventEmitter = require('events');
var util = require('util');

function login(){
  this.signin = 'sign in';
}

util.inherits(login, EventEmitter);

login.prototype.user = function(data){
  console.log(data);
  this.emit('user',data);

}
var newuser = new login();
newuser.on('user', function(data){
     console.log('username' + ' ' + data);
   });

   newuser.user('aya');
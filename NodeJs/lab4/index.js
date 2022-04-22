const  express=require('express');
const path = require('path');
var bodyParser = require('body-parser');
var app=express();
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
app.use(express.json());
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/homepage.html'));

   });
   app.post('/signup', function(req, res) {
   console.log(req.body)

   checkSignUp(req.body,res)
   });
   app.post('/login', function(req, res) {
    console.log(req.body)

   checkLogin(req.body,res)
   });
   app.post('/homepage', function(req, res) {
    res.sendFile(path.join(__dirname, '/homepage.html'));

   });
app.listen(3000);

function checkSignUp(reqData,res)
{
console.log(reqData);
    var flag=0;
    for(var i=0;i<obj.length;i++)
    {
        if(obj[i].email===reqData.email)
        {
            flag=1;
            break;
        }
        
    }
    if(flag==0)
    {
        obj.push(reqData);
        fs.writeFile("data.json", JSON.stringify(obj), (err) => {
            if (err) throw err;
            console.log('data  is added');
     
       
        });
        res.sendFile(path.join(__dirname, '/profile.html'));
       
    }
    else
    {
        res.send('email already exit')
    }
  

}
function checkLogin(reqData,res)
{
    console.log("in function")
    var flag=0;
    for(var i=0;i<obj.length;i++)
    {
        console.log(i);
        if(reqData.email===obj[i].email&&reqData.password===obj[i].password)
               { 
                res.sendFile(path.join(__dirname, '/profile.html'));
                console.log("in if");
                flag=0;
                break;
               }
        else if (obj[i].email === reqData.email&&obj[i].password !== reqData.password)
              { 
                res.status(400).send({error: "wrong password"});
                console.log("in else")
                flag=0;
                break;
              }    
        else if(obj[i].email !== reqData.email&&obj[i].password === reqData.password)   
              {  
                 
                res.status(400).send({error: "you entered wrong email"});
               console.log("in else") 
               flag=0;
                break;
              }
        else
              {
                  console.log("else");
              flag=1;
              }
                    
    }
   if(flag==1)
   {
           res.status(400).send({error: "email not exit please sign up"});

    }

}
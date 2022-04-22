var http = require('http')
var fs = require('fs');
const { constants } = require('perf_hooks');
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
//console.log(obj.email);

http.createServer(function (req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': "text/html" })
        var html = fs.readFileSync('homepage.html')
        res.write(html)
        res.end()

    }
    else if (req.url === '/login.html' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': "text/html" })
        var html = fs.readFileSync('login.html')
        res.write(html)
        res.end()

    }
    else if (req.url === '/login.html' && req.method === 'POST') {

        var reqData = "";
        req.on('data', function (chunk) {
            reqData += chunk;
        });
        req.on('end', function () {
            reqData = JSON.parse(reqData);
            console.log(reqData);
            checkLogin(reqData, res);
        });
    }

    else if (req.url === '/signup.html' && req.method === 'POST') {
        var reqData = "";
        req.on('data', function (chunk) {
            reqData += chunk;
        });
        req.on('end', function () {
            reqData = JSON.parse(reqData);
            console.log(reqData);
          //  obj.push(reqData);
            //fs.writeFile("data.json", JSON.stringify(obj), (err) => {
             //   if (err) throw err;
              //  console.log('data  is added');
              //  res.end()

          //  });
          checkSignUp(reqData,res);
        });

    }


}).listen(3000)



/*function login(reqData, res) {
    if (obj.email === reqData.email && obj.password === reqData.password) {
        var html = fs.readFileSync('profile.html')
        res.write(html)

    }

    else if (obj.email !== reqData.email) {
        res.writeHead(404)
        res.write('you entered wrong mail ')
    }
    else if (obj.password !== reqData.password) {
        res.writeHead(404)
        res.write('you entered wrong password ')
    }
    res.end()

}*/
function checkLogin(reqData,res)
{
    console.log("in function")
    var flag=0;
    for(var i=0;i<obj.length;i++)
    {
        console.log(i);
        if(reqData.email===obj[i].email&&reqData.password===obj[i].password)
               { 
                res.writeHead(200, {'content-type': "text/html"})

                var html = fs.readFileSync('profile.html')
                res.write(html)   
                console.log("in if");
                flag=0;
                break;
               }
        else if (obj[i].email === reqData.email&&obj[i].password !== reqData.password)
              { 
                res.writeHead(400)
                res.write('you entered wrong password ')   
                console.log("in else")
                flag=0;
                break;
              }    
        else if(obj[i].email !== reqData.email&&obj[i].password === reqData.password)   
              {  
                res.writeHead(400)
                res.write('you entered wrong email ')  
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
      res.writeHead(400)
      res.write('email not exit please sign up')  
    }
    res.end()

}
function checkSignUp(reqData,res)
{
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
        var html = fs.readFileSync('profile.html')
        res.write(html)   
    }
    else
    {
        res.writeHead(400)
        res.write('email already exit ') 
    }
    res.end()

}
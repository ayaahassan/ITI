
//************  Read File Line by Line ***********
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
    input: fs.createReadStream('./greet.text')
});

var lineno = 0;
myInterface.on('line', function (line) {
    lineno++;
   // console.log('Line number ' + lineno + ': ' + line);
});
/*********** Rename File **********************/
try
{
    fs.renameSync('test.txt', 'info.txt');

}
catch(error)
{
    console.error("file not exist");
}
/*********** Remove File *******************/

try
{
    fs.unlinkSync('info.txt');
}
catch(error)
{
    console.error("File not exist");
}

/****************Read data from json **********************/
//sync
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
console.log(obj);

//async 
try
{
var obj = fs.readFile('data.json', 'utf8',function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj);

  });
}
catch(error)
{
    console.error("File error");
}
/******************** write to file***************************/

fs.appendFileSync('test.txt',' append to file' );


/********************make directory**************************/
const path = require('path');
   
fs.mkdir(path.join(__dirname, 'iti'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});


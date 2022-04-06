/*create custom module 
return method take a name and birth-date 
return Hello `Name` and your Agen now is: ``
Note handle the error 
if send 2020 as year should be not accepted*/




var greet=function(name,date)
{
    const regex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;

    if (date.match(regex) === null) {
      throw new Error(`"${date}" in wrong format should be YYYY-MM-DD`)
    }
    let birthDate=new Date(date);
    let ageDiff=new Date()-birthDate.getTime();

    let age=new Date(ageDiff);
    console.log(age);
    let calAge=Math.abs(age.getUTCFullYear()-1970);
    console.log(calAge);
    return `Hello ${name} your age ${calAge}`;
}
module.exports=
{
    greet:greet
}

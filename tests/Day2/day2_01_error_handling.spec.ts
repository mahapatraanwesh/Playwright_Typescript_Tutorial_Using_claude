function getElementText(elementFound: boolean){
if(elementFound)
{
console.log("Login succesful");
}
else
{
throw new Error("Element not found on page");
}
}
try{

 getElementText(true);}
catch(error)
{
console.log("Error: ", error);}

console.log("Program continues running")
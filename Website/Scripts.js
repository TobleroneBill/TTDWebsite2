const fields = {  
name:document.getElementById("name") ,
email:document.getElementById("email"),
card:document.getElementById("card"),
submit:document.getElementById("submitButton"),
}

Object.keys(fields).forEach(key => {
fields[key].addEventListener("click",myFunction);
if(key != "submit"){
  fields[key].addEventListener('input',logText);
}
});




function myFunction() {
  console.log("Hello World");
}

function logText(e){
  const field = e;
  console.log(field.data);
}
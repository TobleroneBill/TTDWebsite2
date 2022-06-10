//json =3
const fields = {  
name:document.getElementById("name") ,
email:document.getElementById("email"),
card:document.getElementById("card"),
submit:document.getElementById("submitButton"),
}

//adds Event listeners. doesnt check for input on submit button.
Object.keys(fields).forEach(key => {
if(key != "submit"){
  fields[key].addEventListener('input',LogText);
}else{
  fields[key].addEventListener("click",submit);
}
});

function submit(){
console.log('Pressed Submit');
}

//console logs text from 3 fields.
function LogText(e){
  Object.keys(fields).forEach(key => {
    if(key != "submit"){
      console.log(fields[key].name+": "+fields[key].value);
    }
  });
}
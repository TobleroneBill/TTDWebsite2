//json =3
const fields = {  
name:document.getElementById("name") ,
email:document.getElementById("email"),
card:document.getElementById("card"),
submit:document.getElementById("submitButton"),
}
const keyCodes = [40,41,46,58,59,60,62,91,92,93,94]
var valid = 0;

//adds Event listeners. Doesn't check for input on submit button only click.
Object.keys(fields).forEach(key => {
if(key != "submit"){
  fields[key].addEventListener('input',LogText);
}else{
  fields[key].addEventListener("click",submit);
}
});

//submit event 
//TODO: open mail HTML form action when all info is valid
function submit(){
console.log('Pressed Submit');
}

//console logs text from 3 fields.
//TODO: convert this into a check for validity (might need seperate functions for each field)
function LogText(e){
  Object.keys(fields).forEach(key => {
    var value = fields[key].value
    if(key != "submit"){
      console.log(fields[key].name+": "+fields[key].value);
    }

    //for loop to check each keycode
    for(var i=0; i < value.length;i++){
      //if keycodes are in accepted range
      if(value.charCodeAt(i) > 31 && value.charCodeAt(i) < 127){
        //check if the letter at index i has the same keycode as the banned keycodes.
        keyCodes.forEach(element => {
          //if is does match a banned keycode, return false
          if(value.charCodeAt(i) == element){
            console.log("banned keycode" + element);
          }
          else{
            return true;
          }
        });
      } else{
        console.log("input was out of accepted readable char range: " + value.charCodeAt(i));
      }
    }

  });
}
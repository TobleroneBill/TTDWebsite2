//
class InputField{

  LogSelf() {
    console.log(this._name + " is name, its validity is " + this._valid +" and its type is " + this._type.name)
  }

  constructor(name,type){
    this._name = name;
    this._valid = false;
    //get the field DOM
    this._type = type;
    //add event listener and check ascii each input
    this._type.addEventListener('input',this.CheckAscii);
    
  }

  //Ascii + printable chars check
  CheckAscii(){
    //banned keycodes
    const invalidkeyCodes = [40,41,46,58,59,60,62,91,92,93,94]  
    //sets value to class type value (wierd and i dont really understand)
    var value = this.value;
    console.log(value);

    for(var i=0; i < value.length;i++){
      //if keycodes are in accepted range
      
      if(value.charCodeAt(i) > 31 && value.charCodeAt(i) < 127){
        //check if the letter at index i has the same keycode as the banned keycodes.
        console.log(value.charCodeAt(i) + " is valid");

        invalidkeyCodes.forEach(element => {
          //if is does match a banned keycode, return false
          if(value.charCodeAt(i) == element){
            console.log("banned keycode" + element);
          }
        });
      } 
      else{
        console.log("input was out of accepted readable char range: " + value.charCodeAt(i));
      }
    }
  }
}

//json =3
const fields = {  
name:new InputField('name',document.getElementById("name")) ,
email:new InputField('email',document.getElementById("email")),
card:new InputField('card',document.getElementById("card")),
submit:document.getElementById("submitButton"),
}

console.log(fields[name]);

Object.keys(fields).forEach(key => {
  if(key != "submit"){
    fields[key].LogSelf();
    //fields[key]._type.addEventListener('input', fields[key].CheckAscii);
  }
});


//adds Event listeners. Doesn't check for input on submit button only click.
/*
Object.keys(fields).forEach(key => {
if(key != "submit"){
  fields[key].addEventListener('input',LogText);
}else{
  fields[key].addEventListener("click",submit);
}
});
*/


//submit event 
//TODO: open mail HTML form action when all info is valid
function submit(){
console.log('Pressed Submit');
}

//console logs text from 3 fields.
/*
function LogText(e){
  Object.keys(fields).forEach(key => {
    var value = fields[key].value
    if(key != "submit"){
      console.log(fields[key].name+": "+fields[key].value);
    }

    //for loop to check each keycode
    for(var i=0; i < value.length;i++){
        //console.log(value.charCodeAt(i));     //used to debug keycode values

      //if keycodes are in accepted range
      if(value.charCodeAt(i) > 31 && value.charCodeAt(i) < 127){
        //check if the letter at index i has the same keycode as the banned keycodes.
        invalidkeyCodes.forEach(element => {
          //if is does match a banned keycode, return false
          if(value.charCodeAt(i) == element){
            console.log("banned keycode" + element);
          }
        });
      } else{
        console.log("input was out of accepted readable char range: " + value.charCodeAt(i));
      }
    }
  });
}
*/
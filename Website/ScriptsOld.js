class InputChecks{

  LogSelf(name, validity, dom) {
    console.log(name + " is name, its validity is " + validity +" and its type is " + dom)
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
        console.log("is valid: "+this._valid)
        invalidkeyCodes.forEach(element => {
          //if is does match a banned keycode, return false
          if(value.charCodeAt(i) == element){
            console.log("banned keycode" + element);
            return false;
          }
        });
      } 
      else{
        console.log("input was out of accepted readable char range: " + value.charCodeAt(i));
        return false;
      }
    }

    return true;
  }

  CheckLuhn(){

  }
}

class SubmitButton{
  constructor(type){
    this._type = type;
    this._type.addEventListener('click',this.CheckValid);
  }

  CheckValid(){
    var checkSum = 0;
  }
}

var CheckSum = 0;

const Checker = new InputChecks(); 

//json =3
const fields = {  
name:document.getElementById("name") ,
email: document.getElementById("email"),
card: document.getElementById("card"),
submit:new SubmitButton(document.getElementById("submitButton")),
}

Object.keys(fields).forEach(key =>{
  if(key != "submit"){
    fields[key].addEventListener('input',Checker.LogSelf(key,));
  }
})
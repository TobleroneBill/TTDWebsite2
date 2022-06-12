//json =3
const fields = {  
  name:document.getElementById("name") ,
  email: document.getElementById("email"),
  card: document.getElementById("card"),
  submit:document.getElementById("submitButton"),
}

function Luhn(input){
  const x = input;
  var double = true;
  let total = 0;
  if(x == "0" || x == ""){
      console.log("x = 0 :/")
      return;
  }
  for(var i = 0; i < x.length; i++){
      var CVal = x.charAt(i);
      if(double == true){     //if double is true, multiply current
          CVal *= 2;          //value by 2
          
          if(CVal > 9){       //if greater than 10, -9 from total
              CVal -=9;
          }
          
          total+= CVal;       //add current value to total and double= false
          console.log(CVal);
          double = false;
      } else{
          CVal = Number(CVal);
          total += CVal;      //add current value to totale and set
          double = true;      //double to true
      }
  }
  total %= 10;
  if(total != 0){
      console.log("bad");
  } else{
      console.log("Total is Luhn Valid");
  }
}

function EmailValid(input){
  if(input.indexOf('@') != -1 &&input.indexOf('.') != -1){
      console.log('email contains @ & .');
  } else{
    console.log('Invalid Email');
  }
}

//compares keycodes against a banned list in an array. if ==, then input is invalid.
function CheckAscii(input){
  //banned keycodes
  const invalidkeyCodes = [40,41,46,58,59,60,62,91,92,93,94]  
  //sets value to given input
  var value = input;
  for(var i=0; i < value.length;i++){
    //if keycodes are in accepted range
    if(value.charCodeAt(i) > 31 && value.charCodeAt(i) < 127){
      //check if the letter at index i has the same keycode as the banned keycodes.
      console.log(value.charCodeAt(i) + " is valid");
      console.log("is valid: "+value)
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

//adds event listeners
Object.keys(fields).forEach(key =>{
  if(key != "submit"){
    fields[key].addEventListener('input', CheckValid);
  } else {
    fields[key].addEventListener('click',printLOL);
  }
})


//checks if inputs are valid using switch case for each field of input. 
//TODO: submit button uses checksum value to determine if email is sendable & valid.
function CheckValid(){
  var checkSum = 0;
  Object.keys(fields).forEach(key =>{
    switch(key){
      case "submit":
        
      break;
      case "name":
        CheckAscii(fields[key].value);
        break;
      case "email":
        CheckAscii(fields[key].value);
        EmailValid(fields[key].value);
        break
      case "card":
        CheckAscii(fields[key].value);
        Luhn(fields[key].value)
        break;
    } 
    })
}
  
//testing function
function printLOL(){
  console.log('lol');
}
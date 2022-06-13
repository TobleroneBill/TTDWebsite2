var   checkSum = 0;
var _name;
var _email;
var _cardNum;
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
  if(x.length != 16){
      console.log("Not 16 digits")
      return false;
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
    console.log("total modulo 10: " + total);
    return false;
  } else{
    console.log("total modulo 10: " + total);
    return true;
  }
}

function EmailValid(input){
  if(input.indexOf('@') != -1 &&input.indexOf('.') != -1){
      console.log('email contains @ & .');
      return true;
  } else{
    console.log('Invalid Email');
    return false;
  }
}

//compares keycodes against a banned list in an array. if ==, then input is invalid.
function CheckAscii(input){
  //banned keycodes
  const invalidkeyCodes = [40,41,46,58,59,60,62,91,92,93,94]  
  //sets value to given input
  var value = input;
  var valid = true;

  if (value != ""){
    for(var i=0; i < value.length;i++){
      //if keycodes are in accepted range
      if(value.charCodeAt(i) > 31 && value.charCodeAt(i) < 127){
        //check if the letter at index i has the same keycode as the banned keycodes.
        console.log(value.charCodeAt(i) + " is in valid range");
        invalidkeyCodes.forEach(element => {
          //if is does match a banned keycode, return false
          if(value.charCodeAt(i) == element){
            console.log("banned keycode" + element);
            valid = false;
          } else{
            valid = true;
          }
        });
  
      } 
      else{
        console.log("input was out of accepted readable char range: " + value.charCodeAt(i));
        valid = false;
      }
    }
  } else{
    valid = false;
  }
 

  return valid;
}

//adds event listeners
Object.keys(fields).forEach(key =>{
  if(key != "submit"){
    fields[key].addEventListener('input', CheckValid);
  } else {
    fields[key].addEventListener('click',submit);
  }
})


//checks if inputs are valid using switch case for each field of input. 
//TODO: submit button uses checksum value to determine if email is sendable & valid.

function CheckValid(){
  checkSum = 0;
  Object.keys(fields).forEach(key =>{
    switch(key){
      case "submit":
      break;
      //if ascii good set bg
      case "name":
        if(CheckAscii(fields[key].value) === true){ fields[key].style.backgroundColor = "green"; checkSum +=1;} else{ fields[key].style.backgroundColor = "#FF9C9C"; checkSum-=1;};
        _name = fields[key].value
        break;
        //if ascii + conatins @ and . set bg
      case "email":
        if(CheckAscii(fields[key].value) === true){ if(EmailValid(fields[key].value) == true){ fields[key].style.backgroundColor = "green";checkSum +=1;} else{ fields[key].style.backgroundColor = "#FF9C9C"; checkSum -=1;};
        _email = fields[key].value
    }
        break;
        //if luhn + ascii correct, set bg colors
      case "card":
        if(CheckAscii(fields[key].value) === true){ if(Luhn(fields[key].value) === true){fields[key].style.backgroundColor = "green";  checkSum +=1;} else{ fields[key].style.backgroundColor = "#FF9C9C";checkSum -=1;}
      }
      _cardNum = fields[key].value
        break;
    } 
    })
    console.log(checkSum);
}
  
function submit(){
  printLOL();
  if(checkSum!=3){
    console.log("Invalid Input");
  }else{
  window.location.href = "mailto:jstest666420@gmail.com?subject=Details&body="+
  "     Name :" + _name +
  "     Email : " + _email +
  "     Card : " + _cardNum;
  }
}

//testing function
function printLOL(){
  console.log('lol');
}
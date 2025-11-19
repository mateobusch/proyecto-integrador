let form= document.querySelector(".Formulario_registro form")
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let email= document.querySelector("#email")
  let password= document.querySelector("#contraseña")
  let rePassword= document.querySelector("#recontraseña")
 
  if  (email.value== ""){
   let invalidEmail= document.querySelector(".Obligatorio_1")
   invalidEmail.innerHTML= "<p>Debe llenar el campo</p>";
   invalidEmail.style.display = "block";
   invalidEmail.style.color= "red";
  }
 
  else if (password.value== ""){
   let invalidPassword= document.querySelector(".Obligatorio_2")
   invalidPassword.innerHTML= "<p>Debe llenar el campo</p>";
   invalidPassword.style.display = "block";
   invalidPassword.style.color= "red";
  }
  else if (password.value.length < 6) {
  let invalidPassword = document.querySelector(".Obligatorio_2");
  invalidPassword.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres </p>";
  invalidPassword.style.display = "block";
  invalidPassword.style.color= "red";
  }
  else if (rePassword.value== ""){
   let invalidRepassword= document.querySelector(".Obligatorio_3")
   invalidRepassword.innerHTML= "<p>Debe llenar el campo</p>";
   invalidRepassword.style.display = "block";
   invalidRepassword.style.color= "red";
  }
  else if (rePassword.value!=password.value) {
  let invalidRepassword = document.querySelector(".Obligatorio_3");
  invalidRepassword.innerHTML = "<p>Las contraseñas deben coincidir</p>";
  invalidRepassword.style.display = "block";
  invalidRepassword.style.color= "red";
  }
  else{
    this.submit()
  }

});
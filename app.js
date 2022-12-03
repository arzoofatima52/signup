const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");



sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

function signup(){
    var name =  document.getElementById("name").value;
    var email =  document.getElementById("email").value;
    var password =  document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var add = document.getElementById("add").value;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)
    localStorage.setItem("age",age)
    localStorage.setItem("address", add)

    console.log(localStorage.getItem("name"))



}
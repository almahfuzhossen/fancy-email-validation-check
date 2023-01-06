const email = document.querySelector("#email");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const error = document.querySelector(".error-text");
const btn = document.querySelector("button");
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check(){
    if(email.value.match(regExp)){
        email.value.borderColor ="#27ae60";
        icon1.style.display = "none";
        icon2.style.display = "black";
        error.style.display = "none";
        btn.style.display = "block";
    }
    else{
        email.value.borderColor ="#e74c3c";
        icon1.style.display = "block";
        icon2.style.display = "none";
        error.style.display = "block";
        btn.style.display = "none";

    }
    if(email.value == ""){
        email.value.borderColor ="lightgrey";
        icon1.style.display = "none";
        icon2.style.display = "none";
        error.style.display = "none";
        btn.style.display = "none";
    }
}
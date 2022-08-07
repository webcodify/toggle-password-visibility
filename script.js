
let i_password = document.getElementById("password");
let eye = document.getElementById("eye");
let btn = document.getElementById("btn");

btn.onclick = function(){
    if(i_password.type == "password"){
        i_password.type = "text";
        eye.classList.add("far");
        eye.classList.remove("fas");
    }
    else{
        i_password.type = "password";
        eye.classList.add("fas");
        eye.classList.remove("far");
    }
}






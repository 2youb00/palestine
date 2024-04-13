//-------------rember me----------------
window.onload = function() {
    console.log(3); 
    console.log(localStorage.getItem("remberme"));

    if(localStorage.getItem("remberme") === "true") { // Compare to the string "true"
        console.log(4); 
        window.location.href = "home.html"; 
    }
};


       





    //----------------------------------------------------
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

  

    function registerdata() {
        var firstNamereg= document.querySelector('input[placeholder="Firstname"]');
        var lastNamereg = document.querySelector('input[placeholder="Lastname"]');
        var emailreg = document.querySelector('input[placeholder="Email"]');
        var passwordreg = document.querySelector("#passwordreg");
        
        if (firstNamereg.value) {
            localStorage.setItem("firstname", firstNamereg.value);
            firstNamereg.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        } else {
            firstNamereg.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        }
    
        if (lastNamereg.value) {
            localStorage.setItem("lastname", lastNamereg.value);
            lastNamereg.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        } else {
            lastNamereg.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        }
    
        if (emailreg.value) {
            localStorage.setItem("Email", emailreg.value);
            emailreg.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        } else {
            emailreg.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        }
    
        if (passwordreg.value) {
            localStorage.setItem("Password", passwordreg.value);
            passwordreg.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        } else {
            passwordreg.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        }
        if(document.querySelector("#register-check").checked){
            localStorage.remberme=true;
        }
    }
    function logindata() {
        var emaillog = document.querySelector('#emaillog');
        var passwordlog = document.querySelector("#passwordlog");
        console.log(localStorage.Email);
        console.log(emaillog.value);
        console.log(3);
        if(localStorage.Email==emaillog.value){
            emaillog.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            console.log(4);
            if(localStorage.Password==passwordlog.value){
                console.log(5);
                
                console.log(6);
                window.location.href = "home.html";
                console.log(7);

                
                passwordlog.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            console.log(5);

            }
            else{
                passwordlog.style.backgroundColor = "rgba(255, 0, 0, 0.3)";}}
        else if(!localStorage.email || localStorage.email!=emaillog.value){
            emaillog.value='';
            emaillog.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
        }
        if(document.querySelector("#login-check").checked){
            localStorage.remberme=true;
        }
    
    }

    //-------saving data----------------

//---------------localstorage-----------------------

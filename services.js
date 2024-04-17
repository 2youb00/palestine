//--------------menu ball------------------
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
//-----------------log out------------
function logout(){
    localStorage.remberme=false;
    window.location.href = "index.html";
    localStorage.setItem("if_login",false);
}
//---------- dention butont ---------------------------
let dention_btns = document.querySelectorAll(".amount");
dention_btns.forEach(dention_btn => {
dention_btn.addEventListener("click",() =>{
    if( document.querySelector(".choose") && document.querySelector(".choose") != dention_btn){
        document.querySelector(".choose").classList.remove("choose");
    }
    dention_btn.classList.toggle("choose");
});});

//--------------start writing in the input ------------
input_donition=document.querySelector(".other-amount input");
input_donition.addEventListener('input', function(event) {
    console.log(3);
    if (input_donition.value==""){input_donition.style.background="#fff"}
    else{
        input_donition.style.background="#00adee";
    }

});
//-------------------the doner info from the local storage----------------
document.querySelector(".donor-info p:nth-child(1) span").innerHTML=localStorage.firstname;
document.querySelector(".donor-info p:nth-child(2) span").innerHTML=localStorage.lastname;
document.querySelector(".donor-info p:nth-child(3) span").innerHTML=localStorage.Email;
//#72b1dc
window.addEventListener('scroll', function() {
    if (window.scrollY > 38) {
        document.querySelector(".nav").classList.add("nav-blur");
    }
    else {
        document.querySelector(".nav").classList.remove("nav-blur");
    }
});

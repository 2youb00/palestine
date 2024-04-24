//--------------menu ball------------------
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
   //----------------------scrool---------------------
   window.addEventListener('scroll', function() {
    if (window.scrollY > 38 && window.innerWidth > 700) {
        document.querySelector(".nav").classList.add("nav-blur");
    }
    else {
        document.querySelector(".nav").classList.remove("nav-blur");
    }
});
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

///----------------click  blue bg---------------
function blue(btn){
    btn.classList.toggle("click-blue-bg");
};
/// -------------close---------------

function closeconf(){
    document.querySelector(".conform-pay-card").classList.add("displaynone");
    document.querySelector(".click-blue-bg").classList.remove("click-blue-bg");
    document.querySelector(".conform-donate p").innerHTML="donate ";
    
};
function openconf(){
    if(document.querySelector(".choose")){
        console.log("Please select");
    document.querySelector(".conform-pay-card").classList.remove("displaynone"); 
    document.querySelector(".conform-donate p").innerHTML += document.querySelector(".choose p").innerHTML;
    document.querySelector(".pay-erore").classList.add("displaynone");

    }
    else if(document.querySelector(".other-amount input").value!=""){
    document.querySelector(".conform-pay-card").classList.remove("displaynone"); 
    document.querySelector(".conform-donate p").innerHTML += document.querySelector(".other-amount input").value+" DZD";
    document.querySelector(".pay-erore").classList.add("displaynone");


    }
    else{
        document.querySelector(".pay-erore").classList.remove("displaynone");
    }
    // || 
};

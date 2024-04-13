document.querySelector(".welcom span").innerHTML = localStorage.firstname;
//-----------------log out------------
function logout(){
    localStorage.remberme=false;
    window.location.href = "index.html";
}
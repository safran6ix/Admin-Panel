//HOMEPAGE_HTML_SCRIPT|-
const sidenavbar = document.querySelector(".side-navbar");
const body = document.getElementById('body');
const title = document.querySelector(".title");

function show_navbar() {
    sidenavbar.style.left = "0";
}

function none_show_navbar() {
    sidenavbar.style.left = "-800px";
}

function lightON(){
    body.style.background = "white";
    title.style.color = "black";
}
function lightOFF(){
    body.style.background = "black";
}
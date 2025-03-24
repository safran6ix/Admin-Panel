//HOMEPAGE_HTML_SCRIPT|-
const sidenavbar = document.querySelector(".side-navbar");
const body = document.getElementById('body');
const title = document.querySelector(".title");
const icons = document.querySelector(".icons");


function show_navbar() {
    sidenavbar.style.left = "0";
}

function none_show_navbar() {
    sidenavbar.style.left = "-800px";
}

function lightON(){
    body.style.background = "#e9e9e9";
    title.style.color = "black";
    icons.style.color = "black";
}
function lightOFF(){
    body.style.background = "black";
    title.style.color = "white";
    icons.style.color = "white";
}
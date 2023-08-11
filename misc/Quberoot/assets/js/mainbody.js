// mainbody.js
// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', mainBody);
const body = document.getElementById("body");

function mainBody() {
    navbar();
}

function navbar() {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar-body")



    window.addEventListener('resize', adjustNavSize);
    function adjustNavSize() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 500) {
            navbar.style.backgroundColor = "green";
        } else {
            navbar.style.backgroundColor = "white";
        }
    }


    body.appendChild(navbar);
}

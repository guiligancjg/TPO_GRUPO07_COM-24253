function openNav(){
    event.preventDefault();
    document.getElementById("mobile-menu").style.width = "100%";
    document.querySelector(".close").style.right = "5%";
    document.querySelector(".overlay-content__titulo").style.fontSize = "2rem";
}


function closeNav(){
    event.preventDefault();
    document.getElementById("mobile-menu").style.width = "0%";
    document.querySelector(".close").style.right = "100%";
    document.querySelector(".overlay-content__titulo").style.fontSize = "0rem";
}


const div = document.querySelector(".header__logo");

div.addEventListener("click", function() {
    window.location.href = "index.html";
});
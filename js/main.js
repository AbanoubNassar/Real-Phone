var circle = document.getElementById ("circle");
var upBtn = document.getElementById ("upBtn");
var downBtn = document.getElementById ("downBtn");

var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum ;
     rotateValue = rotateSum 
}

downBtn.onclick = function() {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum ;
     rotateValue = rotateSum 
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav_bar');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})
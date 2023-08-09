let menuButton = document.querySelector('.fa-bars');
let xButton = document.querySelector('.fa-x');
let onOff = document.querySelector('.navbar-elements');

menuButton.addEventListener("click",()=>{menuButton.classList.toggle("x-button"); xButton.classList.toggle("x-button"); onOff.classList.toggle("on-off-button")});
xButton.addEventListener("click",()=>{menuButton.classList.toggle("x-button"); xButton.classList.toggle("x-button"); onOff.classList.toggle("on-off-button")});
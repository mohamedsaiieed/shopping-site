/*click at outdent to see menu*/
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener('click',()=> {
        nav.classList.add('active')
    })
}

if(close) {
    close.addEventListener("click",() => {
        nav.classList.remove("active");
    })
}

/*click on  products to swipe  (sproducts)*/


var mainImg = document.getElementById("main-img");
var smalling = document.getElementsByClassName("small-img");

smalling[0].onclick = function () {
     mainImg.src = smalling[0].src; 
}
smalling[1].onclick = function () {
     mainImg.src = smalling[1].src; 
}
smalling[2].onclick = function () {
     mainImg.src = smalling[2].src; 
}
smalling[3].onclick = function () {
     mainImg.src = smalling[3].src; 
}
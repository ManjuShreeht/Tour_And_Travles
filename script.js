let menu = document.querySelector('#menu-btn');

let navbar = document.querySelector('.header .navbar');

menu.onclick = function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




function change() {
    var backgroundimg = ["./images/home-slide-1.jpg", "./images/img-2.jpg", "./images/home-slide-3.jpg"];
    var i = Math.floor((Math.random() * 3));
    document.querySelector(".home").style.backgroundImage = 'url("' + backgroundimg[i] + '")';
}
setInterval(change, 2000);


/*
let btn = document.getElementById("btn");
let name1 = document.getElementById("name").value;
let email = document.getElementById("email").value;
let address = document.getElementById("address").value;
let phone = document.getElementById("phone").value;

var store = [];

function submit() {
    let obj = {
        name1,
        email,
        address,
        phone
    }
    store.push(obj);
    alter('hi');
}
console.log(store);
*/
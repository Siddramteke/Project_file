let navbar=document.querySelector( '.header .navbar');
let menu =document.querySelector('#menu');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active')
}
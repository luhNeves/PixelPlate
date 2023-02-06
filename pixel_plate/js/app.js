console.log('Hello, world!');

let navbar = document.querySelector(".navbar-pp");
let container = document.querySelector(".container");

window.addEventListener("scroll", function(){
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled')
        container.style.paddingTop = '300px'
    } else {
        navbar.classList.remove('scrolled');
        container.style.paddingTop = '100px';
    }
})
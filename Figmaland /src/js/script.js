const mobileNav = document.querySelector(".header__inner-mobile-nav");
const menuButton = document.querySelector(".header__inner-menu");

menuButton.onclick = () =>{
    mobileNav.classList.toggle('active')
}

let logoImage = document.querySelector(".logo__image");
let aboutMeImage = document.querySelector(".about-me__image .image");

init();

window.addEventListener('resize', init);

function init() {
    if(this.screen.width <= 900 && this.screen.width > 650) {
        logoImage.setAttribute('src', './assets/images/Лого200px.png');
        aboutMeImage.setAttribute('src', './assets/images/about-me/1-mobile.jpg');
    } else if(this.screen.width <= 650 && this.screen.width > 600) {
        aboutMeImage.setAttribute('src', './assets/images/about-me/1.jpg');
    } else if(this.screen.width <= 600 && this.screen.width > 500) {
        logoImage.setAttribute('src', './assets/images/Лого160px.png');
    } else if(this.screen.width <= 500 && this.screen.width > 400) {
        logoImage.setAttribute('src', './assets/images/Лого140px.png');
    } else if(this.screen.width <= 400) {
        logoImage.setAttribute('src', './assets/images/Лого400px.png');
        aboutMeImage.setAttribute('src', './assets/images/about-me/1-mobile.jpg');
    } else {
        logoImage.setAttribute('src', './assets/images/Лого.png');
        aboutMeImage.setAttribute('src', './assets/images/about-me/1.jpg');
    }
}
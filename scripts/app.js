let body = document.querySelector("body");
let modal = document.querySelector(".modal");

let modalGallery = document.querySelector(".gallery__modal");
let modalGalleryWindow = document.querySelector(".gallery-modal__window");
let modalWindowImage = document.querySelector(".gallery-modal__bg-image .image");
let modalCloseWindow = document.querySelector(".gallery-modal__icon");

let modalLocation = document.querySelector(".location__modal");
let modalLocationWindow = document.querySelector(".location-modal__window");
let locationButton = document.querySelector(".location");
let modalLocationClose = document.querySelector(".location-modal__button");

let galleryIcon = document.querySelectorAll(".gallery__icon");

let welcomeButton = document.querySelector(".welcome__button");
let priceCardButton = document.querySelector(".price-card__button");
let whyMeButton = document.querySelector(".why-me__button");

galleryIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
        let image = icon.dataset.bg;
        let imageAlt = icon.dataset.bgAlt;
        setBgImage(modalWindowImage, image, imageAlt, 'gallery-modal__window_popUp');
    })
})

modalCloseWindow.addEventListener('click', () => {
    removeBgImage(modalWindowImage, 'gallery-modal__window_popUp', 'gallery-modal__window_popDown');
})

locationButton.addEventListener('click', () => {
    windowPopUp(modalLocation, modalLocationWindow, 'location-modal__window_scaleUp');
})

modalLocationClose.addEventListener('click', () => {
    windowPopDown(modalLocation, modalLocationWindow, 'location-modal__window_scaleUp', 'location-modal__window_scaleDown');
})

window.addEventListener('click', (elem) => {
    if (elem.target.classList[0] == 'modal') {

        let modal,
            modalWindow,
            animationClassDown,
            animationClassUp = elem.target.childNodes[1].classList[2];

        if (animationClassUp == 'location-modal__window_scaleUp') {
            modal = modalLocation;
            modalWindow = modalLocationWindow;
            animationClassDown = 'location-modal__window_scaleDown';
        } else {
            modal = modalGallery;
            modalWindow = modalGalleryWindow;
            animationClassDown = 'gallery-modal__window_popDown';
        }

        windowPopDown(modal, modalWindow, animationClassUp, animationClassDown);
    }
})

welcomeButton.addEventListener('click', function () {
    relocate('./price-list.html');
});

priceCardButton.addEventListener('click', function () {
    relocate('./price-list.html');
});

whyMeButton.addEventListener('click', function () {
    relocate('tel:89967057021');
});

function relocate(link) {
    window.location.href = link;
}

function setBgImage(element, image, imageAlt, animationClass) {
    element.setAttribute('src', image);
    element.setAttribute('alt', imageAlt);
    windowPopUp(modalGallery, modalGalleryWindow, animationClass);
}

function removeBgImage(element, animationClassUp, animationClassDown) {
    setTimeout(() => {
        element.removeAttribute('src');
        element.removeAttribute('alt');
    }, 400)
    windowPopDown(modalGallery, modalGalleryWindow, animationClassUp, animationClassDown);
}

function windowPopUp(modal, modalWindow, animationClassUp) {
    body.classList.add('overflow-hidden');
    modal.classList.remove('hidden');
    modalWindow.classList.add(animationClassUp);
}

function windowPopDown(modal, modalWindow, animationClassUp, animationClassDown) {
    modalWindow.classList.remove(animationClassUp);
    setTimeout(() => {
        modal.classList.add('hidden');
        modalWindow.classList.remove(animationClassDown);
        body.classList.remove('overflow-hidden');
    }, 400);
    modalWindow.classList.add(animationClassDown);
}
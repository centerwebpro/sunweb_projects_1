// For Menu header fullscreen
export const showMenuHeader = () => {
    let popup = document.querySelector('.popup');
    let header = document.querySelector('.top');
    let hamburger = document.querySelector('.main-left__hamburger-image');
    let cross = document.querySelector('.main-left__hamburger-imagecross');
    let btn = document.querySelector('.main-left__logo-hamburger');
    let logo = document.querySelector('.main-left__logo-icon__big');
    let logomenu = document.querySelector('.main-left__logo-icon__bigmenu');
    let logoMini = document.querySelector('.main-left__logo-icon__mini');
    let logoMinimenu = document.querySelector('.main-left__logo-icon__minimenu');
    let address = document.querySelector('.main-left__locationAdd-address');
    let addressImage = document.querySelector('.main-left__locationAdd-image');
    let addressImageMenu = document.querySelector('.main-left__locationAdd-imagemenu');
    let shiming = document.querySelector('.main-right__shimingi-title');
    let shimingImage = document.querySelector('.main-right__shimingi-image');
    let shimingImageMenu = document.querySelector('.main-right__shimingi-imagemenu');
    let shoppingImage = document.querySelectorAll('.main-right__shoppingBag-image');
    let shoppingImageMenu = document.querySelectorAll('.main-right__shoppingBag-imagemenu');
    let shoppingText = document.querySelector('.main-right__shoppingBag-text');
    let priceBasket = document.querySelectorAll('.main-right__shoppingBag-price');
    let phone = document.querySelector('.main-left__phone');
    let product = document.querySelector('.product');
    let productContent = document.querySelector('.product-content');
    btn.addEventListener('click', function () {
        popup.classList.toggle('popup_enable');
        header.classList.toggle('popup-white');
        hamburger.classList.toggle('popup_disable');
        cross.classList.toggle('popup_enable');
        logo.classList.toggle('popup_disable');
        logomenu.classList.toggle('popup_enable');
        logoMini.classList.toggle('popup_disable');
        logoMinimenu.classList.toggle('popup_enable');
        address.classList.toggle('popup-lightgreen');
        addressImage.classList.toggle('popup_disable');
        addressImageMenu.classList.toggle('popup_enable');
        shiming.classList.toggle('popup-lightgreen');
        shimingImage.classList.toggle('popup_disable');
        shimingImageMenu.classList.toggle('popup_enable');
        shoppingText.classList.toggle('popup_darkgreen');
        shoppingImage.forEach(item => item.classList.toggle('popup_disable'));
        shoppingImageMenu.forEach(item => item.classList.toggle('popup_enable'));
        priceBasket.forEach(item => item.classList.toggle('popup_darkgreen'));
        // priceBasket.classList.toggle('popup_darkgreen');
        phone.classList.toggle('popup_enable');
        product.classList.toggle('popup_enable');
        productContent.classList.toggle('popup_pink');
    });

    // For Menu header in mobile ----begin
    let popupLeft = document.querySelector('.popup-left');
    if (window.innerWidth <= 575) {
        popupLeft.style.width = "0px";
        let popupRight = document.querySelector('.popup-right');
        let popupLeftNav = document.querySelector('.popup-left__nav');
        let footerTop = document.querySelector('.footer-top');
        popupLeft.addEventListener('click', function () {
            popupLeft.style.width = "80%";
            popupRight.style.width = "20%";
            popupRight.style.cursor = "pointer";
            popupLeft.style.cursor = "default";
            popupLeftNav.style.display = "flex";
            footerTop.style.minWidth = "300px";
        });
        popupRight.addEventListener('click', function () {
            popupRight.style.width = "100%";
            popupLeft.style.width = "0px";
            popupLeftNav.style.display = "none";
            popupLeft.style.cursor = "pointer";
            popupRight.style.cursor = "default";
            footerTop.style.minWidth = "none";
        });
        
        // If resize windows, we check if screen big then correct style
        function onResize() {
            console.log('123', window.innerWidth);
            if (window.innerWidth > 575) {
                popupLeft.style.width = "272px";
                popupRight.style.width = "100%";
            }
        }
        window.addEventListener('resize', onResize);

    }



};

// For Menu header middle 
export const showHeaderMiddle = () => {
    let bottom = document.querySelector('.js-bottom');
    let middle = document.querySelectorAll('.js-middle').forEach(item => {

        item.addEventListener('mouseover', function () {
            bottom.classList.toggle('bottom_enable');
        });
        
    });
};
import '../styles/main.scss'; // This used for rollup

import {readJson} from './api.js';
import {categoryAnimate} from './category_animate.js';
import {showMenuHeader, showHeaderMiddle} from './header_menu.js';
// import products from './products/products.js';
import basket from './basket/basket.js';
import productsRendering from './products/products_rendering.js';
import {scrollPopular} from './scrollPopular.js';

readJson();
scrollPopular();
categoryAnimate();
showMenuHeader();
showHeaderMiddle();
productsRendering();


let basketAddButton = document.querySelectorAll('.card-newprice').forEach(item => {
    item.addEventListener('click', function (e) {
        basket.add(e.target.getAttribute('product_id'));
    })
});

let basketDeleteButton = document.querySelectorAll('.card-oldprice').forEach(item => {
    item.addEventListener('click', function (e) {
        basket.delete(e.target.parentElement.querySelector('.card-newprice').getAttribute('product_id'));
    })
});


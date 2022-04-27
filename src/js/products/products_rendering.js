export default () => {
    let cardContent = document.querySelectorAll('.card-content').forEach(cardContent => {

        products.forEach(product => {
            cardContent.innerHTML += `
                <div class="card-item">
                    <div class="card-pictures">
                        <div class="card-icons">
                            <button class="card-icons__spicy" href="#"></button>
                            <button class="card-icons__hot" href="#"></button>
                            <button class="card-icons__vegan" href="#"></button>
                        </div>
                        <div class="card-image">
                            <img src="${product.img}" alt="roll" />
                        </div>
                    </div>
                    <div class="card-description">
                        <div class="card-description__left">
                            <span class="card-name">${product.title}</span>
                            <span class="card-amount">${product.description}</span>
                        </div>
                        <div class="card-description__right">
                            <span class="card-oldprice">${product.oldPrice}</span>
                            <button class="card-newprice" product_id="${product.id}">${product.price}</button>
                        </div>
                    </div>
                    <hr class="card-line">
                </div>
            `
        })
    });

}
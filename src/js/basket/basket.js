import products from "../products/products.js"

export default basket = {
    quantity: 0,
    summ: 0,
    basketProducts: [],
    add(productId) {
        let existProduct = this.basketProducts.find(item => item.id == productId);
        if (!existProduct) {
            this.basketProducts.push({
                id: productId,
                quantity: 1
            })
        } else {
            existProduct.quantity++;
        }
        this._plusQuantity();
        this._plusSum();
        // console.log('product add', this.basketProducts)
        console.log('basketProducts', this.basketProducts)
    },

    _plusQuantity() {
        this.quantity = 0;
        this.basketProducts.forEach(product => {
            this.quantity += product.quantity
        })
        document.querySelector('.main-right__shoppingBag-amount').innerHTML = this.quantity;
    },

    _plusSum() {
        this.summ = 0;
        this.basketProducts.forEach(product => {
            let databaseProduct = products.find(item => product.id == item.id);
            if (databaseProduct) {
                this.summ += parseInt(product.quantity) * parseFloat(databaseProduct.price); 
            }
        })
        document.querySelector('.main-right__shoppingBag-price').innerHTML = this.summ;
    },

    delete(productId) {
        let deleteProduct = this.basketProducts.find(item => item.id == productId);
        if (deleteProduct) {
            
            this.basketProducts.pop({
                id: productId,
                quantity: 1
            })
            
            
        }
        this._minusQuantity();

        console.log('product delete', this.basketProducts)
    },

    _minusQuantity() {
        this.basketProducts.forEach(product => {
            this.quantity -= product.quantity
        })
        document.querySelector('.main-right__shoppingBag-amount').innerHTML = this.quantity;
    },

    _minusSum() {
        this.summ = 0;
        this.basketProducts.forEach(product => {
            let databaseProduct = products.find(item => product.id == item.id);
            if (databaseProduct) {
                this.summ -= parseInt(product.quantity) * parseFloat(databaseProduct.price); 
            }
        })
        document.querySelector('.main-right__shoppingBag-price').innerHTML = this.summ;
    },
}

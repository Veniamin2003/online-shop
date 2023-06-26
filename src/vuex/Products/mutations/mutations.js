export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_CART: (state, product) => {
        let isProductExist = false
        state.cart.map(function (item) {
            if (item.article === product.article) {
                isProductExist = true
                item.quantity++
            }
        })
        isProductExist || state.cart.push({...product, quantity: 1})
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);//вырезаем 1 элемент, начиная от index
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
        if(state.cart[index].quantity > 1)
            state.cart[index].quantity--;
    }
}
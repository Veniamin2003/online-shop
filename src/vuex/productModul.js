import axios from "axios";


export const productModule = {
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS({commit}){
            return axios('http://localhost:3000/products', {
                method: 'GET'
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products)
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        }
    },
    namespaced: true

}
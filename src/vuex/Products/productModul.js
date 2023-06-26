import commonActions from "@/vuex/Products/actions/actions"
import apiRequest from "@/vuex/Products/actions/api-request";
import mutations from "@/vuex/Products/mutations/mutations";
import getters from "@/vuex/Products/getters/getters";

const actions = {...commonActions, ...apiRequest}


export const productModule = {
    state: {
        products: [],
        cart: []
    },
    mutations,
    actions,
    getters,
    namespaced: true

}
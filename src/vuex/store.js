import {createStore} from "vuex";
import {productModule} from "@/vuex/Products/productModul";
export default createStore({
    modules: {
        product: productModule
    }
})

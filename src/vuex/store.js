import {createStore} from "vuex";
import {productModule} from "@/vuex/productModul";
export default createStore({
    modules: {
        product: productModule
    }
})

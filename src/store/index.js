import { createStore } from 'vuex'
import wood from './wood'

export default createStore({
    state: {
        count: 10,
        isShowPopupShoppingCart: true,
        items: [],
        selectProduct: {},
    },
    mutations: {
        countt(state) {
            state.count++;
            console.log(state.count)
        },
        closePopupShoppingCart(state) {
            state.isShowPopupShoppingCart = true
        },
        openPopupShoppingCart(state) {
            state.isShowPopupShoppingCart = false
        }
    },
    actions: {

    },
    modules: {},
    getters: {
        GETITEMSDATA(state) {
            return state.items
        },
        GETSELECTITEM(state) {
            return state.selectProduct
        },
        getIsShowPopupShoppingCart(state) {
            return state.isShowPopupShoppingCart
        }

    },
    components: {
        wood
    }
})
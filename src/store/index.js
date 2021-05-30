import { createStore } from 'vuex'
import wood from './wood'

export default createStore({
    state: {
        count: 10,
        isShowPopupShoppingCart: true,
        items: [],
        selectProduct: {},
        shoppingCart: []
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
        },
        sortItemsPriceMaxMin(state) {
            state.items.sort((a, b) => a.price < b.price ? 1 : -1);
        },
        sortItemsPriceMinMax(state) {
            state.items.sort((a, b) => a.price > b.price ? 1 : -1);
        },

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
        },
        GET_SHOPPING_CART(state) {
            return state.shoppingCart
        }

    },
    components: {
        wood
    }
})
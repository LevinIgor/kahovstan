import { createStore } from 'vuex'


export default createStore({
    state: {
        count: 10,
        isShowPopupShoppingCart: true,
        items: [],
        selectProduct: {},
        shoppingCart: []
    },
    mutations: {
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
        addProduct(state, product) {
            state.shoppingCart.push(product)
        },
        deleteProduct(state, product) {
            state.shoppingCart = product
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
        },
        GET_SHOPPING_CART(state) {
            return state.shoppingCart
        }

    }
})
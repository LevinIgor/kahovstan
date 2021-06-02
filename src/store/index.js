import { createStore } from "vuex";
import firebase from "../../firebase";

export default createStore({
    state: {
        count: 10,
        isShowPopupShoppingCart: false,
        items: [],
        selectProduct: {},
        shoppingCart: [],
        itemsId: [],
        itemsData: [],
    },
    mutations: {
        closePopupShoppingCart(state) {
            state.isShowPopupShoppingCart = false;
        },
        openPopupShoppingCart(state) {
            state.isShowPopupShoppingCart = true;
        },
        sortItemsPriceMaxMin(state) {
            state.items.sort((a, b) => (a.price < b.price ? 1 : -1));
        },
        sortItemsPriceMinMax(state) {
            state.items.sort((a, b) => (a.price > b.price ? 1 : -1));
        },
        addProduct(state, product) {
            state.shoppingCart.push(product);
        },
        deleteProduct(state, product) {
            state.shoppingCart = product;
        },
        getItemsFromFirestore(state) {
            firebase
                .firestore()
                .collection("items")
                .get()
                .then((doc) => {
                    doc.forEach((doc) => state.items.push(doc.data()));
                })
                .catch((error) => console.log(error));
        },
        getItemsIdFromFirestore(state) {
            firebase
                .firestore()
                .collection("items")
                .get()
                .then((doc) => {
                    doc.forEach((doc) => state.itemsId.push(doc.id));
                })
                .catch((error) => console.log(error));
        },
        parsItemsAndId(state) {
            var i = 0;
            state.items.forEach((item) => {
                state.itemsData.push({
                    index: item.indexs[i],
                    name: item.name,
                    price: item.price,
                    desc: item.desc,
                    fullDesc: item.fullDesc,
                    state: item.state,
                    year: item.year,
                    type: item.type,
                });
                i++;
            });
        },
    },
    actions: {},
    modules: {},
    getters: {
        GETITEMSDATA(state) {
            return state.items;
        },
        GETSELECTITEM(state) {
            return state.selectProduct;
        },
        getIsShowPopupShoppingCart(state) {
            return state.isShowPopupShoppingCart;
        },
        GET_SHOPPING_CART(state) {
            return state.shoppingCart;
        },
    },
});
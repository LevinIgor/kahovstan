import { createStore } from "vuex";
import firebase from "../../firebase";

export default createStore({
    state: {
        isShowPopupShoppingCart: false,
        items: [],
        selectProduct: {},
        shoppingCart: [],
        itemsId: [],
        itemsData: [],
        admin: false,
        orders: [],
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
            localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
        },
        deleteProduct(state, product) {
            state.shoppingCart = product;
        },
        getItemsFromFirestore(state) {
            state.items = [];
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
            state.itemsId = [];

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
                    index: state.itemsId[i],
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
        setShoppingCart(state) {
            state.shoppingCart = JSON.parse(localStorage.shoppingCart);
        },
        admin(state) {
            state.admin = true;
        },
        getOrders(state) {
            state.orders = []
            firebase
                .firestore()
                .collection("orders")
                .get()
                .then(
                    (doc) => doc.forEach((doc) => state.orders.push(doc.data()))
                )
                .catch((error) => console.log(error));
            state.orders.rev
        },
    },
    actions: {
        getItemsFromFirestore(state) {
            state.commit("getItemsFromFirestore");
        },
        getItemsIdFromFirestore(state) {
            state.commit("getItemsIdFromFirestore");
        },
        parsItemsAndId(state) {
            state.commit("parsItemsAndId");
        },
        getOrdersFromFirestore(state) {
            state.commit("getOrders");
        },
    },
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

        GET_ITEMSDATA(state) {
            return state.itemsData;
        },
        GET_ADMIN(state) {
            return state.admin;
        },
        GET_ORDERS(state) {
            return state.orders
        }
    },
});
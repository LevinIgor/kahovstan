import { createStore } from 'vuex'


export default createStore({
    state: {
        count: 10,
        category: ["Деревообролюючі станки", "Металооброблюючі станки", "Слюсарні станки", "Лічільні інструменти", "Витратні матеріали", "Доставка", "Хто є ми?"],
    },
    mutations: {
        countt(state) {
            state.count++;
            console.log(state.count)
        }
    },
    actions: {

    },
    modules: {},
    getters: {
        getHeaderCategory(state) {
            return state.category
        }
    }
})
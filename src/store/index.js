import { createStore } from 'vuex'
import wood from './wood'

export default createStore({
    state: {
        count: 10,
        category: ["Деревообролюючі станки", "Металооброблюючі станки", "Слюсарні станки", "Лічільні інструменти", "Витратні матеріали", "Хто є ми?"],
        products: [{
                img: 3,
                name: 'Jukon',
                price: 40000,
                key: 1,
                description: 'Jukon is good'

            },
            {
                img: 3,
                name: 'Pavel',
                price: 300,
                key: 2,
                description: 'Pavel is good'
            },
            {
                img: 3,
                name: 'Jopa',
                price: 400000,
                key: 3,
                description: 'Jopa is good'
            }
        ]
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
        },

    },
    components: {
        wood
    }
})
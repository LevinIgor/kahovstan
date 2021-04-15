<template>
    <div class="v-catalog">

       <div class="items">
            <div class="category">

                <h1>Category</h1>
                
            </div>
            <div class="container">
                <div
                v-for="item in this.$store.state.products" 
                :key="item.name" 
                class='item'>
                    <div class="second">
                        <p>{{item.description}}</p>
                        <button @click="this.$store.commit('countt')">kljkljlk</button>
                    </div>
                    <div class="first"> <img src="Item.svg" alt="">
                        <div class="name">{{item.name}}</div>
                        <div class="price">{{item.price}}</div>

                    </div>



                </div>
            </div>



        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default{
    name:'v-catalog',
    data(){
        return{
        count: 30,
        category: ["Деревообролюючі станки", "Металооброблюючі станки", "Слюсарні станки", "Лічільні інструменти", "Витратні матеріали", "Доставка", "Хто є ми?"],
        currentPage: "",
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
        }
    },
    methods:{
       
        
    },
    computed:mapState({
       
    })
}
</script>

<style>
.container {
    justify-content: center;
}

.items .second {
    position: absolute;
}

.items .firts {
    justify-content: center;
}

.items .price {
    text-align: center;
    vertical-align: middle;
}

.items {
    text-align: center;
    padding-bottom: 40px;
}

.item img {
    padding: 20px;
    width: 240px;
}

.item .second {
    visibility: hidden;
    width: 33%;
    min-height: 200px;
    background-color: rgba(0, 0, 0, 0);
    color: white;
}

.items .container {
    display: flex;
    flex-wrap: wrap;
}

.items .item {
    width: 33%;
    height: 200px;
    box-shadow: 0 0 1px 1px rgba(22, 21, 21, 0.4);
}

.item:hover .second {
    visibility: visible;
    background-color: rgba(0, 0, 0, .85);
    transition: 0.5s;
}

</style>

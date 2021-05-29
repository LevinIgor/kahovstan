<template>
<div class="v-footer">
     <div class="footer">
            <div class="menu">
                <ul>
                     <li><router-link to="/auth">auth</router-link> </li>
                </ul>
            </div>

            <div class="contact">
                <div class="socialmedia">
                    <a href=""><img src="telegram.svg" alt=""></a>
                    <a href=""><img src="twitter.svg" alt=""></a>
                    <a href=""><img src="youtube.svg" alt=""></a>
                    <a href=""><img src="instagram.svg" alt=""></a>
                </div>

                <div class="phone">
                    Everyday 08:00 - 19:00 | | +380951543378 or +380936578167
                </div>
            </div>

            <div class="copyright">
                Доставка по России осуществляется службами доставки: «Почта России». «Почта России» осуществляет доставку до почтового отделения, индекс которого Вы укажите при оформлении заказа.
            </div>
        </div>
        </div>
</template>

<script>
export default{
    name:'v-footer',
    data(){
        return{
            category: ["Деревообролюючі станки", "Металооброблюючі станки", "Слюсарні станки", "Лічільні інструменти", "Витратні матеріали", "Доставка", "Хто є ми?"], 
        }
    },
    methods:{}
}
</script>

<style >
.footer {
    padding: 40px;
    height: 100%;
    width: auto;
    background-color: black;
}
.footer .menu{
    width: 60%;
    margin: auto;
}
.footer .menu li {
    text-transform: uppercase;
     font-size: 20px;
}

.footer .menu ul {
   
    padding: 0;
    display: flex;
    margin: 0;
    justify-content: space-around;
}

.footer .contact {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
}

.footer .contact .phone {
    color: white;
}

.footer .copyright {
    color: white;
    text-align: right;
}

</style>

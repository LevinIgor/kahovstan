<template>
<div class="v-booking">
     <v-header></v-header>

<div class="bookingContainer">
    <div class="bookingTitle">Оформление заказа</div>
    <div class="booking-content">
        <div class="booking-details">
            <div class="booking-details-title">Введите свои данные</div>
            <div class="booking-details-name">Имя</div>
            <div class="booking-details-name-input"><input maxlength="255" type="text"></div>

            <div class="booking-details-name">Фамилия</div>
            <div class="booking-details-name-input"><input maxlength="255" type="text"></div>

            <div class="booking-details-name">Отчество</div>
            <div class="booking-details-name-input"><input maxlength="255" type="text"></div>

            <div class="booking-details-name">Номер телефона</div>
            <div class="booking-details-name-input"><input maxlength="255" type="text"></div>

            <div class="booking-details-name">Почта</div>
            <div class="booking-details-name-input"><input maxlength="255" type="email"></div>

            <div class="Next">
                <button type="submit" class="button-next"> <span> Завершить оформление </span></button>
            </div>
        </div>
       
    </div>
</div>

   <v-footer></v-footer>
</div>
   
</template>

<script>

import vHeader from '../v-header'
import vFooter from '../v-footer'

export default{
components:{
    vHeader,
    vFooter,

},
data(){
    return{

    }
}
}
</script>

<style scoped>

.bookingContainer{
        display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
}

.booking-content{
   -webkit-box-pack: justify;
    justify-content: center;
    width: 960px;
    display: -webkit-box;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: start;
    align-items: flex-start;

}

.bookingTitle{
   font-size: 42px;
   font-weight: 400;
}

.booking-details-title{
    margin-bottom: 50px;
    font-size: 28px;
    font-weight: 400;
    line-height: 120%;
}

.booking-details-name{
    font-size: 15px;
    line-height: 25px;
    color: #818d92;
    text-transform: uppercase;
}

.booking-details-name-input{
    width: 100%;
    height: 36px;
    padding: 0 15px;
    border-radius: 1000px;
    background: #f4f6f8;
}

.booking-details-name-input input{
    background: inherit;
    outline: none;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    font-size: 18px;
    font-weight: 500;
}


.Next{
    justify-content: center;
    text-align: center;
    padding: 40px 0;
}
.button-next{
    cursor: pointer;
    -webkit-box-ordinal-group: 3;
    order: 2;
   position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 276px;
    height: 50px;
    border-radius: 1000px;
    background: #000;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
}


</style>

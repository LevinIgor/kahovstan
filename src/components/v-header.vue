<template>
<div class="v-header">
      <div class="header">
            <div class="header__logo">
              <router-link :to="'/'"><img :src="logo" alt=""></router-link>
            </div>
            <div class="header__menu">
               
                <ul>
                    <!-- <li v-for="(item, index) in this.$store.getters.getHeaderCategory" :key="index"><router-link :to="item">{{item}}</router-link> </li> -->
                    <li><router-link to='carus'>Доставка</router-link></li>
                     <li><router-link to='about'>Хто ми?</router-link></li>
                </ul>

            </div>
            <div class="header__menu__second">

                <a href=""><img src="account.svg" alt=""></a>
                <a href=""><img :src="shopcart" alt=""></a>
            </div>
        </div>
</div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
      return {
       logo:require('../assets/pics/kahovstan.svg.png'),
       shopcart: require('../assets/pics/shopping-cart.svg'),
       category: ["Доставка", "Хто є ми?"], 
      }
  }
       
}
</script>

<style>

li{
    list-style-type: none;
    cursor: pointer;
}

a{
    text-decoration: none;
    color: white;
}

.header {
    padding: 10px 40px;
    height: 100%;
    width: auto;
    background-color: black;
}


/* header__LOGO */

.header .header__logo {
    text-align: center;
}

.header .header__logo::after {
    content: '';
    display: block;
    height: 1px;
    background: white;
}


/* /header__LOGO */


/* header__MENU */

.header .header__menu {
    color: honeydew;
    justify-content: space-between;
    width: 100%;
}



/* .header .header__menu a:hover::after {
    content: '';
    display: block;
    height: 1px;
    background: white;
    transition: transform linear .5s;
} */

.header .header__menu ul {
      text-transform: uppercase;
    font-size: 12px;
    text-decoration: none;
    color: white;

    display: flex;
    padding: 0px 10px 0px 10px;
    justify-content: space-between;
}

.header .header__menu li {
    text-align: center;
    
}



/* /header__MENU */


/* header__MENU__SECOND */

.header .header__menu__second {
    text-align: right;
    padding-right: 10px;
}

.header .header__menu__second a {
    padding-left: 10px;
}
</style>
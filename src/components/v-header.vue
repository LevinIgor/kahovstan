<template>
  <div class="v-header">
  
    <div class="header">
      <div class="header__logo">
        <router-link :to="'/'"><img :src="logo" alt="" /></router-link>
      </div>
      <div class="header__menu">
        <ul>
          <li><router-link to="/FAQ">FAQ</router-link></li>
          <li><router-link to="/contact">Наші контакти</router-link></li>
          
        </ul>
      </div>
      <div class="header__menu__second">
        <img @click="OpenPopupShoppingCart" :src="shopcart" alt="" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-header",
  data() {
    return {
      logo: require("../assets/pics/kahovstanV2.png"),
      miniLogo: require("../assets/pics/K.S.png"),
      shopcart: require("../assets/pics/shopping-cart.svg"),
      title:"KAHOiuyiuyVSTAN"
      
    };
  },
  methods: {
    OpenPopupShoppingCart() {
      this.$store.commit("openPopupShoppingCart");
    },
  },
  created(){
    head: {
    meta: [
      { name: 'kjhkjhkjh', content: 'My khj' }
    ]
     
  }
  }
};
</script>

<style>
@media (max-width: 700px) {
  .header__logo img {
    width: 100%;
  }
  .header__menu {
    width: 100%;
  }

  .header__menu li {
    font-size: 15px;
  }

  .header__menu ul {
    justify-content: space-between;
    width: 100%;
  }

  .header {
    padding: 0;
  }
}

li {
  list-style-type: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: white;
}

.header {
  position: relative;
  height: 100%;
  width: auto;
  background-color: black;
}

/* header__LOGO */

.header .header__logo {
  text-align: center;
}

.header .header__logo::after {
  content: "";
  display: block;
  height: 1px;
  background: white;
}

/* /header__LOGO */

/* header__MENU */

.header .header__menu {
  color: honeydew;
  width: 60%;
  margin: auto;
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
  font-size: 20px;
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

.header .header__menu__second img {
  cursor: pointer;
}
</style>

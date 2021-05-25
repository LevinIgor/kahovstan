<template>
  <div class="v-catalog_page">
    <vModalShopingCart
      :v-if="$store.getters.getIsShowPopupShoppingCart"
    ></vModalShopingCart>
    <v-header></v-header>
    <div
      @click="closePopupShop"
      class="popup-bg"
      v-bind:class="{ 'popup-bg-open': isOpenPopupShop }"
    >
      <div class="popup">
        <button @click="closePopupShop">OK</button>
      </div>
    </div>
    <v-catalog> </v-catalog>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vCatalog from "../v-catalog";
import vFooter from "../v-footer";
import vModalShopingCart from "../shopping-cart";
import firebase from "../../../firebase";

export default {
  components: {
    vHeader,
    vCatalog,
    vFooter,
    vModalShopingCart,
  },
  data() {
    return {
      isOpenPopupShop: false,
      show: false,
    };
  },
  methods: {
    openPopupShop() {
      this.isOpenPopupShop = true;
    },
    closePopupShop() {
      this.isOpenPopupShop = false;
    },
  },

  
};
</script>

<style scoped>
.popup-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: none;
}

.popup-bg-open {
  display: block;
}
</style>

<template>
  <div class="v-catalog_page">
    <v-header></v-header>
    <v-catalog> </v-catalog>
    <v-footer></v-footer>
    <vModalShopingCart >
    </vModalShopingCart>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vCatalog from "../v-catalog";
import vFooter from "../v-footer";
import vModalShopingCart from "../shopping-cart";


export default {
  components: {
    vHeader,
    vCatalog,
    vFooter,
    vModalShopingCart,
  },
  data() {
    return {
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
.v-catalogPage{
  position: relative;
}


</style>

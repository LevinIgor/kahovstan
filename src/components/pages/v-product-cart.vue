<template>
  <div class="v-product-cart">
    <vModalShopingCart :v-if="$store.getters.getIsShowPopupShoppingCart">
    </vModalShopingCart>
    <v-header></v-header>
    
    <div class="product-cart">
      <div class="product-title">{{ selectItem.n }}</div>
      <div class="product-contant">
        <div class="product-img">
          <img :src="selectItem.i" alt="" />
        </div>

        <div class="product-informations">
          <div class="product-price">
            <span>{{ selectItem.p }} UAH</span>
          </div>
          <div class="product-desc" id="t">
            <p>{{ selectItem.d }}</p>
          </div>
          <div class="product-year" id="t">
            <div class="product-year-title">Рік випуску:_</div>
            {{ selectItem.y }}г.
          </div>
          <div class="product-state" id="t">
            <div class="product-state-title">Стан:_</div>
            {{ selectItem.s }}
          </div>
          <div class="product-type" id="t">
            <div class="product-type-title">Тип:_</div>
            {{ selectItem.t }}
          </div>
          <div class="addCast">
            <button
              @click="addToShoppingCart()"
              class="product-button-addToShoppingCart"
            >
              <span>Додати до кошика</span>
            </button>
          </div>
        </div>
      </div>

      <div class="product-absolute-informations">
        <p v-for="(item, key) in selectItem.f " :key="key">{{item.value}}</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>

</template>

<script>
import vHeader from "../v-header";
import VFooter from "../v-footer.vue";
import vModalShopingCart from "../shopping-cart";
export default {
  data() {
    return {
      selectItem: {},
    };
  },
  components: {
    vHeader,
    VFooter,
    vModalShopingCart,
  },
  methods: {
    addToShoppingCart() {
      var contain = false;
      this.$store.getters.GET_SHOPPING_CART.forEach((element) => {
        if (element.n == this.selectItem.n) {
          contain = true;
          element.c++;
          return;
        }
      });
      if (!contain) {
        this.$store.commit("addProduct", this.selectItem);
      }

      this.$swal.fire({
        position: "center",
        icon: "success",
        title: "Товар добавлен в корзину",
        showConfirmButton: false,
        timer: 1000,
      });
    },
  },
  created() {
    this.selectItem = JSON.parse(localStorage.item);
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#t {
  display: flex;
  padding: 1em;
  font-size: 20px;
  flex-wrap: wrap;
  letter-spacing: 2px;
}
.v-product-cart {
  overflow-x: hidden;

  background: #111113;
}
.product-cart {
  width: 95%;
  margin: auto;
  color: #fff;
}
.product-contant {
  background: #111113;
  display: flex;
  padding: 10px;
  margin: auto;
}

.product-title {
  letter-spacing: 5px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  padding: 30px;
}

@media (max-width: 600px) {
  .product-title {
    font-size: 20px;
    letter-spacing: 10px;
  }
}
.product-img {
  width: 100%;

  height: auto;
}

.product-img img {
  height: 100%;
  width: 100%;
  max-height: 500px;
}

.product-informations {
  justify-content: center;
  width: 100%;
}
.product-desc {
  border-top: #ffffff 1px solid;
}

.product-price {
  z-index: 1;
  display: flex;
  padding: 0 1em;
  background: rgb(0, 0, 0);

  align-items: center;
  height: 2em;
  white-space: nowrap;
}
.product-price span {
  margin: 0;
  padding: 0;
  border: 0;

  vertical-align: baseline;
  font-size: 25px;
  font-weight: 500;
  color: rgb(255, 255, 255);
}

.product-button-addToShoppingCart {
  cursor: pointer;
  background: #fff;
  color: #000;
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 277px;
  height: 50px;
  margin-top: 45px;
  border-radius: 1000px;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.addCast {
  display: flex;
  text-align: center;
  justify-content: center;
}
.product-absolute-informations {
  font-size: 20px;
  padding-top: 30px;
  width: 100%;
  flex-wrap: wrap;
}

.product-absolute-informations p {
  flex-wrap: wrap;
  word-wrap: wrap;
    text-indent: 1.5em; /* Отступ первой строки */
    text-align: justify; /* Выравнивание по ширине */
   
}
@media (max-width: 900px) {
  .product-contant {
    display: block;
  }
  .product-button-addToShoppingCart {
    width: 40%;
  }
}

@media (max-width: 500px) {
  #t {
    font-size: 15px;
    letter-spacing: 3px;
  }
  .product-button-addToShoppingCart {
    font-size: 12px;
  }
}
</style>

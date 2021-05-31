<template>
  <div
    class="wrapper"
    @click="closeModalShoppingCart"
    v-bind:class="{
      'close-modal-shoppingCart': $store.getters.getIsShowPopupShoppingCart,
    }"
  >
    <div class="shopping-cart" @click.stop>
      <div class="back">
        <button @click="closeModalShoppingCart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="32"
            viewBox="0 0 17 32"
            icon="arrow4"
            class="default-modals-cart-continue-shopping-arrow"
          >
            <path
              d="M2.2 16L16.7 1.5c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L.3 15.4c-.4.4-.4.9 0 1.3l15.2 15.1c.2.2.4.3.6.3.2 0 .5-.1.6-.3.4-.4.4-.9 0-1.3L2.2 16z"
            ></path>
          </svg>
          <span> Продолжить покупки</span>
        </button>
      </div>
      <div class="cart-title">Мои покупки</div>
      <div class="cart-lists">
        <div
          class="cart-list"
          v-for="item in $store.getters.GET_SHOPPING_CART"
          :key="item.n"
        >
          <div class="img">
            <div class="deleteProduct" @click="deleteProduct(item.n)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                icon="cross2"
              >
                <path
                  d="M7 .6L6.4 0 3.5 2.9.6 0 0 .6l2.9 2.9L0 6.4l.6.6 2.9-2.9L6.4 7l.6-.6-2.9-2.9z"
                ></path>
              </svg>
            </div>

            <img :src="item.i" />
          </div>

          <div class="desc">
            <div class="name">{{ item.n }}</div>
            <div class="type">
              <div class="type-top">Type</div>
              <div class="type-bottom">{{ item.t }}</div>
            </div>
            <div class="type">
              <div class="type-top">Количество</div>
              <div class="count-bottom">
                <div class="count-value">{{ item.c }}</div>
                <div class="count-control">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    icon="plus"
                    @click="countPlus(item.n)"
                  >
                    <path d="M9 4H5V0H4v4H0v1h4v4h1V5h4z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    icon="minus"
                    @click="countMinus(item.n)"
                  >
                    <path d="M9 4v1H0V4z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="price">{{ item.p }} UAH</div>
          </div>
        </div>
      </div>
      <div class="cart-bottom">
        <div class="summ">
          <span class="costTitle">Общая стоимость</span>
          <span class="costValue">{{ summ }} UAH</span>
        </div>
        <div class="ship">
          <span class="shipTitle">Доставка</span>
          <span class="shipValue">{{ship}} UAH</span>
        </div>
        <div class="total">
          <span class="totalTitle">Итого</span>
          <span class="totalValue">{{total}} UAH</span>
        </div>
        <button @click="booking" class="buttonCheckout">
          <span>Оформить заказ</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping-cart",
  data() {
    return {
      count: 1,
      isShowModalShoppingCart: false,
      total: 0,
      ship: 0,
      summ: 0,
    };
  },
  methods: {
    deleteProduct(name) {
      var _items = this.$store.getters.GET_SHOPPING_CART.filter(
        (item) => item.n !== name
      );
      
  this.$state.commit("deteleProduct", _items)
      this.refreshSumm()
    },

    countPlus(item) {
      this.$store.state.shoppingCart.forEach((element) => {
        if (element.n == item) {
          element.c++;
        }
      });
      this.refreshSumm()
    },
    countMinus(item) {
      this.$store.state.shoppingCart.forEach((element) => {
        if (element.n == item) {
          if (element.c > 1) {
            element.c--;
          }
        }
      });
    this.refreshSumm()
    },

    refreshSumm()
    {
      this.summ=0
      this.$store.state.shoppingCart.forEach((element) => {
      this.summ += parseInt( element.p)* parseInt(element.c) ;
    });
    this.ship = (this.summ * 40) / 100;

      this.total = this.ship + this.summ;
    },

    closeModalShoppingCart() {
      this.$store.commit("closePopupShoppingCart");
    },

    booking() {
      this.$store.commit("closePopupShoppingCart");
      this.$router.push("/booking");
    },
  },
  created() {
    if (localStorage.shoppingCart !== undefined) {
      this.$store.state.shoppingCart = JSON.parse(localStorage.shoppingCart);
    }
    
  },
  updated() {
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify(this.$store.getters.GET_SHOPPING_CART)
    );
    
  },
  mounted()
  {
    this.refreshSumm()
  },
  computed:{
    
  }
  
};
</script>

<style scoped>
.wrapper {
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);

  z-index: 2;
}

.deleteProduct {
  position: absolute;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 23px;
  height: 23px;
  left: 0;
  top: -8px;
  border-radius: 50%;
  border: 1px solid #9ca4ab;
  background: #fff;
  cursor: pointer;
}

.deleteProduct svg {
  width: 7px;
  height: 7px;
  fill: #959da5;
}

.close-modal-shoppingCart {
  display: none;
}

.shopping-cart {
  position: absolute;
  width: 370px;
  background-color: white;
  right: 0;
  height: 100%;
  flex-direction: column;
  text-align: center;
  z-index: 1;
}

.back {
  height: 5%;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 30px;
}

.back button {
  cursor: pointer;
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  font-size: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;
  background-color: white;
}

.cart-title {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  font-size: 38px;
  font-weight: 400;
  line-height: 108px;
}

.cart-title:after {
  content: "";
  -webkit-box-flex: 1;
  flex: 1;
  height: 2px;
  margin-left: 18px;
  margin-top: 6px;
  background: #000;
}

.cart-lists {
  position: relative;
  display: -webkit-box;
  display: block;
  width: 100%;
}

.img {
  position: relative;
  flex-shrink: 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 40%;
  height: 144px;
  padding: 11px;
  border-radius: 10px;
  border: 1px solid #e2e7ec;
  -o-object-fit: contain;
  object-fit: contain;
}

.img img {
  width: 100%;
  height: 100%;
}

.desc {
  -webkit-box-flex: 1;
  flex: 1;
  margin-left: 20px;
}

.desc .name {
  text-align: left;
  display: block;
  margin: 10px 0 8px;
  font-size: 16px;
  font-weight: 500;
}

.type {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  padding-bottom: 10px;
}
.type-top {
  font-size: 16px;
  line-height: 1.2;
  color: #818d92;
}

.count-value {
  padding-right: 10px;
}

.count-control svg {
  padding: 0 0 0 20px;
  cursor: pointer;
}

.count-bottom {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.cart-list {
  position: relative;
  display: -webkit-box;
  display: flex;
  width: 100%;
}
.cart-bottom {
  text-align: center;
  padding: 0 30px;
  border: #000;
  border-top: #000 2px solid;
}

.cart-bottom .summ {
  padding-top: 50px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
}

.cart-bottom .summ .costTitle {
  font-size: 13px;
  font-weight: 400;
  color: #818d92;
  text-transform: uppercase;
}

.cart-bottom .summ .costValue {
  font-size: 16px;
  font-weight: 800;
}

.price {
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  padding-right: 40px;
}

.ship {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
}

.ship .shipTitle {
  font-size: 13px;
  font-weight: 400;
  color: #818d92;
  text-transform: uppercase;
}

.ship .shipValue {
  font-size: 16px;
  font-weight: 800;
}

.total {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
}

.totalTitle {
  font-size: 13px;
  font-weight: 400;
  color: #818d92;
  text-transform: uppercase;
}

.totalValue {
  font-size: 25px;
  font-weight: 600;
}

.back span {
  margin-left: 24px;
}

.buttonCheckout {
  cursor: pointer;
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

.buttonCheckout span {
  text-decoration: node;
  border: none;
}
</style>

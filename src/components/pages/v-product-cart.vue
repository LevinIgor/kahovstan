<template>
  <div class="v-product-cart">
    <v-header></v-header>
    <div class="product-cart">
      <div class="product-title">{{ $store.getters.GETSELECTITEM.n }}</div>
      <div class="product-contant">
        <div class="product-img">
          <img :src="$store.getters.GETSELECTITEM.i" alt="" />
        </div>

        <div class="product-informations">
          <div class="product-price">
            <span>{{ $store.getters.GETSELECTITEM.p }} UAH</span>
          </div>
          <div class="product-desc" id="t">
            <p>{{ $store.getters.GETSELECTITEM.d }}</p>
          </div>
          <div class="product-year" id="t">
            <div class="product-year-title">Год выпуска: </div>
            {{ $store.getters.GETSELECTITEM.y }}г.
          </div>
          <div class="product-state" id="t">
              <div class="product-state-title">Состояние: </div>
              {{ $store.getters.GETSELECTITEM.s }}</div>
          <div class="product-type" id="t">
              <div class="product-type-title">
                  Тип: 
              </div>
              {{ $store.getters.GETSELECTITEM.t }}</div>
          
            <button class="product-button-addToShoppingCart"><span>Добавить в корзину</span></button>
          
        </div>
      </div>

      <div class="product-absolute-informations">
        <p>{{ $store.getters.GETSELECTITEM.f }}</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../v-header";
import VFooter from "../v-footer.vue";

export default {
  data() {},
  components: {
    vHeader,
    VFooter,
  },
};
</script>

<style scoped>

#t{
display: flex;
padding: 1em;
font-size: 20px;
flex-wrap: wrap;
letter-spacing: 5px;
}
.v-product-cart {
  color: #fff;
  background: #111113;
}
.product-cart {
  width: 95%;
  margin: auto;
}
.product-contant {
  background: #111113;
  display: flex;

  margin: auto;
}

.product-title {
    letter-spacing: 5px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  padding: 30px;
}
.product-img {
  width: 100%;
  height: 500px;
}

.product-img img {
  height: 100%;
  width: 100%;
}

.product-informations {
  margin-left: 30px;
  width: 100%;
  text-align: left;
}
.product-desc{
    border-top: #ffffff 1px solid;
}
.product-price {
  margin-top:20px ;
    margin-bottom: 20px;
  max-width: 90px;
  font-size: 20px;
  font-weight: 600;
  z-index: 1;
  padding: 0 1em;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  -webkit-box-align: center;
  align-items: center;
  height: 2em;
  border-radius: 100px;
  white-space: nowrap;
  position: relative;
  display: -webkit-box;
  display: flex;
}

.product-button-addToShoppingCart{
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
.product-absolute-informations{
    font-size: 20px;
    padding-top: 30px;
    width: 70%;
    flex-wrap: wrap;
}

.product-absolute-informations p{
  flex-wrap: wrap;
  word-wrap: wrap;
}
@media (max-width: 900px) {
  .product-contant {
    display: block;
  }
}

</style>

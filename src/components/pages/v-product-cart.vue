<template>
  <div class="v-product-cart">
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
            <div class="product-year-title">Год выпуска: </div>
            {{ selectItem.y }}г.
          </div>
          <div class="product-state" id="t">
              <div class="product-state-title">Состояние: </div>
              {{ selectItem.s }}</div>
          <div class="product-type" id="t">
              <div class="product-type-title">
                  Тип: 
              </div>
              {{selectItem.t }}</div>
          <div class="addCast">
 <button class="product-button-addToShoppingCart"><span>Добавить в корзину</span></button>
          </div>
           
          
        </div>
      </div>

      <div class="product-absolute-informations">
        <p>{{ selectItem.f }}</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../v-header";
import VFooter from "../v-footer.vue";

export default {
  data() {
    return{
      selectItem:{}
    }
  },
  components: {
    vHeader,
    VFooter,
  },
  mounted(){
   
  },
  created(){
this.selectItem = JSON.parse(localStorage.item)
  
  }
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
  overflow-x: hidden;
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
  padding-left: 10px;
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

.addCast{
  display: flex;
  text-align: center;
  justify-content: center;
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
  .product-button-addToShoppingCart{
    width: 40%;
  }
}

@media (max-width:500px) {
  #t{
    font-size: 15px;
    letter-spacing: 3px;
  }
  .product-button-addToShoppingCart{
    font-size: 12px;
  }

  
}

</style>

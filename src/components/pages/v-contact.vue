<template>
  <div class="v-contact">
    <vHeader></vHeader>
<vShoppingCart></vShoppingCart>
    <div class="contacs">
      <div class="phone" id="block">
        <span>Телефоні</span>
        <p>+380958437523</p>
          <p>+380958437523</p>
            <p>+380958437523</p>
              <p>+380958437523</p>
                <p>+380958437523</p>

      </div>
      <div class="adress" id="block">
          <span>Адреси</span>
        <p>г. Новая Каховка переулок Перемоги 12</p>
         <p>г. Новая Каховка переулок Перемоги 12</p>
          <p>г. Новая Каховка переулок Перемоги 12</p>
           <p>г. Новая Каховка переулок Перемоги 12</p>
      </div>
      <div class="mail" id="block">
          <span>Наші поштові скриньки</span>
        <p>kahovstan@gmail.com</p>
        <p>kahovstan@gmail.com</p>
        <p>kahovstan@gmail.com</p>
        <p>kahovstan@gmail.com</p>
        <p>kahovstan@gmail.com</p>
      </div>
      <div class="link" id="block">
          <span>Наші соц мережі</span>
       <p>instagram/kahovstan</p>
       <p>instagram/kahovstan</p>
       <p>instagram/kahovstan</p>
       <p>instagram/kahovstan</p>
       <p>instagram/kahovstan</p>
       
      </div>
    </div>

    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vFooter from "../v-footer";
import vShoppingCart from "../shopping-cart"
export default {
  components: {
    vHeader,
    vFooter,
    vShoppingCart
  },
  data() {
    return {};
  },
};
</script>

<style>
.contacs {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  justify-content: center;
}


.phone{
  display: block;
}

#block {
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  margin: 40px;
  background:rgb(255, 255, 255);
  border: black 1px solid;
  flex-wrap: wrap;
  display: block;
}

.contacs span{
  padding: 20px;
  font-size: 22px;
}

.contacs p{
  font-size: 20px;
}
.contacs a{
  color: black;
  font-size: 20px;
  padding: 20px;
  flex-wrap: wrap;
}

</style>

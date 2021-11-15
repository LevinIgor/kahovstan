<template>
    <div class="about">
     <v-header></v-header>
   <!-- <router-link :to="{name:'catalog'}">Catalog</router-link></v-catalog> -->
  <div class="text">
    <p>defhdsjfkldhsfkjhadkljhfdkljfhdkljfhdkljfhadkljhfla</p>
  </div>
<div class="content">
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img
      slot="before"
      style="width: 100%"
      :src="before"
    />
    <img
      slot="after"
      style="width: 100%"
      :src="after"
    />
    <!-- eslint-enable -->
  </ImgComparisonSlider>  
</div>
 <div class="footer">
    <v-footer></v-footer>  
 </div>
    
    </div>
</template>

<script>


import vHeader from '../v-header'
import vCatalog from '../v-catalog'
import vFooter from '../v-footer'
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';




export default{
  components:{
    vHeader,
    vCatalog,
    vFooter,
    ImgComparisonSlider,
    Splide,
    SplideSlide,
  
  },
  data(){
    return{
      before:require('../../assets/pics/forest-fall.webp'),
      after:require( '../../assets/pics/forest-summer.webp'),
       options: {
          rewind : true,
          width  : 800,
          gap    : '1rem'}
    }
  },
  methods:{
    setItem(){
      db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
    }
  }
  
}
</script>

<style scoped>


a{
    color:black;
}

.footer{
 z-index: 1000000;
}



  /* img{
    width: 100%;
  } */
</style>

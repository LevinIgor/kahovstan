<template>
    <div class="about">
     <v-header></v-header>
   <!-- <router-link :to="{name:'catalog'}">Catalog</router-link></v-catalog> -->
   <div class="tex">
     dflkdjfkldfjdkls
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
 
  


     <v-footer></v-footer>  
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
    SplideSlide
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
  }
  
}
</script>

<style scoped>

.content{
  max-width: 900px;
}
a{
    color:black;
}

img-comparison-slider {
    --divider-width: 2px;
    --divider-color: #c0c0c0;
    --handle-opacity: 0.3;
  }

  /* img{
    width: 100%;
  } */
</style>

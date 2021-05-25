<template>
<div class="v-poduct-cart">
     <v-header></v-header>
     <div class="product-cart">
         <div class="product-title">Name</div>
         <div class="product-content">
             <div class="product-img">
                 <img src="https://jolybell.com/storage/u1if6qgk6a.webp?width=765&amp;height=645&amp;quality=100" alt="">
             </div>
             <div class="product-informations">
                 <div class="product-price"><span>99999 UA</span></div>
                 <div class="product-desc"><p>
                     glkjdfg klfjdgkldf jsg;lfjgkld
                     dfgdfghd fkjghdfkl sjgdh fsgjdfklsg
                     dfgdfghdf kjghdfkl sjgdhfsgjd fklsghfjg hkjgjkjghj
                     ghjgf kjh kjh kjhkj hkjh kj kjh kjhkj hkjh kj
                     hgfkjhkjh kj kjh kjh kjhkjhkj kjhkjhkjhkj kj hkj hkj kj h
                     hgfjkljkljlk fkldjf kldfjklsdfjdklfj dklsjfdklsj fdklsfjwortiwrowiruewklfs dfs kl jsgklfjglk jdfkljfkl jsgklj 
                     hgfh hkj kjh kj kjh kjhkj kj hkj kj
                     ghgfhgfhgfkj kj h kjhkj kjh kjh kjh k
                     nmbnbvnbvjh kjh kjh kjh kjh kjhkjhkjh kjhkjh kjh kjh kjh kjhkj hkj hkj fdf hdslf hdfklj dshfkljhfdskljhfdkljhdkljfh kljhd jhsdlk jhdsl kjh kjh
                     </p></div>
                 <div class="product-button-addToShoppingCart"><span>buy</span></div>
             </div>

         </div>

         <div class="product-absolute-informations">
           <p>lkljklj fgfj ljg fjdfklgj flkgjdfklg jdflkgjdfgkf;gkdfjgdfjg;lkdfjgldfk dfkgj kjdfkl gjdfgk dfgh eihr thrt[hrkl fhgdfhgd;f gf;kgkl jtkjretjr tkrt rj]
               flfkjdklfkldjskldjfkldjfkldsjfdklsj d fkljdsklfj lfjdsklfj slkjewrjwerij ewrqer gfm gghwoirhwreor[i hfklq;fhj oirqwoi fqwo[i qw]]
           </p>
         </div>
     </div>
     <v-footer></v-footer>
</div>
   
</template>

<script>

import vHeader from '../components/v-header'
import VFooter from './v-footer.vue'



export default{
data(){

},
components:{
    vHeader,
VFooter
}
}

</script>

<style scoped>

.product-cart{
    background-color: black;
    color: white;
    justify-content: center;
    text-align: center;
}

.product-content{
     
    justify-content: space-between; 
    margin-top: 75px; 
   display: flex;
   max-width: 80%;
   margin: auto;
   margin-top: 40px;
  
}

.product-price{
    background: #fff;
    color: #000;
    width: auto;

   font-size: 24px;
    
    
    border-radius: 100px;
    
   
}

.product-informations{
   
}

.product-informations .product-button-addToShoppingCart{
 
    cursor: pointer;
    position: relative;
    margin: auto;
    display: flex;
    
    justify-content: center;
   
    align-items: center;
    width: 200px;
    height: 30px;
    margin-top: 45px;
    border-radius: 1000px;
    background: #000;
    
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
   
    background: #fff;
    color: #000;
}

.product-button-addToShoppingCart button{
  border: 0;
}

.product-desc{
    
    font-size: 18px;
    font-weight: 300;
    flex-wrap: wrap;
   
}

.product-absolute-informations{
    max-width: 80%;
    text-align: justify;
    margin: auto;
    
}

.product-absolute-informations p{
    
    margin: 0;
    margin-top: 30px;
}



img{
    max-width: 400px;
}



</style>

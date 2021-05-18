
<template>
    <div class="wrapper">
         <div class="shopping-cart">
        <div class="back"> 
           <button>
               <svg xmlns="http://www.w3.org/2000/svg" width="17" height="32" viewBox="0 0 17 32" icon="arrow4" class="default-modals-cart-continue-shopping-arrow"><path d="M2.2 16L16.7 1.5c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L.3 15.4c-.4.4-.4.9 0 1.3l15.2 15.1c.2.2.4.3.6.3.2 0 .5-.1.6-.3.4-.4.4-.9 0-1.3L2.2 16z"></path></svg>
                <span> Продолжить покупки</span>
           </button>
           
        </div>
        <div class="cart-title">Мои покупки</div>
        <div class="cart-lists">
            <div class="cart-list">
                <div class="img"><img src="https://jolybell.com/storage/qvLbgGii4w.png?preview=&amp;width=192&amp;height=232" alt=""></div>
               
                <div class="desc">
                    <div class="name">Name</div>
                    <div class="type">
                        <div class="type-top">Type</div>
                        <div class="type-bottom">Stanok</div>
                    </div>
                    <div class="type">
                        <div class="type-top">Количество</div>
                        <div class="count-bottom">
                            <div class="count-value">{{count}}</div>
                            <div class="count-control">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" icon="plus" @click="countPlus"><path d="M9 4H5V0H4v4H0v1h4v4h1V5h4z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" icon="minus" @click="countMinus"><path d="M9 4v1H0V4z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div class="price">23232</div>
                </div>
            </div>
        </div>
        <div class="cart-bottom">
            <div class="summ"></div>
            <div class="ship"></div>
            <div class="total"></div>
           <button>Оформить</button>
        </div>
    </div>
    </div>
   
</template>



<script>
export default {
  name: 'shopping-cart',
  data(){
      return{
          count:1
      }
  },
  methods:{
      countPlus(){
          this.count++;
      },
      countMinus(){
          this.count--;
      }

  }
  
  }
  


</script>

<style scoped>

.wrapper{
     position:fixed;
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    background:rgba(0,0,0,.7);
    z-index:100;
}



.shopping-cart{
    width: 370px;
    background-color:white;
    margin: auto 0 auto auto;
    height: 100%;
    flex-direction: column;
    text-align: center;
}

.back{
    height: 75px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 30px;
   
}  

.back button{
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



.cart-title{
       display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0 18px;
    font-size: 38px;
    font-weight: 400;
    line-height: 108px;

}

.cart-title:after{
        content: "";
    -webkit-box-flex: 1;
    flex: 1;
    height: 2px;
    margin-left: 18px;
    margin-top: 6px;
    background: #000;
}


.cart-lists{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 305px;
    max-width: 90vw;
    margin-bottom: 30px;
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
    width: 144px;
    height: 144px;
    padding: 11px;

    border-radius: 10px;
    border: 1px solid #e2e7ec;
}

.img img{
        position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    padding-left: 30px;
}

.desc{
      -webkit-box-flex: 1;
    flex: 1;
    margin-left: 20px;  
}

.desc .name{
    text-align: left;
   display: block;
    margin: 10px 0 8px;
    font-size: 16px;
    font-weight: 500;
}

.type{
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
.type-top{
        font-size: 16px;
    line-height: 1.2;
    color: #818d92;
}

.count-value{
    padding-right: 10px;
}

.count-control svg{
  padding: 0 0 0 20px;
  cursor: pointer;
}

.count-bottom{
        display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.cart-list{
        position: relative;
    display: -webkit-box;
    display: flex;
    width: 100%;
}
.cart-bottom{
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    padding-top: 30px;
    border-top: 2px solid #484848;
}

.price{
        font-size: 16px;
    font-weight: 400;
    text-align: right;
}

</style>

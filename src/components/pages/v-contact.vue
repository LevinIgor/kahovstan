<template>
  <div class="v-contact">
    <vHeader></vHeader>
    <vShoppingCart></vShoppingCart>
    <div class="contacs">
      <div class="phone" id="block">
        <span>Телефоні</span>
        <p v-for="(item,key) in phone" :key="key" >{{item.value}}</p>
      </div>
      <div class="adress" id="block">
        <span>Адреси</span>
        <p v-for="(item,key) in adress" :key="key">{{item.value}}</p>
      
      </div>
      <div class="mail" id="block">
        <span>Наші поштові скриньки</span>
        <p v-for="(item,key) in email" :key="key"> {{item.value}}</p>
       
      </div>
      <div class="link" id="block">
        <span>Наші соц мережі</span>
        <p v-for="(item,key) in social" :key="key"> <a :href="item.value">{{item.value}}</a> </p>
        
      </div>
    </div>
<div class="margin"></div>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vFooter from "../v-footer";
import vShoppingCart from "../shopping-cart";
import firebase from "../../../firebase";
export default {
  components: {
    vHeader,
    vFooter,
    vShoppingCart,
  },
  data() {
    return {
      contacts: [],
      email: [],
      phone: [],
      adress: [],
      social: [],
    };
  },
  methods:{
    parse(){
      this.contacts.forEach(element => {
        if(element.name=="phone")
        this.phone.push(element)

        if(element.name=="email")
        this.email.push(element)

        if(element.name=="adress")
        this.adress.push(element)

        if(element.name=="social")
        this.social.push(element)
      });
    }
  },
  mounted() {
    firebase
      .firestore()
      .collection("contact")
      .get()
      .then((doc) => {
        doc.forEach((doc) => this.contacts.push(doc.data()));
      })
      .catch((error) => console.log(error));

    setTimeout(() => {
      this.parse()
    }, 1000);

  },
};
</script>

<style>

.margin{
  margin-bottom: 300px;
}
.contacs {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  justify-content: center;
}

.phone {
  display: block;
}

#block {
  text-align: center;
  border-radius: 20px;
  padding: 20px;
  margin: 40px;
  background: rgb(255, 255, 255);
  border: black 1px solid;
  flex-wrap: wrap;
  display: block;
}

.contacs span {
  padding: 20px;
  font-size: 22px;
}

.contacs p {
  font-size: 20px;
}
.contacs a {
  color: black;
  font-size: 20px;
  padding: 20px;
  flex-wrap: wrap;
}
</style>

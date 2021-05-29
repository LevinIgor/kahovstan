<template>
  <div class="v-productEdit">
    <v-header></v-header>
    <div class="productEditContainer">
      <div class="editTitle">
        <span>Добавление товаров</span>
      </div>
      <div class="productEditContent">
        <div class="name">
          <div class="name-title" id="EditTitle">
            <span>Name</span>
          </div>
          <div class="name-input">
            <input v-model="this.name" type="text" name="" id="EditInput" />
          </div>
        </div>
        <div class="price">
          <div class="price-title" id="EditTitle">
            <span>Price</span>
          </div>
          <div class="price-input">
            <input v-model="this.price" type="number" name="" id="EditInput" />
          </div>
        </div>
        <div class="img">
          <div class="img-title" id="EditTitle">
            <span>Img src</span>
          </div>
          <div class="img-input">
            <input  v-model="this.img" type="text" name="" id="EditInput" />
          </div>
        </div>
        <div class="desc">
          <div class="desc-title" id="EditTitle">
            <span>Desc</span>
          </div>
          <div class="desc-input">
            <textarea
            v-model="this.desc"
              name=""
              id="EditInputTextarea"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div class="fullDesc">
          <div class="fullDesc-title" id="EditTitle">
            <span>Full desc</span>
          </div>
          <div class="fullDesc-input">
            <textarea
            v-model="this.fullDesc"
              name=""
              id="EditInputTextarea"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div class="state">
          <div class="state-title" id="EditTitle">
            <span>State</span>
          </div>
          <div class="state-input">
            <input v-model="this.state" type="text" name="" id="EditInput" />
          </div>
        </div>
        <div class="year">
          <div class="year-title" id="EditTitle">
            <span>Year</span>
          </div>
          <div class="year-input">
            <input v-model="this.year" type="number" name="" id="EditInput" />
          </div>
        </div>
        <div class="type">
          <div class="type-title" id="EditTitle">
            <span>Type</span>
          </div>
          <div class="type-input">
            <input  v-model="this.type" type="text" name="" id="EditInput" />
          </div>
        </div>
        <div class="Product-edit-add">
          <button @click="addNewProduct" class="Product-edit-add-button">
            {{buttonName}}
          </button>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vFooter from "../v-footer";
import firebase from "../../../firebase";
export default {
  data() {
    return {
      name: "",
      price: 0,
      desc: "",
      fullDesc: "",
      img: "",
      state: "",
      year: 0,
      type: "",
      buttonName:"Добавить"
    };
  },
  components: {
    vHeader,
    vFooter,
  },
  methods: {
    addNewProduct() {
      
    firebase.firestore().collection("items").doc().set({
    name: this.name,
    price:this.price,
    desc:this.desc,
    fullDesc:this.fullDesc,
    img:this.img,
    state:this.state,
    year:this.year,
    type:this.type
})
.then(() => {
   this.name="",
   this.price=0,
   this.desc="",
   this.fullDesc="",
   this.img="",
   this.state="",
   this.year=0,
   this.type=""
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

this.buttonName="Товар успешно добавлен"
setTimeout(() => {
  this.buttonName="Добавить"
}, 3000);
    },
  },
};
</script>

<style>
.editTitle{
  text-align: center;
  font-size: 22px;
  padding-bottom: 20px;
}
.productEditContainer {
  padding: 50px;
  
  margin: auto;
  display: block;
  justify-content: center;
}

#EditTitle {
  font-size: 20px;
  line-height: 25px;
  color: #818d92;
  text-transform: uppercase;
}

#EditInput {
  width: 100%;
  height: 36px;
  padding: 0 15px;
  border-radius: 1000px;
  background: #f4f6f8;
}

#EditInputTextarea {
  width: 100%;
  height: 100px;
  padding: 0 15px;
  background: #f4f6f8;
}

.productEditContent textarea {
  background: inherit;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  font-size: 18px;
  font-weight: 500;
}

.productEditContent input {
  background: inherit;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  font-size: 18px;
  font-weight: 500;
}

.Product-edit-add {
  justify-content: center;
  text-align: center;
  padding: 40px 0;
}

.Product-edit-add-button {
  margin: auto;
  cursor: pointer;
  order: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 276px;
  height: 50px;
  border-radius: 1000px;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>

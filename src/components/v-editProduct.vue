<template>
  <div class="v-editProduct">
    <div class="v-editProduct-back" v-if="back"></div>
    <div class="loader" v-if="loader">Загрузка</div>
    <div class="v-editProduct-title">
      <span>Редактирование товаров</span>
    </div>
    <div class="product-inf">
      <div class="product-inf-title">
        <span>Enter product name</span>
      </div>
      <div class="product-inf-input">
        <input
          v-model="searchName"
          @change = "nameChange"
          type="text"
          name=""
          id="product-inf_input"
        />
      </div>

      <div class="product-inf-btn">
        <button class="product-inf_btn" @click="searchProduct">Search</button>
      </div>
    </div>

    <div class="edit-product" v-if="isProductSearch">
      <div class="name">
        <div class="name-title" id="EditTitle">
          <span>Name</span>
        </div>
        <div class="name-input">
          <input v-model="this.name" type="text" name="" id="eEditInput" />
        </div>
      </div>
      <div class="price">
        <div class="price-title" id="EditTitle">
          <span>Price</span>
        </div>
        <div class="price-input">
          <input v-model="this.price" type="number" name="" id="eEditInput" />
        </div>
      </div>
      <div class="img">
        <div class="img-title" id="EditTitle">
          <span>Img src</span>
        </div>
        <div class="img-input">
          <input v-model="this.img" type="text" name="" id="eEditInput" />
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
            id="eEditInputTextarea"
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
            id="eEditInputTextarea"
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
          <input v-model="this.state" type="text" name="" id="eEditInput" />
        </div>
      </div>
      <div class="year">
        <div class="year-title" id="EditTitle">
          <span>Year</span>
        </div>
        <div class="year-input">
          <input v-model="this.year" type="number" name="" id="eEditInput" />
        </div>
      </div>
      <div class="type">
        <div class="type-title" id="EditTitle">
          <span>Type</span>
        </div>
        <div class="type-input">
          <input v-model="this.type" type="text" name="" id="eEditInput" />
        </div>
      </div>
      <div class="Product-edit-add">
        <button @click="updateProduct" class="Product-edit-add-button">
          Изменить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";
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
      searchName: "",
      products: [],
      productsID: [],
      productsData: [],
      status: "Такого имени в базе не существует!",
      back: false,
      loader: false,
      updateId: "",
      isProductSearch:false
    };
  },
  methods: {
    searchProduct() {
      this.loader = true;
      this.back = true;
      this.getDataFromBD();
    },

    getDataFromBD() {
      this.products = [];
      firebase
        .firestore()
        .collection("items")
        .get()
        .then((item) => {
          item.forEach((element) => this.products.push(element.data()));
        })
        .catch((error) => console.log(error));

      firebase
        .firestore()
        .collection("items")
        .get()
        .then((item) =>
          item.forEach((element) => {
            this.productsID.push(element.id);
          })
        )
        .catch((error) => console.log(error));

      this.parsDataAndId();
    },

    parsDataAndId() {
      setTimeout(() => {
        var i = 0;
        this.products.forEach((item) => {
          this.productsData.push({
            index: this.productsID[i],
            name: item.name,
            price: item.price,
            desc: item.desc,
            fullDesc: item.fullDesc,
            img: item.img,
            state: item.state,
            year: item.year,
            type: item.type,
          });
          i++;
        });

        this.searchNameinData();
      }, 2000);
    },

    searchNameinData() {
      this.status=""
      this.productsData.forEach((element) => {
        if (element.name == this.searchName) {
          this.status = "Имя было найдено";
          this.name = element.name;
          this.price = element.price;
          this.desc = element.desc;
          this.fullDesc = element.fullDesc;
          this.img = element.img;
          this.state = element.state;
          this.year = element.year;
          this.type = element.type;
          this.updateId = element.index;
          return;
        }

        if (this.status == "Имя было найдено") {
         this.isProductSearch=true
          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Товар с таким именем был найден!",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          this.isProductSearch=false
         this.$swal.fire({
            position: "center",
            icon: "error",
            title: "Товар с таким именем не найден!",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        this.loader = false;
        this.back = false;
      });
    },

    updateProduct() {
      this.back = true;
      this.loader = true;
      firebase
        .firestore()
        .collection("items")
        .doc(this.updateId)
        .delete()
        .then(() => {
          this.uploadProduct();
          console.log("Delete");
        })
        .catch((error) => console.log(error));
    },

    uploadProduct() {
      setTimeout(() => {
        firebase
          .firestore()
          .collection("items")
          .doc()
          .set({
            name: this.name,
            price: this.price,
            desc: this.desc,
            fullDesc: this.fullDesc,
            img: this.img,
            state: this.state,
            year: this.year,
            type: this.type,
          })
          .then(() => {
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Товар с таким именем был отредактирован!",
              showConfirmButton: false,
              timer: 2000,
            });
            this.loader = false;
            this.back = false;
          });
      }, 2000);
    },

    nameChange(){
    this.isProductSearch=false
          this.name = ""
          this.price = 0
          this.desc = ""
          this.fullDesc = ""
          this.img = ""
          this.state = ""
          this.year =0
          this.type =""
          
    }
  }
  

};
</script>

<style>
.v-editProduct {
  padding-top: 30px;
  width: 90%;
  margin: auto;
}

.v-editProduct-title{
  text-align: center;
  font-size: 22px;
  padding: 40px;
}
.product-inf_btn{
  margin: 20px auto;
    cursor: pointer;
    order: 2;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 50px;
    border-radius: 1000px;
    background: #000;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.v-editProduct-back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.4;
  z-index: 100;
}

.v-editProduct input {
  flex-wrap: wrap;
  padding-left: 10px;
  width: 100%;
  height: 36px;
  border-radius: 1000px;
  background: #e8eaec;
  outline: none;
  border: none;
  -webkit-appearance: none;
  font-size: 25px;
}

.v-editProduct textarea {
  width: 100%;
  resize: none;
  height: 100px;

  background: #e8eaec;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  font-size: 18px;
  font-weight: 500;
}

.loader_back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #000;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.4;
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
}
.loader {
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  top: 50%;
  left: 50%;
  position: absolute;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before,
.loader:after {
  position: absolute;
  content: "";
}
.loader:before {
  width: 5.2em;
  height: 10.2em;
  background: #132525;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: load2 2s infinite ease 1.5s;
  animation: load2 2s infinite ease 1.5s;
}
.loader:after {
  width: 5.2em;
  height: 10.2em;
  background: #ffffff;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: load2 2s infinite ease;
  animation: load2 2s infinite ease;
}
@-webkit-keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

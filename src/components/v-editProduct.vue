<template>
  <div class="v-editProduct">
    <div class="v-editProduct-title">
      <span>Редактирование товаров</span>
    </div>
    <div class="product-inf">
      <div class="product-inf-title">
        <span>Введите имя товара для удаления</span>
      </div>
      <div class="product-inf-input">
        <input
          v-model="searchName"
          @change="nameChange"
          type="text"
          name=""
          id="product-inf_input"
        />
      </div>

      <div class="help">
        <span>Возможные имена:_</span>
        <button v-for="(item, key) in names" :key="key" @click="setName(item)">
          {{ item }}
        </button>
      </div>

      <div class="product-inf-btn">
        <button class="product-inf_btn" @click="editProduct">Поиск</button>
      </div>
    </div>

    <div class="edit-product" v-if="isProductSearch">
      <div class="name">
        <div class="name-title" id="EditTitle">
          <span>Name</span>
        </div>
        <div class="name-input">
          <input v-model="name" type="text" name="" id="eEditInput" />
        </div>
      </div>
      <div class="price">
        <div class="price-title" id="EditTitle">
          <span>Price</span>
        </div>
        <div class="price-input">
          <input v-model="price" type="number" name="" id="eEditInput" />
        </div>
      </div>
      <div class="img">
        <div class="img-title" id="EditTitle">
          <span>Img src</span>
        </div>
        <div class="img-input">
          <input v-model="img" type="text" name="" id="eEditInput" />
        </div>
      </div>
      <div class="desc">
        <div class="desc-title" id="EditTitle">
          <span>Desc</span>
        </div>
        <div class="desc-input">
          <textarea
            v-model="desc"
            name=""
            id="eEditInputTextarea"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div class="fullDesc-title" id="EditTitle">
        <span>Full desc</span>
      </div>
      <div class="fullDesc" v-for="(item, index) in fullDesc" :key="index">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="addDesc"
          @click="addDesc(index)"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="green"
            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          />
        </svg>

        <!--          Remove Svg Icon-->
        <svg
         
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="removeDesc"
          @click="removeDesc(index, fullDesc)"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="#EC4899"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
          />
        </svg>
        <div class="fullDesc-input">
          <textarea
            v-model="item.value"
            name=""
            id="eEditInputTextarea"
            cols="30"
            rows="10"
          >
item.value</textarea
          >
        </div>
      </div>
      <div class="state">
        <div class="state-title" id="EditTitle">
          <span>State</span>
        </div>
        <div class="state-input">
          <input v-model="state" type="text" name="" id="eEditInput" />
        </div>
      </div>
      <div class="year">
        <div class="year-title" id="EditTitle">
          <span>Year</span>
        </div>
        <div class="year-input">
          <input v-model="year" type="number" name="" id="eEditInput" />
        </div>
      </div>
      <div class="type">
        <div class="type-title" id="EditTitle">
          <span>Type</span>
        </div>
        <div class="type-input">
          <input v-model="type" type="text" name="" id="eEditInput" />
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
      fullDesc: null,
      img: "",
      state: "",
      year: 0,
      type: "",
      searchName: "",
      isProductSearch: false,
      idProduct: "",
      names: [],
    };
  },
  methods: {
    addDesc() {
      this.fullDesc.push({ value: "" });
     
    },
    removeDesc(index, fieldType) {
      fieldType.splice(index, 1);
    },
    editProduct() {
      var status = false;
      this.names = [];
      this.$store.dispatch("getItemsFromFirestore");
      var items = this.$store.getters.GETITEMSDATA;
      setTimeout(() => {
        items.forEach((element) => {
          if (element.name == this.searchName) {
            status = true;
            this.idProduct = element.id;
            this.isProductSearch = true;
            this.name = element.name;
            this.price = element.price;
            this.desc = element.desc;
            this.fullDesc = element.fullDesc;
            this.type = element.type;
            this.state = element.state;
            this.year = element.year;
            this.img = element.img;
          }
          this.names.push(element.name);
        });
        if (!status) {
          this.$swal.fire({
            position: "center",
            icon: "error",
            title: "Продукт не был найден",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }, 1000);
    },
    updateProduct() {
      var id = Math.random() * (1 - 100000) + 1;
      firebase
        .firestore()
        .collection("items")
        .doc(this.idProduct.toString())
        .delete()
        .then(() => console.log("DELETE"))
        .catch((error) => console.log(error));

      firebase
        .firestore()
        .collection("items")
        .doc(id.toString())
        .set({
          name: this.name,
          price: this.price,
          desc: this.desc,
          fullDesc: this.fullDesc,
          img: this.img,
          type: this.type,
          state: this.state,
          year: this.year,
          id: id,
        })
        .then(
          (this.name = ""),
          (this.price = ""),
          (this.desc = ""),
          (this.fullDesc = ""),
          (this.type = ""),
          (this.state = ""),
          (this.year = ""),
          (this.img = ""),

          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Продукт был изменен!",
            showConfirmButton: false,
            timer: 1000,
          })
        )
        .catch((error) => console.log(error));
    },
    nameChange() {
      this.isProductSearch = false;
    },
    setName(nameq) {
      this.searchName = nameq;
      this.editProduct();
    },
  },
};
</script>

<style>
.v-editProduct {
  padding-top: 30px;
  width: 90%;
  margin: auto;
  margin-bottom: 300px;
}

.v-editProduct-title {
  text-align: center;
  font-size: 22px;
  padding: 40px;
}

.product-inf-title span {
  font-size: 20px;
  line-height: 25px;
  color: #818d92;
  text-transform: uppercase;
}
.product-inf_btn {
  margin: 20px auto;
  cursor: pointer;
  order: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 50px;
  border-radius: 1000px;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
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
</style>

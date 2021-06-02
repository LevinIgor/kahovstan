<template>
  <div class="v-delete-product">
    <div class="title"><span>Удаление товара</span></div>
    <div class="loader" v-if="loader">Загрузка</div>
    <div class="loader_back" v-if="back"></div>
    <div class="field">
      <div class="field-title">Введите имя товара для удаления</div>
      <div class="field-value"><input type="text" v-model="productName" /></div>
    </div>

    <button class="delete-btn" @click="deleteProduct">Удалить</button>
  </div>
</template>

<script>
import firebase from "../../firebase";
export default {
  data() {
    return {
      datas: [],
      items: [],
      indexs: [],
      productName: "",
      loader: false,
      status: "",
      back: false,
    };
  },
  methods: {
    parsData() {
      var i = 0;
      var ix = "";
      this.items.forEach((item) => {
        this.datas.push({
          index: this.indexs[i],
          name: item.name,
          price: item.price,
          desc: item.desc,
          fullDesc: item.fullDesc,
          state: item.state,
          year: item.year,
          type: item.type,
        });
        i++;
      });

      setTimeout(() => {
        this.datas.forEach((element) => {
          if (element.name == this.productName) {
            ix = element.index;
            return;
          }
        });

        if (ix == "") {
          this.status = "Товар с таким именем не найден!";
        } else {
          firebase
            .firestore()
            .collection("items")
            .doc(ix)
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
          this.status = "Документ был удален!";
        }
      }, 2000);
    },

     GetDataFromFirebase() {
      this.datas = [];
      firebase
        .firestore()
        .collection("items")
        .get()
        .then((doc) => {
          doc.forEach((doc) => this.items.push(doc.data()));
        })
        .catch((error) => console.log(error));

      firebase
        .firestore()
       .collection("items")
        .get()
        .then((doc) => {
          doc.forEach((doc) => this.indexs.push(doc.id));
          this.parsData();
        })
        .catch((error) => console.log(error));
    },
    deleteProduct() {
      this.loader = true;
      this.back = true;

      setTimeout(() => {
        this.loader = false;
        this.GetDataFromFirebase();
        if (this.status == "Товар с таким именем не найден!") {
         this.$swal.fire({
            position: "center",
            icon: "error",
            title: "Товар с таким именем не найден!",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
           this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Товар удален!",
            showConfirmButton: false,
            timer: 1000,
          });
          this.productName=""
        }
        this.back = false;
      }, 4000);
    },
  },
};
</script>

<style scoped>
.v-delete-product {
  width: 90%;
  margin: auto;
  display: block;
}


.title {
  text-align: center;
  font-size: 22px;
  padding: 40px;
}

.field input {
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

.field {
  display: block;
  font-size: 20px;
  font-weight: 800;
}

.field .field-title {
  font-size: 20px;
  line-height: 25px;
  color: #818d92;
  text-transform: uppercase;
}

.delete-btn {
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

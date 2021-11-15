<template>
  <div class="v-productEdit">
    <div class="productEditContainer">
      <div class="editTitle">
        <span>Добавление товаров</span>
      </div>
      <div class="productEditContent">
        <div class="name">
          <div class="name-title" id="EditTitle">
            <span>НАзва</span>
          </div>
          <div class="name-input">
            <input v-model="this.name" type="text" name="" id="EditInput" />
          </div>
        </div>
        <div class="price">
          <div class="price-title" id="EditTitle">
            <span>Ціна</span>
          </div>
          <div class="price-input">
            <input v-model="this.price" type="number" name="" id="EditInput" />
          </div>
        </div>
        <div class="img">
          <div class="img-title" id="EditTitle">
            <span>Шлях до фото</span>
          </div>
          <div class="img-input">
            <input
              type="file"
              name=""
              id="EditInput"
              @change="setImage($event)"
            />
          </div>
        </div>
        <div class="desc">
          <div class="desc-title" id="EditTitle">
            <span>Короткий запис</span>
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
            <span>Повний опис</span>
          </div>
          <div
            class="fullDesc-input"
            v-for="(item, index) in fullDescs"
            :key="index"
          >
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
              v-show="fullDescs.length > 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="removeDesc"
              @click="removeDesc(index, fullDescs)"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="#EC4899"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
              />
            </svg>
            <textarea
              v-model="item.value"
              name=""
              id="EditInputTextarea"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div class="state">
          <div class="state-title" id="EditTitle">
            <span>Стан</span>
          </div>
          <div class="state-input">
            <input v-model="this.state" type="text" name="" id="EditInput" />
          </div>
        </div>
        <div class="year">
          <div class="year-title" id="EditTitle">
            <span>Рік випуску</span>
          </div>
          <div class="year-input">
            <input v-model="this.year" type="number" name="" id="EditInput" />
          </div>
        </div>
        <div class="type">
          <div class="type-title" id="EditTitle">
            <span>Тип</span>
          </div>
          <div class="type-input">
            <input v-model="this.type" type="text" name="" id="EditInput" />
          </div>
        </div>
        <div class="Product-edit-add">
          <button @click="addNewProduct" class="Product-edit-add-button">
            {{ buttonName }}
          </button>
        </div>
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
      img: "",
      state: "",
      year: 0,
      type: "",
      buttonName: "Добавить",
      fullDescs: [{ value: "" }],
    };
  },

  methods: {
    addDesc() {
      this.fullDescs.push({ value: "" });
    },
    removeDesc(index, fieldType) {
      fieldType.splice(index, 1);
    },
    setImage(e) {
      var image = e.target.files[0];
      firebase
        .storage()
        .ref(image.name)
        .put(image)
        .then(() =>
          firebase
            .storage()
            .ref(image.name)
            .getDownloadURL()
            .then((url) => {
              this.img = url;
            })
        );
    },
    addNewProduct() {
      var id = Math.random() * (1 - 100000) + 1;
      firebase
        .firestore()
        .collection("items")
        .doc(id.toString())
        .set({
          name: this.name,
          price: this.price,
          desc: this.desc,
          fullDesc: this.fullDescs,
          img: this.img,
          state: this.state,
          year: this.year,
          type: this.type,
          id: id,
        })
        .then(() => {
          (this.name = ""),
            (this.price = 0),
            (this.desc = ""),
            (this.fullDescs = [{ value: "" }]),
            (this.img = ""),
            (this.state = ""),
            (this.year = 0),
            (this.type = "");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      this.buttonName = "Товар успешно добавлен";
      setTimeout(() => {
        this.buttonName = "Добавить";
      }, 3000);

      this.$swal.fire({
        position: "center",
        icon: "success",
        title: "Товар добавлен!",
        showConfirmButton: false,
        timer: 1000,
      });
    },
  },
};
</script>

<style>
.editTitle {
  text-align: center;
  font-size: 22px;
  padding-bottom: 20px;
}
.productEditContainer {
  padding: 40px;
  margin: auto;
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
</style>

<template>
  <div class="v-deleteFaq">
      <div class="v-deleteFaq-title">
          <span>Удалить вопрос-ответ</span>
      </div>
    <div class="input-number">
      <span>Введите номер для удаления</span>
      <input type="number" name="" id="" v-model="Enumber" />
      <button class="searchFaq" @click="getFaq">Поиск</button>
    </div>
    <div class="numbers">
        <span>Возможные номера:</span>
      <div class="number" v-for="(item, key) in numbers" :key="key">
        <button class="btn-number" @click="setNumber(item)">{{item}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";
export default {
  data() {
    return {
      faqs: [],
      Enumber: 0,
      isContainNumber: false,
      numbers: [],
    };
  },
  methods: {
    getFaq() {
      this.faqs = [];
      this.numbers=[]
      firebase
        .firestore()
        .collection("faq")
        .get()
        .then((doc) => {
          doc.forEach((element) => {
            this.faqs.push(element.data());
          }),
            this.deleteFaq();
        });
    },
    deleteFaq() {
      this.isContainNumber = false;
      this.faqs.forEach((element) => {
        if (element.number == this.Enumber) {
          this.isContainNumber = true;
          firebase
            .firestore()
            .collection("faq")
            .doc(element.id.toString())
            .delete()
            .then()
            .catch((error) => console.log(error));
        }
        this.numbers.push(element.number)
      });
      if (this.isContainNumber) {
        this.$swal.fire({
          position: "center",
          icon: "success",
          title: "Вопрос-ответ удален",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.$swal.fire({
          position: "center",
          icon: "error",
          title: "Вопрос-ответ по указаному номеру не найден",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    setNumber(number){
        console.log(number)
        this.Enumber=number
        this.getFaq()
    }
  },
};
</script>

<style>
.v-deleteFaq {
  display: block;
  justify-content: center;
  text-align: center;
  padding-bottom: 900px;
}


.v-deleteFaq span {
  font-size: 20px;
  margin-right: 20px;
}

.numbers{
    margin: 20px;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
}
.v-deleteFaq-title{
    margin: 30px;
}
.v-deleteFaq-title span
{
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  
}

.searchFaq{
   align-items: center;
    width: 100px;
    margin-left: 20px;
    border-radius: 1000px;
    background: #000;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
   
}
</style>

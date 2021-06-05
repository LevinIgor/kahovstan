<template>
  <div class="v-editFaq">
    <div class="v-editFaq-title"><span>Редактировать</span></div>
    <div class="v-editFaq-input">
      <input type="number" v-model="numberForSearch" @change = "inputChange" />
      <button id="btn" @click="search()">Поиск</button>
    </div>
    <div class="v-editFaq-content" v-if="visible">
      <div class="v-editFaq-content-question">
        <span>Вопрос</span>
        <textarea name="" id="" cols="30" rows="10" v-model="q"></textarea>
      </div>
      <div class="v-editFaq-content-answer">
        <span>Ответ</span>
        <textarea name="" id="" cols="30" rows="10" v-model="a"></textarea>
      </div>
      <div class="v-editFaq-content-number">
        <span>Номер</span>
        <input type="number" name="" id="" v-model="n" />
      </div>
      <button id="btn" @click="editFaq()">Изменить</button>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";
export default {
  data() {
    return {
      numberForSearch: 0,
      faqs: [],
      q: "",
      a: "",
      n: 0,
      idForDelete: 0,
      status: false,
      visible:false
    };
  },
  methods: {
    getFaq() {
      this.faqs = [];
      firebase
        .firestore()
        .collection("faq")
        .get()
        .then((doc) => {
          doc.forEach((element) => {
            this.faqs.push(element.data());
          });
          this.selectFaq();
        })
        .catch((error) => console.log(error));
    },
    search() {
      this.getFaq();
    },
    selectFaq() {
      this.status = false;
      this.faqs.forEach((element) => {
        if (element.number == this.numberForSearch) {
          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "Вопрос-ответ найден!",
            showConfirmButton: false,
            timer: 1000,
          });
          this.status = true;
          this.q = element.question;
          this.a = element.answer;
          this.n = element.number;
          this.idForDelete = element.id;
          this.visible=true
        }
      });

      if (!this.status) {
        this.$swal.fire({
          position: "center",
          icon: "error",
          title: "Вопрос-ответ не найден!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    editFaq() {
      var id = Math.random() * (1 - 100000) + 1;
      firebase
        .firestore()
        .collection("faq")
        .doc(this.idForDelete.toString())
        .delete()
        .then()
        .catch((error) => console.log(error));

      firebase
        .firestore()
        .collection("faq")
        .doc(id.toString())
        .set({
          answer: this.a,
          question: this.q,
          number: this.n,
          id: id,
        })
        .then()
        .catch((error) => console.log(error));

      this.$swal.fire({
        position: "center",
        icon: "success",
        title: "Вопрос-ответ изменен!",
        showConfirmButton: false,
        timer: 1000,
      });

      this.a = "";
      this.q = "";
      this.n = "";
      this.visible=false
    },
    inputChange(){
        this.visible=false
    }
  },
};
</script>

<style>
.v-editFaq {
  display: block;
  width: 90%;
  margin: auto;
  margin-bottom: 300px;
}

.v-editFaq-title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin: 30px;
}

.v-editFaq-input {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.v-editFaq-content {
  justify-content: center;
  text-align: center;
}

.v-editFaq-content textarea {
  width: 100%;
  resize: vertical;
}

.v-editFaq-content span {
  font-size: 20px;
}

.v-editFaq-content-number {
  margin: 20px;
}
.v-editFaq-content-number input {
  margin-left: 10px;
}

#btn {
  border-radius: 1000px;
  background: #000;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  
}

@media (max-width: 600px) {
  .v-editFaq-content button {
    font-size: 12px;
    width: 50%;
  }
}
</style>

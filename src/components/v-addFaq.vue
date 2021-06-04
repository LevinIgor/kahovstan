<template>
  <div class="v-addFaq">
    <div class="input-question">
      <span>Введите вопрос</span>
      <textarea name="" id="" cols="30" rows="10" v-model="question"></textarea>
    </div>
    <div class="input-answer">
      <span>Введите ответ</span>
      <textarea name="" id="" cols="30" rows="10" v-model="answer"></textarea>
    </div>
    <div class="input-number">
      <span>Введите номер вопроса</span>
      <input type="number" name="" id=""  v-model="number"/>
    </div>
    <button class="addFaq" @click="addFaq">{{ btn }}</button>
  </div>
</template>

<script>
import firebase from "../../firebase";

export default {
  data() {
    return {
      question: "",
      answer: "",
      btn: "Добавить",
      number:0
    };
  },
  methods: {
    addFaq() {
      if (this.question !== "" && this.answer !== "" && this.number!==0) {
        var id = Math.random() * (1 - 100000) + 1;
        firebase
          .firestore()
          .collection("faq")
          .doc(id.toString())
          .set({
            id: id,
            answer: this.answer,
            question: this.question,
            number:this.number
          })
          .then()
          .catch((error) => console.log(error));

        this.$swal.fire({
          position: "center",
          icon: "success",
          title: "Вопрос-ответ добавлен!",
          showConfirmButton: false,
          timer: 1000,
        });

        this.answer = "";
        this.question = "";
        this.number=0
      } else {
        this.btn = "Заполните все поля!";
        setTimeout(() => {
          this.btn = "Добавить";
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
.v-addFaq {
  display: block;
  text-align: center;
  justify-content: center;
}

.input-question {
  display: block;
}

.input-answer {
  display: block;
}

.v-addFaq textarea {
  width: 99%;
  resize: vertical;
  font-size: 20px;
}

.v-addFaq span {
  font-size: 22px;
  font-weight: 800;
}

.addFaq {
  align-items: center;
  width: 30%;
  margin: auto;
  padding: 10px;
  margin-top: 45px;
  border-radius: 1000px;
  background: #000;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.input-number input{
font-size: 20px;
margin-left: 10px;
}
</style>

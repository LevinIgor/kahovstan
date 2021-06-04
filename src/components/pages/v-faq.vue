<template>
  <div class="v-faq">
      <div class="answerPopup" v-if="isPopupOpen">
        <div class="answerPopupBack" @click="closePopupAnswer"></div>
        <div class="answerPopupText">
            <p>
                {{answer}}
            </p>
        </div>
    </div>
    <vHeader></vHeader>
    
    <div class="faq-content">
      <div class="faq-item" v-for="(item, key) in faqList" :key="key"
      @click="openPopupAnswer(item.answer)"
      >
        <div class="faq-item-text">
          <p>
          №{{item.number}}.
           {{ item.question }}
          </p>
        </div>
      </div>
    </div>
    <vFooter></vFooter>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vFooter from "../v-footer";
import firebase from "../../../firebase";
export default {
  data() {
    return {
      faqList: [],
      isPopupOpen:false,
      answer:""
    };
  },
  components: {
    vHeader,
    vFooter,
  },
  methods: {
      openPopupAnswer(Answer)
      {
          this.answer = Answer
          this.isPopupOpen=true
          
      },

      closePopupAnswer(){
          this.isPopupOpen=false
      }
  },
  mounted() {
    firebase
      .firestore()
      .collection("faq")
      .get()
      .then((doc) => {
        doc.forEach((element) => {
          this.faqList.push(element.data());
        });

        
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.faq-content {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
}
.faq-item {
  display: flex;
  margin: 40px;
  font-size: 20px;
  border-radius: 20px;
}



.faq-item:hover {
  background: black;
  transition: .6s;
  color: white;
}

.faq-item-text {
    text-align: center;
  display: flex;
  justify-items: center;
  width: 100%;
  height: 100%;
  align-items: center;
}

.faq-item-text p{
    width: 100%;
   padding: 10px;
    justify-content: center;
    align-items: center;
}
.answerPopup{
 
   display: flex;
   justify-content: center;
}

.answerPopupBack{
    position: absolute;
    transition: 1s ;
    height: 100%;
    width: 100%;
    background: black;
    opacity: .5;
    z-index: 100;
}

.answerPopupText{
  text-align: center;
 padding: 10px;
position: absolute;
 border-radius: 20px;
 top: 50%;
 left: 50%;
transform: translate(-50%,-50%);
width: 40%;
z-index: 200;
margin: auto;
background: rgb(236, 234, 234);
font-size: 20px;
font-weight: 800;
}
</style>

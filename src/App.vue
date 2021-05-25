<template>
  <div id="nav">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>
import VMainWrapper from "./components/v-main-wrapper.vue";
import firebase from '../firebase'
export default {
  name: "vue",
  components: {
    VMainWrapper,
  },
  data() {},
  mounted(){
    
      firebase
        .firestore()
        .collection("items")
        .get()
        .then((doc) => {
          doc.forEach((doc) => this.$store.state.items.push(doc.data()));
        })
        .catch((error) => console.log(error));
        console.log("Data is get", this.$store.state.items);
      
    
  },
  // created: {
  //   print() {
  //     console.log("fhdkjfdh");
  //   },
  // },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>

<template>
  <div id="nav">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>
import VMainWrapper from "./components/v-main-wrapper.vue";
import firebase from "../firebase";
export default {
  name: "vue",
  components: {
    VMainWrapper,
  },
  data() {},
  methods: {
  },
  mounted() {
    firebase
      .firestore()
      .collection("items")
      .get()
      .then((doc) => {
        doc.forEach((doc) => this.$store.state.items.push(doc.data()));
      })
      .catch((error) => console.log(error));

    
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>

<template>
  <div id="nav">
    <v-main-wrapper></v-main-wrapper>
  </div>
</template>

<script>
import VMainWrapper from "./components/v-main-wrapper.vue";

export default {
  name: "vue",
  components: {
    VMainWrapper,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getItemsFromFirestore");
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>

<template>
  <div class="v-faq">
    <vHeader></vHeader>
    <div class="FAQ">
      <input type="file" name="" id="" @change="processFile($event)" />
      <button @click="imgSet()">IMG</button>
      <button @click="getUrl()">GET URL</button>
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
      fileRef: "",
    };
  },
  components: {
    vHeader,
    vFooter,
  },
  methods: {
    getUrl() {
      firebase
        .storage()
        .ref()
        .getDownloadURL(this.fileRef)
        .then((url) => console.log(url))
        .catch((error) => console.log(error));
    },
    imgSet() {
      var storageRef = firebase.storage().ref("/" + this.fileRef.name);
      storageRef.put(this.fileRef).then(() => console.log("img is set"));
    },
    processFile(event) {
      this.fileRef = event.target.files[0];
    },
    print() {
      console.log(this.fileRef);
    },
  },
};
</script>

<style scoped></style>

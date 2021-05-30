<template>
  <div class="v-delete-product">
    <input type="text" />
    <button @click="deletes">SSSSSSSSSSSSSSS</button>
    <button @click="set" >jhkkjhkjhkjhk</button>
  </div>
</template>

<script>
import firebase from "../../firebase";
export default {
  data() {
    return {
      datas: [],
      items:[],
      indexs:[]
    };
  },
  methods: {
    set() {
        console.log(this.items)
       var i = 0;
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

      console.log(this.datas);
    },
    deletes() {
     
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
          
        })
        .catch((error) => console.log(error));

    
    },
  },
};
</script>

<style scoped></style>

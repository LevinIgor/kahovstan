<template>
  <div class="v-catalog">
    <div class="item" v-for="(item, key) in this.$store.state.items" :key="key">
      <div class="first">
        <div class="blackout">
          <div class="desc">
            <div class="button-desc"><span>Подробнее</span></div>
           
          </div>
          <div class="main">
            <div class="price">{{ item.price }}GRN</div>
            <div class="image">
              <img :src="this.img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="second">
        <span
          ><button>{{ item.name }}</button></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";

export default {
  name: "v-catalog",
  data() {
    return {
      count: 30,
      items: [],
      name: "pavel",
      img: require("../assets/pics/IMG.png"),
    };
  },
  methods: {
    print() {
      //   firebase.firestore().collection("cities")
      //     .get()
      //     .then((querySnapshot) => {
      //       querySnapshot.forEach((doc) => {
      //         console.log(doc.id, " => ", doc.data());
      //       });
      //     });
      //   firebase
      //     .firestore()
      //     .collection("cities")
      //     .get()
      //     .then((doc) => {
      //      doc.forEach((doc=>
      //      this.$store.state.items.push(doc.data())
      //      ))
      //     })
      //     .catch((error) => console.log(error));
      //     console.log(this.$store.state.items)
      //   docRef
      //     .get()
      //     .then((doc) => {
      //       if (doc.exists) {
      //         console.log("Document data:", doc.data());
      //       } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //       }
      //     })
      //     .catch((error) => {
      //       console.log("Error getting document:", error);
      //     });
    },
    addLocation() {
      firebase
        .firestore()
        .collection("items")
        .add({
          name: "Moma",
        })
        .then(() => {})
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>

<style>
.v-catalog {
  height: 100%;
  width: 90%;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.item {
  border-radius: 20px;
  width: 40%;
  justify-content: center;
  margin: 20px;
 
}

.item .price {
  z-index: 1000;
  position: absolute;
  border-radius: 1em 0 1em 0;
  font-size: 16px;
  background-color: black;
  color: white;
  padding: 5px;
}

.desc {
  align-items: center;
  z-index: 10000;
  justify-content: center;
  text-align: center;
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100%;
  font-weight: 700;
  display: flex;
}

.button-desc{
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 220px;
    height: 50px;
    border-radius: 100px;
    background: #fff;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    background-color: rgba(0, 0, 0, 0);
}
.first {
  justify-content: center;
  position: relative;
}
.image {
  justify-content: center;
  position: relative;
  text-align: center;
}

.image img {
  width: 100%;
  z-index: 1;
}



.blackout :hover {
 opacity: 1;
  
}
</style>

<template>
  <div class="v-catalog" v-bind:class="{lock:true}" >
    <div class="catalog-title">
      <span>Каталог</span>
    </div>
    <div class="filters">
      <div class="filterSortPriceMaxMin">
        <button @click="sortItemsPriceMaxMin">+</button>
      </div>
      <div class="filterSortPriceMinMax">
        <button @click="sortItemsPriceMinMax">-</button>
      </div>
    </div>
    <div class="catalogList">
      <div
        class="item"
        v-for="(item, key) in this.$store.getters.GETITEMSDATA"
        :key="key"
        @click="
          routerPush(
            item.name,
            item.price,
            item.desc,
            item.fullDesc,
            item.img,
            item.type,
            item.year,
            item.state
          )
        "
      >
        <div class="product-content">
          <div class="product-content-price">
            <span>{{ item.price }} GNR</span>
          </div>
          <div class="product-content-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="product-content-blackout"></div>
          <button class="product-content-blackout-button">
            <span>Подробнее</span>
          </button>
        </div>

        <button class="product-name">
          <span>{{ item.name }}</span>
        </button>
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
    routerPush(name, price, desc, fullDesc, img, type, year, state) {
      var selectP = {
        n: name,
        p: price,
        d: desc,
        f: fullDesc,
        i: img,
        t: type,
        y: year,
        s: state,
        c:1
      };
      localStorage.setItem("item", JSON.stringify(selectP));
      this.$router.push("/catalog/" + name);
    },
    sortItemsPriceMaxMin() {
      this.$store.commit("sortItemsPriceMaxMin");
    },
    sortItemsPriceMinMax() {
      this.$store.commit("sortItemsPriceMinMax");
    },
  },
};
</script>

<style>
.v-catalog {
  width: 90%;
  margin: auto;
  justify-content: center;
  display: block;
  flex-wrap: wrap;
}

.lock{
   overflow-y: hidden;
  overflow-x: hidden;
}
.catalogList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
.catalog-title {
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: 20px;
  padding: 60px;
}

@media (max-width: 600px) {
  .catalog-title {
    font-size: 30px;
    letter-spacing: 4px;
    padding: 10px;
  }

  .item {
    margin-bottom: 10px;
    height: auto;
  }
}
.filters {
  display: flex;
}
.item {
  width: 550px;
  position: relative;
  display: block;
  margin: 20px;
  text-align: center;
}

.product-content-price {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 1em 0;
  z-index: 1;
  display: flex;
  padding: 0 1em;
  background: #000;
  color: #fff;
  -webkit-box-align: center;
  align-items: center;
  height: 2em;

  white-space: nowrap;
}

.product-content-price span {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Futura, sans-serif;
  vertical-align: baseline;
  font-size: 18px;
  font-weight: 500;
}

.product-content-img {
  height: 100%;
  width: 100%;
  position: relative;
  -o-object-fit: contain;
  object-fit: contain;
  margin: auto;
}
.product-content-img img {
  width: 100%;
  height: 100%;
}

.product-content {
  height: 350px;
  width: 550px;
  margin: auto;
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 29px;
  background: #fff;
  align-content: center;
}

@media (max-width: 600px) {
  .product-content {
    height: 300px;
    width: 400px;
  }
}

@media (max-width: 400px) {
  .product-content {
    height: 250px;
    width: 250px;
  }
}
.product-content-blackout {
  position: absolute;
  background: #000;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0;
}

.product-content-blackout-button {
  position: absolute;
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
  font-size: 18px;
  display: none;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}

.product-name {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 58px;
  margin-top: 20px;
  border-radius: 100px;
  cursor: pointer;
  background: #fff;
  border: none;
}

.product-name span {
  position: absolute;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: inherit;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2px;
  letter-spacing: 6px;
}

.item:hover .product-content-blackout {
  opacity: 0.5;
  transition: 0.7s;
}

.item:hover .product-name {
  background: #000;
  color: #fff;
  transition: 0.7s;
}

.item:hover .product-content-blackout-button {
  display: flex;
}
</style>

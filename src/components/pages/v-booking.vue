<template>
  <div class="v-booking">
    <v-header></v-header>
    <div class="bookingContainer">
      <div class="bookingTitle">Оформлення замовлення</div>
      <div class="booking-content">
        <div class="booking-details">
          <div class="booking-details-title" id="title">Введіть свої данні</div>
          <div class="booking-details-name">Імя</div>
          <div class="booking-details-name-input">
            <input maxlength="255" type="text" id="inp" v-model="order.fname" />
          </div>

          <div class="booking-details-name">Прізвище</div>
          <div class="booking-details-name-input">
            <input maxlength="255" type="text" id="inp" v-model="order.sname" />
          </div>

          <div class="booking-details-name">По батькові</div>
          <div class="booking-details-name-input">
            <input maxlength="255" type="text" id="inp" v-model="order.tname" />
          </div>

          <div class="booking-details-name">Номер телефону</div>
          <div class="booking-details-name-input">
            <input
              maxlength="255"
              type="number"
              id="inp"
              v-model="order.phone"
            />
          </div>
          <div class="booking-details-name">Пошта</div>
          <div class="booking-details-name-input">
            <input
              maxlength="255"
              type="email"
              id="inp"
              v-model="order.email"
            />
            <span>{{ mailMassage }}</span>
          </div>

          <div class="details">
            <div class="booking-details-name">Коментарій до замовлення</div>
            <div class="details-input">
              <textarea
                v-model="order.comment"
                name=""
                id="EditInputTextarea"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>

          <div class="totalSumm">
            <input type="number" name="" id="" />
          </div>
          <div class="Next">
            <button type="submit" class="button-next" @click="addBooking()">
              <span> {{ massage }} </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vFooter from "../v-footer";
import firebase from "../../../firebase";

export default {
  components: {
    vHeader,
    vFooter,
  },
  data() {
    return {
      order: {
        fname: "",
        sname: "",
        tname: "",
        phone: "",
        email: "",
        comment: "",
        product: [],
        time: Date(24 * 3600 * 1000),
        id: Math.random() * (1 - 100000) + 1,
        isDone: "В очереди",
        summ: 0,
      },
      massage: "Завершити оформлення",
      mailMassage: "",
    };
  },
  methods: {
    addBooking() {
      if (!this.validEmail()) {
        this.mailMassage = "Введите коректно ваш адресс!";
        setTimeout(() => {
          this.mailMassage = "";
        }, 2000);
        console.log("+");
      } else if (
        this.order.fname == "" ||
        this.order.sname == "" ||
        this.order.tname == "" ||
        this.order.phone.length < 10
      ) {
        this.massage = "Заполните все поля!";
        setTimeout(() => {
          this.massage = "Добавить";
        }, 3000);
      } else {
        this.order.product = JSON.parse(localStorage.shoppingCart);
        firebase
          .firestore()
          .collection("orders")
          .doc()
          .set(this.order)
          .then(() => {
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Дякую за замовлення! З вами зв'яжуться у найблищий час",
              showConfirmButton: false,
              timer: 2000,
            });
            localStorage.clear();
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

        this.$router.push("/");
      }
    },
    validEmail() {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(this.order.email);
    },
  },
  mounted() {
    var o = this.$store.getters.GET_SHOPPING_CART;
    o.forEach((element) => {
      this.order.summ =
        this.order.summ + parseInt(element.p) * parseInt(element.c);
    });
  },
};
</script>

<style scoped>
#inp {
  width: 100%;
  height: 36px;
  padding: inherit;
  border-radius: 1000px;
  background: #f4f6f8;
  padding-left: 20px;
}

#EditInputTextarea {
  width: 100%;
  height: 100px;
  padding: 0 15px;
  background: #f4f6f8;
}

.booking-details textarea {
  background: inherit;
  min-height: 80px;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  font-size: 18px;
  font-weight: 500;
}

.bookingContainer {
  display: -webkit-box;
  display: block;
}

.booking-content {
  -webkit-box-pack: justify;
  justify-content: center;
  width: 90%;

  flex-wrap: wrap;
  -webkit-box-align: start;
  align-items: flex-start;
  margin: auto;
}

.bookingTitle {
  font-size: 42px;
  font-weight: 400;
  text-align: center;
}

.booking-details-title {
  text-align: center;
  flex-wrap: wrap;

  margin-bottom: 50px;
  font-size: 28px;
  font-weight: 400;
  line-height: 120%;
}

.booking-details-name {
  font-size: 15px;
  line-height: 25px;
  color: #818d92;
  text-transform: uppercase;
}

.booking-details input {
  background: inherit;
  outline: none;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  font-size: 18px;
  font-weight: 500;
}

.Next {
  justify-content: center;
  text-align: center;
  padding: 40px 0;
}
.button-next {
  cursor: pointer;
  -webkit-box-ordinal-group: 3;
  order: 2;
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 276px;
  height: 50px;
  border-radius: 1000px;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}
</style>

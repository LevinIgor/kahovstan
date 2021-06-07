<template>
  <div class="orders">
    <div class="orderBack" v-if="isBack" @click="closeBack()">
      <div class="orderBackContent" @click.stop>
        <div class="comment">
          <div class="commentTitle">Коментарий</div>
          <div class="commentText">{{ orderInf.comment }}</div>
        </div>
        <div class="products" v-for="(item, key) in orders.product" :key="key">
          {{ item }} kljkljlkj
        </div>
        <div class="date">
          <div class="dateTitle">Время</div>
          <div class="dateText">{{ orderInf.time }}</div>
        </div>
      </div>
    </div>
    <table>
      <caption>
        Список заказов
      </caption>
      <thead>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Почта</th>
          <th scope="col">Телефон</th>
          <th scope="col">Сумма</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in orders" :key="key" @click="pOrder(item.id)">
          <td>{{ item.sname }} {{ item.fname }} {{ item.tname }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.summ }} UAH</td>
          <td @click.stop @click="done(item.id)">
            <span >{{item.isDone}}</span>
          
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      orderInf: {
        comment: "",
        time: "",
        products: [],
      },
      isBack: false,
      isDone: null,
      isProccess: null,
    };
  },
  mounted() {
    this.$store.dispatch("getOrdersFromFirestore");
    this.orders = this.$store.getters.GET_ORDERS;
    if (this.orders.isDone) {
      this.isDone = true;
      this.isProccess = false;
    } else {
      this.isProccess = true;
      this.isDone = false;
    }
  },
  methods: {
    done(ID) {
     
      this.orders.forEach(element => {
          if(element.id == ID){
              
                  element.isDone=!element.isDone
    
              
          }
      });
    },
    pOrder(ID) {
      this.isBack = true;
      this.orders.forEach((element) => {
        if (element.id == ID) {
          this.orderInf.comment = element.comment;
          this.orderInf.time = element.time;
          return;
        }
      });
    },
    closeBack() {
      this.isBack = false;
    },
  },
};
</script>

<style scoped>
.orderBack {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.672);
  justify-content: center;
  text-align: center;
}
.orderBackContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(0, 0, 0);
  color: white;
  padding: 30px;
  border-radius: 20px;
  font-size: 20px;
}

.date {
  margin-top: 20px;
}
.orders {
  width: 90%;
  margin: auto;
  background: rgba(136, 132, 132, 0.4);
}

.orders table {
  justify-content: center;
  width: 100%;
  text-align: center;
}

.orders caption {
  padding: 20px;
  font-size: 30px;
}

.orders thead {
  font-size: 25px;
}

.orders td {
  padding: 10px;
}

.orders tr:hover {
  background: white;
  cursor: pointer;
  transition: 0.3s;
}

@media (max-width:700px) {
  .orders thead{
    font-size: 15px;

  }

  .orders td{
    padding: 5px;
  }

  .orders caption{
    font-size: 20px;
    padding: 10px;
  }
}
.tabItem {
  display: flex;
  margin: 20px;
  border: black 2px solid;
  padding: 10px;
  justify-content: space-around;
}

.tabItem span {
  padding-left: 20px;
}

.tabHeader {
  display: flex;
  margin: 20px;
  justify-content: space-around;
}

.tabHeader span {
  font-size: 25px;
  padding-left: 20px;
}
</style>

<template>
  <div class="contactEdit">
    <div class="phone" id="blocks">
      <div class="phoneTitle" id="titles">
        <span>Number</span>
      </div>
      <div class="titles"> <textarea name="" id="" cols="30" rows="1" v-model="phone">lkjlkj</textarea
      >
      <button @click="addPhone()">add</button></div>
     

      <div class="inputPhone" v-for="(item, key) in phones" :key="key">
        <div class="inputs">
          <textarea name="" id="" cols="30" rows="1" v-model="item.value">item</textarea
          >
          <button
            class="btnDeleteContact"
            @click="deleteContact(item.id, item.name)">Delete
          </button>
        </div>
      </div>
    </div>
    <div class="email" id="blocks">
      <div class="email-title" ><span>Email</span></div>
      <div class="titles"><textarea name="" id="" cols="30" rows="1" v-model="email"></textarea>
      <button @click="addEmail()">ADD</button></div>
      
      <div class="emails" v-for="(item, key) in emails" :key="key">
        <div class="inputs">
          <textarea
            name=""
            id=""
            cols="30"
            rows="1"
            v-model="item.value"
          ></textarea
          ><button
            class="btnDeleteContact"
            @click="deleteContact(item.id, item.name)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <div class="adress" id="blocks">
      <div class="adress-title" id="titles"><span>Adress</span></div>
      <div class="titles"><textarea name="" id="" cols="30" rows="1" v-model="adress"></textarea>
      <button @click="addAdress()">ADD</button></div>
      
      <div class="emails" v-for="(item, key) in adressa" :key="key">
        <div class="inputs">
          <textarea
            name=""
            id=""
            cols="30"
            rows="1"
            v-model="item.value"
          ></textarea
          ><button
            class="btnDeleteContact"
            @click="deleteContact(item.id, item.name)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <div class="social" id="blocks">
      <div class="social-title" id="titles"><span>Social</span></div>
      <div class="titles"><textarea name="" id="" cols="30" rows="1" v-model="social"></textarea>
      <button @click="addSocial()">ADD</button></div>
      
      <div class="emails" v-for="(item, key) in socials" :key="key">
        <div class="inputs">
          <textarea
            name=""
            id=""
            cols="30"
            rows="1"
            v-model="item.value"
          ></textarea
          ><button
            class="btnDeleteContact"
            @click="deleteContact(item.id,item.name)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";
export default {
  data() {
    return {
      contacts: [],
      email: "",
      phone: "",
      social: "",
      adress: "",
      emails: [],
      phones: [],
      socials: [],
      adressa: [],
    };
  },
  methods: {
    addPhone() {
      var id = Math.random() * (1 - 100000) + 1;
      firebase
        .firestore()
        .collection("contact")
        .doc(id.toString())
        .set({ name: "phone", value: this.phone, id:id })
        .then(() => {
          this.phones.push({
            name: "phone",
            value: this.phone,
            id: id.toString(),
          }),
            (this.phone = "");
        });
    },
    addEmail() {
      var id = Math.random() * (1 - 100000) + 1;
      firebase
        .firestore()
        .collection("contact")
        .doc(id.toString())
        .set({ name: "email", value: this.email, id:id })
        .then(() => {
          this.emails.push({
            name: "email",
            value: this.email,
            id: id.toString(),
          }),
            (this.email = "");
        });
    },
    addAdress() {
      var id = Math.random() * (1 - 100000) + 1;
      firebase
        .firestore()
        .collection("contact")
        .doc(id.toString())
        .set({ name: "adress", value: this.adress , id:id})
        .then(() => {
          this.adressa.push({
            name: "adress",
            value: this.adress,
            id: id.toString(),
          }),
            (this.adress = "");
        });
    },
    addSocial() {
      var id = Math.random() * (1 - 100000) + 1;
      firebase
        .firestore()
        .collection("contact")
        .doc(id.toString())
        .set({ name: "social", value: this.social, id:id })
        .then(() => {
          this.socials.push({
            name: "social",
            value: this.social,
            id: id.toString(),
          }),
            (this.social = "");
        });
    },
    parse() {
        this.phones=[]
        this.emails=[]
        this.adressa=[]
        this.socials=[]
      this.contacts.forEach((element) => {
        if (element.name == "phone") this.phones.push(element);
        if (element.name == "email") this.emails.push(element);
        if (element.name == "adress") this.adressa.push(element);
        if (element.name == "social") this.socials.push(element);
      });
    },
    deleteContact(id){
        id = id.toString()
        firebase.firestore().collection("contact").doc(id).delete().then().catch((error)=>console.log(error))
        this.contacts = this.contacts.filter((item)=>item.id.toString()!==id.toString())
       
        this.parse()
    } 
  },
  mounted() {
    firebase
      .firestore()
      .collection("contact")
      .get()
      .then((doc) => {
        doc.forEach((doc) => this.contacts.push(doc.data()));
      })
      .catch((error) => console.log(error));

    setTimeout(() => {
      this.parse();
    }, 1000);
  },
  
};
</script>

<style scoped>
.contactEdit {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.contactEdit textarea {
  resize: none;
}

#blocks {
  margin: 20px;
  border: black 2px solid;
  border-radius: 20px;
  padding: 20px;
}

.inputs {
  justify-content: center;
  display: flex;
  margin-top: 5px;
}

.titles {
  display: flex;
}
</style>

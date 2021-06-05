<template>
  <div class="v-popup-login">
    <div class="popup-back"></div>
    <div class="popup-login-content">
      <div class="login">
        <div class="login-title" id="title">Login</div>
        <div class="">
          <input
            v-model="Authlogin"
            type="text"
            name=""
            id="input"
            v-bind:class="{ inputInvalidAuth: isCurentPass }"
          />
        </div>
      </div>
      <div class="password">
        <div class="password-title" id="title">Password</div>
        <div class="">
          <input
            v-model="Authpassword"
            id="input"
            type="text"
            v-bind:class="{ inputInvalidAuth: isCurentPass }"
          />
        </div>
      </div>
      <div class="invalid" v-if="isCurentPass">
          <span>Неверный логин или пароль!</span>
      </div>
      <div class="login-button">
        <button @click="login" class="button-login">Вход</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Authlogin: "",
      Authpassword: "",
      isCurentPass: false,
    };
  },
  methods: {
    login() {
      if (this.Authlogin == "1" && this.Authpassword == "2") {
        this.$store.commit("admin")
        this.$router.push("/catalog/edit");
      } else {
        this.isCurentPass = true;
        setTimeout(() => {
          this.isCurentPass = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.popup-back {
  height: 100%;
  position: absolute;
  opacity: 0.4;
  width: 100%;
  z-index: 100;
  background: black;
}

.popup-login-content {
  padding: 20px;
  position: absolute;
  display: block;
  z-index: 110;
  left: 50%;
  bottom: 30%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  background: rgb(255, 252, 252);
}

.popup-login-content .login {
  margin-bottom: 10px;
}

.popup-login-content input {
  outline: none;

  -webkit-appearance: none;
  font-size: 18px;
  font-weight: 500;
}
#input {
  width: 85%;
  height: 36px;
  padding: 0 15px;
  border-radius: 1000px;
  background: #f4f6f8;
}

#title {
  font-size: 20px;
  line-height: 25px;
  color: #00090e;
  text-transform: uppercase;
}
.invalid{
    position: absolute;
    font-size: 22px;
}


.button-login {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 165px;
  height: 40px;
  margin-top: 30px;
  border-radius: 1000px;
  background: #000;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.inputInvalidAuth {
  border: red 2px solid;
}

@media (max-width:600px) {
  .invalid{
    font-size: 12px;
  }
}
</style>

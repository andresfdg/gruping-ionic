<template>
  <ion-page>
    <ion-content class="block1">
      <div class="principal">
        <img src="../../../public/img/logologinicon.svg" class="logoicon" />
        <img src="../../../public/img/logologinletter.svg" class="logoletter" />

        <div class="joint">
          <span class="h1">Ingresa a tu cuenta</span>

          <div class="second">
            <div class="blank1"></div>
            <input
              type="text"
              class="log"
              placeholder="email"
              v-model="data.email"
            />
            <div class="blank2"></div>
            <input
              type="password"
              class="log"
              placeholder="password"
              v-model="data.password"
            />
          </div>

          <span v-if="data.alert" style="color: blueviolet; margin: 1px"
            >Email/Password Fail</span
          >
          <span class="textblue forgot">He olvidado mi contraseña</span>

          <button class="button" @click="login">Continuar</button>

          <div>
            <p class="textblue">
              ¿Aún no tienes una cuenta?
              <strong @click="singin" style="text-decoration: underline"
                >Registrate aquí</strong
              >
            </p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
/* eslint-disable */
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";
import { reactive } from "@vue/runtime-core";
import { useStore } from "../../stores/store";


const store = useStore();
const router = useRouter();
const route = useRoute();

const data = reactive({
  alert: false,
  email: "",
  password: "",
  type: route.params.typeuser,
});

const singin = () => {
  router.push(`/singin/${route.params.typeuser.toString()}`);
};

const login = async () => {
  if (data.email == "" || data.password == "") {
    data.alert = true;
  } else {
    const res = await fetch(
      `${store.server}/login`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );

    const da = await res.json();

    if (da.detail == "Not Found") {
      data.alert = true;
    } else {
      console.log(da);
      localStorage.setItem("token", da);

      let jwt = da;

      let tokens = jwt.split(".");
      let to = JSON.parse(atob(tokens[1]));
      localStorage.setItem("type", to.type);
      store.auth = to.type;
      data.alert = false;
      if (data.type == "Person") {
        router.push("/tabs/home");
      } else {
        router.push("/tabs/store/home");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.block1 {
  --background: linear-gradient(
    0deg,
    var(--primary-linear2) 0%,
    var(--second-linear2) 100%
  );
}
.principal {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.logoicon {
  margin-top: 20%;
  height: 30%;
  width: 40%;
}
.logoletter {
  height: 30%;
  width: 60%;
}
.joint {
  margin-top: 90px;
  background-color: var(--gray-background);
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  justify-content: start;
  text-align: center;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  .h1 {
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-weight: 1000;
    font-size: 150%;
    color: rgb(94, 94, 94);
    margin-bottom: 10px;
  }
}
.second {
  background-color: var(--gray-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45%;
}
.log {
  border: none;
  padding: 10px;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  background-color: var(--gray-background);
  font-family: var(--main-font);
}

input:focus {
  border: 2px solid var(--violete-text);
  font-family: var(--main-font);
  outline: none;
}
.blank1 {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: start;
  background-color: var(--gray-background);
}
.blank2 {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: start;
  background-color: var(--gray-background);
}
.textblue {
  font-size: 13px;
  color: var(--violete-text);
  font-family: var(--main-font);
}
.forgot {
  text-align: end;
  text-decoration: underline;
}
.button {
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  font-size: 100%;
  font-weight: 550;
  color: rgb(94, 94, 94);
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
  font-family: var(--main-font), sans-serif;
}
.button:active {
  transform: translateY(-2px);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>

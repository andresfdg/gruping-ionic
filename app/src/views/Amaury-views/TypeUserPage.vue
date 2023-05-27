<template>
  <ion-page>
    <ion-content class="block1">
      <!-- general div -->
      <div class="principal">
        <!-- logo -->
        <div class="logodiv">
          <img src="../../../public/img/logoicon.svg" class="logoicon" />
          <img src="../../../public/img/logoletter.svg" class="logoletter" />
        </div>
        <!-- principal image -->
        <img src="../../../public/img/typeuser.png" class="mancha1" />
        <!-- gray container -->
        <div class="joint">
          <!-- user options -->
          <span class="h1">Elige tu tipo</span>
          <div class="second">
            <div
              :class="data.store ? 'sel' : 'blank1'"
              id="1"
              @click="typestore"
            >
              <img src="../../../public/img/storeuser.svg" class="ima" />
              <span>Tienda</span>
            </div>
            <div :class="data.person ? 'sel2' : 'blank2'" @click="typeperson">
              <img src="../../../public/img/personuser.svg" class="ima" />
              <span>Persona</span>
            </div>
          </div>
          <!-- action button -->
          <button class="button" @click="tab1">Continuar</button>
          <p
            v-if="data.select"
            class="textblue"
            style="color: blueviolet; margin: 5px"
          >
            Selecciona el tipo de usuario por favor
          </p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
/* eslint-disable */
import { IonPage, IonContent } from "@ionic/vue";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";

const data = reactive({
  typeuser: "",
  select: false,
  person: false,
  store: false,
  open: false,
});

const router = useRouter();

const tab1 = () => {
  if (data.typeuser != "") {
    router.push(`/login/${data.typeuser}`);
  } else {
    data.select = true;
  }
};

const typestore = () => {
  data.typeuser = "Store";
  data.select = false;
  data.store = true;
  data.person = false;
};

const typeperson = () => {
  data.typeuser = "Person";
  data.select = false;
  data.person = true;
  data.store = false;
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
  width: 100%;
  height: 90%;
  font-family: var(--main-font), sans-serif;
}
.logodiv {
  padding-top: 10px;
  padding-left: 10px;
  align-items: start;
  position: relative;
  width: 100%;
}
.logoicon {
  position: absolute;
  z-index: 1;
}
.logoletter {
  position: absolute;
  z-index: 2;
  margin-left: 15px;
}
.mancha1 {
  height: 60%;
  width: 100%;
}
.joint {
  margin-top: 20px;
  background-color: var(--gray-background);
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  justify-content: start;
  text-align: center;
  font-family: var(--main-font), sans-serif;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
.second {
  background-color: var(--gray-background);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45%;
  font-family: var(--main-font), sans-serif;
}
.blank1 {
  margin-right: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: var(--gray-background);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-text);
  font-family: var(--main-font), sans-serif;
}
.blank2 {
  margin-left: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: var(--gray-background);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-text);
  font-family: var(--main-font), sans-serif;
}
.sel {
  border: solid 1px var(--violete-text);
  margin-right: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: var(--gray-background);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-text);
  font-family: var(--main-font), sans-serif;
}
.sel2 {
  border: solid 1px var(--violete-text);
  margin-left: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: var(--gray-background);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-text);
  font-family: var(--main-font), sans-serif;
}
.ima {
  height: 70%;
  width: 70%;
  font-family: var(--main-font), sans-serif;
}
.textblue {
  font-size: 14px;
  color: var(--violete-text);
  font-family: var(--main-font);
}
.h1 {
  padding: 1px;
  margin-left: 1px;
  font-family: sans-serif;
  font-weight: 1000;
  font-size: 200%;
  color: var(--gray-text);
  margin-bottom: 10px;
}
.button {
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 20px;
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

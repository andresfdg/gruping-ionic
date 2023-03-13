<template>
  <ion-page>
    <ion-content class="block1">
      <div class="principal">
        <img src="../../../public/img/manchalog.png" class="mancha1" />
        <div class="jointd">
          <span class="h1">¡Bienvenido!</span>
          <span class="h2"
            >Crea tu cuenta y disfruta de las promociones disponibles para
            tí</span
          >
        </div>
        <div class="joint">
          <span class="h1">Elige tu tipo</span>
          <div class="second">
            <div class="blank1">
              <img src="../../../public/img/Startienda.jpg" class="ima" />
            </div>
            <div class="blank2">
              <img src="../../../public/img/Staruser.jpg" class="ima" />
            </div>
          </div>
          <div class="cbutton" @click="tab1">
            <button class="button">Continuar</button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";

import { useRouter } from "vue-router";

const router = useRouter();

const tab1 = () => {
  router.push("/tabs/tab1");
};
</script>

<style scoped lang="scss">
.block1 {
  --background: rgb(0, 4, 255);
}

.principal {
  background-color: rgb(200, 201, 250);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
}

.mancha1 {
  height: 40%;
  width: 100%;
}

.jointd {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  justify-content: end;
  text-align: center;
  position: relative;
}

.joint {
  margin-top: 20px;
  background-color: white;
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  justify-content: start;
  text-align: center;

  h1 {
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-weight: 1000;
    font-size: 200%;
    color: rgb(0, 0, 0);
    margin-bottom: 10px;
  }
}

.second {
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45%;
}

.blank1 {
  border: solid 1px;
  margin-right: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: white;
  width: 50%;
  height: 100%;
}

.blank2 {
  border: solid 1px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  margin-left: 10px;
  background-color: white;
  width: 50%;
  height: 100%;
}

.ima {
  border-radius: 15px;
  height: 100%;
  width: 100%;
}

.h1 {
  padding: 1px;
  margin-left: 1px;
  font-family: sans-serif;
  font-weight: 1000;
  font-size: 200%;
  color: rgb(130, 0, 255);
  margin-bottom: 10px;
}

.h2 {
  width: 100%;
  padding: 1px;
  margin-left: 1px;
  font-family: sans-serif;
  font-size: 110%;
  color: rgb(130, 0, 255);
}

.cbutton {
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
}
.cbutton:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.button {
  font-size: 100%;
  color: rgb(96, 124, 96);
  font-weight: 800;
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
}
</style>

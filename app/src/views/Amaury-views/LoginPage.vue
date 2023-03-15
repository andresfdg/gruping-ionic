<template>
  <ion-page>
    <ion-content class="block1">
      <div class="principal">
        <img src="../../../public/img/Subject.png" class="mancha1" />
        <div class="jointd">
          <span class="h1">¡Bienvenido!</span>
          <span class="h2"
            >Crea tu cuenta y disfruta de las promociones disponibles para
            tí</span
          >
        </div>
        <div class="joint">

          <span class="h1">Ingresa a tu cuenta</span>

          <div class="second">
            <div class="blank1">
              <span style="font-size: 80%">Email</span>
            </div>
            <input type="text" class="log">
            <div class="blank2">
              <span style="font-size: 80%">Contraseña</span>
            </div>
            <input type="text" class="log">
          </div>

          <div class="cbutton" @click="tab1">
            <button class="button">Continuar</button>
          </div>

          <div>
            <p style="font-size: 10px;">¿Aún no tienes una cuenta? Registrate aquí</p>
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
  --background: rgb(184,250,219);
  --background: linear-gradient(0deg, rgba(184,250,219,1) 0%, rgba(222,216,252,1) 100%);
}

.principal {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
}

.mancha1 {
  margin-top: 5px;
  height: 40%;
  width: 90%;
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

  .h1 {
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-weight: 1000;
    font-size: 150%;
    color: rgb(78, 102, 78, 0.466);
    margin-bottom: 10px;
  }
}

.second {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45%;
}

.log{
  border: solid 1px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}


.blank1 {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: start;
}

.blank2 {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: start;
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

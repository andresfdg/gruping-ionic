<template>
  <ion-page>
    <ion-content class="block1">
      <img src="../../../public/img/manchota.jpg" class="mancha1" />
      <div class="joint">
        <span class="h1">¡Bienvenido!</span>
        <span class="h2"
          >Crea tu cuenta y disfruta de las promociones disponibles para
          tí</span
        >
        <div class="cbutton" @click="TypeUser">
          <button class="button">Empecemos</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";

import { useRouter } from "vue-router";

const router = useRouter();

const TypeUser = () => {
  router.push("/typeuserpage");
};

</script>

<style scoped lang="scss">
.h1 {
  padding: 1px;
  margin-left: 1px;
  font-family: sans-serif;
  font-weight: 1000;
  font-size: 200%;
  color: rgb(130, 0, 255);
}

.h2 {
  width: 100%;
  padding: 1px;
  margin-left: 1px;
  font-family: sans-serif;
  font-size: 110%;
  color: rgb(130, 0, 255);
}

.joint {
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  justify-content: end;
  text-align: center;
  position: relative;
}

.mancha1 {
  height: 70%;
  width: 100%;
}

.block1 {
  --background: rgb(200, 201, 250);
}

.cbutton {
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
}
.cbutton:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.cbutton:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.button {
  font-size: 100%;
  color: rgb(96, 124, 96);
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
}

.button:active {
  background-color: #3e8e41;
  transform: translateY(4px);
}
</style>

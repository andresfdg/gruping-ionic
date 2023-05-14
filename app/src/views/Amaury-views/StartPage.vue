<template>
  <ion-page>
    <ion-content class="block1">
        <!-- logo -->
        <div class="logodiv">
          <img src="../../../public/img/logoicon.svg" class="logoicon"/>
          <img src="../../../public/img/logoletter.svg" class="logoletter"/>
        </div>
        <!-- principal image -->
        <img src="../../../public/img/startpage.svg" class="mancha1"/>
        <!-- action button -->
        <div class="joint">
          <span class="h1">¡Conoce el poder de las compras grupales!</span>
          <span class="h2">Obten y crea ofertas para tus productos favoritos</span>
          <button class="button" @click="TypeUser">Empecemos</button>
        </div>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const TypeUser = () => {
  router.push("/typeuserpage");
};

</script>

<style scoped lang="scss">
.block1 {
  --background: linear-gradient(0deg, var(--primary-linear) 0%, var(--second-linear) 100%);
}
.logodiv{
  padding-top: 10px;
  padding-left: 10px;
  align-items: start;
  position: relative;
  width: 100%;
}
.logoicon{
  position: absolute;
  z-index: 1;
}
.logoletter{
  position: absolute;
  z-index: 2;
  margin-left: 15px;
}
.mancha1 {
  height: 70%;
  width: 100%;
}
.joint {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.h1 {
  font-family: var(--main-font), sans-serif;
  font-weight: 1000;
  font-size: 28px;
  color: var(--primary-color);
}
.h2 {
  width: 100%;
  padding: 1px;
  margin-left: 1px;
  font-family: sans-serif;
  font-size: 15px;
  color: rgb(130, 0, 255);
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
}
.button:active {
  transform: translateY(-2px);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>

<template>
  <IonPage>
    <IonContent>
      <InfiPage></InfiPage>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
</script>

<style setup lang="scss">
/* eslint-disable */
.container {
  display: flex;

  flex-direction: column;
  align-items: center;

  h1 {
    background-color: deepskyblue;
    width: 100%;
    text-align: center;
    margin: 0px;
  }
}
</style>

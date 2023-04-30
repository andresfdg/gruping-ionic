<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Tab</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <router-link to="/test">about</router-link>
        <div class="divv">
          <h1>title</h1>
          <div></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            accusamus veniam ipsam! Quia unde atque in, ducimus possimus tempore
            libero eaque vero. Deleniti sit facilis exercitationem fugiat ducimus,
            incidunt iure.
          </p>
        </div>
        <div class="t">
          <h1>hello</h1>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  } from "@ionic/vue";
  import { reactive } from "vue";
  </script>
  
  <style scoped lang="scss">
  .f {
    text-align: center;
  
    height: 300px;
    width: 300px;
    border: none;
  }
  
  .divv {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin: 20px;
      border: solid;
      padding: 10px;
    }
    &:hover {
      background-color: aqua;
    }
  }
  
  ion-content {
    --background: var(--mycolor);
  }
  
  .t {
    float: right;
  }
  </style>
  
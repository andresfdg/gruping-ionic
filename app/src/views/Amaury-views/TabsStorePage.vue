<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/store/home">
            <img
              src="../../../public/img/HomeIcon.png"
              alt=""
              class="tadicon"
            />
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/store/home">
            <img src="../../../public/img/CarIcon.png" alt="" class="tadicon" />
          </ion-tab-button>
          <ion-tab-button tab="tab3" href="/tabs/store/home">
            <img
              src="../../../public/img/GroupIcon.png"
              alt=""
              class="tadicon"
            />
          </ion-tab-button>
          <ion-tab-button tab="tab4" href="/tabs/store/home">
            <img
              src="../../../public/img/SettingIcon.png"
              alt=""
              class="tadicon"
            />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script setup>
/* eslint-disable */
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonRouterOutlet,
  IonContent,
} from "@ionic/vue";
</script>

<style scoped>
ion-tab-bar {
  border-radius: 25px;
  margin: 20px;
  background-color: #f4f4f4;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
}

.tadicon {
  width: 40px;
  height: 40px;
  border-radius: 15px;
}
ion-tab-button {
  background-color: #f4f4f4;
}
</style>

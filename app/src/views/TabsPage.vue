<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <img src="../img/HomeIcon.png" alt="" class="tadicon" />
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <img src="../img/CarIcon.png" alt="" class="tadicon" />
          </ion-tab-button>
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <img src="../img/GroupIcon.png" alt="" class="tadicon" />
          </ion-tab-button>

          <ion-tab-button tab="tab4" href="/tabs/tab4">
            <img src="../img/SettingIcon.png" alt="" class="tadicon" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonContent,
} from "@ionic/vue";
import { reactive } from "vue";
import { ellipse, square, triangle } from "ionicons/icons";
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

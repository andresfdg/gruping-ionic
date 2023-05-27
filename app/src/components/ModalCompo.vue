<template>
  <div>
    <span id="open-modal">Open Modal</span>

    <ion-modal ref="modal" trigger="open-modal">
      <ion-content>
        <ion-toolbar>
          <ion-title>Stores</ion-title>
          <ion-buttons slot="end">
            <ion-button color="light" @click="dismiss()">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>

        <swiper
          :modules="data.modules"
          :slides-per-view="3"
          :space-between="50"
          :scrollbar="{ draggable: true }"
        >
          <swiper-slide>
            <div>
              <ion-card>
                <ion-card-content>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Olimpical.png"
                    alt=""
                    width="100"
                  />
                </ion-card-content>
              </ion-card>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <ion-card>
                <ion-card-content>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grupo_Exito_logo.svg/1200px-Grupo_Exito_logo.svg.png"
                    alt=""
                    width="100"
                  />
                </ion-card-content>
              </ion-card></div
          ></swiper-slide>
          <swiper-slide>
            <div>
              <ion-card>
                <ion-card-content>
                  <img
                    src="https://www.alkosto.com/medias/alkosto-logo.svg?context=bWFzdGVyfGltYWdlc3wxMjMxMnxpbWFnZS9zdmcreG1sfGltYWdlcy9oNmEvaDNlLzk5OTExMTAwNjYyMDYuc3ZnfDhkYTBjMDNjNTNhZjY5NTE0YTg5M2Y0NzZiODk1NjdmNTE4OTZiZWFlMTE1OTY3NTZlZGY4MWM0ZWNjNGI0NGM"
                    alt=""
                    width="100"
                  />
                </ion-card-content>
              </ion-card></div
          ></swiper-slide>
          <swiper-slide>
            <div>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Puma</ion-card-title>
                </ion-card-header>

                <ion-card-content> </ion-card-content>
              </ion-card></div
          ></swiper-slide>
          <swiper-slide>
            <div>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Casio</ion-card-title>
                </ion-card-header>

                <ion-card-content> </ion-card-content>
              </ion-card></div
          ></swiper-slide>
          <swiper-slide>
            <div>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Card Title</ion-card-title>
                </ion-card-header>

                <ion-card-content> </ion-card-content>
              </ion-card></div
          ></swiper-slide>
        </swiper>
      </ion-content>
    </ion-modal>
  </div>
</template>

<script setup>
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonList,
  IonAvatar,
  IonImg,
  IonLabel,
  modalController,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonPage,
} from "@ionic/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { reactive } from "vue";
const data = reactive({
  modules: [Navigation, Pagination, Scrollbar, A11y],
});

const dismiss = () => {
  /* document.querySelector("ion-modal").dismiss(); */
  modalController.dismiss();
};
</script>

<style scoped>
/* eslint-disable */
ion-modal {
  --height: 50%;
  --border-radius: 16px;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

ion-modal::part(backdrop) {
  background: rgba(209, 213, 219);
  opacity: 1;
}

ion-modal ion-toolbar {
  --background: rgb(106, 255, 175);
  --color: white;
}
ion-card {
  width: 145px;
  height: 120px;
  border-radius: 15px;
}
.swiper {
  margin-top: 10px;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <IonContent class="block1">
        <div class="header">
          <span class="title">Gruping</span>
          <span>Cra 10# 28-71</span>
        </div>
        <div class="searchbar">
          <ion-searchbar animated="true" placeholder="busqueda"></ion-searchbar>
        </div>
        <div>
          <swiper
            :modules="data.modules"
            :slides-per-view="3"
            :space-between="50"
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
        </div>
        <div class="store">
          <h1>Categorias</h1>
          <div class="stores">
            <div>
              <div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    width="40"
                  />
                </div>
                <div>store1</div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    width="40"
                  />
                </div>
                <div>store1</div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    width="40"
                  />
                </div>
                <div>store1</div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    width="40"
                  />
                </div>
                <div>store1</div>
              </div>
            </div>
          </div>
          <div class="spas">
            <div>
              <modal-compo></modal-compo>
            </div>
            <div>
              <span> ver todos </span>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </IonContent>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { reactive } from "vue";
import ModalCompo from "../components/ModalCompo.vue";

const data = reactive({
  modules: [Navigation, Pagination, Scrollbar, A11y],
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin: 12px;
}
ion-searchbar {
  --background: snow;
  --border-radius: 25px;
}
.searchbar {
  margin-inline: 50px;
}
ion-card {
  width: 145px;
  height: 80px;
  border-radius: 15px;
}

.block1 {
  --background: #a5a6f6;
}
.block2 {
  --background: red;
}
.store {
  background-color: white;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  h1 {
    padding: 15px;
    margin-left: 10px;
    font-family: sans-serif;
    font-weight: 800;
    font-size: 20px;
    color: rgb(93, 93, 93);
  }
}

.stores {
  display: flex;
  box-shadow: rgba(38, 38, 43, 0.2) 0px 7px 29px 0px;
  margin-right: 25px;
  margin-left: 25px;
  padding: 25px;
  border-radius: 15px;
  justify-content: space-between;
  font-size: 14px;
  font-family: sans-serif;
}
.title {
  font-weight: 800;
  font-size: 20px;
}
.spas {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-weight: bold;
  margin-right: 15px;
  margin-left: 15px;
}
</style>

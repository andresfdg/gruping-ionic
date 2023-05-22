<template>
  <ion-page>
    <ion-content>
      <ion-tabs>

        <ion-router-outlet></ion-router-outlet>

        <div class="configuration-side-bar" v-if="data.show_sidebar">
          <div class="profile">
            <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile_picture">
            <h3>Anamika Roy</h3>
            <div>
              <div class="organiser">
                <span class="object">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">Informacion de usuario</span>
                </span>
                <span class="object">
                        <span class="icon"><i class="fa-regular fa-map-location-dot"></i></span>
                        <span class="item">Ubicaciones</span>
                  </span>
                <span class="object final">
                        <span class="icon"><i class="fas fa-database"></i></span>
                        <span class="item">Centro de ayuda</span>
                </span>
                <div class="closemenu">
                  <span class="object init">     
                          <span class="icon"><i class="fa-light fa-location-dot"></i></span>
                          <span class="item">Terminos y condiciones</span>
                  </span>
                  <span class="object">
                          <span class="icon"><i class="fa fa-user"></i></span>
                          <span class="item">Cerra sesion</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/home" @click="data.show_sidebar = false" >
            <img src="../../public/img/HomeIcon.png" alt="" class="tadicon" />
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/userorders" @click="data.show_sidebar = false">
            <img src="../../public/img/CarIcon.png" alt="" class="tadicon" />
          </ion-tab-button>
          <ion-tab-button tab="tab3" href="/tabs/guildsofuser" @click="data.show_sidebar = false">
            <img src="../../public/img/GroupIcon.png" alt="" class="tadicon" />
          </ion-tab-button>

          <ion-tab-button tab="tab4" @click="data.show_sidebar = !data.show_sidebar">
            <img src="../../public/img/SettingIcon.png" alt="" class="tadicon" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonRouterOutlet,
  IonContent
} from "@ionic/vue";

import { reactive } from "vue";

const data = reactive({
  show_sidebar: false
})

</script>

<style scoped>
ion-content{
  --background: var(--gray-background);
  --border-radius: 40px;
}

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

.organiser{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.configuration-side-bar{
  background-color: var(--gray-background);
  height: 50%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: gruping 0.3s ease 0s 1 normal forwards;
}

.profile{
  padding-bottom: 30px;
  margin-bottom: 30px;
  text-align: center;
}

img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
}

h3{
  color: black;
  margin: 10px 0 5px;
}

p{
  color: black;
  font-size: 14px;
}

.icon{
  color: black;
  width: 30px;
  display: inline-block;
}
.object{
  font-family: var(--main-font);
  font-size: medium;
  margin: 8px;
  width: 100%;
  height: 20%;
  color: var(--gray-text);
}

.closemenu{
  border-top: solid 1px var(--gray-text);
  color: var(--gray-text);
  font-family: var(--main-font);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.final{
  padding-bottom: 10px;

}

.init{
  padding-top: 20%;

}

@keyframes gruping {
	0% {
		transform: scale(0);
		transform-origin: 50% 100%;
	}

	100% {
		transform: scale(1);
		transform-origin: 50% 100%;
	}
}

</style>

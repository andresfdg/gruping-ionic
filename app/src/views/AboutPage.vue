<template>
  <IonPage>
    <IonContent class="" :fullscreen="true">
      <IonList class="ion-margin ion-text-center">
        <IonListHeader> <IonLabel>Logo</IonLabel> </IonListHeader>
        <IonButton class="bt" shape="round" router-link="/tabs/tab1"
          >Login with Username</IonButton
        >
        <IonButton class="bt" shape="round" router-link="/test"
          >Login with Google</IonButton
        >
        <button class="btn">
          <router-link class="f" to="/tabs/tab3">hello </router-link>
        </button>
        <IonText>New user? Sign up.</IonText>
      </IonList>
    </IonContent>
  </IonPage>
</template>

<script setup>
import {
  IonContent,
  IonList,
  IonListHeader,
  IonButton,
  IonText,
  IonLabel,
  IonPage,
} from "@ionic/vue";
</script>

<style scoped lang="scss">
$myc: #555555;
.bt {
  color: $myc;
  --background: white;
  --padding-top: 20px;
  --padding-bottom: 20px;
  margin: 10px;
}

.text {
  background-color: aqua;
}

Ion-Content {
  --background: red;
}
ion-list {
  transform: translateY(25vh);
  background: transparent;
  display: flex;
  flex-direction: column;
}

ion-label {
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 50px;
}
.btn {
  padding: 12px;
  border-radius: 25px;
  background-color: aqua;
  margin: 2px;
}
.f {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 20px;
}
</style>

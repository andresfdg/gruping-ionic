<template>
    <ion-page>
      <ion-content class="block1">
        <div class="principal">
          <div class="jointd">
            <span class="h1">¡Bienvenido!</span>
            <span class="h2"
              >Crea tu cuenta y disfruta de las promociones disponibles para
              tí</span
            >
          </div>
          <div class="joint">
            <span class="h1">Registra tu cuenta</span>
  
            <div class="second">

              <div class="blank1">
                <span style="font-size: 80%">Nombres</span>
              </div>
              <input type="text" class="log" />

              <div class="blank1">
                <span style="font-size: 80%">Apellidos</span>
              </div>
              <input type="text" class="log" />

              <div class="blank1">
                <span style="font-size: 80%">Email</span>
              </div>
              <input type="text" class="log" />

              <div class="blank1">
                <span style="font-size: 80%">Contraseña</span>
              </div>
              <input type="text" class="log" />

              <div class="blank1">
                <span style="font-size: 80%">Confirmar contraseña</span>
              </div>
              <input type="text" class="log" />
            </div>
            <ion-item>
                <ion-label style="font-size: 13px" >Aceptar terminos de uso</ion-label>
                <ion-toggle slot="end"></ion-toggle>
            </ion-item>
            <div class="cbutton" @click="next">
              <button class="button">Continuar</button>
            </div>
  
            <div>
              <p style="font-size: 10px">
                ¿Ya tienes una cuenta? <strong @click="login">Ingresa aquí</strong>
              </p>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import { labeledStatement } from '@babel/types';
import { IonPage, IonContent, IonToggle, IonLabel, IonItem } from "@ionic/vue";
import { useRouter } from "vue-router";
  
const router = useRouter();
  
const next = () => {
    console.log("Working")
};
  
const login = () =>{
    router.push("/login/Person");
}

</script>
  
<style scoped lang="scss">
.block1 {
    --background: rgb(184, 250, 219);
    --background: linear-gradient(
      0deg,
      rgba(184, 250, 219, 1) 0%,
      rgba(222, 216, 252, 1) 100%
    );
  }
  
.principal {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
  
  
.jointd {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 15px;
    justify-content: end;
    text-align: center;
    position: relative;
}
  
.joint {
    margin-top: 20px;
    background-color: white;
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 15px;
    justify-content: start;
    text-align: center;
  
    .h1 {
      padding: 1px;
      margin-left: 1px;
      font-family: sans-serif;
      font-weight: 1000;
      font-size: 150%;
      color: rgb(94, 94, 94);
      margin-bottom: 10px;
    }
}
  
.second {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 45%;
}
  
.log {
    border: solid 1px;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}
  
.blank1 {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: start;
}

ion-toggle{
    height: 10px;
    width: 55px;

    padding: 12px;

    --background: #ddd;
    --background-checked: #ddd;

    --handle-background: rgba(222, 216, 252, 1);
    --handle-background-checked: rgba(184, 250, 219, 1);

    --handle-width: 25px;
    --handle-height: 27px;
    --handle-max-height: auto;
    --handle-spacing: 6px;

    --handle-border-radius: 4px;
    --handle-box-shadow: none;

    /* Required for iOS handle to overflow the height of the track */
    overflow: visible;
    contain: none;
}

.h1 {
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-weight: 1000;
    font-size: 200%;
    color: rgb(130, 0, 255);
    margin-bottom: 10px;
}
  
.h2 {
    width: 100%;
    padding: 1px;
    margin-left: 1px;
    font-family: sans-serif;
    font-size: 110%;
    color: rgb(130, 0, 255);
}
  
.cbutton {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 30px;
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
.button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
  
.button {
    font-size: 100%;
    color: rgb(94, 94, 94);
    font-weight: 800;
    background-color: rgb(106, 255, 175);
    border-radius: 10px;
}
</style>
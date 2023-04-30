<template>
  <ion-page >
    <ion-content class="block1">
      <div class="principal">
        <Transition name="bounce">
        <img src="../../../public/img/manchatype.jpg" class="mancha1" v-if="data.open" />
        </Transition>
        <div class="joint">
          <span class="h1">Elige tu tipo</span>
          <div class="second">
            <div :class="data.store ? 'sel' : 'blank1'" id="1" @click="typestore">
              <img src="../../../public/img/Startienda.jpg" class="ima" />
            </div>
            <div :class="data.person ? 'sel2' : 'blank2'" @click="typeperson">
              <img src="../../../public/img/Staruser.jpg" class="ima" />
            </div>
          </div>
          <div class="cbutton" @click="tab1">
            <button class="button">Continuar</button>
          </div>
          <p v-if = data.select style="font-size: 10px;">Selecciona el tipo de usuario por favor</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";


const data = reactive ({
  typeuser: "",
  select: false,
  person: false,
  store: false, 
  open:false
});

const router = useRouter();

const tab1 = () => {
  if (data.typeuser!=""){
    router.push(`/login/${data.typeuser}`);
  } 
  else{
    data.select = true;
  }
};

const typestore = () => {
  data.typeuser = "Store";
  data.select = false;
  data.store = true;
  data.person = false;
};

const typeperson = () => {
  data.typeuser = "Person";
  data.select = false;
  data.person = true;
  data.store = false;
};

const toggleSidebar = () => {
  if (data.open == true){
    data.open = false;
  } else {
    data.open = true;
  }
}

onMounted(()=>{
  toggleSidebar();
})


</script>

<style scoped lang="scss">
.block1 {
  --background: rgb(200, 201, 250);
}

.principal {
  background-color: rgb(200, 201, 250);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
}

.mancha1 {
  height: 55%;
  width: 100%;
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
}

.second {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 45%;
}

.blank1 {
  margin-right: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: white;
  width: 50%;
  height: 100%;
}

.blank2 {
  margin-left: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: white;
  width: 50%;
  height: 100%;
}

.sel{
  border: solid 1px rgb(0, 255, 251);
  margin-right: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: white;
  width: 50%;
  height: 100%;

}

.sel2{
  border: solid 1px rgb(0, 255, 251);
  margin-left: 10px;
  border-radius: 15px;
  box-shadow: inset 0 -0.1em 0.3em rgba(0, 0, 0, 0.1),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  background-color: white;
  width: 50%;
  height: 100%;
}

.ima {
  border-radius: 15px;
  height: 100%;
  width: 100%;
}

.h1 {
  padding: 1px;
  margin-left: 1px;
  font-family: sans-serif;
  font-weight: 1000;
  font-size: 200%;
  color: rgba(94, 94, 94);
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
}

.cbutton:active {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.button {
  font-size: 100%;
  font-weight: 550;
  color: rgb(94, 94, 94);
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
}

.button:active {
  transform: translateY(-2px);
}

.bounce-enter-active {
  animation: bounce-in 0.9s;
}
.bounce-leave-active {
  animation: bounce-in 0.9s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

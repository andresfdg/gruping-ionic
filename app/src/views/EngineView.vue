<template>
  <ion-page>
    <ion-content class="color"> 
      <div class="cordinate"><img class= "image" src="../../public/img/logo-principal.svg" alt="Loading"></div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const TypeUser = () => {
  setTimeout(() => {
    router.push("/startpage");
  }, 3000);
};

onMounted(() => {
  TypeUser();
});
</script>

<style scoped lang="scss">
.color {
  --background: rgb(174,171,241);
  --background: linear-gradient(0deg, rgba(174,171,241,1) 0%, rgba(225,219,253,1) 100%);
} 
.cordinate{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image{
  height: 30%;
  width: 80%;
  animation: gruping 2s ease 0s 1 normal forwards;
}

@keyframes gruping {
	0% {
		opacity: 0;
		transform: rotate(-540deg) scale(0);
	}

	100% {
		opacity: 1;
		transform: rotate(0) scale(1);
	}
}
</style>

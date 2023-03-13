<template>
  <ion-page>
    <ion-content class="color"> </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
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
  --background: url(../../public/img/engine.png) 0 0/100% 100% no-repeat;
}
</style>

<template>
  <IonPage>
    <IonContent>
      <div class="block1">
        <div>
          <form class="formbase">
            <span>login</span>
            <input type="text" name="" id="" />
            <input type="text" />

            <button>login</button>
          </form>
        </div>
      </div>
    </IonContent>
  </IonPage>
</template>

<script setup>
import { IonPage, IonContent } from "@ionic/vue";
</script>

<style scoped lang="scss">
.block1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.formbase {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  input {
    border-radius: 15px;
    padding: 8px;
    margin: 10px;
  }
  span {
    font-weight: bold;
    font-size: 25px;
  }
}
</style>

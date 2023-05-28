<template>
  <div>
    <span id="open-modal">create new</span>
    <ion-modal ref="modal" trigger="open-modal">
      <ion-content>
        <div class="container">
          <div class="product_name">
            <div>
              <span
                style="
                  font-size: xx-large;
                  font-weight: bolder;
                  color: rgb(94, 94, 94);
                "
                >{{ props.item_name }}
              </span>
            </div>
            <div style="margin-left: 15px">
              <ion-icon
                style="width: 35px; height: 35px; color: rgb(44, 231, 130)"
                name="share-social"
              ></ion-icon>
            </div>
          </div>

          <div class="actual_people">
            <div>
              <ion-icon
                style="width: 25px; height: 25px"
                name="people-sharp"
              ></ion-icon>
            </div>
            <div>
              <span style="font-size: small; margin-left: 5px">
                {{ props.actual_pop }} Integrantes
              </span>
            </div>
          </div>
          <span style="font-size: small; color: rgb(130, 0, 255)">
            Falta {{ props.life_time }} dias para cerrar el grupo</span
          >

          <div class="guild_conditions">
            <div class="condition_pop">
              <span style="font-weight: bolder; font-size: 25px">{{
                props.Max_pop
              }}</span>
              <ion-icon
                style="width: 25px; height: 25px"
                name="people-sharp"
              ></ion-icon>
            </div>

            <div class="condition_discount">
              <span style="font-weight: bolder; font-size: 30px"
                >{{ props.discount }}%</span
              >
              <span style="font-weight: bolder; font-size: 25px">off</span>
            </div>

            <div class="condition_time">
              <span style="font-weight: bolder; font-size: 25px">{{
                props.life_time
              }}</span>
              <span style="font-weight: bolder; font-size: 19px">días</span>
            </div>
          </div>

          <div class="buy_options">
            <div style="display: flex; flex-direction: column">
              <span style="font-size: x-large; font-weight: bolder">Orden</span>
              <input
                v-model="data.total_items"
                style="width: 50%; margin: 2px"
              />
              <span style="margin: 2px">costo individual: </span>
              <span style="margin: 2px">costo total: </span>
            </div>

            <div
              style="padding-top: 12px; display: flex; flex-direction: column"
            >
              <span style="align-self: flex-end">Resumen</span>
              <span>{{ data.total_items }}</span>
              <span>{{ props.price }}</span>
              <span>{{ data.total_items * props.price }}</span>
            </div>
          </div>
          <button class="button">Ir a pagar</button>
        </div>
      </ion-content>
    </ion-modal>
  </div>
</template>

<script setup>
import {
  IonModal,
  IonContent,
} from "@ionic/vue";

import { reactive } from "vue";
const data = reactive({
  total_items: 0,
  price: 0,
});

const props = defineProps({
  guild_id: Number,
  item: Number,
  item_name: String,
  actual_pop: Number,
  category: String,
  price: Number,
  open: Boolean,
  discount: String,
  life_time: Number,
  Max_pop: Number,
});
</script>

<style scoped>
ion-modal {
  --height: 50%;
  --border-radius: 16px;
  --background: rgb(242, 242, 242);
  --width: 95%;
  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
ion-modal::part(backdrop) {
  background: rgb(242, 242, 242);
  opacity: 1;
}

ion-content {
  --background: rgb(242, 242, 242);
}
.container {
  padding-top: 25px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  background-color: rgb(242, 242, 242);
}
.product_name {
  display: flex;
  flex-direction: row;
  align-items: left;
  background-color: rgb(242, 242, 242);
  color: rgb(94, 94, 94);
  font-weight: bolder;
}
.actual_people {
  display: flex;
  flex-direction: row;
  align-items: start;
  margin-top: 10px;
  color: rgb(130, 0, 255);
}
.guild_conditions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(242, 242, 242);
}
.condition_pop {
  background-color: rgb(217, 217, 217);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: 25px;
  box-shadow: rgb(104, 255, 174) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.condition_discount {
  background-color: rgb(217, 217, 217);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-top: 15px;
  box-shadow: rgb(104, 255, 174) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.condition_time {
  background-color: rgb(217, 217, 217);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-top: 25px;
  box-shadow: rgb(104, 255, 174) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buy_options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  border-top: solid 1px rgb(94, 94, 94);
  color: rgb(182, 182, 182);
  background-color: rgb(242, 242, 242);
  padding-top: 7px;
}

input {
  border: none;
  border-bottom: 1px solid rgb(182, 182, 182);
  background-color: rgb(242, 242, 242);
}

input:focus {
  outline: none;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(104, 255, 174);
}

.button {
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
  font-size: 100%;
  font-weight: 550;
  color: rgb(94, 94, 94);
  background-color: rgb(106, 255, 175);
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
}

.button:active {
  transform: translateY(-2px);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>

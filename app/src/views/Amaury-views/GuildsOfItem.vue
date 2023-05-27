<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Grupping Logo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="guield">
        <div class="container">
          <!--Imagen principal-->
          <div class="product_header">
            <span class="titleguield" style="margin-left: 25px">{{
              router.params.name
            }}</span>
            <span style="margin-left: 30px">
              {{ router.params.open ? "Open" : "Close" }}</span
            >
            <img
              class="product_img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPczWtSZ9ZwJtVbOGGdScNG6JFZd6vI2K5IXoIKCaB4RaYaUYIBefQ8N1VgE5Mil2fh4w&usqp=CAU"
            />
          </div>
          <!--Filtros-->
          <div class="d-flex">
            <div v-for="i in data.types" :key="i">
              <button class="btguild" @click="() => filter(i)">
                <span v-if="i == 'True'">Act</span>
                <span v-if="i == 'In process'">pro</span>
                <span v-if="i == 'send'">send</span>
                <span v-if="i == 'finished'">fini</span>
                <span v-if="i == 'all'">all</span>
              </button>
            </div>
          </div>
          <!-- Boton de formulario para crear nuevo gremio-->
          <div class="alin">
            <div class="arrow">
              <div>
                <button
                  class="btguildt"
                  v-if="data.open"
                  @click="() => activeformguild()"
                >
                  create new guild
                </button>
                <CreateGuildForm
                  :guild_id="1"
                  :item="1"
                  :item_name="'jose'"
                  :actual_pop="10"
                  :category="'juego'"
                  :price="1"
                  :open="true"
                  :discount="15"
                  :life_time="10"
                  :Max_pop="10"
                ></CreateGuildForm>
              </div>
            </div>
          </div>
          <!-- Boton de formulario para ingresar a un gremio existente -->
          <div class="fit">
            <form
              @submit.prevent="craete_order"
              class="formitem"
              v-if="data.form"
            >
              <span class="titlespan">How many items do you want?</span>
              <input
                type="number"
                placeholder="quantity"
                v-model="data.quantity"
              />
              <button class="b"><i class="bx bx-cart-add"></i></button>
              <div>
                <span class="spa">cost:</span>
                {{ router.params.price * data.quantity }}
              </div>
              <div>
                <span class="spa">discount: </span>
                {{ data.discount }}%
              </div>
              <div>
                <span class="spa">total: </span>
                {{
                  router.params.price * data.quantity -
                  router.params.price * data.quantity * (data.discount / 100)
                }}
              </div>
            </form>
            <div class="cho-container"></div>
          </div>

          <div class="fit">
            <form
              @submit.prevent="craete_guild"
              class="formitem"
              v-if="data.formguild"
            >
              <select v-model="data.quantity_max">
                <option :value="data.quantity_low">
                  {{ data.quantity_low }}
                </option>
                <option :value="data.quantity_medium">
                  {{ data.quantity_medium }}
                </option>
                <option :value="data.quantity_high">
                  {{ data.quantity_high }}
                </option>
              </select>

              <input
                type="number"
                placeholder="quantity"
                v-model="data.quantity"
              />
              <input
                type="number"
                placeholder="duration in days"
                v-model="data.life_time"
              />
              <button class="btguild">create!</button>
              {{ data.quantity_max }}
            </form>
          </div>

          <div class="row">
            <div
              class="col"
              v-for="i in data.guields"
              :key="i"
              @click="() => activeform(i)"
            >
              <div
                class="guildca card col-3 m-5 justify-content-center"
                v-if="i.active == data.filtertype || data.filtertype == 'all'"
              >
                <div class="d-flex">
                  <div>
                    <div class="solid">
                      <span class="solidt">Id: </span> {{ i.id }}
                    </div>
                    <div>Name: {{ router.params.name }}</div>
                    <div class="solid">
                      <span class="solidt">Actual_quantity: </span>
                      {{ i.actual_quantity }}
                    </div>
                    <div>Discount: {{ i.discount }}</div>
                    <div>Quantity_max: {{ i.quantity_max }}</div>
                    <div>State: {{ i.active }}</div>
                    <div>Counter: {{ i.active }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
/* eslint-disable */
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
} from "@ionic/vue";
import CreateGuildForm from "../../components/CreateGuildForm.vue";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const data = reactive({
  guields: [],
  id_guield: "",
  discount: "",
  quantity: "",

  form: false,
  formguild: false,
  open: false,
  pagoaprobado: "",

  itemid: 0,
  quantity_max: "52",
  life_time: "",
  item: [],
  quantity_low: "",
  quantity_medium: "",
  quantity_high: "",
  filtertype: "all",
  types: ["True", "In process", "send", "finished", "all"],
});

const router = useRoute();
//TEST-21bbff78-2020-4a48-bbf2-e7357a59b1df
//APP_USR-450cc8e7-ba80-45d6-a44d-81346f710cc5

const mp = new MercadoPago("APP_USR-450cc8e7-ba80-45d6-a44d-81346f710cc5", {
  locale: "es-CO",
});

const getguields = async () => {
  const id = router.params.id;
  const res = await fetch(`http://127.0.0.1:8000/guielditem/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const da = await res.json();
  data.guields = da;
};

const activeform = (i) => {
  data.discount = i.discount;
  data.id_guield = i.id;
  data.form = !data.form;
  data.formguild = false;

  const isopen = router.params.open == "true";
  data.open = isopen;
};

const activeformguild = () => {
  data.form = false;
  data.formguild = true;
  data.open = false;
  get_item();
};

const open = () => {
  if (router.params.open == "true") {
    data.open = true;
  } else {
    data.open = false;
  }
};

const craete_order = async () => {
  let payload1 = {
    guild_id: Number(data.id_guield),
    title: "Payment",
    item_id: Number(router.params.id),
    quantity: Number(data.quantity),
  };

  const res1 = await fetch(`http://127.0.0.1:8000/generate_payment`, {
    method: "POST",
    body: JSON.stringify(payload1),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const da1 = await res1.json();

  mp.checkout({
    preference: {
      id: da1,
    },
    render: {
      container: ".cho-container",
      label: "Pagar",
    },
  });

  data.form = false;
  getguields();
};

const craete_guild = async () => {
  let payload = {
    item: Number(router.params.id),
    quantity: Number(data.quantity),
    quantity_max: Number(data.quantity_max),
    life_time: Number(data.life_time),
  };

  const res = await fetch(`http://127.0.0.1:8000/generate_payment_creation`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const da1 = await res.json();
  data.form = false;
  getguields();
  mp.checkout({
    preference: {
      id: da1,
    },
    render: {
      container: ".cho-container",
      label: "Pagar",
    },
  });
};

const get_item = async () => {
  const res = await fetch(`http://127.0.0.1:8000/item/${router.params.id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const da = await res.json();

  data.quantity_low = da.quantity_low;
  data.quantity_medium = da.quantity_medium;
  data.quantity_high = da.quantity_high;
};

const filter = (i) => {
  data.filtertype = i;
  console.log(data.filtertype);
};

onMounted(() => {
  getguields();
  open();
});
</script>

<style>
.guield {
  background-color: rgb(255, 255, 255);
}
.guildca {
  padding: 10px;
  width: 280px;
  color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.product_header {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 25px;
}

.product_img {
  border-radius: 20px;
  width: 100%;
}

.formitem {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: rgb(90, 219, 150);
  border-radius: 4px;
}
.titleguield {
  text-align: center;
  font-size: 40px;
  font-family: sans-serif;
}

.alm {
  display: flex;
  justify-content: space-between;
}
.arrow {
  text-align: right;
}
.bx-arrow-back {
  font-size: 40px;
  background-color: white;
  color: black;
  border-radius: 4px;
}

.fit {
  display: flex;
  justify-content: center;
  border: none;
}
.fit input {
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
}
.b {
  border: none;
  margin: 5px;
  border-radius: 4px;
  background-color: rgb(35, 122, 35);
  font-size: 25px;
  color: gold;
}

.titlespan {
  padding: 4px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
}

.b:hover {
  background-color: rgb(47, 101, 50);
}

.spa {
  font-weight: bold;
}

.alin {
  display: flex;
  flex-direction: column;
}
.btguild {
  background-color: rgb(255, 238, 127);
  margin: 10px;
  border: none;
  padding: 10px;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.btguildt {
  background-color: rgb(127, 229, 255);
  margin: 10px;
  border: none;
  padding: 10px;
  font-size: 18px;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.btguildt:hover {
  background-color: rgb(21, 207, 253);
}

.btguild:hover {
  background-color: rgb(249, 223, 54);
}

.solid {
  font-size: large;
  font-weight: bold;
  color: red;
}
.solidt {
  font-size: large;
  font-weight: bold;
  color: black;
}

.d-flex {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
</style>

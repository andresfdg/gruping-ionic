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
          <div>
            <div style="margin-top: 43px">
              <span class="titleguield" style="margin-left: 25px">{{
                router.params.name
              }}</span>
            </div>
            <div style="margin-top: 7px">
              <span style="margin-left: 30px; color: #666666">
                {{ router.params.open ? "Open" : "Close" }}</span
              >
            </div>
            <div
              style="padding-left: 16px; padding-right: 16px; margin-top: 8px"
            >
              <img
                class="product_img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPczWtSZ9ZwJtVbOGGdScNG6JFZd6vI2K5IXoIKCaB4RaYaUYIBefQ8N1VgE5Mil2fh4w&usqp=CAU"
              />
            </div>

            <div
              style="
                display: flex;
                justify-content: space-between;
                padding-left: 16px;
                padding-right: 16px;
                margin-top: 25px;
              "
            >
              <span style="font-size: 14px; color: #666666">Descripcion</span>
              <span style="font-size: 16px; color: #666666; font-weight: bold"
                >$250.000</span
              >
            </div>
            <div
              style="
                padding-left: 16px;
                padding-right: 16px;
                margin-top: 25px;
                color: #5e5e5e;
                font-size: 20px;
                font-weight: bold;
              "
            >
              <span>Grupos</span>
            </div>
          </div>
          <!--Filtros-->
          <!--     <div class="d-flex">
            <div v-for="i in data.types" :key="i">
              <button class="btguild" @click="() => filter(i)">
                <span v-if="i == 'True'">Act</span>
                <span v-if="i == 'In process'">pro</span>
                <span v-if="i == 'send'">send</span>
                <span v-if="i == 'finished'">fini</span>
                <span v-if="i == 'all'">all</span>
              </button>
            </div>
          </div> -->
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
              <buttom
                @click="craete_order"
                style="height: 50px; width: 50px; background-color: white"
                >inter</buttom
              >
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
          <div style="display: flex; justify-content: center">
            <div class="grip">
              <div
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
                    </div>
                  </div>
                </div>
                <div
                  style="
                    background: #6affaf;
                    border-radius: 10px;
                    margin-top: 6px;
                    margin-top: 6px;
                    background-color: #6affaf;
                    color: rgba(94, 94, 94, 1);
                    border-radius: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  "
                >
                  Unirme
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
  const res = await fetch(
    `https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/guielditem/${id}`,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

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

  const res1 = await fetch(
    `https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/generate_payment`,
    {
      method: "POST",
      body: JSON.stringify(payload1),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
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

  const res = await fetch(
    `https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/generate_payment_creation`,
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
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
  const res = await fetch(
    `https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/item/${router.params.id}`,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

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

<style scoped lang="scss">
.grip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
}

ion-content {
  --background: #f5f5f5;
}
.guield {
  background-color: #f5f5f5;
}
.guildca {
  padding: 10px;
  width: 146px;
  height: 112px;
  color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 8px;
  background: linear-gradient(180deg, #d9d9d9 0%, rgba(242, 242, 242, 0) 100%);
}

.product_img {
  border-radius: 20px;
  width: 100%;
  margin-top: 8px;
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
  font-size: 24px;
  font-weight: bold;
  color: #5e5e5e;
}

.arrow {
  text-align: right;
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

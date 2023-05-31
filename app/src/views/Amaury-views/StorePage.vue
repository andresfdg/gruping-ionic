<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Grupping Logo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="block1"></div>
      <div style="display: flex; flex-direction: column; margin-top: 17px">
        <div>
          <span class="nombreTienda">Adidas</span>
        </div>

        <div class="desTiendaTitulo">
          <span>Descripcion</span>
        </div>

        <div class="desTienda">
          <span
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            atque quaerat tempore voluptates perferendis quod vitae qui
            dignissimos! Quam quo repudiandae expedita aliquid quae, minima
            voluptatem nulla? Incidunt, sequi eveniet.</span
          >
        </div>
        <div>
          <div class="searchPromo"></div>
        </div>

        <span class="titulo">Productos</span>
        <div class="store">
          <div
            v-for="i in data.items"
            :key="i"
            class="items"
            style="margin-top: 17px"
          >
            <ItemCardUserVue
              :name="i.name"
              :category="i.category"
              :price="i.price"
              :open="i.open"
              :id="i.id"
              :storeid="router.params.id"
              :likes="i.likes"
              @funt="items"
              @funt2="xx"
            ></ItemCardUserVue>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
/* eslint-disable */

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
} from "@ionic/vue";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import ItemCardUserVue from "../../components/ItemCardUser.vue";

const router = useRoute();

const data = reactive({
  query: "",
  name: "hola",
  user: {},
  store: {},
  stores: {},
  items: [],
});

const getinfouser = async () => {
  const res = await fetch(
    "https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/infouser",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  const da = await res.json();
  console.log(da);
  data.user = da;
};

const store = () => {
  const id = router.params.id;
  console.log(id);

  fetch(
    `https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/allstore/${id}`,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  )
    .then((res) => res.json())
    .then((da) => console.log(da));
};

const getitems = async () => {
  const id = router.params.id;
  console.log(id);
  const res = await fetch(
    `https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/storeitems/${id}`,
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  const da = await res.json();
  data.items = da;
  console.log("holis");
  /* for (let i in da) {
    fetch(`http://127.0.0.1:8000/availability/${da[i].id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((x) => data.availability.push(x));
  } */
};

onMounted(() => {
  store();
  getinfouser();
  getitems();
});
</script>

<style scoped lang="scss">
ion-searchbar {
  --background: snow;
  --border-radius: 25px;
}

.nombreTienda {
  font-size: 24px;
  color: #5e5e5e;
  margin-left: 32px;
  font-weight: bold;
}
.desTiendaTitulo {
  color: #666666;
  font-size: 15px;
  font-weight: 400;
  margin-left: 32px;
  margin-top: 17px;
}

.desTienda {
  color: #888888;
  font-size: 12px;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 8px;
}

.searchPromo {
  box-shadow: 0px 3px 15px 2px rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 30px;
  margin-left: 46px;
  margin-top: 37px;
  border-radius: 15px;
}

.titulo {
  margin-top: 21px;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: bold;
  margin-left: 32px;
}

.block1 {
  background-color: rgb(210, 203, 251);
  height: 223px;
}
.store {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1px;
  background-color: #f5f5f5;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;

  h1 {
    padding: 15px;
    margin-left: 10px;
    font-family: sans-serif;
    font-weight: 800;
    font-size: 20px;
    color: rgb(93, 93, 93);
  }
}

.title {
  font-weight: 800;
  font-size: 20px;
}

.items {
  display: flex;

  justify-content: center;
}

ion-content {
  --background: #f5f5f5;
}
</style>

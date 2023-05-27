<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Grupping Logo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="block1">
        <div class="header">
          <span class="title"> {{ data.store.name }} </span>
          <span>Cra 10# 28-71</span>
        </div>
        <div class="searchbar">
          <ion-searchbar
            :animated="true"
            placeholder="busqueda"
          ></ion-searchbar>
        </div>
        <div class="swiper">
          <div class="store">Tiendas</div>
        </div>
      </div>
      <div v-for="i in data.items" :key="i" class="items">
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
  const res = await fetch("http://127.0.0.1:8000/infouser", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const da = await res.json();
  console.log(da);
  data.user = da;
};

const store = () => {
  const id = router.params.id;
  console.log(id);

  fetch(`http://127.0.0.1:8000/allstore/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((da) => (data.store = da));
};

const getitems = async () => {
  const id = router.params.id;
  console.log(id);
  const res = await fetch(`http://127.0.0.1:8000/storeitems/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
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
  getinfouser();
  getitems();
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin: 12px;
  margin-top: 1px;
}
ion-searchbar {
  --background: snow;
  --border-radius: 25px;
}
.searchbar {
  margin-inline: 75px;
}

.block1 {
  background-color: rgb(210, 203, 251);
}
.store {
  margin-top: 1px;
  background-color: white;
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
.filters {
  display: flex;
  box-shadow: rgba(38, 38, 43, 0.2) 0px 7px 29px 0px;
  margin-right: 25px;
  margin-left: 25px;
  padding: 25px;
  border-radius: 15px;
  justify-content: space-between;
  font-size: 14px;
  font-family: sans-serif;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.categories {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-weight: 800;
  font-size: 20px;
}
.spas {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 15px;
  margin-right: 15px;
  margin-left: 15px;
}
.box {
  background-color: aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  margin-top: 300px;
}
.boxi {
  --background: red;
  margin: 20px;
}

.itenn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tienda {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 200px;
  border: solid 2px black;
}

.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

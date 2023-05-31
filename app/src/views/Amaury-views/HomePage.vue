<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Grupping Logo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="block1">
        <br />
        <div class="header">
          <img src="../../../public/img/grupingName.png" alt="" width="100" />
          <span style="color: #5e5e5e">Cra 10# 28-71</span>
        </div>
        <div class="searchbar">
          <ion-searchbar
            :animated="true"
            placeholder="busqueda"
          ></ion-searchbar>
        </div>
        <div class="swiper">
          <swiper :modules="data.modules" :slides-per-view="2" class="swiperr">
            <swiper-slide>
              <div class="promoBox">
                <span> descuanto </span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="promoBox">
                <span> descuanto </span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="promoBox">
                <span> descuanto </span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="store">
          <h1>Categorias</h1>
          <div class="filters">
            <swiper
              :modules="data.modules"
              :slides-per-view="4"
              class="swiperr"
            >
              <swiper-slide>
                <div class="categories">
                  <div>
                    <img
                      src="../../../public/img/categorias/tecnologia.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </div>
                  <span style="font-size: 10px">tecnologia</span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="categories">
                  <div>
                    <img
                      src="../../../public/img/categorias/hogar.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </div>
                  <span style="font-size: 10px">hogar</span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="categories">
                  <div>
                    <img
                      src="../../../public/img/categorias/ropa.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </div>
                  <span style="font-size: 10px">moda</span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="categories">
                  <div>
                    <img
                      src="../../../public/img/categorias/deportes.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </div>
                  <span style="font-size: 10px">deportes</span>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="categories">
                  <div>
                    <img
                      src="../../../public/img/categorias/deportes.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            "
          >
            <span class="tienda_home" style="margin: 10px">Tiendas</span>
            <span
              style="margin: 10px; text-decoration: underline; color: #666666"
              >ver todo</span
            >
          </div>
          <ion-list style="background-color: #f5f5f5">
            <div v-for="i in globalStore.tiendas" :key="i">
              <router-link
                style="text-decoration: none; color: inherit"
                :to="`store/${i.id}`"
              >
                <div class="itenn">
                  <div class="tienda">
                    <div style="display: flex; justify-content: space-between">
                      <div style="margin-bottom: 4px">
                        <span class="tienda_home">{{ i.name }}</span>
                      </div>
                      <div
                        style="
                          border-left: 0.5px #b0b0b0 solid;
                          margin-right: 10px;
                          margin-bottom: 3px;
                        "
                      >
                        <img
                          style="margin-left: 5px"
                          src="../../../public/img/corazon.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div
                      style="
                        background-color: #d9d9d9;
                        padding: 6px;
                        border-radius: 15px;
                      "
                    >
                      <StoreCard :img="i.img"></StoreCard>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </ion-list>
          <ion-infinite-scroll @ionInfinite="ionInfinite">
            <ion-infinite-scroll-content
              loading-text="Please wait..."
              loading-spinner="bubbles"
            ></ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
/* eslint-disable */
import { useStore } from "../../stores/store";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
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
  IonSearchbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/vue";
import { onMounted, reactive } from "vue";
import StoreCard from "../../components/StoreCard.vue";

const data = reactive({
  list: [
    ["Todo", "../../../public/img/categorias/hogar.png"],
    ["Tecnologia", "../../../public/img/categorias/hogar.png"],
    ["Ropa", "../../../public/img/categorias/hogar.png"],
    ["Accesorios", "../../../public/img/categorias/hogar.png"],
    ["higiene", "../../../public/img/categorias/hogar.png"],
    ["Deporte", "../../../public/img/categorias/hogar.png"],
    ["Hogar", "../../../public/img/categorias/hogar.png"],
  ],
  modules: [Navigation, Pagination, Scrollbar, A11y],
  query: "",
  name: "hola",
  user: {},
  stores: {},
});

const globalStore = useStore();

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

const stores = async () => {
  fetch(
    "https://ghdu2sxv4bz7z6tvvzkxkoqjgq0idxxi.lambda-url.sa-east-1.on.aws/allstore"
  )
    .then((res) => res.json())
    .then((da) => (globalStore.tiendas = da));
};

const items = reactive([]);

const generateItems = () => {
  const count = data.stores.length + 1;
  for (let i = 0; i < 50; i++) {
    items.push(count + i);
  }
};

const ionInfinite = (ev) => {
  generateItems();
  setTimeout(() => ev.target.complete(), 500);
};

generateItems();

onMounted(() => {
  getinfouser();
  stores();
});
</script>

<style scoped lang="scss">
.swiper {
  margin-left: 8px;
}
.promoBox {
  margin: 5px;
  width: 164px;
  height: 96px;
  background-color: #f0f0f0;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    margin-top: 8px;
    margin-left: 7px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 12px;
  margin-top: 1px;
}
ion-searchbar {
  --background: #f5f5f5;
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
}

.tienda {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 42px;
  margin-right: 42px;
  height: 200px;
}

.tienda_home {
  margin-left: 35px;
  font-family: sans-serif;
  font-weight: 800;
  font-size: 16px;
  color: rgb(93, 93, 93);
}
</style>

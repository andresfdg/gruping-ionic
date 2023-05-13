<template>
<ion-page>
    <ion-header>
    <ion-toolbar>
        <ion-title>Mis Grupos</ion-title>
    </ion-toolbar>
    </ion-header>
    <ion-content>
        <div style="margin: 10px;">
            <h1>Mis Gremios</h1>
            <ion-infinite-scroll @ionInfinite="ionInfinite">
                <ion-infinite-scroll-content
                loading-text="Please wait..."
                loading-spinner="bubbles"
                >
                    <div class="guilds_container">
                        <div
                        v-for="i in data.gields"
                        :key="i"
                        >
                            <UserGuildsCard :gield_id="i.gield_id" :name="i.name" :price="i.price" :total_orders="i.order_number" :actual_quantity="i.actual_quantity" :quantity_max="i.quantity_max" :active="i.active"></UserGuildsCard>
                        </div>
                    </div>
                </ion-infinite-scroll-content>
            </ion-infinite-scroll>
      </div>
    </ion-content>
</ion-page>
</template>

<script setup>
import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonInfiniteScroll,
IonInfiniteScrollContent,
} from "@ionic/vue";
import { onMounted, reactive} from "vue";
import UserGuildsCard from "../../components/UserGuildsCard.vue";

const data = reactive({
  gields: [],
  filter: [],
});

const getgields = async () => {
  const res = await fetch("http://127.0.0.1:8000/storeorder", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const da = await res.json();

  let result = da.reduce((unique, o) => {
    if (!unique.some((obj) => obj.gield_id === o.gield_id)) {
      unique.push(o);
    }
    return unique;
  }, []);
  data.gields = result;
};

const ionInfinite = (ev) => {
  getgields();
  setTimeout(() => ev.target.complete(), 500);
};

onMounted(() => {
  getgields();
});
</script>

<style scoped lang="scss">
.header {
display: flex;
justify-content: space-between;
margin: 12px;
margin-top: 1px;
}

h1{
  align-self: left; 
  font-size: xx-large; 
  color: rgb(94,94,94);
  font-weight: 1000;
}

ion-content{
--background: rgb(242,242,242);
}

.guilds_container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(250px);
  grid-gap: 10px;
}


</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>GroupIcon</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="principal">
        <h1>Mis ordenes</h1>

        <div class="cardbar">
          <div :class="data.isselect1 ? 'sel' : 'option'" @click="filter">
            En curso
          </div>
          <span :class="data.isselect2 ? 'sel' : 'option'" @click="filter2"
            >Espera</span
          >
          <span :class="data.isselect3 ? 'sel' : 'option'" @click="filter3"
            >Todas</span
          >
        </div>

        <div class="ordenes">
          <div v-for="i in data.orders" :key="i">
            <v-card
              class="orden_col"
              v-if="data.display == i.active || data.display == 'todas'"
            >
              <div class="orden">
                <span class="ordertitle">N° de orden {{ i.id }}</span>
                <span><strong>Producto/s: </strong>{{ i.item }}</span>
                <span><strong>Tienda: </strong>De pepito {{ i.store_id }}</span>
                <span><strong>Grupo: </strong>SS Azul {{ i.guield_id }}</span>
                <span><strong>Cantidad: </strong> {{ i.quantity }} </span>
              </div>
              <div class="orden_col2">
                <button @click="() => completed(i)" v-if="i.active == 'send'">
                  received
                </button>
                <span v-if="i.active == 'True'"
                  ><span class="estate"
                    ><div class="gsap-box"></div>
                    Recibida</span
                  ></span
                >
                <span v-if="i.active == 'In process'"
                  ><span class="estate"
                    ><div class="gsap-box2"></div>
                    Entregando</span
                  ></span
                >
                <span v-if="i.active == 'finished'"
                  ><span class="estate"
                    ><div class="gsap-box3"></div>
                    Terminada</span
                  ></span
                >
                <span class="detalle"> <u>Ver Detalle</u> ></span>
              </div>
            </v-card>
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
} from "@ionic/vue";
import { onMounted, reactive } from "vue";
import { useStore } from "../../stores/store";


const store = useStore();

const data = reactive({
  orders: {},
  isselect1: false,
  isselect2: false,
  isselect3: false,
  display: "todas",
});

const filter = () => {
  data.isselect1 = !data.isselect1;
  data.isselect2 = false;
  data.isselect3 = false;
  if (data.isselect1 == true) {
    data.display = "True";
  } else {
    data.display = "todas";
  }
};
const filter2 = () => {
  data.isselect2 = !data.isselect2;
  data.isselect1 = false;
  data.isselect3 = false;
  if (data.isselect2 == true) {
    data.display = "In process";
  } else {
    data.display = "todas";
  }
};
const filter3 = () => {
  data.isselect3 = !data.isselect3;
  data.isselect2 = false;
  data.isselect1 = false;
  data.display = "todas";
};

const orders = () => {
  fetch(`${store.server}/userorders`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((da) => (data.orders = da));
};

const completed = async (i) => {
  const ids = i.id;
  console.log(i.id);
  const res = await fetch(`${store.server}/completed/${ids}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log("ok");
  orders();
};

onMounted(() => {
  orders();
});
</script>

<style scoped="true">
ion-content {
  --background: rgb(242, 242, 242);
}

.principal {
  margin: 20px;
}

.cardbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.option {
  border: solid 2px rgb(94, 94, 94);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 30px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 20px;
}

.sel {
  border: solid 2px rgb(165, 166, 246);
  background-color: rgb(206, 195, 252);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 30px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 20px;
}

.ordenes {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.orden_col {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px rgb(94, 94, 94);
  width: 100%;
  height: 120px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
  margin-top: 15px;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.orden {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  color: rgb(144, 144, 144);
}

.orden_col2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.estate {
  align-self: flex-start;
  margin-left: 10px;
  margin-right: 15px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  color: rgb(94, 94, 94);
  background-color: rgb(217, 217, 217);
  border-radius: 0 0 5px 5px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 3px;
  padding-top: 3px;
  z-index: 2;
}

.detalle {
  font-size: 17px;
  color: rgb(130, 0, 255);
  margin-bottom: 6px;
  margin-right: 15px;
}

.ordertitle {
  font-size: 18px;
  color: rgb(94, 94, 94);
  font-weight: 1000;
}

h1 {
  font-size: xx-large;
  font-weight: 1000;
  color: rgb(94, 94, 94);
}

.orders {
  background-color: rgb(222, 245, 237);
}
.table {
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.gsap-box {
  background: rgb(44, 231, 130);
  margin-right: 5px;
  margin-top: 3px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.gsap-box2 {
  background: rgb(231, 225, 44);
  margin-right: 5px;
  margin-top: 3px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.gsap-box3 {
  background: rgb(253, 51, 47);
  margin-right: 5px;
  margin-top: 3px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
</style>

<template>
    <div class="principal">
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <div class="name">{{ gield_id }}: {{ name }}</div>
            <div class="corner" style="">
                <div style="display: flex; flex-direction: column; border-right: solid 1px; padding-right: 2px;"> <ion-icon name="people-sharp" style="width: 13.5px; height: 13.5px;"></ion-icon> <span>{{ actual_quantity}}</span></div>
                <div style="display: flex; flex-direction: column; padding-left: 2px;"><span>Días</span><span>-{{ actual_quantity}}</span></div>
            </div>
        </div>

        <div class="guild_conditions">
            <div class="condition_pop">
            <span style="font-weight: bolder; font-size:12px;">10</span>
            <ion-icon style="width: 15px; height: 15px;" name="people-sharp"></ion-icon>
            </div>

            <div class="condition_discount">
            <span style="font-weight: bolder; font-size:15px;">30%</span>
            <span  style="font-weight: bolder; font-size:15px;">off</span>
            </div>

            <div class="condition_time">
            <span style="font-weight: bolder; font-size:12px;">4</span>
            <span  style="font-weight: bolder; font-size:12px;">días</span>
            </div>
        </div>

        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <button class="button"><UserGuildsMore item_name="patprimo" life_time=1 Max_pop=30 discount="30" :gield_id="gield_id" :name="name" :price="price" :total_orders="order_number" :actual_quantity="actual_quantity" :quantity_max="quantity_max" :active="active"></UserGuildsMore></button>
            <ion-icon style="width: 25px; height: 25px; color: rgb(44, 231, 130); margin-top: 20px; margin-left: 20px;" name="share-social"></ion-icon>
        </div>

    </div>
</template>
  
<script setup>
import UserGuildsMore from "../components/UserGuildsMore.vue";

const props = defineProps({
    gield_id: String,
    name: String,
    price: Number, 
    total_orders: Number,
    actual_quantity: Number,
    quantity_max: Number,
    active: String, 
});
 
</script>

<style scoped>

.principal{
    background: linear-gradient(rgb(217,217,217), rgb(242,242,242));
    width: 100%;
    height: 100%;
    background-color: rgb(242,242,242);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 15px;
}

.name{
    align-self: flex-start;
    color: rgb(102,102,102);
    font-size: large;
    font-weight: bolder;
}

.corner{
    display: flex; 
    flex-direction: row; 
    justify-content:space-around; 
    align-self: flex-end; 
    width: 5%; 
    height: 5%; 
    font-size: 12px; 
    color: rgb(130,0,255);
    margin-right: 10px;

}

.guild_conditions{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.condition_pop{
  background-color: rgb(217, 217, 217);
  border-radius: 50%;
  width: 20%;
  height: 20%;
  margin-top: 15px;
  box-shadow: rgb(104, 255, 174) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.condition_discount{
  background-color: rgb(217, 217, 217);
  border-radius: 50%;
  width: 30%;
  height: 30%;
  margin-top: 15px;
  box-shadow: rgb(104, 255, 174) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.condition_time{
  background-color: rgb(217, 217, 217);
  border-radius: 50%;
  width: 20%;
  height: 20%;
  margin-top: 15px;
  box-shadow: rgb(104, 255, 174) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  width: 70%;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
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
    
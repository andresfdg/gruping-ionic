<template>
  <div class="conten_store">
    <div>
      <img class="storeImg" :src="getimg()" alt="" />
    </div>
    <div>
      <img class="storeImg1" :src="getimg()" alt="" />
      <img class="storeImg2" :src="getimg()" alt="" />
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
const props = defineProps({
  img: String,
  name: String,
});
const getimg = () => {
  return props.img;
};
</script>

<style>
.storeImg {
  width: 400px;
  height: 120px;
  border-radius: 15px;

  margin-top: 8px;
}
.storeImg1 {
  width: 110px;
  margin-left: 10px;
  height: 56px;
  border-radius: 15px;

  margin-top: 8px;
}
.storeImg2 {
  width: 110px;
  margin-left: 10px;
  height: 56px;
  border-radius: 15px;
}

.conten_store {
  display: flex;

  justify-content: center;
}
</style>

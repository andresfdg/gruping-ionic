<template>
  <img class="storeImg" :src="getimg()" alt="" />
</template>

<script setup>
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
  width: 158px;
  height: 100px;
  border-radius: 15px;
  margin-inline: 15px;
  margin-top: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>

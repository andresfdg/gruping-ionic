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
  background-color: aqua;
}
</style>

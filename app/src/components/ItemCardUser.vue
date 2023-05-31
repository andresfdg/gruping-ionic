<template>
  <div>
    <img
      src="https://wallpapercave.com/wp/wp5431761.jpg"
      alt=""
      width="146"
      style="border-radius: 8px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
    />

    <router-link
      :to="`/guielditem/${storeid}/${id}/${name}/${price}/${open}`"
      style="text-decoration: none; color: inherit"
    >
      <div class="routerButton"><span>Ver producto</span></div>
    </router-link>
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted, reactive } from "@vue/runtime-core";

const props = defineProps({
  storeid: Number,
  id: Number,
  name: String,
  category: String,
  price: Number,
  open: Boolean,
  likes: Number,
});

const emit = defineEmits(["funt", "funt2"]);

const data = reactive({
  span: "",
});

const post_like = async () => {
  const payload = {
    id: props.id,
  };

  const res = await fetch(`http://127.0.0.1:8000/post_like`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  emit("funt");
};

const likess = async () => {
  const payload = {
    id: props.id,
  };

  const res = await fetch(`http://127.0.0.1:8000/user_like`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  const da = await res.json();
  data.span = da;
  console.log(da);
};

onMounted(() => {});
</script>

<style scoped lang="scss">
.montans {
  font-family: sans-serif;

  color: black;
}

.montans:hover {
  background-color: rgb(230, 230, 230);
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.x {
  font-size: 12px;
  font-weight: bold;
}

.routerButton {
  margin-top: 6px;
  background-color: #6affaf;
  width: 146px;
  height: 18px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span {
    font-size: 10px;
    color: #5e5e5e;
    font-weight: 600;
  }
}
</style>

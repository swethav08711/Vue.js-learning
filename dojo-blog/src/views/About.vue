<template>
  <input type="text" v-model="search" />
  <p>search term = {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  <button @click="handleWatch">stop watch</button>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";
export default {
  name: "about",
  setup() {
    const search = ref("");
    const names = ref(["mario", "yoshi", "luigi", "toda", "bowser", "koopa"]);

    const stopWatch = watch(search, () => {
      console.log("watch fun ran");
    });
    const stopEffect = watchEffect(() => {
      console.log("watchEffect fn ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((value) => value.includes(search.value));
    });

    const handleWatch = () => {
      stopWatch();
      stopEffect();
    };
    return { names, search, matchingNames, handleWatch };
  },
};
</script>

<style></style>

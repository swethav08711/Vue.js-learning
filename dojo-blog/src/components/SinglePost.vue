<template>
  <div class="post">
    <router-link :to="{ name: 'details', params: { id: data.id } }">
      <h1>{{ data.title }}</h1>
    </router-link>
    <h1>{{ snippet }}</h1>
    <span v-for="tag in data.tags" :key="tag"># {{ tag }}</span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["data"],
  setup(props) {
    const snippet = computed(() => {
      return props.data.body.substring(0, 100) + ".....";
    });
    return { snippet };
  },
};
</script>

<style></style>

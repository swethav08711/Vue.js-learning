<template>
  <div class="post">
    <h1>{{ data.title }}</h1>
    <h1>{{ snippet }}</h1>
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

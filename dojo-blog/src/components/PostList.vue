<template>
  <div class="post-list"></div>
  <div v-if="posts.length">
    <div v-for="post in posts" :key="post">
      <SinglePost :data="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost.vue";
import { onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["posts"],
  components: {
    SinglePost,
  },
  setup(props) {
    onMounted(() => console.log("mounted"));
    onUnmounted(() => console.log("unmounted"));
    onUpdated(() => console.log("updated"));
  },
};
</script>

<style></style>

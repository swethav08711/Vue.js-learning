<template>
  <h1>Article page</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList v-if="showpost" :posts="posts"></PostList>
  </div>
  <div v-else>Loading....</div>
  <button @click="showpost = !showpost">Toggle post</button>
  <button @click="posts.pop()">delete a post</button>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Article",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        if (!res.ok) {
          throw Error("No data available");
        }
        posts.value = await res.json();
      } catch (err) {
        error.value = err.message;
      }
    };
    load();
    const showpost = ref(true);
    return { posts, showpost, error };
  },
};
</script>

<style></style>

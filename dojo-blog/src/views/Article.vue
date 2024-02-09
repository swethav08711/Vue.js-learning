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
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "Article",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, load, showpost } = getPosts();
    load();
    return { posts, showpost, error };
  },
};
</script>

<style></style>

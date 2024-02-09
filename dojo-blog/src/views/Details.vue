<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h1>{{ post.title }}</h1>
      <h2>{{ post.slug }}</h2>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>

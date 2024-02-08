<template>
  <div v-if="job">
    <p>{{ job.description }}</p>
    <p>{{ job.location }}</p>
  </div>
  <div v-else>
    <p>Loading Job details.....</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>

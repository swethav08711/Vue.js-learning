<template>
  <h1>List of Jobs</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobsDetail', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Job Title 1",
          description: "Job Description 1",
          company: "Company 1",
          location: "Location 1",
          date: "2020-01-01",
          status: "Pending",
        },
        {
          id: 2,
          title: "Job Title 2",
          description: "Job Description 2",
          company: "Company 2",
          location: "Location 2",
          date: "2020-01-02",
          status: "Pending",
        },
        {
          id: 3,
          title: "Job Title 3",
          description: "Job Description 3",
          company: "Company 3",
          location: "Location 3",
          date: "2020-01-03",
          status: "Pending",
        },
      ],
    };
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>

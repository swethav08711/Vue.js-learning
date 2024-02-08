<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name id {{ name }} my age is {{ age }}</p>
    <button @click="handleClick">Click</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" />

  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    // const p = ref(null);

    let name = ref("swetha");
    let age = ref(24);
    const handleClick = () => {
      name.value = "purple";
      age.value = 30;
      console.log("hello");
      // console.log(p.value);
      // p.value.classList.add("test");
      // p.value.textContent = "hello swetha";
    };

    return { name, age, handleClick };
  },
};
</script>

<style>
.test {
  color: red;
}
</style>

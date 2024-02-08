<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <p>My name id {{ name }} my age is {{ age }}</p>
    <button @click="handleClick">Click</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" /> -->

    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="handleAge">Increase age</button> -->
    <h2>reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="handleAgeTwo">Increase age</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    // const p = ref(null);

    // let name = ref("swetha");
    // let age = ref(24);
    // const handleClick = () => {
    //   name.value = "purple";
    //   age.value = 30;
    //   console.log("hello");
    //   // console.log(p.value);
    //   // p.value.classList.add("test");
    //   // p.value.textContent = "hello swetha";
    // };
    // const ninjaOne = ref({ name: "swetha", age: "20" });
    // const handleAge = () => {
    //   ninjaOne.value.age = 40;
    // };
    const ninjaTwo = reactive({ name: "swetha", age: "20" });
    const handleAgeTwo = () => {
      ninjaTwo.age = 40;
    };
    return { ninjaTwo, handleAgeTwo };
  },
};
</script>

<style>
.test {
  color: red;
}
</style>

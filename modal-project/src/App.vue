<template>
  <h1>Hello am build my new vue app</h1>
  <button @click="handleModal">Show modal</button>
  <Modal v-if="show" :header="header" :text="text" theme="sale"  @close="handleModal">
  </Modal>
  
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  data() {
    return {
      title: "My First Vue App :)",
      header: "signup for the gateway",
      text: "grab your signup for the gateway",
      show: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    handleModal() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  display: inline-block;
}
</style>

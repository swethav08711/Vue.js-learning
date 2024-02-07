<template>
  <h1>Hello am build my new vue app</h1>
  <button @click="handleModal">Show modal</button>

  <teleport to=".modals" v-if="show">
    <Modal v-if="show" theme="sale" @close="handleModal">
      <h1>Ninja Giveaway</h1>
      <p>Grab your ninja swag for half price!</p>
      <template v-slot:link>
        <a href="#">SignUp now</a> <br />
        <a href="#">Learn more</a>
      </template>
    </Modal>
  </teleport>

  <div v-if="showModaltwo">
    <Modal @close="handleModalTwo">
      <h1>Singup to the newsletter</h1>
      <p>For updates and promo codes!!</p>
    </Modal>
  </div>
  <button @click="handleModalTwo">Show modal two</button>
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
      showModaltwo: false,
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
    handleModalTwo() {
      this.showModaltwo = !this.showModaltwo;
    },
  },
};
</script>

<style>
h1 {
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  display: inline-block;
}
</style>

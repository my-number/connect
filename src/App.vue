<template>
  <div id="app">
    <Container>
      <RouterView></RouterView>
    </Container>
    <Modals></Modals>
  </div>
</template>

<script lang="ts">
import Container from "./components/Container.vue";
import Modals from "./components/Modals.vue";
export default {
  components: { Container, Modals },
  mounted() {
    this.$router.push("/");
    this.$store.dispatch("onLoad");
  }
};
</script>

<style lang="scss">
@import "./styles/index.css";
</style>

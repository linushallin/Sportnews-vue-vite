<script>
import FooterPart from "./components/FooterPart.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    FooterPart,
  },
};
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <FooterPart />
</template>

<style>
* {
  margin: 0;
}
</style>

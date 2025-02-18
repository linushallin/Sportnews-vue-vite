<script>
import WelcomeMsg from "../components/WelcomeMsg.vue";
import GetNews from "../components/GetNews.vue";
import Navbar from "../components/Navbar.vue";

export default {

  components: {
    Navbar,
    WelcomeMsg,
    GetNews,
  },
};
</script>

<template>
  <div id="hero">
    <WelcomeMsg message="Welcome" />
    <h3>Stay updated with the latest sport news!</h3>
    <p>Choose between the most popular leagues in the world.</p>
  </div>

  <GetNews />
</template>

<style>
#hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/assets/hero.jpg);
  background-position: center;
  background-size: cover;
  min-height: 50vh;
  color: white;
  font-size: x-large;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
</style>

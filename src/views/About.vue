<script>
import CustomerCarousel from "../components/CustomerCarousel.vue";
export default {
  components: {
    CustomerCarousel,
  },
};
</script>
<template>
  <div id="about">
    <h1>About</h1>
    <p>
      This website is a school project built with Vue.js and Vite. As a huge
      sports fan, I wanted to create a platform where users can stay updated
      with the latest news from various sports leagues worldwide. The site
      fetches live sports news, allowing users to filter by league, follow their
      favorite teams, and save interesting articles. Thanks to Vite, the project
      is optimized for speed and efficiency, ensuring a smooth user experience.

      This project is a learning journey, where I apply modern web development
      skills while building something useful for fellow sports enthusiasts. <br><br> ⚠️
      Take this site with a pinch of salt! I'm still a student, and I know there
      are things that aren't perfect or fully optimized yet—but hey, I'm
      learning and improving every day. I promise it'll only get better! 🚀 Hope
      you enjoy it! - linus ⚽🏀🏈🏒
    </p>
  </div>
  <div>
    <CustomerCarousel />
  </div>
</template>

<style>
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#about p {
  width: 70vw;
}
</style>

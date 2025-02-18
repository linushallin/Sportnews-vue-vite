<template>
  <div id="feedback_container">
    <div id="feedback">
      <h3>Add your thoughts</h3>
      <form @submit.prevent="submitFeedback">
        <div>
          <label for="name">Your Name:</label>
          <input v-model="newFeedback.name" type="text" id="name" required />
        </div>
        <div>
          <label for="text">Your thoughts</label>
          <textarea
            v-model="newFeedback.text"
            id="text"
            rows="4"
            required
            placeholder="text..."
          ></textarea>
        </div>
        <button type="submit">Submit feedback</button>
      </form>
    </div>

    <div id="img_container">
      <img src="/assets/about.jpg" alt="" />
    </div>
  </div>

  <div id="carousel">
    <div id="comments_card">
      <p>"{{ comments[currentIndex].text }}"</p>
      <h3>- {{ comments[currentIndex].name }}</h3>
    </div>
    <div id="buttons">
      <button @click="prevSlide">❮</button>
      <button @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<script>
// här ville jag försöka mig på ref och göra något användbart

import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "commentsCarousel",
  setup() {
    const comments = ref([
      {
        text: "Bästa nyhetsportalen för sport! Jag kollar här varje dag.",
        name: "Emma Karlsson",
      },

      {
        text: "Att kunna spara artiklar är en game-changer. Perfekt för mig som läser på språng.",
        name: "Lukas Nilsson",
      },

      {
        text: "Helt gratis och ändå så mycket bra innehåll. Rekommenderas!",
        name: "Sara Lindström",
      },
    ]);
    const currentIndex = ref(0);
    let interval = null;

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % comments.value.length;
    };

    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + comments.value.length) %
        comments.value.length;
    };

    onMounted(() => {
      interval = setInterval(nextSlide, 2000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    const newFeedback = ref({
      text: "",
      name: "",
    });

    const submitFeedback = () => {
      if (newFeedback.value.text && newFeedback.value.name) {
        comments.value.push({
          text: newFeedback.value.text,
          name: newFeedback.value.name,
        });
        newFeedback.value.text = "";
        newFeedback.value.name = "";
      }
    };

    return {
      comments,
      currentIndex,
      nextSlide,
      prevSlide,
      newFeedback,
      submitFeedback,
    };
  },
};
</script>

<style>
#feedback_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin: 40px;
}

#feedback {
  width: 100%;
  padding: 20px;
}

#feedback h3 {
  color: #007bff;
  margin-bottom: 50px;
}

#feedback form {
  display: flex;
  flex-direction: column;
}

#feedback label {
  font-weight: bold;
}

#feedback input,
#feedback textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#feedback button {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

#feedback button:hover {
  background: #0056b3;
}

#img_container {
  text-align: center;
  max-width: 50vw;
}

#img_container img {
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

#carousel {
  display: flex;
  flex-direction: column;
  height: 30vh;
  align-items: center;
  margin: 20px;
}
#comments_card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  border-radius: 50px;
  box-shadow: 0 1px 20px #007bff;
}
#comments_card p {
  font-size: larger;
}
@media screen and (max-width: 768px) {
  #feedback_container {
    display: flex;
    flex-direction: column;
  }
}
</style>

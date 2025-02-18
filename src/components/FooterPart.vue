<script>
export default {
  data() {
    return {
      sub: false,
      email: "",
    };
  },
  methods: {
    onClick() {
      if (this.email !== "") {
        this.sub = true;
      }
    },
  },
};
</script>

<template>
  <footer id="footer_container">
    <div id="icon_links">
      <a href="https://instagram.com" target="_blank">
        <img src="/assets/instagramLogo.png" alt="Instagram" />
      </a>
      <a href="https://twitter.com" target="_blank">
        <img src="/assets/xlogo.png" alt="Twitter" />
      </a>
      <a href="https://youtube.com" target="_blank">
        <img src="/assets/youtubeLogo.png" alt="YouTube" />
      </a>
    </div>

    <div class="footer_links">
      <p><a href="#">Sources</a></p>
      <p><a href="#">Media</a></p>
      <p><a href="#">Sponsors</a></p>
    </div>

    <div class="footer_section" id="signUp">
      <label for="email">Want our newsletter?</label>
      <div class="input_group">
        <input
          v-model="email"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
        <button type="submit" @click="onClick()">Subscribe</button>
      </div>
      <p v-if="sub && email !== ''" id="subscribed-message">
        You have subscribed! {{ email }}
      </p>
    </div>

    <p class="copyright">&copy; 2025 School Project</p>
  </footer>
</template>

<style>
#footer_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #164dfa, #1a75ff);
  padding: 20px 10%;
  color: white;
  text-align: center;
  bottom: 0;
  position: relative;
  border-top: 3px solid rgba(255, 255, 255, 0.2);
}

.footer_section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
}

#icon_links {
  display: flex;
  gap: 15px;
}

#icon_links a {
  transition: transform 0.3s ease-in-out;
}

#icon_links img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s, filter 0.3s;
}

#icon_links a:hover img {
  transform: scale(1.2);
  filter: brightness(1.2);
}

.footer_links p {
  margin: 5px 0;
  font-size: 16px;
}

.footer_links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.footer_links a:hover {
  color: #ffd700;
}

#signUp {
  text-align: center;
}

#signUp label {
  font-size: 14px;
  margin-bottom: 8px;
}

.input_group {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}

#email {
  padding: 8px;
  border: none;
  border-radius: 5px;
  width: 200px;
}

button {
  padding: 8px 15px;
  border: none;
  background-color: #ffd700;
  color: black;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ffc107;
}

.copyright {
  font-size: 12px;
  opacity: 0.8;
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
#subscribed-message {
  margin-top: 15px;
  background-color: #2c9dff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease-in-out;
}

.subscribed-message:hover {
  opacity: 0.9;
}
</style>

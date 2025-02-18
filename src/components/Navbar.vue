<script>
export default {
  data() {
    return {
      loginForm: false,
      name: "",
      afterLogin: false,
    };
  },
  methods: {
    onClick() {
      this.loginForm = !this.loginForm;
    },
    sayHi() {
      this.afterLogin = !this.afterLogin;

      this.afterLogin = true;
      this.loginForm = false;
    },
  },
};
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </nav>
    <p v-if="afterLogin" id="status">Logged in as - {{ name }}</p>
    <div id="star_container">
      <i class="fas fa-sign-in-alt" @click="onClick"></i>
    </div>

    <transition name="slide">
      <div v-if="loginForm" id="login_container">
        <form id="login_form" @submit.prevent="sayHi">
          <h4>Log in</h4>
          <input
            v-model="name"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    </transition>
  </header>
</template>

<style>
header {
  display: flex;
  background-color: rgb(22, 95, 242);
  align-items: center;
  justify-content: space-between;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
}

nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-weight: bold;
}
#star_container {
  position: relative;
  display: inline-block;
  color: gold;
  font-size: 32px;
  margin: 20px;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-enter-active {
  animation: twistIn 1s ease-out;
  transition: all 1s ease;
}

.slide-leave-to {
  transform: translateY(-50px);
}
.slide-leave-active {
  animation: twistback 1s ease-out;
  transition: all 1s ease;
}

@keyframes twistIn {
  0% {
    opacity: 0;
    transform: translateY(-50px) rotateY(90deg);
  }
  25% {
    opacity: 0.5;
    transform: translateY(-25px) rotateY(180deg);
  }
  50% {
    opacity: 0.75;
    transform: translateY(0) rotateY(270deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateY(360deg);
  }
}
@keyframes twistback {
  0% {
    opacity: 1;
    transform: translateX(0) rotateY(90deg);
  }
  25% {
    opacity: 0.5;
    transform: translateX(50px) rotateY(180deg);
  }
  50% {
    opacity: 0;
    transform: translateX(150px) rotateY(270deg);
  }
  100% {
    opacity: 0;
    transform: translateX(500px) rotateY(360deg);
  }
}

#login_container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: 20px;
  border-radius: 20px;
  top: 60px;
  right: -15px;
  padding: 20px;
  width: 300px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid gold;
}

#login_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: white;
}
#login_form input {
  margin: 10px;
  border-radius: 10px;
  border: 2px solid #ccc;
  outline: none;
  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
#login_form input:focus {
  border-color: #46d300;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
#login_form button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: gold;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease-in-out, transform 0.2s ease-in-out;
  margin-bottom: 20px;
}
#login_form button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
#status {
  background-color: #2c9dff;
  color: gold;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

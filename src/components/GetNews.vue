<script>
export default {
  data() {
    return {
      news: [],
      league: "NFL",
      leaguesList: [
        "NFL",
        "NHL",
        "NBA",
        "MLB",
        "PREMIER LEAGUE",
        "COLLEGE FOOTBALL",
        "UFC",
      ],
      showFavorites: false,
      favorites: [],
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      if (this.league === "") return;

      fetch(
        `https://newsapi.org/v2/everything?q=${this.league}&pageSize=12&apiKey=3e21dcda33f344b68f122ff3899c6f25`
      )
        .then((response) => response.json())
        .then((data) => {
          this.news = data.articles;
        })
        .catch((error) => console.error("Error fetching news:", error));
    },
    onLeagueChange() {
      this.fetchNews();
    },
    ShowFavorites_container() {
      this.showFavorites = !this.showFavorites;
    },

    addFavorite(article) {
      this.favorites.push(article);
    },
    remove() {
      this.favorites = [];
    },
  },
};
</script>

<template>
  <div id="favorite_counter">
    <button @click="ShowFavorites_container()">
      Show favorites
      <span v-if="favorites.length > 0">{{ favorites.length }}</span>
    </button>
  </div>

  <transition name="slider">
    <div id="favorite_container" v-if="showFavorites && favorites.length > 0">
      <h3>Favorites</h3>
      <ul>
        <li v-for="(article, index) in favorites" :key="index">
          <strong>{{ article.title }}</strong
          ><br />
          - {{ article.source.name }}
        </li>
      </ul>
      <button @click="remove()">X</button>
    </div>
  </transition>

  <div id="search_container">
    <div id="actions">
      <h2>Search Sports News:</h2>

      <label for="league-select">Choose a League:</label>
      <select id="league-select" v-model="league">
        <option disabled value="">Select a league</option>
        <option
          v-for="(league, index) in leaguesList"
          :key="index"
          :value="league"
        >
          {{ league }}
        </option>
      </select>
      <input type="button" value="submit" @click="onLeagueChange" />
    </div>

    <ul v-if="news.length > 0">
      <li id="newscard" v-for="(article, index) in news" :key="index">
        <img
          v-if="article.urlToImage"
          :src="article.urlToImage"
          alt="Article image"
        />
        <strong>{{ article.title }}</strong> - {{ article.source.name }}
        <p>{{ article.description }}</p>
        <a :href="article.url" target="_blank">Read more</a>
        <button id="mylist" @click="addFavorite(article)">
          Add to my list
        </button>
      </li>
    </ul>
    <p v-else>If no news is displayed, please choose a league.</p>
  </div>
</template>

<style>
#search_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
#actions {
  margin: 20px;
}
#actions input {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
img {
  width: 80%;
  height: 200px;
  object-fit: cover;
}
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
#newscard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  padding: 10px;
  align-items: center;
}
#newscard button {
  width: auto;
  max-width: 200px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
}
#newscard strong {
  font-size: 18px;
  margin-bottom: 10px;
}
#newscard p {
  font-size: 16px;
  margin-bottom: 15px;
}
#newscard a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}
#favorite_container {
  background-color: #ffffff;
  border: 0.5px solid black;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  margin: 30px auto;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

#favorite_container h3 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

#favorite_container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#favorite_container ul li {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

#favorite_container ul li:hover {
  background-color: #f0f0f0;
  color: #007bff;
}

#favorite_container button {
  background-color: #007bff;
  width: 100%;
  color: white;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  transition: background-color 0.3s ease, transform 0.2s ease-in-out;
}

#favorite_container button:hover {
  background-color: #0056b3;
  transform: scale(1.02);
}
#favorite_counter {
  position: relative;
  display: inline-block;
}
#favorite_counter span {
  font-size: 18px;
  border-radius: 50%;
  background-color: #007bff;
  position: absolute;
  color: gold;
  top: 20px;
  right: -15px;
  width: 20px;
}
.slider-enter-from {
  transform: translateX(-1000px);
  opacity: 0;
}
.slider-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slider-enter-active {
  transition: 0.5s ease-in !important;
}

.slider-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slider-leave-to {
  transform: translateX(+1000px);
  opacity: 0;
}
.slider-leave-active {
  transition: all 0.5s ease-out !important;
}
@media screen and (max-width: 768px) {
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 500px) {
  ul {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div>
    <router-link to="/books">Books</router-link>
    <router-link to="/">Home</router-link>
    <ul v-if="books.length">
      <Book
        v-for="book in books"
        :book="book"
        :key="book.id"
        v-on:deleteBook="deleteBook"
      >
      </Book>
    </ul>
    <div v-if="cart.length">
      <h1>Twoj koszyk:</h1>
      <ul>
        <li v-for="item in cart" :item="item" :key="item.id">
          {{ item.name }}, cena: {{ item.price }}
        </li>
      </ul>
    </div>
    <p v-if="loading">
      Trwa pobieranie danych...
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Book from "./Book";

export default {
  name: "App",
  components: {
    Book,
  },
  data: function() {
    return {};
  },
  computed: mapState(["books", "cart", "loading"]),
  methods: {
    deleteBook(id) {
      console.log(id);
      this.books = this.books.filter((book) => book.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  margin: 1rem;
}

ul {
  list-style: none;
}

li + li {
  margin: 1rem 0;
}

button {
  text-transform: uppercase;
  border: 2px solid #42b883;
  margin: 0 5px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  padding: 4px 1rem;
  transition: all 0.5s;
}

button:hover {
  background: #42b883;
  color: white;
}
</style>

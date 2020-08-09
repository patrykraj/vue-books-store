<template>
  <div>
    <router-link to="/books">Books</router-link>
    <router-link to="/">Home</router-link>
    <h1>Homepage</h1>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  components: {},
  data: function() {
    return {
      books: [
        {
          id: 1,
          name: "Programowanie PHP",
          type: 0,
          price: 80000,
          author: "Roman Pirece",
        },
        {
          id: 2,
          name: "Jak zacząć z JS",
          type: 1,
          price: 12000,
          author: "Władek Michaś",
        },
        {
          id: 3,
          name: "Bezpieczeństwo aplikacji Web",
          type: 2,
          price: 200000,
          author: "Jan Władeczek",
        },
        {
          id: 4,
          name: "Aplikacje WWW w C#",
          type: 1,
          price: 2,
          author: "Jan Olbrycki",
        },
      ],
    };
  },
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
</style>

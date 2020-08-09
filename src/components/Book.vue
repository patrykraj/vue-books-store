<template>
  <li>
    {{ book.name }}
    <button v-on:click="addBook(book)">Dodaj do koszyka</button>
    <button v-on:click="deleteBook(book.id)">&times;</button>
  </li>
</template>

<script type="text/javascript">
import { mapMutations } from "vuex";

export default {
  props: ["book"],
  methods: {
    ...mapMutations(["addBook", "deleteBook"]),
  },
};
</script>

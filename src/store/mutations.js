const mutations = {
  addBook({ cart }, book) {
    cart.push(book);
    console.log("Koszyk:", cart);
  },

  deleteBook({ books }, id) {
    const newBooks = books.filter((book) => book.id !== id);
    this.state.books = newBooks;
  },
};

export default mutations;

import getBooks from "../api";

const actions = {
  getBooksFromBackend() {
    this.state.loading = true;
    setTimeout(() => {
      getBooks.then((books) => {
        this.state.loading = false;
        this.state.books = books;
      });
    }, 2000);
  },
};

export default actions;

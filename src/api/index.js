const books = [
  {
    id: 1,
    name: "Programowanie PHP",
    type: 0,
    price: 80000,
    author: "Roman Pirece",
    poster:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
  },
  {
    id: 2,
    name: "Jak zacząć z JS",
    type: 1,
    price: 12000,
    author: "Władek Michaś",
    poster:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
  },
  {
    id: 3,
    name: "Bezpieczeństwo apilkacji web",
    type: 2,
    price: 200000,
    author: "Jan Władeczek",
    poster:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
  },
  {
    id: 4,
    name: "Aplikacje WWW w C#",
    type: 1,
    price: 2,
    author: "Jan Olbrycki",
    poster:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
  },
];

const getBooks = new Promise((resolve) => {
  setTimeout(() => {
    resolve(books);
  }, 2000);
});

export default getBooks;

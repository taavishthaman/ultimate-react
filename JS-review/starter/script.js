const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
// const book = getBook(3);
// const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;
// console.log(title, author, genres);

// //Rest
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// //Spread
// const newGenres = [...genres, 'epic fantasy'];
// console.log(newGenres)

// //Spread the object
// const updatedBook = {...book, 
//   //Adding a new property
//   moviePublicationDate : "2001-12-19"};
// console.log(updatedBook);

// const summary = `${title}, is a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split('-')[0]}.`;
// summary;

// const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
// console.log(pagesRange);
// console.log(`The book ${title} has ${pagesRange} pages.`);

// // function getYear(str) {
// //   return str.split('-')[0];
// // };

// const getYear = str => str.split('-')[0]

// console.log(getYear(publicationDate));

// //Short Circuiting
// //&& operator short circuits whenever the first operand is false and returns that operand
// //If no operand is false in the entire chain it return the last operand
// console.log(true && 'Some String')
// console.log(false && 'Some String')

// console.log(hasMovieAdaptation && 'This book has a movie!')

// //falsy: 0, '', null, undefined, NaN
// console.log(0 && 'Some String')

// //|| operator works in the opposite way of && chain. It short circuits as soon as the first value is truthy and returns
// //that value. If no value is truthy it returns the last value
// console.log(true || 'Some string')
// console.log(false || 'Some string')
// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation;

// // console.log(book.reviews.librarything.reviewsCount);
// // const countWrong = book.reviews.librarything.reviewsCount || 'No Data';
// // console.log(countWrong);

// // const count = book.reviews.librarything.reviewsCount ?? 'No Data';
// // console.log(count);

// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }

// // const total = getTotalReviewCount(book);
// // console.log(total);

// const books = getBooks();
// // const x = [1,2,3,4,5].map(el => el * 2);
// // console.log(x);

// // const titles = books.map(book => book.title);
// // console.log(titles);

// // const essentialData = books.map(book => ({title : book.title, author : book.author, reviewsCount : getTotalReviewCount(book)}));
// // console.log(essentialData)

// const longBooks = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation);
// console.log(longBooks);

// const adventureBooks = books.filter(book => book.genres.includes('adventure')).map(book => book.title);
// console.log(adventureBooks);

// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(pagesAllBooks);

// const x = [3,7,1,9,6];
// //Slice is important because it will create a copy of the original array because sort method sorts the original array 
// //instead of creating a copy
// const sorted = x.slice().sort((a, b) => a - b);
// console.log(sorted);

// console.log(x);

// const sortedByPages = books.slice().sort((b1, b2) => b2.pages - b1.pages);
// console.log(sortedByPages);

// //1) Add book object to array
// const newBook = {
//   id : 6, 
//   title : 'Harry Potter and the Chamber of Secrets',
//   author : 'J. K. Rowling'
// };

// const booksAfterAdd = [...books, newBook];

// //2. Delete a book object from array
// const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
// booksAfterDelete

// //3 Update book object in array

// const booksAfterUpdate = booksAfterDelete.map(book => book.id === 1 ? { ...book, pages : 1210 } : book)
// console.log(booksAfterUpdate)

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(`Something went wrong ${err}`));

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  
  return data;
}

//Don't do this, just handle everything inside getTodos
// (async function() {
//   const todos = await getTodos();
//   console.log(todos)
// })();
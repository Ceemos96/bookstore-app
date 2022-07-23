import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const AddBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const RemoveBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookList = [
  {
    title: 'Harry Potter',
    author: 'J.K Rowling',
    id: uuidv4(),
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyer',
    id: uuidv4(),
  },
  {
    title: 'Thor',
    author: 'Stan Lee',
    id: uuidv4(),
  },
];

const BooksReducer = (state = bookList, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const addedBook = {
        id: uuidv4(),
        ...action.book,
      };
      return [
        ...state, addedBook,
      ];
    }

    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.id);

    default:
      return state;
  }
};

export default BooksReducer;

import { v4 as uuidv4 } from 'uuid';

export const AddBook = (book) => ({
  type: 'ADD_BOOK',
  book,
});

export const RemoveBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

const BooksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      const addedBook = {
        id: uuidv4(),
        ...action.book,
      };
      return [
        ...state, addedBook,
      ];
    }

    case 'REMOVE_BOOK':
      return state.filter((books) => books.id !== action.id);

    default:
      return state;
  }
};

export default BooksReducer;

const bookList = [];

const BooksReducer = (state = bookList, action) => {
  switch (action.type) {
    case 'bookstore/ADD_ASYNC_BOOK/fulfilled': {
      return [...state, action.payload.book];
    }
    case 'bookstore/DELETE_ASYNC_BOOK/fulfilled': {
      return state.filter((book) => book.item_id !== action.payload.id);
    }
    case 'bookstore/GET_ASYNC_BOOK/fulfilled': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default BooksReducer;

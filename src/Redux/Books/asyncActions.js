import { createAsyncThunk } from '@reduxjs/toolkit';
import services from '../../services/services';

export const ADD_ASYNC_BOOK = 'bookstore/ADD_ASYNC_BOOK';
export const DELETE_ASYNC_BOOK = 'bookstore/DELETE_ASYNC_BOOK';
export const GET_ASYNC_BOOK = 'bookstore/GET_ASYNC_BOOK';

export const addbook = createAsyncThunk(
  ADD_ASYNC_BOOK,
  async (book) => {
    const response = await services.create(book);
    const { data } = response;
    return { book, data };
  },
);

export const deleteBook = createAsyncThunk(
  DELETE_ASYNC_BOOK,
  async (id) => {
    const response = await services.remove(id);
    const { data } = response;
    return { id, data };
  },
);

const transform = (data) => {
  const arr = Object.entries(data);

  let result = [];
  arr.forEach((item) => {
    const itemId = item[0];
    const book = item[1][0];
    book.item_id = itemId;
    result = [...result, book];
  });
  return result;
};

export const getBooks = createAsyncThunk(
  GET_ASYNC_BOOK,
  async () => {
    const response = await services.getAll();
    const data = transform(response.data);
    return data;
  },
);

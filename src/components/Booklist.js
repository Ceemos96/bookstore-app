import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputBook from './InputBook';
import Book from './Book';
import { getBooks } from '../Redux/Books/asyncActions';

const Booklist = () => {
  const list = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks()).then((data) => data);
  }, []);

  return (
    <div>
      {list.map((book) => <Book key={book.item_id} data={book} />)}
      <InputBook />
    </div>
  );
};

export default Booklist;

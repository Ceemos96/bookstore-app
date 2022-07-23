import React from 'react';
import { useSelector } from 'react-redux';
import InputBook from './InputBook';
import Book from './Book';

const Booklist = () => {
  const list = useSelector((state) => state.books);

  return (
    <div>
      {list.map((book) => <Book key={book.id} data={book} />)}
      <InputBook />
    </div>
  );
};

export default Booklist;

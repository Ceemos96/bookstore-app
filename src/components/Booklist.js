import React from 'react';
import InputBook from './InputBook';
import Book from './Book';

const Booklist = () => {
  const list = [
    {
      title: 'Harry Potter',
      author: 'J.K Rowling',
      id: 1,
    },
    {
      title: 'Twilight',
      author: 'Stephanie Meyer',
      id: 2,
    },
  ];

  return (
    <div>
      {list.map((book) => <Book key={book.id} data={book} />)}
      <InputBook />
    </div>
  );
};

export default Booklist;

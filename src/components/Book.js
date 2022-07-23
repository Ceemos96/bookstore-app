/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */

import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../Redux/Books/Books.js';

const Book = ({ data: { title, author, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(RemoveBook(id));

  return (
    <div className="book-item">
      <div className="book-info">
        <p className="title">{ title }</p>
        <p className="author">{ author }</p>
      </div>
      <ul className="book-actions">
        <li>Comments</li>
        <li>
          <button className="remove" type="button" onClick={handleDelete}>Remove</button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

export default Book;

/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../Redux/Books/asyncActions';

const Book = ({ data: book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteBook(book.item_id));

  return (
    <div className="book-item">
      <div className="book-info">
        <p className="title">{ book.title }</p>
        <p className="author">{ book.author }</p>
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

Book.defaultProps = {
  title: null,
  author: null,
  item_id: null,
};

Book.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  author: PropTypes.string,
  title: PropTypes.string,
  item_id: PropTypes.number,
};

export default Book;

/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../Redux/Books/asyncActions';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ data: book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteBook(book.item_id));
  const randomNumber = () => Math.floor(Math.random() * 100);
  const rand = randomNumber();
  const chapter = Math.floor((rand / 100) * 110);

  return (
    <div className="book-container">
      <div className="book-item">
        <div className="book-info">
          <p className="category">{book.category}</p>
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
        </div>
        <ul className="book-actions">
          <li>Comments</li>
          <li>
            <button className="remove" type="button" onClick={handleDelete}>Remove</button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="progress">
        <div className="circular-progress-bar">
          <CircularProgressbar
            className="progress-bar"
            value={rand}
          />
        </div>
        <div className="percentage">
          <p>
            {rand}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="progress-info">
        <p>CURRENT CHAPTER</p>
        <p>
          Chapter
          {' '}
          {chapter}
        </p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
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

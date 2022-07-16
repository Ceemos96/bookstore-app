/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';

const Book = ({ data: { title, author } }) => (
  <div>
    <div className="book-info">
      <p>{ title }</p>
      <p>{ author }</p>
    </div>
    <ul className="book-actions">
      <li>Comments</li>
      <li>
        <button type="button">Remove</button>
      </li>
      <li>Edit</li>
    </ul>
  </div>
);

export default Book;

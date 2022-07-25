/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux/';
import { AddBook } from '../Redux/Books/Books.js';

const InputBook = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const handleKeydown = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      dispatch(AddBook(input));
    }
    setInput({
      title: '',
      author: '',
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="input-fields data-field">
        <input
          required
          type="text"
          className="input-book"
          placeholder="Add book here"
          name="title"
          value={input.title}
          onChange={handleKeydown}
        />
        <input
          required
          type="text"
          className="input-author"
          placeholder="Add author here"
          name="author"
          value={input.author}
          onChange={handleKeydown}
        />
        <button type="submit" className="input-submit">
          ADD BOOK NOW
        </button>
      </div>

    </form>
  );
};

export default InputBook;

/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/';
import { addbook } from '../Redux/Books/asyncActions';

const InputBook = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: '',
    author: '',
    category: '',
    item_id: '',
  });

  const handleKeydown = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
      category: 'Fiction',
      item_id: uuidv4(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.title.trim() && input.author.trim()) {
      dispatch(addbook(input)).then((data) => data);
    }
    setInput({
      title: '',
      author: '',
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="input-fields">
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

const InputBook = () => (
  <form className="form-container">
    <input
      type="text"
      className="input-book"
      placeholder="Add book here"
      name="book-input"
    />
    <input
      type="text"
      className="input-author"
      placeholder="Add author here"
      name="book-author"
    />
    <button type="submit" className="input-submit">
      ADD BOOK NOW
    </button>
  </form>
);

export default InputBook;

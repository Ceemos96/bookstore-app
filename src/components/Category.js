/* eslint-disable import/extensions */
import { useSelector, useDispatch } from 'react-redux';
import { StatusCheck } from '../redux/Categories/Categories.js';

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const handleClick = () => dispatch(StatusCheck());

  return (
    <div>
      <button onClick={handleClick} type="button">Check Status</button>
      <h1>{category[0]}</h1>
    </div>

  );
};

export default Category;

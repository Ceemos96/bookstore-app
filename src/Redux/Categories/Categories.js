const CHECK_STATUS = 'CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return [...state, 'Page Under Construction'];
    default: return state;
  }
};

export const StatusCheck = () => ({
  type: CHECK_STATUS,
});

export default categoriesReducer;

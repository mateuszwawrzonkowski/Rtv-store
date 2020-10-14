import initialState from './initialState';

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('tv'):
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default productsReducer;

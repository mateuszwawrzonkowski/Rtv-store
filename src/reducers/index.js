import { combineReducers } from 'redux';
import products from './productsReducer';
import shops from './shopsReducer';

export default combineReducers({
  products,
  shops,
});

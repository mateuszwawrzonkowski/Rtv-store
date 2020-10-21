/* eslint-disable no-return-assign */
import * as actionType from 'actions/actionTypes';

const initialState = {
  products: [
    {
      id: 1,
      category: 'tv',
      brand: 'SONY',
      model: 'KDL-XF9005',
      price: 500,
      description: '55 inches tv',
      available: 7,
    },
    {
      id: 2,
      category: 'tv',
      brand: 'SONY',
      model: 'KDL-XF9005',
      price: 500,
      description: '65 inches tv',
      available: 2,
    },
    {
      id: 3,
      category: 'tv',
      brand: 'SONY',
      model: 'KDL-XF9005',
      price: 500,
      description: '55 inches tv',
      available: 1,
    },
    {
      id: 4,
      category: 'tv',
      brand: 'SONY',
      model: 'KDL-XF9005',
      price: 500,
      description: '85 inches tv',
      available: 3,
    },
    {
      id: 5,
      category: 'tv',
      brand: 'SONY',
      model: 'KDL-XF9505',
      price: 700,
      description: '55 inches tv',
      available: 0,
    },
    {
      id: 6,
      category: 'smartphone',
      brand: 'SONY',
      model: 'KDL-XF9505',
      price: 700,
      description: '55 inches tv',
      available: 5,
    },
    {
      id: 7,
      category: 'smartphone',
      brand: 'SONY',
      model: 'KDL-XF9505',
      price: 700,
      description: '55 inches tv',
      available: 2,
    },
    {
      id: 8,
      category: 'smartphone',
      brand: 'SONY',
      model: 'KDL-XF9505',
      price: 700,
      description: '55 inches tv',
      available: 0,
    },
    {
      id: 9,
      category: 'smartphone',
      brand: 'SONY',
      model: 'KDL-XF9505',
      price: 700,
      description: '55 inches tv',
      available: 3,
    },
    {
      id: 10,
      category: 'smartphone',
      brand: 'SONY',
      model: 'KDL-XF9505',
      price: 700,
      description: '55 inches tv',
      available: 2,
    },
  ],
  cart: [
    {
      id: 10,
      category: 'smartphone',
      brand: 'SONY',
      model: 'KDL-XF9505',
      price: 700,
      description: '55 inches tv',
      available: 2,
      inCart: 1,
    },
    {
      id: 4,
      category: 'tv',
      brand: 'SONY',
      model: 'KDL-XF9005',
      price: 500,
      description: '85 inches tv',
      available: 3,

    },
  ],
  cartAmount: 0,
  cartTotal: 0,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionType.DECREASE_PRODUCT):
      return {
        ...state,
        cart: state.cart.map((item) => (
          (item.id === action.payload.id) && item.inCart > 0
            ? { ...item, inCart: item.inCart -= 1 }
            : { ...item }
        )),
        cartAmount: state.cartAmount > 0 && state.cartAmount - 1,
      };
    case (actionType.INCREASE_PRODUCT):
      return {
        ...state,
        cart: state.cart.map((item) => (
          (item.id === action.payload.id)
            ? { ...item, inCart: item.inCart += 1 }
            : { ...item }
        )),
        cartAmount: state.cartAmount += 1,
      };
    case (actionType.ADD_TO_CART):
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default productsReducer;

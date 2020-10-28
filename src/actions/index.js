import * as actionTypes from 'actions/actionTypes';

export const decreaseProduct = (id, inCart) => ({
  type: actionTypes.DECREASE_PRODUCT,
  payload: {
    id,
    inCart,
  },
});

export const increaseProduct = (id, inCart) => ({
  type: actionTypes.INCREASE_PRODUCT,
  payload: {
    id,
    inCart,
  },
});

export const addToCart = (id, category, brand, model, price, description, available, img) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id,
    category,
    brand,
    model,
    price,
    description,
    available,
    img,
  },
});

export const removeFromCart = (id, inCart) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id,
    inCart,
  },
});

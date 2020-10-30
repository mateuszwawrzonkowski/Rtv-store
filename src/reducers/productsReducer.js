/* eslint-disable no-return-assign */
import * as actionType from 'actions/actionTypes';
import {
  SONY65XH9005, SONY50WF660, SONY49XH8096, SONY43XG8096, iPhone11Pro,
  iPhoneXS, LG43LM6300PLA, LG32LM6300PLA, SAMSUNGGALAXYNOTE10, HTZF9, HWT450,
} from 'assets';

const initialState = {
  products: [
    {
      id: 1,
      category: 'tv',
      brand: 'SONY',
      model: 'KD-65XH9005',
      price: 5399,
      description: '65 inches TV',
      available: 3,
      img: SONY65XH9005,
    },
    {
      id: 2,
      category: 'tv',
      brand: 'SONY',
      model: 'KD-55XH9005',
      price: 4299,
      description: '65 inches TV',
      available: 2,
      img: SONY65XH9005,
    },
    {
      id: 3,
      category: 'tv',
      brand: 'SONY',
      model: 'KD-49XH8096',
      price: 2929,
      description: '49 inches TV',
      available: 1,
      img: SONY49XH8096,
    },
    {
      id: 4,
      category: 'tv',
      brand: 'SONY',
      model: 'KDL-50WF665',
      price: 1999,
      description: '50 inches full hd tv',
      available: 3,
      img: SONY50WF660,
    },
    {
      id: 5,
      category: 'tv',
      brand: 'SONY',
      model: 'KD-43XH8505',
      price: 3499,
      description: '43 inches tv',
      available: 0,
      img: SONY43XG8096,
    },
    {
      id: 6,
      category: 'tv',
      brand: 'LG',
      model: '43LM6300PLA',
      price: 1197,
      description: '43 inches tv',
      available: 5,
      img: LG43LM6300PLA,
    },
    {
      id: 7,
      category: 'tv',
      brand: 'LG',
      model: 'LG32LM6300PLA',
      price: 2497,
      description: '65 inches tv',
      available: 2,
      img: LG32LM6300PLA,
    },
    {
      id: 8,
      category: 'smartphone',
      brand: 'APPLE',
      model: 'iPhone XS',
      price: 4499,
      description: 'apple smartphone',
      available: 1,
      img: iPhoneXS,
    },
    {
      id: 9,
      category: 'smartphone',
      brand: 'APPLE',
      model: 'iPhone 11 Pro',
      price: 5299,
      description: 'apple smartphone',
      available: 0,
      img: iPhone11Pro,
    },
    {
      id: 10,
      category: 'smartphone',
      brand: 'SAMSUNG',
      model: 'Galaxy Note 10',
      price: 3099,
      description: 'samsung smartphone',
      available: 2,
      img: SAMSUNGGALAXYNOTE10,
    },
    {
      id: 11,
      category: 'soundbar',
      brand: 'SONY',
      model: 'HT-ZF9',
      price: 2599,
      description: 'Sony soundbar 3.1',
      available: 3,
      img: HTZF9,
    },
    {
      id: 12,
      category: 'soundbar',
      brand: 'SAMSUNG',
      model: 'HW-T450',
      price: 3099,
      description: 'Samsung soundbar 2.0',
      available: 2,
      img: HWT450,
    },

  ],
  cart: [
  ],
  cartAmount: 0,
  cartTotal: 0,
};

const itemExist = (state, payload) => state.cart.some((item) => item.id === payload.id);

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case (actionType.ADD_TO_CART):
      if (itemExist(state, action.payload)) {
        return {
          ...state,
          cart: state.cart.map((item) => (
            (item.id === action.payload.id)
              ? {
                ...item,
                inCart: item.inCart += 1,
              } : { ...item }
          )),
          cartAmount: itemExist ? state.cartAmount += 1 : state.cartAmount,
        };
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            available: 3,
            inCart: 1,
          },
        ],
        cartAmount: state.cartAmount += 1,
      };

    case (actionType.REMOVE_FROM_CART): {
      let itemAmount = 0;
      state.cart.forEach((item) => {
        if (item.id === action.payload.id) {
          itemAmount = item.inCart;
        }
      });
      return {
        ...state,
        cart: state.cart.filter((item) => (
          item.id !== action.payload.id
        )),
        cartAmount: state.cartAmount - itemAmount,
      }; }

    default:
      return state;
  }
};

export default productsReducer;

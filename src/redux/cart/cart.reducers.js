import { TOGGLE_CART_HIDDEN } from './cart.types';

const initial_state = {
  hidden: true,
};

const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;

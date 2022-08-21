export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_PRODUCTS": {
      return { ...state, products: action.payload };
    }

    case "ADD_TO_CART": {
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    }

    case "REMOVE_FROM_CART": {
      return { ...state, cart: state.cart.filter((cartItem: any) => cartItem.id !== action.payload.id) };
    }

    case "CHANGE_CART_QTY": {
      return {
        ...state,
        cart: state.cart.filter((cartItem: any) => {
          if (cartItem.id === action.payload.id) {
            return (cartItem.qty = action.payload.qty);
          } else {
            return cartItem.qty;
          }
        }),
      };
    }

    // case "CHANGE_CART_QTY": {
    //   return {
    //     ...state,
    //     cart: state.cart.filter((cartItem: any) => (cartItem.id === action.payload.id ? (cartItem.qty = action.payload.qty) : cartItem.qty)),
    //   };
    // }
  }
};

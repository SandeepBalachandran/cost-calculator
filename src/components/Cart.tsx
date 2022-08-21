import React from "react";
import { CartItem, CartItemButtonContainer, CartWrap } from "../styles/styles";

type Props = {
  state: any;
  dispatch: any;
};

const Cart = ({ state, dispatch }: Props) => {
  const changeQty = (id: any, qty: number) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };
  const { cart } = state;
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(cart.reduce((acc: number, curr: { price: any; qty: number }) => acc + Number(curr.price) * curr.qty, 0));
  }, [cart]);
  return (
    <React.Fragment>
      <CartWrap>
        <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
        <b style={{ alignSelf: "center" }}>Subtotal: $ {total}</b>
        {cart.length ? (
          <>
            {cart.map((cartItem: any) => {
              return (
                <>
                  <CartItem key={cartItem.title}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <img src={cartItem.thumbnail} alt={cartItem.title}  />
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                        <span>{cartItem.title}</span>
                        <b>$ {cartItem.price}</b>
                      </div>
                    </div>
                  </CartItem>
                  <CartItemButtonContainer >
                    <button onClick={() => changeQty(cartItem.id, cartItem.qty - 1)}>-</button>
                    <span>{cartItem.qty}</span>
                    <button onClick={() => changeQty(cartItem.id, cartItem.qty + 1)}>+</button>
                  </CartItemButtonContainer>
                </>
              );
            })}
          </>
        ) : (
          <>
            <span>Cart is empty</span>
          </>
        )}
      </CartWrap>
    </React.Fragment>
  );
};

export default Cart;

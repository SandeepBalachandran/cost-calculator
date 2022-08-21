import React from "react";
import { AddButton, ProductWrap, RemoveButton, SingleProduct } from "../styles/styles";

type Props = {
  state: any;
  dispatch: any;
};

const Products = ({ state, dispatch }: Props) => {
  const { products, cart } = state;
  const addtoCart = ({ id, title, thumbnail, price, ...args }: any) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        title,
        thumbnail,
        price,
        qty: 1,
        ...args,
      },
    });
  };

  const removeFromCart = ({ id }: any) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
      },
    });
  };
  return (
    <React.Fragment>
      <ProductWrap>
        {products.map((prod: any) => {
          return (
            <SingleProduct className="" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} style={{ height: 200, objectFit: "cover" }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
              </div>

              {cart.some((item: any) => item.id === prod.id) ? (
                <AddButton onClick={() => removeFromCart(prod)}>Remove from Cart</AddButton>
              ) : (
                <RemoveButton onClick={() => addtoCart(prod)}>Add to cart</RemoveButton>
              )}
            </SingleProduct>
          );
        })}
      </ProductWrap>
    </React.Fragment>
  );
};

export default Products;

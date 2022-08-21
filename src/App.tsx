import React from "react";
import axios from "axios";
import { cartReducer } from "./reducers/cardReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { Flex } from "./styles/styles";

function App() {
  const [state, dispatch] = React.useReducer(cartReducer, {
    products: [],
    cart: [],
  });
  console.log(state);
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Flex className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </Flex>
  );
}

export default App;

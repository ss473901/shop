import React from "react";
import Cart from "./components/Cart/Cart";
import Filters from "./components/Filter/Filters";

import Products from "./components/Product/Products";

function App() {
  return (
    <>
      <Filters />
      <Products />
      <Cart />
    </>
  );
}

export default App;

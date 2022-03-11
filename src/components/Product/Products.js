import Product from "./Product";
import { productsProvider } from "../../features/product/products";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../features/product/productsSlice";

const Products = () => {
  const selectedCategory = useSelector(getSelectedCategory);

  return (
    <ProductContainer>
      {productsProvider
        .filter((product) => {
          if (selectedCategory === "全て") return true;
          return selectedCategory === product.category;
        })
        .map((product) => (
          <Product product={product} />
        ))}
    </ProductContainer>
  );
};

const ProductContainer = styled.div``;

export default Products;

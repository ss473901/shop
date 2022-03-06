import Product from "./Product";

const products = [
  {
    id: 1,
    price: 2500,
    img: "garlic",
    name: "Garlic - 1kg",
    category: "vegetable",
  },
  {
    id: 2,
    price: 2500,
    img: "lemon",
    name: "lemon - 1kg",
    category: "fruit",
  },
];

const Products = () => {
  return (
    <>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </>
  );
};

export default Products;

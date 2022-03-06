import styled from "styled-components";
import CartItem from "./CartItem";

const cartItems = [
  {
    id: 1,
    name: "りんご",
    quantity: 10,
    price: 350,
  },
  {
    id: 2,
    name: "みかん",
    quantity: 10,
    price: 500,
  },
];

const Cart = () => {
  return (
    <CartContainer>
      <Title>Cart</Title>
      <CartTotalPriceContainer>
        <p>Total:</p>
        <CartTotalPrice>2500円</CartTotalPrice>
      </CartTotalPriceContainer>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 250px;
  float: right;
`;

const Title = styled.h2``;

const CartTotalPriceContainer = styled.div`
  text-align: center;
  padding: 10px;
`;

const CartTotalPrice = styled.span`
  font-weight: 700;
  font-size: 30px;
  color: #56cfe1;
`;

export default Cart;

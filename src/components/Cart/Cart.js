import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <CartContainer>
      <Title>Cart</Title>
      <CartTotalPriceContainer>
        <p>Total:</p>
        <CartTotalPrice>{totalPrice}円</CartTotalPrice>
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

import styled from "styled-components";

const CartItem = ({ cartItem }) => {
  return (
    <CartItemContainer>
      <b>商品名:{cartItem.name}</b>
      <p>個数:{cartItem.quantity}</p>
      <p>価格:{cartItem.price}</p>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div``;

export default CartItem;

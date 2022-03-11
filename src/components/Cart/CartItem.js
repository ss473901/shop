import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../features/cart/cartSlice";
import styled from "styled-components";
import { productsProvider } from "../../features/product/products";

const CartItem = ({ cartItem }) => {
  const product = productsProvider.find((p) => p.id === cartItem.productId);
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <b>商品名:{cartItem.name}</b>
      <p>個数:{cartItem.quantity}</p>
      <p>価格:{product.price * cartItem.quantity}円</p>
      <div
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <span>削除</span>
      </div>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div``;

export default CartItem;

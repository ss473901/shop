import styled from "styled-components";

const QuantityButton = ({ quantity, setQuantity }) => {
  const substractQuantity = () => {
    if (quantity <= 1) return;
    const newQunatity = quantity - 1;
    setQuantity(newQunatity);
  };

  const addQuantity = () => {
    const newQunatity = quantity + 1;
    setQuantity(newQunatity);
  };

  return (
    <QuantitiyButton>
      <button onClick={substractQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={addQuantity}>+</button>
    </QuantitiyButton>
  );
};

const QuantitiyButton = styled.div`
  min-width: 120px;
  border: 1px solid #222;
  font-family: Arail;
  width: 120px;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 80px;
  box-shadow: 0 2px 10px rgb(0 0 0 /25%);
  span {
    font-size: 18px;
    margin: 15px;
  }
  button {
    top: 0;
    width: 30px;
    height: 35px;
    line-height: 35px;
    font-size: 18px;
    border: 0;
    background: 0 0;
    font-weight: 500;
    cursor: pointer;
  }
`;

export default QuantityButton;

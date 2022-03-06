import styled from "styled-components";
import QuantityButton from "./QuantityButton";

const Product = ({ product }) => {
  return (
    <SContainer>
      <div>
        <SImg src={`./${product.img}.jpeg`} alt={`${product.img}`} />
      </div>
      <SDescription>
        <STitle>{product.name}</STitle>
        <p>{product.price}円</p>
        <QuantityButton />
        <SButton>カートに入れる</SButton>
        <a href="/">詳細を見る</a>
      </SDescription>
    </SContainer>
  );
};

const SContainer = styled.div`
  float: left;
  margin: 10px;
  padding: 20px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgb(0 0 0 /25%);
  display: flex;
`;

const SImg = styled.img`
  float: left;
  margin: 10px;
  width: 120px;
  height: 250px;
  object-fit: cover;
  border: 1px solid lightgray;
`;

const SDescription = styled.div`
  padding: 10px;
  width: 100%;
  max-height: 300px;
  text-align: center;
`;

const STitle = styled.h2`
  font-weight: bold;
`;

const SButton = styled.button`
  background-color: #56cfe1;
  color: white;
  padding: 5px 25px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 600;
  min-height: 40px;
  border: 1px solid;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 2px 10px rgb(0 0 0 /25%);
  margin-top: 10px;
`;

export default Product;

import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const categories = ["野菜", "果物", "全て"];

const Filters = () => {
  return (
    <BorderContainer>
      <b>Chose category:</b>
      {categories.map((category) => (
        <Filter category={category} />
      ))}
    </BorderContainer>
  );
};

const BorderContainer = styled.div`
  margin: 10px;
  background-color: #fff;
  padding: 20px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 25%);
`;

export default Filters;

import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

const Filters = () => {
  const categories = ["果物", "野菜", "全て"];
  return (
    <BorderContainer>
      <b>Chose category:</b>
      <Filter categories={categories} isActive={true} />
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

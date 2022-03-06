import styled from "styled-components";

const Filter = (isActive, categories) => {
  return (
    <>
      <div></div>
      {isActive ? (
        <FilterButtonActive>カテゴリー</FilterButtonActive>
      ) : (
        <FilterButton>カテゴリー</FilterButton>
      )}
    </>
  );
};

const FilterButtonActive = styled.span``;

const FilterButton = styled.span``;

export default Filter;

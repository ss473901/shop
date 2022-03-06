import styled from "styled-components";

const Filter = ({ isActive, category }) => {
  console.log(category);

  return (
    <>
      {isActive ? (
        <FilterButtonActive>{category}</FilterButtonActive>
      ) : (
        <FilterButton>{category}</FilterButton>
      )}
    </>
  );
};

const FilterButtonActive = styled.span`
  color: #fff;
  cursor: pointer;
  margin: 2px;
  padding: 5px;
  background-color: #56cfe1;
  border: 1px solid;
  border-radius: 10px;
`;

const FilterButton = styled.span`
  color: #fff;
  cursor: pointer;
  margin: 2px;
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;

  &:hover {
    background-color: #56cfe1;
  }
`;

export default Filter;

import { useDispatch, useSelector } from "react-redux";
import {
  filterCategory,
  getSelectedCategory,
} from "../../features/product/productsSlice";

import styled from "styled-components";

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  console.log(category);

  return (
    <>
      {selectedCategory === category ? (
        <FilterButtonActive
          onClick={() => {
            dispatch(filterCategory(category));
          }}
        >
          {category}
        </FilterButtonActive>
      ) : (
        <FilterButton
          onClick={() => {
            dispatch(filterCategory(category));
          }}
        >
          {category}
        </FilterButton>
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
  color: black;
  cursor: pointer;
  margin: 2px;
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
  &:hover {
    background-color: #56cfe1;
    color: #fff;
  }
`;

export default Filter;

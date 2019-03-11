import React, { Dispatch, SetStateAction, useState } from 'react';
import FilterValues from '../types/Filter';

const filterInitial: FilterValues = {
  name: '',
  type: '',
  subType: '',
  school: '',
  used: ''
};

export const useFilter = (): [
  FilterValues,
  Dispatch<SetStateAction<FilterValues>>
] => {
  const [filter, setFilter] = useState(filterInitial);
  return [filter, setFilter];
};

const FilterContext = React.createContext<
  [FilterValues, React.Dispatch<React.SetStateAction<FilterValues>>]
>([
  filterInitial,
  (filter: FilterValues | ((prevState: FilterValues) => FilterValues)) => {}
]);

export default FilterContext;

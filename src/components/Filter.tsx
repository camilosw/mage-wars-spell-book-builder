import React, { FC } from 'react';

import cardTypes from '../data/cardTypes';
import schools from '../data/schools';

export interface FilterValues {
  name: string;
  type: string;
  subType: string;
  school: string;
  used: string;
}

export interface Props {
  onChange: (values: FilterValues) => void;
}

const Filter: FC<Props> = ({ onChange }) => {
  const initialState: FilterValues = {
    name: '',
    type: '',
    subType: '',
    school: '',
    used: ''
  };
  const [filter, setFilter] = React.useState<FilterValues>(initialState);

  const usedValues = [
    { value: '', label: 'Usage' },
    { value: 'used', label: 'Used' },
    { value: 'owned', label: 'Owned' },
    { value: 'usable', label: 'Usable' }
  ];

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFilter = { ...filter, [event.target.name]: event.target.value };
    setFilter(newFilter);
    onChange(newFilter);
  };

  const handleReset = () => {
    setFilter(initialState);
    onChange(initialState);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Search name"
        value={filter.name}
        onChange={handleChange}
      />
      <select name="type" value={filter.type} onChange={handleChange}>
        <option value="">Type</option>
        {cardTypes.map(cardType => (
          <option value={cardType.toLowerCase()} key={cardType}>
            {cardType}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="subType"
        placeholder="Search subtype"
        value={filter.subType}
        onChange={handleChange}
      />
      <select name="school" value={filter.school} onChange={handleChange}>
        <option value="">School</option>
        {schools.map(school => (
          <option value={school} key={school}>
            {school}
          </option>
        ))}
      </select>
      <select name="used" value={filter.used} onChange={handleChange}>
        {usedValues.map(option => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <select name="mage" id="mage" />
      <select name="slot" id="slot" />
      <button onClick={handleReset}>Reset filter</button>
    </div>
  );
};

export default Filter;

import React, { FC } from 'react';

import cardTypes from '../data/cardTypes';
import schools from '../data/schools';

export interface FilterValues {
  name: string;
  cardType: string;
  school: string;
}

export interface Props {
  onChange: (values: FilterValues) => void;
}

const Filter: FC<Props> = ({ onChange }) => {
  const [filter, setFilter] = React.useState<FilterValues>({
    name: '',
    cardType: '',
    school: ''
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFilter = { ...filter, [event.target.name]: event.target.value };
    setFilter(newFilter);
    onChange(filter);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={filter.name}
        onChange={handleChange}
      />
      <select name="cardType" value={filter.cardType} onChange={handleChange}>
        <option value="">All</option>
        {cardTypes.map(cardType => (
          <option value={cardType.toLowerCase()} key={cardType}>
            {cardType}
          </option>
        ))}
      </select>
      <input type="text" name="subtype" id="subtype" />
      <select name="school" value={filter.school} onChange={handleChange}>
        <option value="">All</option>
        {schools.map(school => (
          <option value={school} key={school}>
            {school}
          </option>
        ))}
      </select>
      <select name="used" id="used" />
      <select name="mage" id="mage" />
      <select name="slot" id="slot" />
      <button>Reset filter</button>
    </div>
  );
};

export default Filter;

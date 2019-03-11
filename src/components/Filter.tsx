import React, { useContext } from 'react';
import cardTypes from '../data/cardTypes';
import schools from '../data/schools';
import FilterContext from '../helpers/filter';

const usedValues = [
  { value: 'usable', label: 'Usable' },
  { value: 'owned', label: 'Owned' },
  { value: 'used', label: 'Used' },
  { value: '', label: 'All' }
];

const Filter: React.FC<{}> = () => {
  const [filter, setFilter] = useContext(FilterContext);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFilter = { ...filter, [event.target.name]: event.target.value };
    setFilter(newFilter);
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
      <select name="mage" id="mage" />
      <select name="slot" id="slot" />
      <div>
        {usedValues.map(option => (
          <label key={option.value}>
            <input
              type="radio"
              name="used"
              value={option.value}
              key={option.label}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;

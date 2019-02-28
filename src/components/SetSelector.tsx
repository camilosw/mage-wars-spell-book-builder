import * as React from 'react';

export interface Props {
  label: string;
  id: string;
  selectedOption?: number;
  onChange?: () => void;
}

const SetSelector: React.FC<Props> = ({
  label,
  id,
  selectedOption,
  onChange
}) => (
  <div>
    <label>{label}</label>
    <select>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>
);

SetSelector.defaultProps = {
  selectedOption: 0
};

export default SetSelector;

import React from 'react';
// import cards from '../../data/cards';
import Card from '../Card';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('render Card with data', () => {
  const component = renderer.create(<Card />);
  expect(component.toJSON()).toMatchSnapshot();
});

// describe('<Card />', () => {
//   it('render Card with data', () => {
//     const card = cards[2];
//     // shallow(<Card data={card} />);
//   });
// });

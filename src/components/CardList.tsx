import React from 'react';
import CardType from '../types/Card';
import Card from './Card';

export interface Props {
  cards: CardType[];
}

const CardList: React.SFC<Props> = ({ cards }) => {
  return (
    <div>
      {cards.map(card => (
        <Card card={card} key={card.code} />
      ))}
    </div>
  );
};

export default CardList;

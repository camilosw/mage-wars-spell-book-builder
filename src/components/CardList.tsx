import React from 'react';

import CardRowStyled from '../styles/CardRowStyled';
import Card from '../types/Card';

export interface Props {
  cards: Card[];
}

const CardList: React.SFC<Props> = ({ cards }) => {
  return (
    <div>
      <CardRowStyled>
        <div className="group group-1">
          <div className="cell name">Card Name</div>
          <div className="cell type">Type</div>
          <div className="cell subtype">Subtype</div>
          <div className="cell school">School</div>
        </div>
        <div className="group group-1">
          <div className="cell number level">Level</div>
          <div className="cell number cast">Cast</div>
          <div className="cell number cost">Cost</div>
        </div>
        <div className="group group-1">
          <div className="cell number used">Used</div>
          <div className="cell number total">Total</div>
          <div className="cell number max">Max</div>
          <div className="cell number own">Own</div>
        </div>
      </CardRowStyled>
      {cards.map(card => (
        <CardRowStyled key={card.code}>
          <div className="group group-1">
            <div className="cell name">{card.name}</div>
            <div className="cell type">{card.typeName}</div>
            <div className="cell subtype">
              {card.subtype ? card.subtype : '-'}
            </div>
            <div className="cell school">{card.school}</div>
          </div>
          <div className="group group-1">
            <div className="cell number level">{card.level}</div>
            <div className="cell number cast">{card.cast}</div>
            <div className="cell number cost">X</div>
          </div>
          <div className="group group-1">
            <div className="cell number used">X</div>
            <div className="cell number total">X</div>
            <div className="cell number max">{card.max}</div>
            <div className="cell number own">X</div>
          </div>
        </CardRowStyled>
      ))}
    </div>
  );
};

export default CardList;

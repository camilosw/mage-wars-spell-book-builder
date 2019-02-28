import * as React from 'react';
import styled from '../styles/styled-components';
import CardType from '../types/Card';

const CardRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 2px solid ${props => props.theme.grey300};
  line-height: 1.5;
`;
const VerticalGroup = styled.div``;
const HorizontalGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
const Cell = styled.div`
  padding: 3px 6px;
  &.number {
    width: 40px;
    text-align: center;
  }
  &.name {
    width: 150px;
    font-weight: bold;
  }
  &.type {
    width: 75px;
    background-color: ${props => props.theme.grey400};
    border-radius: 4px;
    color: #fff;
    margin-left: 6px;
    padding-top: 1px;
    padding-bottom: 1px;
    font-weight: bold;
  }
  &.subtype {
    width: 75px;
  }
`;
const CellLabel = styled.div`
  color: #666;
`;
const CellNumber = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export interface Props {
  card: CardType;
}

const Card: React.SFC<Props> = ({ card }) => (
  <CardRow key={card.code}>
    <VerticalGroup>
      <img src={`cards/${card.code}.jpg`} alt="" width="80" />
    </VerticalGroup>
    <VerticalGroup>
      <Cell className="name">{card.name}</Cell>
      <Cell className="type">{card.typeName}</Cell>
      <Cell className="subtype">{card.subType ? card.subType : '-'}</Cell>
      <Cell className="school">{card.school} school</Cell>
    </VerticalGroup>
    <VerticalGroup>
      <HorizontalGroup>
        <Cell className="number level">
          <CellLabel>Level</CellLabel>
          <CellNumber>{card.level}</CellNumber>
        </Cell>
        <Cell className="number cast">
          <CellLabel>Cast</CellLabel>
          <CellNumber>{card.cast}</CellNumber>
        </Cell>
        <Cell className="number cost">
          <CellLabel>Cost</CellLabel>
          <CellNumber>X</CellNumber>
        </Cell>
      </HorizontalGroup>
      <HorizontalGroup>
        <Cell className="number total">
          <CellLabel>Total</CellLabel>
          <CellNumber>X</CellNumber>
        </Cell>
        <Cell className="number max">
          <CellLabel>Max</CellLabel>
          <CellNumber>{card.max}</CellNumber>
        </Cell>
        <Cell className="number own">
          <CellLabel>Own</CellLabel>
          <CellNumber>X</CellNumber>
        </Cell>
      </HorizontalGroup>
      <HorizontalGroup>
        <button>-</button>
        <Cell className="number used">X</Cell>
        <button>+</button>
      </HorizontalGroup>
    </VerticalGroup>
  </CardRow>
);

export default Card;

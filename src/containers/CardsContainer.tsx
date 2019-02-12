import React, { Component } from 'react';

import CardList from '../components/CardList';
import Filter, { FilterValues } from '../components/Filter';
import SpellBook from '../components/SpellBook';
import cards from '../data/cards';
import Card from '../types/Card';

interface State {
  cards: Card[];
}

class CardsContainer extends Component<{}, State> {
  state = {
    cards
  };

  handleFilterChange = (values: FilterValues) => {
    const filteredCards = cards.filter(card => card.type === values.cardType);
    this.setState({ cards: filteredCards });
  };

  render() {
    return (
      <>
        <SpellBook />
        <Filter onChange={this.handleFilterChange} />
        <CardList cards={this.state.cards} />
      </>
    );
  }
}

export default CardsContainer;

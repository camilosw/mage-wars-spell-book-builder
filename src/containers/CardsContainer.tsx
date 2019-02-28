import React, { useState } from 'react';
import CardList from '../components/CardList';
import Filter, { FilterValues } from '../components/Filter';
import SpellBook from '../components/SpellBook';
import cards from '../data/cards';
import Card from '../types/Card';

interface IterableFilterValues extends FilterValues {
  [key: string]: string;
}

const CardsContainer: React.FC<{}> = () => {
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);

  const handleFilterChange = (filters: FilterValues) => {
    const newFilteredCards = cards.filter(card => {
      const iterableFilters = filters as IterableFilterValues;
      for (let key in iterableFilters) {
        if (
          iterableFilters[key] !== '' &&
          !(card[key as keyof Card] as string)
            .toLowerCase()
            .includes(iterableFilters[key].toLowerCase())
        ) {
          return false;
        }
      }
      return true;
    });
    setFilteredCards(newFilteredCards);
  };

  return (
    <div>
      <SpellBook />
      <Filter onChange={handleFilterChange} />
      <CardList cards={filteredCards} />
    </div>
  );
};

export default CardsContainer;

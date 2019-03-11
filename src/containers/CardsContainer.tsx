import React, { useContext, useEffect, useState } from 'react';
import CardList from '../components/CardList';
import Filter from '../components/Filter';
import SpellBook from '../components/SpellBook';
import cards from '../data/cards';
import FilterContext from '../helpers/filter';
import Card from '../types/Card';
import FilterValues from '../types/Filter';

interface IterableFilterValues extends FilterValues {
  [key: string]: string;
}

const CardsContainer: React.FC<{}> = () => {
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);
  const [filter] = useContext(FilterContext);

  useEffect(() => {
    const newFilteredCards = cards.filter(card => {
      const iterableFilters = filter as IterableFilterValues;
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
  }, [filter]);

  return (
    <div>
      <SpellBook />
      <Filter />
      <CardList cards={filteredCards} />
    </div>
  );
};

export default CardsContainer;

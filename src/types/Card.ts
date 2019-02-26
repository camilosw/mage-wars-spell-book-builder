interface Card {
  code: string;
  name: string;
  type: string; // Type name in lowercase for filters. Could be removed?
  subType?: string;
  typeName: string;
  school: string;
  level: string;
  cast: string;
  reveal?: string;
  max: number; // How many cards can be added to the book
  count: {
    // How many cards are owned based on the owned sets
    [name: string]: number;
  };
}

export default Card;

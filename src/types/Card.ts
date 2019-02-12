interface Card {
  code: string;
  name: string;
  type: string;
  subtype?: string;
  typeName: string;
  school: string;
  level: string;
  cast: string;
  reveal?: string;
  max: number;
  count: {
    [name: string]: number;
  };
}

export default Card;

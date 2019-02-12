interface Mage {
  name: string;
  type: string;
  card: string;
  cost: number[];
  schools: string[];
  isAcademy?: boolean;
}

export default Mage;

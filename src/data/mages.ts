import Mage from '../types/Mage';

const mages: Mage[] = [
  {
    name: 'Wizard (Air)',
    type: 'Wizard',
    card: 'Wizard.jpg',
    cost: [1, 2, 2, 2, 2, 2, 2, 1, 2, 2],
    schools: ['Arcane', 'Air']
  },
  {
    name: 'Beastmaster',
    type: 'Beastmaster',
    card: 'Beastmaster.jpg',
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 2, 2],
    schools: ['Nature']
  },
  {
    name: 'Warlock',
    type: 'Warlock',
    card: 'Warlock.jpg',
    cost: [2, 2, 2, 1, 3, 1, 2, 2, 2, 2],
    schools: ['Dark', 'Fire']
  },
  {
    name: 'Priestess',
    type: 'Priestess',
    card: 'Priestess.jpg',
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 2, 2],
    schools: ['Holy']
  },
  {
    name: 'Priest',
    type: 'Priestess',
    card: 'Priest.jpg',
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 2, 2],
    schools: ['Holy']
  },
  {
    name: 'Forcemaster',
    type: 'Forcemaster',
    card: 'Forcemaster.jpg',
    cost: [2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    schools: ['Mind']
  },
  {
    name: 'Johktari Beastmaster',
    type: 'Beastmaster',
    card: 'Beastmaster2.jpg',
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 2, 2],
    schools: ['Nature']
  },
  {
    name: 'Warlord',
    type: 'Warlord',
    card: 'Warlord.jpg',
    cost: [2, 2, 1, 2, 2, 2, 2, 3, 1, 2],
    schools: ['War', 'Earth']
  },
  {
    name: 'Druid',
    type: 'Druid',
    card: 'Druid.jpg',
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 3, 2],
    schools: ['Nature']
  },
  {
    name: 'Necromancer',
    type: 'Necromancer',
    card: 'Necromancer.jpg',
    cost: [2, 2, 2, 2, 3, 1, 2, 2, 2, 2],
    schools: ['Dark']
  },
  {
    name: 'Anvil Throne Warlord',
    type: 'Warlord',
    card: 'Warlord2.jpg',
    cost: [2, 2, 1, 2, 2, 2, 2, 3, 1, 2],
    schools: ['War', 'Earth']
  },
  {
    name: 'Adramelech Warlock',
    type: 'Warlock',
    card: 'Warlock2.jpg',
    cost: [2, 2, 2, 1, 3, 1, 2, 2, 2, 2],
    schools: ['Dark', 'Fire']
  },
  {
    name: 'Paladin',
    type: 'Paladin',
    card: 'Paladin.jpg',
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 1, 2],
    schools: ['Holy', 'War']
  },
  {
    name: 'Siren',
    type: 'Siren',
    card: 'Siren.jpg',
    cost: [2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    schools: ['Water']
  },
  {
    isAcademy: true,
    name: 'Academy Wizard',
    type: 'Wizard',
    card: 'academy_wizard.jpg',
    cost: [1, 2, 2, 2, 2, 2, 2, 1, 2, 2],
    schools: ['Arcane', 'Air']
  },
  {
    isAcademy: true,
    name: 'Academy Warlock',
    type: 'Warlock',
    card: 'academy_warlock.png',
    cost: [2, 2, 2, 1, 3, 1, 2, 2, 2, 2],
    schools: ['Dark', 'Fire']
  },
  {
    isAcademy: true,
    name: 'Academy Beastmaster',
    type: 'Beastmaster',
    card: 'academy_beastmaster.jpg',
    cost: [2, 2, 2, 3, 2, 2, 1, 2, 2, 2],
    schools: ['Nature']
  },
  {
    isAcademy: true,
    name: 'Academy Priestess',
    type: 'Priestess',
    card: 'academy_priestess.png',
    cost: [2, 2, 2, 2, 1, 3, 2, 2, 2, 2],
    schools: ['Holy']
  },
  {
    isAcademy: true,
    name: 'Academy Forcemaster',
    type: 'Forcemaster',
    card: 'academy_forcemaster.jpg',
    cost: [2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    schools: ['Mind']
  },
  {
    isAcademy: true,
    name: 'Academy Warlord',
    type: 'Warlord',
    card: 'academy_warlord.jpg',
    cost: [2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    schools: ['War']
  }
];

export default mages;

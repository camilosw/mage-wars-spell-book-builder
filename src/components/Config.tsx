import * as React from 'react';
import SetSelector from './SetSelector';

const sets = [
  { label: 'Core Set', id: 'core' },
  { label: 'Core Spell Tome 1', id: 'tome' },
  { label: 'Core Spell Tome 2', id: 'tome2' },
  { label: 'Conquest of Kumanjaro', id: 'cok' },
  { label: 'Druid vs. Necromancer', id: 'dvn' },
  { label: 'Forcemaster vs. Warlord', id: 'fvw' },
  { label: 'Forged In Fire Spell', id: 'fif' },
  { label: 'Battlegrounds Domination', id: 'bg1' },
  { label: 'Paladin vs. Siren', id: 'pvs' },
  { label: 'Lost Grimoire', id: 'lg' },
  { label: 'Academy Core Set', id: 'bvw' },
  { label: 'Academy Priestess Expansion', id: 'acp' },
  { label: 'Academy Warlock Expansion', id: 'acw' },
  { label: 'Academy Forcemaster Expansion', id: 'afm' },
  { label: 'Academy Warlord Expansion', id: 'awl' },
  { label: 'Academy Druid Expansion', id: 'adr' },
  { label: 'Academy Elementalist Expansion', id: 'ael' },
  { label: 'Promos', id: 'promo' }
];

const Config: React.FC<{}> = () => (
  <div>
    <h2>Sets</h2>
    {sets.map(set => (
      <SetSelector label={set.label} id={set.id} key={set.id} />
    ))}
  </div>
);

export default Config;

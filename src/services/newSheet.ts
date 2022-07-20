import { ISheet } from 'src/Interfaces/ISheet';

export const newSheet: ISheet = {
  id: '',
  player: {
    name: '',
    origin: 'none',
    sparkEffect: '',
    currentLife: 0,
    totalLife: 0,
    currentStability: 0,
    totalStability: 0,
    defence: false,
  },
  history: '',
  annotations: '',
  weapons: [],
  fa: {
    id: -1,
    level: 'D',
  },
  attributes: {
    FOR: {
      name: 'Força',
      totalValue: 0,
      shortName: 'FOR',
      info: '',
      color: 'C724B1',
    },
    DES: {
      name: 'Destreza',
      totalValue: 0,
      shortName: 'DES',
      info: '',
      color: 'E0E722',
    },
    CON: {
      name: 'Constituição',
      totalValue: 0,
      shortName: 'CON',
      info: '',
      color: '44D62C',
    },
    POD: {
      name: 'Poder',
      totalValue: 0,
      shortName: 'POD',
      info: '',
      color: '4D4DFF',
    },
    PER: {
      name: 'Percepção',
      totalValue: 0,
      shortName: 'PER',
      info: '',
      color: 'D22730',
    },
    MED: {
      name: 'Medicina',
      totalValue: 0,
      shortName: 'MED',
      info: '',
      color: 'FFAD00',
    },
    OUT: {
      name: 'Outros',
      totalValue: 0,
      shortName: 'OUT',
      info: '',
      color: 'FFAD00',
    },
  },
};

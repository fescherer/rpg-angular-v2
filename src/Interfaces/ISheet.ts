export interface ISheet {
  id: string;
  player?: IPlayer;
  history?: string;
  annotations?: string;
  attributes?: IAttributes | null;
  weapons?: IWeapon[];
}

export interface IPlayer {
  name?: string;
  origin?:
    | 'none'
    | 'Central Plaza'
    | 'Little Floreasp'
    | 'High Forwib'
    | 'Industrial District'
    | 'Great Hill'
    | 'Downtown'
    | 'Fewscraps District'
    | 'Midnight Subdistrict';
  sparkEffect?: string;
  currentLife?: number;
  totalLife?: number;
  currentStability?: number;
  totalStability?: number;
  defence?: boolean;
}

export interface IAttribute {
  name: 'Força' | 'Destreza' | 'Inteligencia' | 'Constituição' | 'Poder' | 'Percepção' | 'Medicina' | 'Outros';
  totalValue: number;
  shortName: 'FOR' | 'DES' | 'CON' | 'POD' | 'PER' | 'MED' | 'OUT';
  info: string;
  color: string;
}

export interface IAttributes {
  FOR: IAttribute;
  DES: IAttribute;
  CON: IAttribute;
  POD: IAttribute;
  PER: IAttribute;
  MED: IAttribute;
  OUT: IAttribute;
}

export interface IAngel {
  id: number;
  faLevel?: 'A' | 'B' | 'C' | 'D';
  name: string;
  title: string;
  description: string;
  poem: string;
  image: string;
  powers: IAngelPowers[];
}

export interface IAngelPowers {
  title: string;
  cost: string;
  description: string;
}

export interface IWeapon {
  title?: string;
  weaponType?: string;
  rateOfFire?: Array<boolean>;
  imageUrl?: string;
  examples?: string[];
  fireRate?: number;
  aim?: string;

  aimed?: string;
  special?: string;
  damage?: string;
  id?: number;
  type?: string | null;
  class?: string | null;
  description?: string | null;
  url?: string | null;
  name?: string | null;
}

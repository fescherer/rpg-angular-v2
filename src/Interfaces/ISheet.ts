export interface ISheet {
  id: string;
  player?: IPlayer;
  history?: string;
  annotations?: string;
  attributes?: IAttribute[];
}

export interface IPlayer {
  name?: string;
  origin?:
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
  id: number;
  name: 'Força' | 'Destreza' | 'Inteligencia' | 'Constituição' | 'Poder' | 'Percepção' | 'Medicina' | 'Outros';
  totalValue: number;
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

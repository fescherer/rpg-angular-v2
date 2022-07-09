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

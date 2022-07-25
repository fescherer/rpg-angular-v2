import { Pipe, PipeTransform } from '@angular/core';

enum EWeaponType {
  'melee-light' = 'Melee Leve',
  'melee-heavy' = 'Melee Pesada',
  'pistol' = 'Pistola',
  'shotgun' = 'Fuzil',
  'machine-gun' = 'Metralhadora',
}

enum EWeaponClass {
  a = '+A',
  b = '+B',
  c = '+C',
  d = '+D',
}

const weaponsDamage = {
  a: {
    'melee-light': {
      damage: '2D4 + 3D2',
      aimed: '+3 de dano',
      special: 'Ganha vantagem de teste de acerto (Teste de força)',
    },
    'melee-heavy': {
      damage: '8 + D4',
      aimed: '+3 de dano',
      special: 'Ganha vantagem de teste de acerto (Teste de força)',
    },
    pistol: {
      damage: '2 + 1D12',
      aimed: 'Aumenta o threshold em 2',
      special: 'Tirar Baixo + 6',
    },
    shotgun: {
      damage: '1D12',
      aimed: 'Debuff de baixo some e fica só o alto',
      special: 'Tirar Alto + 6, baixo 0',
    },
    'machine-gun': {
      damage: '6D2',
      aimed: 'Metade dos dados é sempre 2',
      special: 'Sem threshold',
    },
  },
  b: {
    'melee-light': {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    'melee-heavy': {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    pistol: {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    shotgun: {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    'machine-gun': {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
  },
  c: {
    'melee-light': {
      damage: '2D4 + 3D2',
      aimed: '+3 de dano',
      special: 'Ganha vantagem de teste de acerto (Teste de força)',
    },
    'melee-heavy': {
      damage: '8 + D4',
      aimed: '+3 de dano',
      special: 'Ganha vantagem de teste de acerto (Teste de força)',
    },
    pistol: {
      damage: '2 + 1D12',
      aimed: 'Aumenta o threshold em 2',
      special: 'Tirar Baixo + 6',
    },
    shotgun: {
      damage: '1D12',
      aimed: 'Debuff de baixo some e fica só o alto',
      special: 'Tirar Alto + 6, baixo 0',
    },
    'machine-gun': {
      damage: '6D2',
      aimed: 'Metade dos dados é sempre 2',
      special: 'Sem threshold',
    },
  },
  d: {
    'melee-light': {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    'melee-heavy': {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    pistol: {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    shotgun: {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
    'machine-gun': {
      damage: 'D6',
      aimed: 'dasdasd',
      special: '',
    },
  },
};

@Pipe({
  name: 'weaponType',
})
export class WeaponTypePipe implements PipeTransform {
  transform(value: string): string {
    // @ts-ignore
    return EWeaponType[value];
  }
}

@Pipe({
  name: 'weaponClass',
})
export class WeaponClassPipe implements PipeTransform {
  transform(value: string): string {
    // @ts-ignore
    return EWeaponClass[value];
  }
}

@Pipe({
  name: 'weaponDamage',
})
export class WeaponDamage implements PipeTransform {
  transform(value: string, valueClass: string): string {
    // @ts-ignore
    return weaponsDamage[valueClass][value]?.damage;
  }
}

@Pipe({
  name: 'weaponDamageAimed',
})
export class WeaponDamageAimed implements PipeTransform {
  transform(value: string, valueClass: string): string {
    // @ts-ignore
    return weaponsDamage[valueClass][value]?.aimed;
  }
}

@Pipe({
  name: 'weaponDamageSpecial',
})
export class WeaponDamageSpecial implements PipeTransform {
  transform(value: string, valueClass: string): string {
    // @ts-ignore
    return weaponsDamage[valueClass][value]?.special;
  }
}

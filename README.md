# BUILD  
    ng build --output-path docs --base-href=https://ofelipescherer.github.io/rpg-angular-v2/    


Falta de estabilidade - Pessoa fica meio biruta, e não tem mais mana


FOR - (luta- armas e ataques corpo a corpo | fazer ações que demandem a força do personagem)
DES - (ranged- armas de fogo | iniciativa | )
INT - (sabedoria | lembrar de algo)
CON - (teste de defesa | aguentar )
POD - (anjo | perder ou ganhar estabilidade)
PER - (perceber algo)
MED - (cura)
OUTROS - ()


attr: [
  {
    id: 1,
    name: 'Força',
    totalValue: 89,
  },
  {
    id: 2,
    name: 'Destreza',
    totalValue: 76,
  },
]

player: {
  name: string,
  currentLife: number,
  totalLife: number,
  currentStability: number,
  totalStability: number,
  faLevel: 'A' | 'B' | 'C' | 'D',
  
}

angel: [
  {
    id: 1,
    name: 'Azazel',
    title: 'Angel of War',
    description: 'a description of',
    poem: 'the poem',
    image: '',
    
    powers: [
      {
        title: string,
        cost: string,
        description: string
      }
    ]
  }

]



# RpgAngularV2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# BUILD  
    ng build --output-path docs --base-href=https://ofelipescherer.github.io/rpg-angular-v2/    


Falta de estabilidade - Pessoa fica meio biruta, e não tem mais mana

```
FOR - (luta- armas e ataques corpo a corpo | fazer ações que demandem a força do personagem)
DES - (ranged- armas de fogo | iniciativa | )
INT - (sabedoria | lembrar de algo)
CON - (teste de defesa | aguentar )
POD - (anjo | perder ou ganhar estabilidade)
PER - (perceber algo)
MED - (cura)
OUTROS - ()
```
```
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
  defencePoints: number,
  currentLife: number,
  totalLife: number,
  currentStability: number,
  totalStability: number,
  faLevel: 'A' | 'B' | 'C' | 'D',
  origin: string (ProtoCity Districts) + rest of the empires
  
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
```

Ideia de boss: Um boss que é bom falhar (Segunda temporada), vai ser relacionado com o poder- anjo que controla outros anjos sei la;

Ideia de boss: Lindsey (Boss em que os jogadores precisam fazer ela se lembrar de quem é);

Ideia de boss: Um boss baseado na defesa, ou seja, os jogadores precisam ficar atacando ele toda hora;
Ideia de boss: Um boss baseado em não atacar ele, para ganhar, os jogadores precisam deixar de atacar por 4 turnos;

Ideia de boss: Um boss que inverte os atributos aleatoriamente

Ideia de boss: Um boss que é impossivel de matar, então eles precisam ir stealth, ai criar uma mecanica para isso


Mecânicas Resumo: --Vantagens/Desvantagens/Forçar; --Efeitos(Morrendo/Ataque Grave); --Parry/Esquiva/Contra-ataque; --Defesa?; --Medicina


# Itens:

 - Amuletos de pedras peciosas (Ver o pinterest); Cada amuleto vai dar um bonus (Ex. Colares, anéis, pulseiras, braceletes)(Pode dar mais parry, mais defesa, mais dano, chances de dar vantagens, changes de gastar menos estabilidade, iniciativa melhor, bonus de atributo (Até fora de combate));
 - Kit de primeiro socorros: Da vantagem no teste de medicina;
 - Betabloqueadores (Reduz a chance de perder estabilidade durante a sessão);
 - Spark -> Efeito exclusivo para cada jogador; mas em geral vai aumentar vida ou estabilidade;
 


# Regras:
Combate:
  O combate é feito em turnos que devem durar entre 6 a 10 segundos dentro da história;
  Durante o turno o jogador tem a possibilidade de: 
    Uma ação de movimento(Se deslocar proporcionalmente a situação e ao tempo do turno);
    Uma ação principal, podendo ser ataque ou não
    
  Ao receber um ataque, o jogador tem a possibilidade de esquivar ou contra-atacar
  Porém só irá funcionar se o valor tirado for maior que o valor do atacante

  Contra ataque: 
    Critíco: Não toma dano e pode dar ataque;
    Sucesso: Toma dano normal mas pode dar um ataque;
    Falha: Toma o dano normal + 1/3;
    
  Esquiva:
    Critíco: Não toma dano +3parry;
    Sucesso: Não toma dano;
    Falha: Toma dano normal;
    

  
  
  Testes a serem feitos: 
    Iniciativa: Dado D12 + modificador;
    Armas corpo a corpo: Teste de Força;
    Armas à distância: Teste de Destreza;
    Esquiva: Teste de Atletismo;
    Contra Ataque: Teste de Bravura;
    
  Tudo arredonda para baixo;
  CADA TURNO = 3 SEGUNDOS;
  Teste de compra: carisma;
  Medicina: Primeira hora +5 de vida + d4. Para cada hora a mais gasta no tratamento +3;
  
  Distâncias:
    MUITO CURTO: 0 - 1 metro;
    CURTO: 1 - 5 metros;
    MÉDIO: 5 - 10 metros;
    LONGO: 10 - 30 metros;
    MUITO LONGO: 30 - 60 metros;
    
 Dados para teste: dois D10, sendo um a dezena);
 Teste normal -> Jogador precisa tirar menos que seu o valor máximo;
 Teste dificil -> Jogador precisa tirar menos que o valor da terça parte;
 Desastre -> tirar 100, 99, 98, 97, 96, 95;
 Extremo -> tirar 1, 2, 3, 4, 5;
 
 
 Forçar um teste: Pode jogar de novo, mas se errar, vai ter consequência maior;
 Vantagem: Jogador pode jogar novamente o dado de porcentagem e pegar o melhor valor;
 Desvantagem: Jogador precisa jogar novamente o dado de porcentagem e pegar o pior valor;
 
 
 Sangrando: Você foi cortado ou machucado por algo. Será perdido 1 de vida a cada rodada até ser tratado;
 Assustado: Você viu algo que não devia. Seu psicológico e sentidos estão afetados. Seu poder é dividido na metade;
 
 Efeitos (colocar do lado da vida, ou mudar a cor da barra de vida):
 Desmaiado: Você está desacordado. Não há ações disponíveis até que passe em um teste de constituição;
 Morrendo: Você precisa fazer um teste de constituição a cada rodada até ser curado;
   Ataque grave = Ataque que tira mais da metade da vida máxima;
  Ao estar com ataque grave deve ser feito um teste de constituição;
  a cada rodada até tirar critíco e acordar (com mínimo de 2 rodadas desacordado);
  
  Broken(Vida zerada ou até -3): Ao estar com esse efeito, o jogador deve ser tratado fora de combate;
  A cada rodada ele deve fazer um teste de Poder para ver se continua vivo;
    
    
 ### Ideia: Pontos de parry: a cada tipo de ação (defesa, esquiva e contra ataque) modificam seus pontos de parry
 Pontos de parry (D12) Max 12
 Monstros sempre começam com um certo nível de parry;
 Para o jogador conseguir fazer a ação de parry é necessário que ele jogue um D12 e ganhe do nível de parry do monstro (Monstros com mais vida têm menos parry, monstros mais rápidos têm menos parry);
  
 - Os pontos de parry são resetados todo novo combate, porém dependendo do equipamento, o jogador pode mudar isso;
 - Defesa faz ganhar +1 pontos de parry e mais defesa (Mas precisa ser feita antes do atacante atacar e deve ser gasto a ação do jogador);
 - Esquiva (Não gasta ponto de parry):
    Sucesso: Esquiva do ataque e + 1 ponto de parry;
    Extremo: Esquiva do ataque e ganha +3 pontos de parry; 
    Falha: Toma o dano normal;
 - Contra ataque (Para cada ponto de parry gasto +chance de contra atacar);
    Sucesso: Toma o dano mas consegue atacar
    Extremo: Não toma dano e consegue atacar
    Falha: Toma o dano normal;
    
    
 ### Ideia: Concentração: Tipo mira, mas para tudo
 Concentração seria em combate, gastar um turno de ação para ganhar parry


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

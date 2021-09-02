export function d6(numberOfDices: number = 1) {
  const rolls = [];

  for (let index = 0; index < numberOfDices; index++) {
    rolls.push(rollDice(1, 6));
  }

  const totalValue = rolls.reduce((accum, curr) => accum + curr);
  const result = {
    roll: rolls,
    total: totalValue,
  };

  return result;
}

function rollDice(min, max): number {
  return (min - 1) + Math.ceil(Math.random() * (max - min + 1));
}

export function calcLevelStageString(level: number = 1): string {
  const lvlStage = calcLevelStage(level);
  switch (lvlStage) {
    case 1:
      return 'Aprentice';
    case 2:
      return 'Intermediate';
    case 3:
      return 'Specialist';
    case 4:
      return 'Master';
    case 5:
      return 'Grand-Master';
    case 6:
      return 'Legendary';
  }
}

export function calcLevelStage(level: number): number {
  let lvlStg: number;
  if (level < 5) {
    lvlStg = 1;
  } else if (level >= 5 && level < 9) {
    lvlStg = 2;
  } else if (level >= 9 && level < 13) {
    lvlStg = 3;
  } else if (level >= 13 && level < 17) {
    lvlStg = 4;
  } else if (level >= 17 && level < 21) {
    lvlStg = 5;
  } else if (level >= 21) {
    lvlStg = 6;
  }
  return lvlStg;
}

export function skillIncrementLimit(level: number): number {
  switch (calcLevelStage(level)) {
    case 1:
      return 3;
    case 2:
      return 6;
    case 3:
      return 9;
    case 4:
      return 12;
    case 5:
    case 6:
      return 15;
  }
}

export function calcSkillsByLevel(level: number = 1): number {
  switch (level) {
    case 1:
      return 6;

    case 2:
      return 7;

    case 3:
      return 8;

    case 4:
      return 9;

    case 5:
      return 15;

    case 6:
      return 16;

    case 7:
      return 17;

    case 8:
      return 18;

    case 9:
      return 24;

    case 10:
      return 27;

    case 11:
      return 30;

    case 12:
      return 33;

    case 13:
      return 39;

    case 14:
      return 40;

    case 15:
      return 41;

    case 16:
      return 42;

    case 17:
      return 48;

    case 18:
      return 49;

    case 19:
      return 50;

    case 20:
      return 51;
  }

  if (level > 20) {
    const over20 = level - 20;
    return 51 + over20;
  }
}

export function calcFeatsByLevel(level: number = 1): number {
  switch (level) {
    case 1:
      return 6;

    case 2:
      return 7;

    case 3:
      return 8;

    case 4:
      return 9;

    case 5:
      return 12;

    case 6:
      return 13;

    case 7:
      return 14;

    case 8:
      return 15;

    case 9:
      return 19;

    case 10:
      return 21;

    case 11:
      return 23;

    case 12:
      return 25;

    case 13:
      return 29;

    case 14:
      return 30;

    case 15:
      return 31;

    case 16:
      return 32;

    case 17:
      return 35;

    case 18:
      return 36;

    case 19:
      return 37;

    case 20:
      return 38;
  }

  if (level > 20) {
    const over20 = level - 20;
    return 38 + over20;
  }
}

export function byFour(a: number, b: number,): number {
  return Math.floor((a + b) / 4);
}

export function byTwo(a: number): number {
  return Math.floor(a / 2);
}

export function calcResistance(MostRelevant: number, LeastRelevant: number,): number {
  return Math.floor(((MostRelevant * 2) + LeastRelevant) / 3);
}

export function calcCorporalEnergy(level: number, vigor: number, essence: number, bonus = 0): number {
  const levelStage = calcLevelStage(level);

  switch (levelStage) {
    case 1:
      return vigor * 9 + essence + bonus;
    case 2:
      return vigor * 10 + essence * 2 + bonus;
    case 3:
      return vigor * 11 + essence * 3 + bonus;
    case 4:
      return vigor * 12 + essence * 4 + bonus;
    case 5:
      return vigor * 13 + essence * 5 + bonus;
    case 6:
      return vigor * 13 + essence * 5 + bonus;
  }
}

// export function d6(numberOfDices: number = 1) {
//   let roll;
//   let roll$ = from(random.generateInteger(1, 6, numberOfDices))
//   roll$.subscribe(next => { roll = next; console.log('next', next) });
//   // random.generateInteger(1, 6, numberOfDices).then(response => {
//   //   roll = response.forEach(value => roll.push(value));
//   //   roll$ = response;
//   // });
//   console.log(roll);
//   return roll;
// }
// const total = roll.reduce((accum, curr) => accum + curr);

export function dcBytLevelStage(levelStage: number): number {
  switch (levelStage) {
    case 1:
      return 9;
    case 2:
      return 13;
    case 3:
      return 17;
    default:
      return 21;
  }
}

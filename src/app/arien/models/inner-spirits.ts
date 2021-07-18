import { calcLevelStage, d6, dcBytLevelStage } from "../utility";

export class InnerSpirits {
  tharos = new Tharos;
  laarin = new Laarin;
  adaj = new Adaj;
  fallon = new Fallon;
  sparthy = new Sparthy;
  marula = new Marula;
  alFerianil = new AlFerianil;
  lilen = new Lilen;
  constructor() { }
}

export abstract class InnerSpirit {
  abstract getInnerSpirit();

  testInnerSpirit(level: number, bonus = 0) {
    let levelStage = calcLevelStage(level);
    let test = d6(2);
    const result = {
      level: level,
      bonus: bonus,
      roll: test.roll,
      total: test.total + level + bonus,
      details: `Dice roll: ${test.roll[0]} + ${test.roll[1]} = ${test.total} + Level: ${level} + Bonus: ${bonus} = ${test.total + level + bonus}`,
      dc: dcBytLevelStage(levelStage),
      pass: false,
    }

    if (test.roll[0] + test.roll[1] + level + bonus >= result.dc) {
      result.pass = true;
    } else {
      result.pass = false;
    }

    return result;
  };
}

class Tharos extends InnerSpirit {
  rahkea = new Rahkea;
  soob = new Soob;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Rahkea extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Soob extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Laarin extends InnerSpirit {
  laarin = null;
  exzel = new Exzel;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Exzel extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Adaj extends InnerSpirit {
  viehatys = new Viehatys;
  enam = new Enan;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Viehatys extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Enan extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Fallon extends InnerSpirit {
  ankarii = new Ankarii;
  akhal = new Akhal;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Ankarii extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Akhal extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Sparthy extends InnerSpirit {
  nahdia = new Nahdia;
  lythol = new Lythol;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Nahdia extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Lythol extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Marula extends InnerSpirit {
  zereth = new Zereth;
  vetrys = new Vetrys;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Zereth extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Vetrys extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class AlFerianil extends InnerSpirit {
  khassan = new Khassan;
  feria = new Feria;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Khassan extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Feria extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Lilen extends InnerSpirit {
  elay = new Elay;
  karm = new Karm;
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

class Elay extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}
class Karm extends InnerSpirit {
  constructor() {
    super();
  }
  getInnerSpirit() {
  }
}

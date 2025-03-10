class Ratte {
  constructor(population) {
    this.population = population;
    this.nummer = population.ratten.length + 1;

    this.alter = 0;
    this.geschlecht = this.nummer % 2 === 0 ? MAENNLICH : WEIBLICH;

    this.schwangeschaft = this.geschlecht === WEIBLICH ? -FRUCHTBAR_VON : null;

    this.junge = [];
    this.population.ratten.push(this);
  }

  eineWocheVergeht() {
    this.alter++;

    if (this.geschlecht === WEIBLICH) {
      if (this.schwangeschaft === SCHWANGERSCHFT_DAUER) {
        this.schwangeschaft = -FRUCHTBARKEIT_NACH_SCHWANGERSCHAFT;
        this.jungeBekommen();
      } else {
        this.schwangeschaft++;
      }
    }
  }

  jungeBekommen() {
    for (let i = 0; i < WURF_GROESSE; i++) {
      this.junge.push(new Ratte(this.population));
    }
  }
  
  textBestimmen() {
    let text = `Ratte ${this.nummer} (${this.geschlecht})\nAlter: ${this.alter} Wo`;
    if (this.schwangeschaft > 0) {
      text += `\nSchwanger: ${this.schwangeschaft} Wo`;
    }
    return text;
  }

  farbeBestimmen() {
    if (this.geschlecht === "m") {
      return "#97c2fc";
    } else {
      if (this.alter >= SCHWANGERSCHFT_DAUER) {
        return "#f28c8c";
      } else {
        return "#f2baf6";
      }
    }
  }
}

const MAENNLICH = "m";
const WEIBLICH = "w";

const WURF_GROESSE = 10; // 10 Junge pro Wurf
const FRUCHTBAR_VON = 7; // Ab 7 Wochen fruchtbar
const FRUCHTBAR_BIS = 52; // Bis 52 Wochen / 1 Jahr fruchtbar
const SCHWANGERSCHFT_DAUER = 3; // 3 Wochen
const FRUCHTBARKEIT_NACH_SCHWANGERSCHAFT = 1; // 1 Woche Pause nach Schwangerschaft
const LEBENSERWARTUNG = 104; // 104 Wochen / 2 Jahre

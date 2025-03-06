class Rat {
  static CHILD_NODES_COUNT = 8;
  static MIN_AGE_FOR_PREGNANCY = 4;
  static PREGNANCY_DURATION = 3;

  constructor(id) {
    this.id = id;
    this.age = 0;
    this.pregnacyWeek = 0;
    this.sex = id % 2 === 0 ? "m" : "f";
    this.color = this.sex === "m" ? "#97c2fc" : "#f28c8c";
    this.recreateLabel();
  }

  processRatOneWeek() {
    this.age++;

    if (this.sex === 'f' && this.age > Rat.MIN_AGE_FOR_PREGNANCY) {
      this.pregnacyWeek++;
    }

    if (this.pregnacyWeek > Rat.PREGNANCY_DURATION) {
      this.pregnacyWeek = 0;
    }

    this.recreateLabel();
  }

  recreateLabel() {
    this.label = `Ratte ${this.id} (${this.sex})\nAlter: ${this.age} Wo`;
    if (this.pregnacyWeek > 0) {
      this.label += `\nSchwanger: ${this.pregnacyWeek} Wo`;
    }
  }
}

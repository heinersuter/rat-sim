class Rat {
  static CHILD_NODES_COUNT = 8;
  static MIN_AGE_FOR_PREGNANCY = 3;
  static PREGNANCY_DURATION = 3;

  constructor(id) {
    this.id = id;
    this.age = 0;
    this.pregancyWeek = 0;
    this.sex = id % 2 === 0 ? "m" : "f";
    this.color = this.sex === "m" ? "#97c2fc" : "#f28c8c";
    this.recreateLabel();
  }

  processRatOneWeek() {
    this.age++;

    if (this.age > Rat.MIN_AGE_FOR_PREGNANCY && this.pregancyWeek === 0) {
      this.pregancyWeek++;
    }

    if (this.pregancyWeek === Rat.PREGNANCY_DURATION) {
      this.pregancyWeek = 0;
    }

    this.recreateLabel();
  }

  recreateLabel() {
    this.label = `Ratte ${this.id} (${this.sex})\nAlter: ${this.age}`;
  }
}

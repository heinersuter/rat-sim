class Population {
  constructor() {
    this.ratten = [];
    this.wochen = 0;
    new Ratte(this, null);
    new Ratte(this, null);
  }
  
  eineWocheVergeht(){
    this.wochen++;
    this.ratten.forEach((ratte) => {
      ratte.eineWocheVergeht();
    });
  }
}

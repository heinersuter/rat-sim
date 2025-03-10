class Population {
  constructor() {
    this.ratten = [];
    this.wochen = 0;
    new Ratte(this);
    new Ratte(this);
  }
  
  eineWocheVergeht(){
    this.wochen++;
    this.ratten.forEach((ratte) => {
      ratte.eineWocheVergeht();
    });
  }
}

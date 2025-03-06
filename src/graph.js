class Graph {
  constructor() {
    this.nodes = new vis.DataSet([new Rat(1), new Rat(2)]);
    this.edges = new vis.DataSet([]);
    this.weekCount = 0;
  }

  getGraphData() {
    return {
      nodes: this.nodes,
      edges: this.edges,
    };
  }

  processGraphOneWeek() {
    this.weekCount++;

    let nodes = this.nodes.get();
    nodes.forEach((node) => {
      let rat = new Rat(node.id);
      Object.assign(rat, node); // Copy properties from node to rat
      
      rat.processRatOneWeek();
      this.nodes.update({ id: rat.id, label: rat.label, age: rat.age, pregnacyWeek: rat.pregnacyWeek });

      if (rat.pregnacyWeek === Rat.PREGNANCY_DURATION) {
        for (let i = 0; i < Rat.CHILD_NODES_COUNT; i++) {
          const newRatId = this.nodes.length + 1;
          this.nodes.add(new Rat(newRatId));
          this.edges.add({ from: rat.id, to: newRatId });
        }
      }
    });
  }
}

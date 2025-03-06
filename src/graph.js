class Graph {
  constructor() {
    this.nodes = new vis.DataSet([new Rat(1), new Rat(2)]);
    this.edges = new vis.DataSet([]);
  }

  getGraphData() {
    return {
      nodes: this.nodes,
      edges: this.edges,
    };
  }

  processOneWeek() {
    this.nodes.get().forEach((node) => {
      node.processOneWeek();
      this.nodes.update({ id: node.id, label: node.label });

      if (node.sex === "f") {
        for (let i = 0; i < Rat.CHILD_NODES_COUNT; i++) {
          const newRatId = this.nodes.length + 1;
          this.nodes.add(new Rat(newRatId));
          this.edges.add({ from: node.id, to: newRatId });
        }
      }
    });
  }
}

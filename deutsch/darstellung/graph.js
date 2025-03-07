class Graph {
  static getData(population) {
    const nodes = population.ratten.map((ratte) => {
      return { id: ratte.nummer, label: ratte.textBestimmen(), color: ratte.farbeBestimmen() };
    });

    // define edges by rats that have children
    const edges = population.ratten
      .filter((ratte) => ratte.junge.length > 0)
      .map((ratte) => {
        return { from: ratte.nummer, to: ratte.junge[0].nummer }; // TODO: multiple children
      });

    return {
      nodes: nodes,
      edges: edges,
    };
  }

  static getOptions() {
    return {
      layout: {
        improvedLayout: true, // Use improved layout algorithm
        randomSeed: 0, // Use a fixed seed for consistent layout
      },
      physics: {
        enabled: true,
        solver: "forceAtlas2Based",
      },
    };
  }
}

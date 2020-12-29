import logo from './logo.svg';
import './App.css';
import Graph from './logic/graph/Graph'
import GraphVisual from './display/graphs/GraphVisual'
import { useEffect, useState } from 'react'
import { BFSCycle, BFSNoRepeat, BFSRepeat } from './logic/algorithms/BFS'
import Components from './logic/algorithms/Components'

function App() {
  useEffect(() => {
    let adj = [[0,1,0,1], [1,0,1,1], [0,1,0,1], [1,1,1,0]];
    let graph = new Graph(adj);
    let vertices = BFSCycle(graph, 0);
    for(let v = 0; v < vertices.length; ++ v) {
      console.log("path: " + vertices[v]);
    }
    let k = new Components(graph);
    console.log(k.getComponents());
    console.log(k.getComponentCount());
    
  })
  return (
    <div className="App">
      <GraphVisual data={[{
        "id": 0,
        "posX": 110,
        "posY": 100
      }, {
        "id": 1,
        "posX": 120,
        "posY": 170
      }, {
        "id": 2,
        "posX": 300,
        "posY": 350
      }]}
      edges={[{
        "id": 0,
        "node1": 0,
        "node2": 1,
        "bendPosition": null
      }]}/>
    </div>
  );
}

export default App;

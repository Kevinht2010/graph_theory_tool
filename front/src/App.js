import logo from './logo.svg';
import './App.css';
import Graph from './logic/graph/Graph'
import { useEffect, useState } from 'react'
import { BFSCycle, BFSNoRepeat, BFSRepeat } from './logic/algorithms/BFS'
import Components from './logic/algorithms/Components'

function App() {
  useEffect(() => {
    let adj = [[0,1,1], [1,0,1], [1,1,0]];
    let graph = new Graph(adj);
    let vertices = BFSCycle(graph, 0);
    for(let v = 0; v < vertices.length; ++ v) {
      console.log("path: " + vertices[v]);
    }
    let k = new Components(graph);
    console.log(k.getComponents());
  })
  return (
    <div className="App">
    </div>
  );
}

export default App;

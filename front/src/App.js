import logo from './logo.svg';
import './App.css';
import Graph from './logic/graph/Graph'
import { useEffect, useState } from 'react'
import { BFSNoRepeat } from './logic/algorithms/BFS'

function App() {
  useEffect(() => {
    let adj = [[0,0,0], [0,0,0], [0,0,0]];
    let graph = new Graph(adj);
    let vertices = BFSNoRepeat(graph, 0, [0,0,0]);
    for(let v of vertices) {
      console.log(v);
    }
  })
  return (
    <div className="App">
    </div>
  );
}

export default App;

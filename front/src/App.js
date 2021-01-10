import logo from './logo.svg';
import './App.css';
import React from 'react'
import Graph from './logic/graph/Graph'
import GraphVisual from './display/graphs/GraphVisual'
import { useEffect, useState } from 'react'
import { BFSCycle, BFSNoRepeat, BFSRepeat } from './logic/algorithms/BFS'
import Components from './logic/algorithms/Components'
import Data from './display/data/Data.js';
import 'antd/dist/antd.css';

function App() {
  useEffect(() => {
    let adj = [[0,1,0,1], [1,0,1,1], [0,1,0,1], [1,1,1,0]];
    let graph = new Graph(adj);
    let vertices = BFSCycle(graph, 0);

    let k = new Components(graph);
    console.log(k.getComponents());
    console.log(k.getComponentCount());
    
  })
  return (
    <React.Fragment>
      <Data />
    </React.Fragment>
  );
}

export default App;

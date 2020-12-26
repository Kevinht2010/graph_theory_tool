
function BFS(G, vertex, repeat) {
    if(repeat) {
        return BFSRepeat(G, vertex);
    } else {
        return BFSNoRepeat(G, vertex);
    }
}

// returns an array of all the paths branching from one vertex
function BFSRepeat(G, vertex) {
    let paths = [[vertex]];
    let finishedPaths = [];
    

}

// input: G is the graph, vertex is the starting vertex, and removedVertices
// is an array consisting of the vertices currently in your search already
// (array of 1's and 0's, 1 meaning the vertex is included, 0 meaning not included)

// returns two arrays: One with all the vertices you can reach in the bfs, 
// and one with all the vertices you cannot reach using bfs

function BFSNoRepeat(G, vertex, removedVertices) {
    let list = G.list;
    let vertices = G.vertices;
    let currentVertices = [vertex];
    let vertexMap = removedVertices;

    vertexMap[vertex] = 1;

    while(currentVertices.length > 0) {
        vertexMap[-1] = 3;

    }

    return vertexMap;
}

export {BFSRepeat, BFSNoRepeat};

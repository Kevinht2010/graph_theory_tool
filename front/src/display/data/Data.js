import React, {useEffect, useState} from 'react'
import Inputs from '../../display/input/Inputs.js'
import GraphVisual from '../graphs/GraphVisual.js'

export default function Data() {
    const [vertices, setVertices] = useState([{
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
        }, {
            "id": 3,
            "posX": 350,
            "posY": 400
        }, {
            "id": 4,
            "posX": 400,
            "posY": 500
        }
    ])

    const edgesArray = [{
        "id": "0.1",
        "node1": 0,
        "node2": 1,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "1.2",
        "node1": 1,
        "node2": 2,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "1.3",
        "node1": 1,
        "node2": 3,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "0.2",
        "node1": 0,
        "node2": 2,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "0.3",
        "node1": 0,
        "node2": 3,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "2.3",
        "node1": 2,
        "node2": 3,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "0.4",
        "node1": 0,
        "node2": 4,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "1.4",
        "node1": 1,
        "node2": 4,
        "bent": false,
        "posX": null,
        "posY": null
    }, {
        "id": "2.4",
        "node1": 2,
        "node2": 4,
        "bent": false,
        "posX": null,
        "posY": null
    }]

    let edgesMap = new Map();
    let bdMap = new Map();

    edgesArray.forEach(edge => {
        edgesMap.set(edge.node1 + "." + edge.node2, edge);
        bdMap.set(edge.node1 + "." + edge.node2, {"id": edge.id, "bent":edge.bent, "posX": edge.posX, "posY":edge.posY});
    })

    const [edges, setEdges] = useState(edgesMap);
    const [addingVertex, setAddingVertex] = useState(false);
    const [bendPositions, setBendPositions] = useState(bdMap);

    const tryAddVertex = (e) => {
        if(addingVertex) {
            addVertex(e.clientX - 45, e.clientY - 10)
        }
        setAddingVertex(false);
    }

    const addVertex = (x, y) => {
        vertices.push({"id": vertices.length, "posX": x, "posY":y});
    }

    const straightenEdges = () => {
        edges.forEach(edge => {
            bdMap.set(edge.node1 + "." + edge.node2, {"id": edge.id, "bent":false, "posX": 0, "posY": 0});
        })

        setBendPositions(bdMap);
    }

    const addEdge = (v1, v2) => {
        let valid = ["none", "none"];
        v1 = Number(v1);
        v2 = Number(v2);

        if(!(Number.isInteger(v1)) || v1 > vertices.length - 1) {
            valid[0] = ("error");
        }

        if(!(Number.isInteger(v2)) || v2 > vertices.length - 1) {
            valid[1] = "error";
        }

        if(v1 === v2) {
            valid[0] = "error";
            valid[1] = "error";
        }

        if(valid[0] === "error" || valid[1] === "error") {
            return valid;
        }

        let key;
        if(v1 > v2) {
            key = v2 + "." + v1;
        } else {
            key = v1 + "." + v2;
        }
        if(edges.has(key)) {
            return ["error", "error"]
        } else {
            let newEdges = new Map(edges.set(key, {
                "id": key,
                "node1": v1,
                "node2": v2,
                "bent": false,
                "posX": null,
                "posY": null
            }))
            
            let newBendPositions = new Map(bendPositions.set(key, {
                "id": key,
                "bent": false,
                "posX": null,
                "posY": null
            }))

            setEdges(newEdges);
            setBendPositions(newBendPositions);
            return ["success", "success"];
        }
    }

    useEffect(() => {console.log(edges); console.log(bendPositions); console.log(edges)}, [edges])
        
    return (
        <div style={{overflow:"auto"}}>
            <div style={{display:"flex", height: '92vh', width:'94vw', marginLeft:"3vw", marginRight:"3vw", marginTop:"3vh", marginBottom:"2.75vh", overflow:"hidden"}} 
                onMouseDown={(e) => {tryAddVertex(e)}}>
                <Inputs setAddingVertex={setAddingVertex} straightenEdges={straightenEdges} addEdge={addEdge} />
                <GraphVisual vertices={vertices} edges={edges} bendPositions={bendPositions} setVertices={setVertices} 
                            setBendPositions={setBendPositions} onMouseDown={(e) => {tryAddVertex(e)}}/>
            </div>
        </div>
    )
}

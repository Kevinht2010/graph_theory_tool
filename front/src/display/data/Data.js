import React, {useEffect, useState} from 'react'
import Input from '../../display/input/Input.js'
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
        }
    ])

    const [edges, setEdges] = useState([{
        "id": 0,
        "node1": 0,
        "node2": 1,
        "bendPosition": null
    }, {
        "id": 1,
        "node1": 1,
        "node2": 2,
        "bendPosition": null
    }, {
        "id": 2,
        "node1": 1,
        "node2": 3,
        "bendPosition": null
    }, {
        "id": 3,
        "node1": 0,
        "node2": 2,
        "bendPosition": null
    }, {
        "id": 4,
        "node1": 0,
        "node2": 3,
        "bendPosition": null
    }, {
        "id": 5,
        "node1": 2,
        "node2": 3,
        "bendPosition": null
    }])

    const [bendPositions, setBendPositions] = useState(edges.map(() => {return {"bent": false}}));
    const [addingVertex, setAddingVertex] = useState(false);
    
    const tryAddVertex = (e) => {
        if(addingVertex) {
            addVertex(e.clientX - 45, e.clientY - 25)
        }

        setAddingVertex(false);
    }

    const addVertex = (x, y) => {
        vertices.push({"id": vertices.length, "posX": x, "posY":y});
    }

    const straightenEdges = () => {
        console.log("s");
        setBendPositions(edges.map(() => {return {"bent": false}}));
    }

    useEffect(() => {}, [])
        
    return (
        <div style={{overflow:"auto"}}>
            <div style={{display:"flex", height: '92vh', width:'94vw', marginLeft:"3vw", marginRight:"3vw", marginTop:"3vh", marginBottom:"2.75vh", overflow:"hidden"}} 
                onMouseDown={(e) => {tryAddVertex(e)}}>
                <Input setAddingVertex={setAddingVertex} straightenEdges={straightenEdges}/>
                <GraphVisual vertices={vertices} edges={edges} bendPositions={bendPositions} setVertices={setVertices} 
                            setBendPositions={setBendPositions} onMouseDown={(e) => {tryAddVertex(e)}}/>
            </div>
        </div>
    )
}

import React, {useState, useEffect, useRef} from 'react';
import Node from './Node';
import Edge from './Edge';

export default function GraphVisual(props) {
    const [mouseIn, setMouseIn] = useState(false);
    const [vertices, setVertices] = useState(props.vertices);

    const [edges, setEdges] = useState(props.edges);
    const [bendPositions, setBendPositons] = useState(props.bendPositions);
    const [dragNode, setDragNode] = useState();
    const [isDraggingNode, setIsDraggingNode] = useState(false);
    const [isDraggingEdge, setIsDraggingEdge] = useState(false);

    const [originX, setOriginX] = useState(0);
    const [originY, setOriginY] = useState(0);
    const [prevPosition, setPrevPosition] = useState([]);

    const dragStart = (e, id, node) => {
        if(mouseIn === true) {
            setDragNode(id);
            setOriginX(e.clientX);
            setOriginY(e.clientY);
            if(node) {
                setIsDraggingNode(true);
                setPrevPosition([vertices[id].posX, vertices[id].posY]);
            } else {
                setIsDraggingEdge(true);
                if(bendPositions[id].bent === true) {
                    setPrevPosition([bendPositions[id].posX, bendPositions[id].posY]);
                } else {
                    let node1 = vertices[edges[id].node1];
                    let node2 = vertices[edges[id].node2];
                    setPrevPosition([(node1.posX + node2.posX) / 2, (node1.posY + node2.posY) / 2]);
                }
            }
        }
    }

    const dragging = (e) => {
        if(isDraggingNode && mouseIn) {
            let newX = e.clientX - originX;
            let newY =  e.clientY - originY;
            updateData({
                "id": dragNode, 
                "posX": prevPosition[0] + newX, 
                "posY": prevPosition[1] + newY
            });
        } else if(isDraggingEdge && mouseIn) {
            let newX = e.clientX - originX;
            let newY =  e.clientY - originY;
            updateBendPositions({
                "id": dragNode, 
                "posX": prevPosition[0] + newX, 
                "posY": prevPosition[1] + newY,
                "bent": true
            });
        }
    }

    const dragEnd = () => {
        setIsDraggingNode(false);
        setIsDraggingEdge(false);
    }

    const updateData = (a) => {
        let newVertices = vertices.slice(0);
        newVertices[a.id] = a;
        props.setVertices(newVertices);
        setVertices(newVertices);
    }

    const updateBendPositions = (a) => {
        let newBendPositions = [...bendPositions];
        newBendPositions[a.id] = a;
        props.setBendPositions(newBendPositions);
        setBendPositons(newBendPositions);
    }

    const updatenodes = (a) => {
        return vertices.map(node => {
            return (<Node dragStart={dragStart} dragEnd={dragEnd} id={node.id} position={[node.posX, node.posY]}/>);
        })
    }

    const updateEdges = (a) => {
        return edges.map((edge, idx) => {
            return (<Edge dragStart={dragStart} dragEnd={dragEnd} id={edge.id} node1={vertices[edge.node1]} node2={vertices[edge.node2]} bendPos={bendPositions[idx]}/>)
        })
    }

    useEffect(() => {setBendPositons(props.bendPositions)}, [vertices, mouseIn, bendPositions, props.bendPositions])

    return (
        <svg style={{height:"600vh", width:"600vw", backgroundColor: '#dbedff'}} 
            onMouseOver={() => {setMouseIn(true)}} onMouseLeave={(e) => {console.log("Out"); dragging(e); setMouseIn(false); dragEnd()}}
            onMouseMove={(e) => {dragging(e)}} onMouseUp={() => dragEnd()}>
            {updateEdges()}
            {updatenodes()}
        </svg>
    )
}


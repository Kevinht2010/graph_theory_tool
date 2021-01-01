import React, {useState, useEffect, useRef} from 'react';
import Node from './Node';
import Edge from './Edge';

export default function GraphVisual(props) {
    const [mouseIn, setMouseIn] = useState(false);
    const [vertices, setVertices] = useState(props.vertices);

    const [edges, setEdges] = useState(props.edges);
    const [bendPositions, setBendPositons] = useState(props.bendPositions);
    const [dragId, setDragId] = useState();
    const [isDraggingNode, setIsDraggingNode] = useState(false);
    const [isDraggingEdge, setIsDraggingEdge] = useState(false);
    const [isCreatingEdge, setIsCreatingEdge] = useState(0);
    const [neighbor1, setNeighbor1] = useState();

    const [originX, setOriginX] = useState(0);
    const [originY, setOriginY] = useState(0);
    const [prevPosition, setPrevPosition] = useState([]);

    const dragStart = (e, id, node) => {
        if(mouseIn === true) {
            setDragId(id);
            setOriginX(e.clientX);
            setOriginY(e.clientY);

            if(node) {
                setIsDraggingNode(true);
                setPrevPosition([vertices[id].posX, vertices[id].posY]);
            } else {
                setIsDraggingEdge(true);
                if(bendPositions.get(id).bent === true) {
                    setPrevPosition([bendPositions.get(id).posX, bendPositions.get(id).posY]);
                } else {  
                    let node1 = vertices[edges.get(id).node1];
                    let node2 = vertices[edges.get(id).node2];
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
                "id": dragId, 
                "posX": prevPosition[0] + newX, 
                "posY": prevPosition[1] + newY
            });
        } else if(isDraggingEdge && mouseIn) {
            let newX = e.clientX - originX;
            let newY =  e.clientY - originY;
            updateBendPositions({
                "id": dragId, 
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
        let newBendPositions = new Map(bendPositions.set(a.id, a));
        props.setBendPositions(newBendPositions);
        setBendPositons(newBendPositions);
    }

    const updatenodes = (a) => {
        return vertices.map(node => {
            return (<Node dragStart={dragStart} dragEnd={dragEnd} id={node.id} position={[node.posX, node.posY]}/>);
        })
    }

    const updateEdges = (a) => {
        let e = [];
        edges.forEach((edge) => {
            e.push(<Edge dragStart={dragStart} dragEnd={dragEnd} id={edge.id} node1={vertices[edge.node1]} node2={vertices[edge.node2]} bendPos={bendPositions.get(edge.id)}/>)
        })
        return e;
    }

    useEffect(() => {
        setBendPositons(props.bendPositions); 
        setEdges(props.edges);
        console.log(props.bendPositions);
        console.log(props.edges);
    }, [vertices, mouseIn, bendPositions, props.bendPositions, props.edges, props.bendPositions, props.vertices])

    return (
        <svg style={{height:"600vh", width:"600vw", backgroundColor: '#dbedff'}} 
            onMouseOver={() => {setMouseIn(true)}} onMouseLeave={(e) => {console.log("Out"); dragging(e); setMouseIn(false); dragEnd()}}
            onMouseMove={(e) => {dragging(e)}} onMouseUp={() => dragEnd()}>
            {updateEdges()}
            {updatenodes()}
        </svg>
    )
}


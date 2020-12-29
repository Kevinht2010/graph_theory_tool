import React, {useState, useEffect, useRef} from 'react';
import Node from './Node';
import Edge from './Edge';

export default function GraphVisual(props) {
    const [mouseIn, setMouseIn] = useState(false);
    const [data, setData] = useState(props.data);

    const [edges, setEdges] = useState(props.edges);
    const [bendPositions, setBendPositons] = useState([{"bent": false}]);
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
                setPrevPosition([data[id].posX, data[id].posY]);
            } else {
                setIsDraggingEdge(true);
                if(bendPositions[id].bent === true) {
                    setPrevPosition([bendPositions[id].posX, bendPositions[id].posY]);
                } else {
                    let node1 = data[edges[id].node1];
                    let node2 = data[edges[id].node2];
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
        console.log("update")
        let newData = data.slice(0);
        newData[a.id] = a;
        setData(newData);
    }

    const updateBendPositions = (a) => {
        let newBendPositions = [...bendPositions];
        newBendPositions[a.id] = a;
        console.log(newBendPositions);
        setBendPositons(newBendPositions);
    }

    const updatenodes = (a) => {
        return data.map(node => {
            return (<Node dragStart={dragStart} dragEnd={dragEnd} id={node.id} position={[node.posX, node.posY]}/>);
        })
    }

    const updateEdges = (a) => {
        return edges.map((edge, idx) => {
            return (<Edge dragStart={dragStart} dragEnd={dragEnd} id={edge.id} node1={data[edge.node1]} node2={data[edge.node2]} bendPos={bendPositions[idx]}/>)
        })
    }

    useEffect(() => {updatenodes()}, [data, mouseIn, bendPositions])

    return (
        <svg style={{height: '100vh', width: '100vw', backgroundColor: 'gray'}} 
            onMouseOver={() => {setMouseIn(true)}} onMouseLeave={(e) => {console.log("Out"); dragging(e); setMouseIn(false); dragEnd()}}
            onMouseMove={(e) => {dragging(e)}} onMouseUp={() => dragEnd()}>
            {updateEdges()}
            {updatenodes()}
        </svg>
    )
}


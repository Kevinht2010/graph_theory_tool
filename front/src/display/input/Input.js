import React from 'react'
import { Button } from 'antd';

export default function Input(props) {

    return (
        <React.Fragment>
            <div style={{position:"absolute", display:"flex", marginTop:"20px", marginLeft:"20px"}} >
                <Button style={{margin: "8px", height:"35px", width:"150px", fontSize:"15px"}} type="primary">Add Node</Button>
                <Button style={{margin: "8px", height:"35px", width:"150px", fontSize:"15px"}} type="primary" onClick={() => {props.straightenEdges()}}>Straighten Edges</Button>
                <Button style={{margin: "8px", height:"35px", width:"150px", fontSize:"15px"}} type="primary">Primary Button</Button>
            </div>
            <div style={{position:"absolute", display:"flex", right:"5%", bottom:"8%"}}>
                <Button style={{margin:"8px", height:"45px", width:"120px", fontSize:"15px"}} type="primary" onClick={() => {props.setAddingVertex(true)}}>Add Node</Button>
            </div>
        </React.Fragment>
    )
}

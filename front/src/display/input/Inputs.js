import React, {useState, useEffect} from 'react'
import { Button, Modal, Checkbox, Input, Form } from 'antd';

export default function Inputs(props) {
    const [showProperties, setShowProperties] = useState(false);
    const [isUpdatingProperties, setIsUpdatingProperties] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [properties, setProperties] = useState([{"id": "cycles", "value": "5"}]);
    const [prevProperties, setPrevProperties] = useState([]);
    const [editEdge, setEditEdge] = useState(false);
    const [addEdge, setAddEdge] = useState(false);
    const [deleteEdge, setDeleteEdge] = useState(false);
    const [addEdgeValidStatus1, setAddEdgeValidStatus1] = useState("none");
    const [addEdgeValidStatus2, setAddEdgeValidStatus2] = useState("none");
    const [graphOptions, setGraphOptions] = useState();
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");

    const options1 = ["Components", "Hamiltonian Cycles"];
    const options2 = ["Spanning Trees", "Euler Tours"];
    const options3 = ["Planarity", "Longest/Shortest Cycles"];

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    const getProperties = () => {
        let content;
        let footer;
        if(properties.length > 0) {
            const data = properties.map((item) => {
                return <p>{item.id + " " + item.value}</p>
            })

            content = (
                <React.Fragment>
                    {data}
                </React.Fragment>
            )

            footer = (
                <React.Fragment>
                    <Button type="primary" style={{marginRight:"32%"}} onClick={() => setProperties([])}>Generate Different Properties</Button>
                    <Button key="back" onClick={() => {setShowProperties(false)}}>
                        Return
                    </Button>
                    <Button key="submit" type="primary" onClick={() => {setShowProperties(false)}}>
                        Confirm
                    </Button>
                </React.Fragment>
            )
        } else {
            content = (
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Checkbox.Group style={{display:"flex", width:"180px", flexWrap:"wrap"}} options={options1} onChange={onChange} />
                    <Checkbox.Group style={{display:"flex", width:"180px", flexWrap:"wrap"}} options={options2} onChange={onChange} />
                    <Checkbox.Group style={{display:"flex", width:"180px", flexWrap:"wrap"}} options={options3} onChange={onChange} />
                </div>
            )
        }
        return (
            <Modal style={{top: "25%"}} width={"600px"} bodyStyle={{minHeight:"200px"}} title="Graph Properties" visible={showProperties} onOk={() => {setShowProperties(false)}} onCancel={() => {setShowProperties(false)}}
                    footer={footer}>
                {content}
            </Modal>
        )
    }

    const addOrDeleteEdge = (bool) => {
        if(v1 !== "" && v2 !== "") {
            let success;
            if(bool) {
                success = props.addEdge(v1, v2);
            } else {
                success = props.deleteEdge(v1, v2);
            }
            setAddEdgeValidStatus1(success[0]);
            setAddEdgeValidStatus2(success[1]);
            return success;
        } else {
            let k = [];
            if(v1 === "") {
                k.push("error")
            } else {
                k.push("none")
            }

            if(v2 === "") {
                k.push("error")
            } else {
                k.push("none");
            }
            setAddEdgeValidStatus1(k[0]);
            setAddEdgeValidStatus2(k[1]);
            return k;
        }
    }

    const getEditEdge = () => {
        const footer = (
            <React.Fragment>
                <Button key="back" onClick={() => {setEditEdge(false); setAddEdge(false); setDeleteEdge(false)}}>
                    Return
                </Button>
                <Button type="primary" onClick={() => {
                        addEdge ? addOrDeleteEdge(true) : addOrDeleteEdge(false)
                    }
                }>
                    {addEdge ? "Add Edge" : "Delete Edge"}
                </Button>
            </React.Fragment>
        )

        return (
            <Modal style={{top: "25%"}} title={addEdge ? "Add Edge" : "Delete Edge"} visible={editEdge} onCancel={() => {setEditEdge(false); setAddEdge(false); setDeleteEdge(false);
                    setAddEdgeValidStatus1("none"); setAddEdgeValidStatus2("none")}} footer={footer}>
                 <div style={{display:"flex", width:"100%", justifyContent:"center", marginTop:"10px", marginBottom:"-5px", marginLeft:"-10px"}}>
                    <Form
                        initialValues={{ remember: true }}
                        onMouseDown={() => {setAddEdgeValidStatus1("none"); console.log("?")
                        setAddEdgeValidStatus2("none")}}
                        >
                        <Form.Item
                            label="Vertex 1"
                            name="v1"
                            validateStatus={addEdgeValidStatus1}
                            help={addEdgeValidStatus1 === "error" ? "Invalid Input" : null}
                        >
                            <Input onPressEnter={(e) => {addEdge ? addOrDeleteEdge(true) : addOrDeleteEdge(false)}} autoComplete="off" onChange={(e) => setV1(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            validateStatus={addEdgeValidStatus2}
                            help={addEdgeValidStatus2 === "error" ? "Invalid Input" : null}
                            label="Vertex 2"
                            name="v2"
                        >
                            <Input onPressEnter={(e) => {addEdge ? addOrDeleteEdge(true) : addOrDeleteEdge(false)}} autoComplete="off" onChange={(e) => setV2(e.target.value)} />
                        </Form.Item>
                    </Form>
                 </div>
            </Modal>
        )
    }

    return (
        <React.Fragment>
            <div style={{position:"absolute", display:"flex", marginTop:"20px", marginLeft:"20px"}} >
                <Button style={{margin: "8px", height:"35px", width:"150px", fontSize:"15px"}} type="primary" onClick={() => setShowInput(true)}>Input Graph</Button>
                <Button style={{margin: "8px", height:"35px", width:"150px", fontSize:"15px"}} type="primary" onClick={() => {props.straightenEdges()}}>Straighten Edges</Button>
                <Button style={{margin: "8px", height:"35px", width:"150px", fontSize:"15px"}} type="primary" onClick={() => setShowProperties(true)}>Graph Properties</Button>
            </div>
            <Modal style={{top: "25%"}} title="Graph Input" visible={showInput} onOk={() => {setShowInput(false)}} onCancel={() => {setShowInput(false)}}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            {getProperties()}
            {getEditEdge()}
            <div style={{position:"absolute", display:"flex", right:"3%", bottom:"15%", flexWrap:"wrap", width:"125px"}}>
                <Button style={{margin:"8px", height:"45px", width:"95px", fontSize:"15px", padding:"0px"}} type="primary" 
                        onClick={() => {setDeleteEdge(true); setEditEdge(true);}}>
                    Delete Edge
                </Button>
                <Button style={{margin:"8px", height:"45px", width:"95px", fontSize:"15px", padding:"0px"}} type="primary" 
                        onClick={() => {props.setDeletingVertex(true)}}>
                    Delete Node
                </Button>
                <Button style={{margin:"8px", height:"45px", width:"95px", fontSize:"15px", padding:"0px"}} type="primary" 
                    onClick={() => {setAddEdge(true); setEditEdge(true)}}>
                    Add Edge
                </Button>
                <Button style={{margin:"8px", height:"45px", width:"95px", fontSize:"15px", padding:"0px"}} type="primary" 
                    onClick={() => {props.setAddingVertex(true)}}>
                    Add Node
                </Button>
            </div>
        </React.Fragment>
    )
}

import React, {useState, useEffect} from 'react'
import { Button, Modal, Checkbox, Input, Form } from 'antd';

export default function Inputs(props) {
    const [showProperties, setShowProperties] = useState(false);
    const [isUpdatingProperties, setIsUpdatingProperties] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [properties, setProperties] = useState([{"id": "cycles", "value": "5"}]);
    const [prevProperties, setPrevProperties] = useState([]);
    const [addEdge, setAddEdge] = useState(false);
    const [addEdgeValidStatus1, setAddEdgeValidStatus1] = useState("none");
    const [addEdgeValidStatus2, setAddEdgeValidStatus2] = useState("none");
    const [graphOptions, setGraphOptions] = useState();
    const [v1, setV1] = useState(null);
    const [v2, setV2] = useState(null);

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

    const canAddEdge = () => {
        if(v1 !== null && v2 !== null) {
            let success = props.addEdge(v1, v2);
            console.log(success)
            if(success[0] === "success") {
                setAddEdge(false);
            }

            return success;
        } else {
            let k = [];
            if(v1 === null) {
                k.push("error")
            } else {
                k.push("none")
            }

            if(v2 === null) {
                k.push("error")
            } else {
                k.push("none");
            }

            return k;
        }
    }

    const getAddEdge = () => {
        const footer = (
            <React.Fragment>
                <Button key="back" onClick={() => {setAddEdge(false)}}>
                    Cancel
                </Button>
                <Button type="primary" onClick={() => {
                        let v = canAddEdge();
                        setAddEdgeValidStatus1(v[0]);
                        setAddEdgeValidStatus2(v[1]);
                    }
                }>
                    Add Edge
                </Button>
            </React.Fragment>
        )

        return (
            <Modal style={{top: "25%"}} title="Add Edge" visible={addEdge} onCancel={() => {setAddEdge(false); 
                    setAddEdgeValidStatus1("none"); setAddEdgeValidStatus2("none")}} footer={footer}>
                 <div style={{display:"flex", width:"100%", justifyContent:"center", marginTop:"10px", marginBottom:"-5px", marginLeft:"-10px"}}>
                    <Form
                        initialValues={{ remember: true }}
                        >
                        <Form.Item
                            label="Vertex 1"
                            name="v1"
                            validateStatus={addEdgeValidStatus1}
                            help={addEdgeValidStatus1 === "error" ? "Invalid Input" : null}
                        >
                            <Input onChange={(e) => setV1(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            validateStatus={addEdgeValidStatus2}
                            help={addEdgeValidStatus2 === "error" ? "Invalid Input" : null}
                            label="Vertex 2"
                            name="v2"
                        >
                            <Input onChange={(e) => setV2(e.target.value)} />
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
            {getAddEdge()}
            <div style={{position:"absolute", display:"flex", right:"3%", bottom:"7%", flexWrap:"wrap", width:"125px"}}>
                <Button style={{margin:"8px", height:"45px", width:"95px", fontSize:"15px", padding:"0px"}} type="primary" onClick={() => {setAddEdge(true)}}>Add Edge</Button>
                <Button style={{margin:"8px", height:"45px", width:"95px", fontSize:"15px", padding:"0px"}} type="primary" onClick={() => {props.setAddingVertex(true)}}>Add Node</Button>
            </div>
        </React.Fragment>
    )
}

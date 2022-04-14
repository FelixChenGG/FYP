import React,{Component,useState,useEffect} from 'react'
import { Form, FloatingLabel,Pagination} from 'react-bootstrap'



function WebSetting() {
    const [address , setAddress] = useState("")

    
        return (
            <>
            <Form id="addressForm" >
                  <Form.Group >
                  <Form.Label className="text-info"><h4>WebCam Image Address</h4></Form.Label>
                  <br/>
                  <Form.Label>WebCam Image Address</Form.Label>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setAddress(e.target.value) }/>
                </FloatingLabel>
                  {address===""?<Form.Text className="text-muted">Missing Value, Please enter !
                    </Form.Text> : <p1> </p1>}
                  
                  </Form.Group>
              </Form>
            
                </>
            )
    
    
}


export default WebSetting;
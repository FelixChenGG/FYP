import React,{Component,useState,useEffect} from 'react'
import { Form, FloatingLabel,Row} from 'react-bootstrap'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


function WebSetting() {
    const [address , setAddress] = useState("")
    const [toggle, settoggle] = useState(false);
    const handleChange=(toggle)=> {
      if (toggle){
        settoggle({toggle: false});
        document.getElementById("moreAddressForm").style.display="block";
      }else if(!toggle){
        settoggle({toggle: true}); 
        document.getElementById("moreAddressForm").style.display="none";
        document.getElementById("moreAddressForm").reset();
      }
      }
    
        return (
            <>
            <Form id="addressForm" >
                  <Form.Group >
                  <Form.Label className="text-info"><h4>WebCam Image Address</h4></Form.Label>
                  <br/>
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
                <br/><br/>
                
                <div class="divider"></div>
                <Row xs={2} md={2} lg={2}>
                    <h5>Multiple mail transfers :</h5>
                    <BootstrapSwitchButton
                checked={false} 
                width={100}
                onChange={handleChange} />
                </Row>
                <br/><br/>
               {toggle ?( <Form id="moreAddressForm" >
                  <Form.Group >
                  <Form.Label className="text-info"><h4>Addition Email Address</h4></Form.Label>
                  <br/>
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
                  ):null
                }
                </>
                
              
            )
    
    
}


export default WebSetting;
import React,{useState} from 'react'
import { Form, FloatingLabel} from 'react-bootstrap'
import Button from '@mui/material/Button';
import axios from 'axios'
import { Store } from 'react-notifications-component';
function WebSetting() {
    const [address , setAddress] = useState("")
    const handleSubmit =async(event)=> {
      console.log(address);
      await axios.get('http://localhost:5000//user/email/'+address)
        .then(function (response)
        {
          if(response.data.status ==="ok"){
            Store.addNotification({
            title: "Congratulation",
            message: "Change Successful  !!!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
            })
          }else{
            Store.addNotification({
              title: "Worning",
              message: "Change Fail !!!",
              type: "danger",
              insert: "top",
              container: "top-right",
              animationIn: ["animate__animated", "animate__fadeIn"],
              animationOut: ["animate__animated", "animate__fadeOut"],
              dismiss: {
                  duration: 5000,
                  onScreen: true
              }
              })
          }
          
          // handle success
        })
    }
        return (
            <>
            <Form id="addressForm" onSubmit = {handleSubmit}>
                  <Form.Group >
                  <Form.Label className="text-info"><h4>Change WebCam Image Address</h4></Form.Label>
                  <br/>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setAddress(e.target.value) }/>
                </FloatingLabel>
                  {address===""?<Form.Text className="text-danger">Missing Value, Please enter !
                    </Form.Text> : <p1> </p1>}
                    <br/>
                    <br/>
                    <Button className="bg-info" variant="primary" type="submit">
                            Submit
                    </Button>
                  </Form.Group>
                  
                </Form>
                <br/><br/>
                
               
                </>
                
              
            )
    
    
}


export default WebSetting;
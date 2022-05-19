import React,{useState} from 'react'
import { Form, FloatingLabel} from 'react-bootstrap'
import Button from '@mui/material/Button';
import axios from 'axios'
import { Store } from 'react-notifications-component';

function ChangePassword() {
    const [oldpass , setOldpass] = useState("")
    const [newpass , setNewpass] = useState("")
    const handleSubmit =async()=> {
      const data = {old:oldpass,new:newpass}
      // console.log(data)
      await axios.post('http://localhost:5000/reset', {data})
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
          
        })
    }
        return (
            <>
            <Form id="addressForm" onSubmit = {handleSubmit}>
                  <Form.Group >
                  <Form.Label className="text-info"><h4>Change User Password</h4></Form.Label>
                  <br/>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Old Password"
                    className="mb-3"
                    >
                    <Form.Control type="password"  name= 'old' onChange={(e) => setOldpass(e.target.value) }/>
                </FloatingLabel>
                {oldpass===""?<Form.Text className="text-danger">Missing Value, Please enter !
                    </Form.Text> : <p1> </p1>}
                    <br/>
                <br/>
                <FloatingLabel
                    controlId="floatingInput"
                    label="New Password"
                    className="mb-3"
                    >
                    <Form.Control type="password"  name= 'new' onChange={(e) => setNewpass(e.target.value)} />
                </FloatingLabel>

                  {newpass===""?<Form.Text className="text-danger">Missing Value, Please enter !
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


export default ChangePassword;
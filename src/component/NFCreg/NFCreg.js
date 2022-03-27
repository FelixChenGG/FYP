import React,{Component,useState,useEffect} from 'react'
import { Card, Form,Button} from 'react-bootstrap'



function Register() {
        const [name, setName] = useState("")
        
        useEffect(() => {
            fetch('http://192.168.8.100:5000/user/register/'+name)
            .then(res => res.json())
        }, []);
        const handleSubmit =(event)=> {
          console.log(name);
        }
   
        return (
        <>  
        <div>
        
            <Card style={{ width: '100%' }}>
                <Card.Header>
                <h3 className="card-title">Quick Example <small>jQuery Validation</small></h3>
                </Card.Header>
              
              <Form id="quickForm" onSubmit = {handleSubmit}>
                <Card.Body>
                  <Form.Group >
                  <Form.Label className="text-info"><h4>NFC Name</h4></Form.Label>
                  <Form.Control type="text" placeholder="Enter NFC Name"  
                  onChange={(e) => setName(e.target.value) }/>
                  {name==""?<Form.Text className="text-warning"><h6>Missing Value, Please enter !</h6>
    </Form.Text> : <p1> </p1>}
                  
                  </Form.Group>
                  
                </Card.Body>
                
                <Card.Footer>
                    <Button variant="primary" type="submit">
                            Submit
                    </Button>
                </Card.Footer>
              </Form>
            </Card>
            

        </div>
        
      </>
    )

}


export default class NFCreg extends Component {

    render() {
        
        return (
            <>
                <div>
                  <Register/>
                </div>
                </>
            )
    }
    
}
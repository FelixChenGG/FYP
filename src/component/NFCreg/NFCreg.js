import React,{Component,useState,useEffect} from 'react'
import { Card, Form,Button} from 'react-bootstrap'



function Register() {
        const [records, setRecords] = useState()
        let name;
        useEffect(() => {
            fetch('http://192.168.8.100:5000/user/register/'+name)
            .then(res => res.json())
            .then(data => setRecords(data))
        }, []);

   
        return (
        <>  
        <div>
        
            <Card style={{ width: '100%' }}>
                <Card.Header>
                <h3 class="card-title">Quick Example <small>jQuery Validation</small></h3>
                </Card.Header>
              
              <Form id="quickForm">
                <div class="card-body">
                  <Form.Group >
                  <Form.Label>NFC Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter NFC Name" />
                  {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
                  </Form.Group>
                  
                </div>
                
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
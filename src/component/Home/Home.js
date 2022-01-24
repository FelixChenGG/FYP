import React,{Component} from 'react'
import { Row, Container, Badge,Card } from 'react-bootstrap'
import { DoorClosed , DoorOpenFill } from 'react-bootstrap-icons';
// npm install react-bootstrap-icons --save
import './Home.css';

export default class Home extends Component {
    render() {
        const isOpen = true;
        let door;
         if (isOpen) {
             door = <DoorOpenFill color="royalblue" size={50} /> 
            }else{
            door = <DoorClosed color="royalblue" size={50} /> 
        }
        return (
            <>
         <div>
            <div className='Home'>
                <br/>
                <br/>
                <br/>
                <h1 class="text-light ">Home State</h1>
                
                </div>
                <br/>
              <div >
                <Card className='Card' >
                    <Card.Body className='bg-white' >
                        <Container>
                        <Row xs={2} md={2} lg={2}>
                            <h1><Badge bg="secondary">Door State :</Badge></h1>
                        {door}
                    
                        </Row>
                        </Container>
                    </Card.Body>
                  
                </Card>
                </div> 

               
               </div>
                </>
            )
    }
    
}

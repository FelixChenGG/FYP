import React,{Component,useEffect,useState} from 'react'
import { Row, Container, Badge,Card } from 'react-bootstrap'
import { DoorClosed , DoorOpenFill } from 'react-bootstrap-icons';
// npm install react-bootstrap-icons --save
import './Home.css';

function DoorState() {
    const [isOpen, setIsOpen] = useState(false)
        
    useEffect(() => {
        
        fetch('http://127.0.0.1:5000/door')
        .then(response => response.json())
        .then(data =>setIsOpen(data.status))
    }, [isOpen]);
    
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


export default class Home extends Component {
    render() {
        
        return (
            <>
            <div>
                <DoorState />
               </div>
                </>
            )
    }
    
}

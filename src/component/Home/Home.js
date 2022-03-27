
import React,{Component,useEffect,useState} from 'react'
import { Row, Container, Badge,Card, Button,Col  } from 'react-bootstrap'
import { DoorClosed , DoorOpenFill } from 'react-bootstrap-icons';
import axios from 'axios'

// npm install react-bootstrap-icons --save
import './Home.css';

function Home() {
    
    const [count, setCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const HandleClick=async(e)=> {
        console.log(e.target.value)
        setCount(e.target.value)
        if(count % 2 == 0){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
        await axios.get('http://127.0.0.1:5000/door/open')
        .then(function (response) {
            // handle success
            console.log(response);
          })

        }
        

    const vla = count
  return (
      
    
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
                   <Col><h1><Badge bg="secondary">Door State :</Badge></h1></Col>
                    <Col>{isOpen?<DoorOpenFill color="royalblue" size={50}/> : <DoorClosed color="royalblue" size={50}/>}</Col>
                   </Row>
                   <br/>
                   <br/>
                   <Row xs={2} md={2} lg={2}>
                   <Col><h1><Badge bg="secondary">Door Button :</Badge></h1></Col>
                    <Col><Button variant="primary" value={Number(vla)+1} onClick={HandleClick}>Switch</Button></Col>
                   
                   
                   </Row>
                   </Container>
               </Card.Body>
             
           </Card>
           </div> 

          
          </div>
           
)

}


export default Home;

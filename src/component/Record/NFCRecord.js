import React,{Component,useState,useEffect} from 'react'
import { Card, Table,Pagination} from 'react-bootstrap'



function Record() {
        const [records, setRecords] = useState()

        useEffect(() => {
            fetch('http://192.168.8.100:5000/nfc/read')
            .then(res => res.json())
            .then(data => setRecords(data))
        }, []);

   
        return (
        <>  <Card style={{ width: '100%' }}>
                    <Card.Header className='bg-white'>NFC Record</Card.Header>
                    <Card.Body className='bg-white'>
                         <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Role</th>
                                <th>Time</th>
                                <th>UID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.id.map((record) =>{
                                <tr>
                                <td>{record.name}</td>
                                <td>{record.role}</td>
                                <td>{record.time}</td>
                                <td>{record.UID}</td>
                                </tr>

                                })}
                               
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                            </tbody>  
                        </Table>
                    </Card.Body>
                    <Card.Footer className='bg-white' >
                         <Pagination >
                         <Pagination.First />
                         <Pagination.Item>{1}</Pagination.Item>
                         <Pagination.Item>{2}</Pagination.Item>
                         <Pagination.Item>{3}</Pagination.Item>
                         <Pagination.Last />
                         </Pagination>
                    </Card.Footer>
                    </Card>
       
        
        
      </>
    )

}


export default class NFCRecord extends Component {

    render() {
        
        return (
            <>
                <div>
                  <Record/>
                </div>
                </>
            )
    }
    
}

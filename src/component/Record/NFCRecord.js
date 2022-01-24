import React,{Component} from 'react'
import { Card, Table,Pagination} from 'react-bootstrap'


export default class NFCRecord extends Component {
    render() {
        return (
            <>
                <div>
                    <Card style={{ width: '100%' }}>
                    <Card.Header className='bg-white'>NFC Record</Card.Header>
                    <Card.Body className='bg-white'>
                         <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Time</th>
                                <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
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
                </div>
                </>
            )
    }
    
}

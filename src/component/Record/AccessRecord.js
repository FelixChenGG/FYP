import React,{Component,useState,useEffect} from 'react'
import { Card, Table,Pagination} from 'react-bootstrap'



function addItem(props){
    for(var i =0 ; i <= props.records; i++){
        <Pagination.Item>{i}</Pagination.Item>
    }
}

function AccessRecord() {
    
    const [records, setRecords] = useState([])
        useEffect(() => {
            fetch('http://127.0.0.1:5001/record/all')
            .then(res => res.json())
            .then(data => setRecords(data.data))
        }, [records]);

        

   //setRecords(data)
        return (
        <>  <Card style={{ width: '100%' }}>
                    <Card.Header className='bg-white'>Access Record</Card.Header>
                    <Card.Body className='bg-white'>

                         <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Data Time</th>
                                <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map(record =>(
                                
                                <tr>
                                <td>{record.datetime}</td>
                                <td>{record.msg}</td>
                                </tr>
                                ))}
                            </tbody>  
                        </Table>
                    </Card.Body>
                    <Card.Footer className='bg-white' >
                         <Pagination
                          total={records.length}
                          pageSize={10}
                          size={
                            Math.ceil(records.length/10)}
                          >
                         <Pagination.First />
                         <addItem records={records.length/10}/>
                         <Pagination.Last />
                         </Pagination>
                    </Card.Footer>
                    </Card></>
    )

}



export default AccessRecord;

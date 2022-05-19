import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Card, Table,Pagination} from 'react-bootstrap'
import { Store } from 'react-notifications-component';






function Paginations({ postsPerPage, totalPosts, paginate }) {

    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(postsPerPage, totalPosts, paginate )
  return (
    
    <nav>
      <Pagination>
        {pageNumbers.map(number => (
          <Pagination.Item key={number}>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
            </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
}



function AccessRecord() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [records, setRecords] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/record/all')
        .then(res => res.json())
        .then(data => setRecords(data))
    }, [records]);
    
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPages = records?records.slice(indexOfFirstPost, indexOfLastPost):[]
    console.log(currentPages)
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
   //setRecords(data)
        return (
          
        <>  
        <noti />
        <Card style={{ width: '100%' }}>
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
                                {currentPages.map(record =>(
                          
                                <tr>
                                <td>{record.datetime}</td>
                                <td>{record.msg}</td>
                                </tr>
                                ))}
                            </tbody>  
                        </Table>
                    </Card.Body>
                    <Card.Footer className='bg-white' >
                    <Paginations
                        postsPerPage={postsPerPage}
                        totalPosts={records?records.length:0}
                        paginate={paginate}
                    />
                    </Card.Footer>
                    </Card></>
    )

}



export default AccessRecord;

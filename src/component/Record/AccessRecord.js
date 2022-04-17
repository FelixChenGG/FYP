import React,{useState} from 'react'
import { Card, Table,Pagination} from 'react-bootstrap'



// const addItem=(props)=>{
//     for(var i=0 ; i <= props.records; i++){
//         <Pagination.Item>{i}</Pagination.Item>
//     }
// }


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
    const currentPosts=[ {datatime:"1" },{datatime:"2" },{datatime:"2" },{datatime:"2" },{datatime:"2" }
                                            ,{datatime:"2" },{datatime:"2" },{datatime:"2" },{datatime:"2" },{datatime:"2" }
                                            ,{datatime:"2" },{datatime:"2" },{datatime:"2" },{datatime:"2" },{datatime:"2" }]
        // useEffect(() => {
        //     fetch('http://127.0.0.1:5001/record/all')
        //     .then(res => res.json())
        //     .then(data => setRecords(data.data))
        // }, [records]);
    
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const records = currentPosts.slice(indexOfFirstPost, indexOfLastPost)
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                    <Paginations
                        postsPerPage={postsPerPage}
                        totalPosts={currentPosts.length}
                        paginate={paginate}
                    />
                    </Card.Footer>
                    </Card></>
    )

}



export default AccessRecord;

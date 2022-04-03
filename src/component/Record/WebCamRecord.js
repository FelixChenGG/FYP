import React,{Component,useState,useEffect} from 'react'
import { Card, Table,Pagination} from 'react-bootstrap'



function WebCamRecord() {

    const [webimage, setWebImage] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5001/record/all')
        .then(res => res.json())
        .then(data => setWebImage(data))
    }, [webimage]);

    
        return (
            <>
            <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 className="card-title">WebCam Record </h3>
                </Card.Header>
            <Card.Body>
            <figure class="figure">
                <img src="..." class="figure-img img-fluid rounded" alt="..."></img>
                <figcaption class="figure-caption">A caption for the above image.</figcaption>
            </figure>
            </Card.Body>
            </Card>
            
                </>
            )
    
    
}


export default WebCamRecord
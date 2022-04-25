import React,{useState,useEffect} from 'react'
import { Card} from 'react-bootstrap'



function WebCamRecord() {

    const [webimage, setWebImage] = useState([])

    useEffect(() => {
        fetch('http://192.168.8.101:5000/cam/photo')
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
            <img class="card-img-top" src={webimage} alt="Card image cap" ></img>
            <figcaption class="figure-caption">A caption for the above image.</figcaption>
            </figure>
            </Card.Body>
            </Card>
                </>
            )
    
    
}


export default WebCamRecord
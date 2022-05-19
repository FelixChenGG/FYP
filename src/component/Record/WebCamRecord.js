import React,{useState,useEffect} from 'react'
import { Card} from 'react-bootstrap'



function WebCamRecord() {

    const [webimage, setWebImage] = useState([])

    const fetchImage = async () => {
        const res = await fetch('http://localhost:5000/cam/photo');
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setWebImage(imageObjectURL);
      };
    
      useEffect(() => {
  
          fetchImage();

      }, [webimage]);
    
        return (
            <>
            <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 className="card-title">WebCam Record </h3>
                </Card.Header>
            <Card.Body>
            <figure className="figure">
            <img className="card-img-top" src='img/image.jpg' alt="Card image cap" ></img>
            <figcaption className="figure-caption">A caption for the above image.</figcaption>
            </figure>
            </Card.Body>
            </Card>
                </>
            )
    
    
}


export default WebCamRecord
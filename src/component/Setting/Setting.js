import React,{Component,useState,useEffect} from 'react'
import { Card, Container,Table,Pagination} from 'react-bootstrap'
import WebSetting from './WebSetting';
import EmailBox from './EmailBox';
import ChangePassword from './ChangePassword';


function Setting() {


    
        return (
            <><div >
            <h1>Setting</h1>
            <Container fluid >
            <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 className="card-title"></h3>
                </Card.Header>
            <Card.Body className='bg-white'>
            <ChangePassword/>
            </Card.Body>
            </Card>

            <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 className="card-title"></h3>
                </Card.Header>
            <Card.Body className='bg-white'>
            <WebSetting/>
            </Card.Body>
            </Card>

            <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 className="card-title"></h3>
                </Card.Header>
            <Card.Body className='bg-white'>
            <EmailBox/>
            </Card.Body>
            </Card>
            
            
            </Container></div>
            
                </>
            )

    
    
}


export default Setting;
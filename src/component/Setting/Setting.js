import React,{Component,useState,useEffect} from 'react'
import { Card, Container,Table,Pagination} from 'react-bootstrap'
import WebSetting from './WebSetting';



function Setting() {


    
        return (
            <>
            <h1>Setting</h1>
            <Container style={{ width: '100%' }}>
            <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 className="card-title"></h3>
                </Card.Header>
            <Card.Body className='bg-white'>
            <WebSetting/>

            </Card.Body>
            </Card>
            </Container>
                </>
            )
    
    
}


export default Setting;
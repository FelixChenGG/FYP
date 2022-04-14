import React,{Component,useState,useEffect} from 'react'
import { Card, Table,Pagination} from 'react-bootstrap'
import WebSetting from './WebSetting';



function Setting() {


    
        return (
            <>
            <h1>Setting</h1>
            <Card style={{ width: '100%' }}>
            <Card.Header>
                <h3 className="card-title"></h3>
                </Card.Header>
            <Card.Body className='bg-white'>
            <WebSetting/>

            </Card.Body>
            </Card>
            
                </>
            )
    
    
}


export default Setting;
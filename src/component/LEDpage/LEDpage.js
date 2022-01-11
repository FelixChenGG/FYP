
import React,{Component,useState,useEffect} from 'react'
import { Button,ButtonGroup,ToggleButton} from 'react-bootstrap'
import BlueLED from './BlueLED';
import GreenLED from './GreenLED';
import RedLED from './RedLED';



function ToggleButtonPage() {

    return (
        <>
        <br />
        <RedLED/>
        
      <GreenLED />

      <BlueLED/>
        </>

        
    )
}



export default class LEDpage extends Component {

    render() {
        return (
            <div >
                <h2> LED PAGE</h2>
                <ToggleButtonPage />
                </div>
            )
    }
    
}

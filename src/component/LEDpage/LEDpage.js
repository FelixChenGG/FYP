
import React,{Component} from 'react'
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

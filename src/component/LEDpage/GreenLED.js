import React,{Component,useState,useEffect} from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function GreenButton() {

    const [urlValue, setURLValue] = useState()
 
    const [radioValue, setRadioValue] = useState()
  
    const greenHandleChange=(e)=> {
      if (e){
        setRadioValue("on")
        setURLValue("/ledGrn/on")
      }else{
        setRadioValue("off")
        setURLValue("/ledGrn/off")
      }
      
     
      }
      //handle Synchronize variable
     useEffect(()=>{
        console.log(radioValue)
        console.log(urlValue)
        fetch('http://192.168.8.100:5000'+urlValue
      //   'methods':'GET',
      //   // headers : {
      //   //   'Content-Type':'application/json'
      //   // }
      // }
      )
      .catch(error => console.log(error))
      .then()
      },[radioValue,urlValue])
      return (
        <>
        <br />
        <h3>GREEN LED</h3>
            <BootstrapSwitchButton
            onstyle="success"
                checked={false} 
                width={100}
                onChange={greenHandleChange}
                
          />
        
      </>
    )

}


export default class GreenLED extends Component {
    render() {
        return (
            <><div>
                <GreenButton />
            </div>
                
                </>
            )
    }
    
}
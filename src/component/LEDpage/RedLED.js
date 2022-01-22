import React,{Component,useState,useEffect} from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function RedButton() {

    const [urlValue, setURLValue] = useState()
 
    const [radioValue, setRadioValue] = useState()
   
    const redHandleChange=(e)=> {
      if (e){
        setRadioValue("on")
        setURLValue("/ledRed/on")
      }else{
        setRadioValue("off")
        setURLValue("/ledRed/off")
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
        <h3>RED LED</h3>
            <BootstrapSwitchButton
                onstyle="danger"
                checked={false} 
                width={100}
                onChange={redHandleChange}
                
          />
        
      </>
    )

}


export default class RedLED extends Component {
    render() {
        return (
            <><div>
                <RedButton />
            </div>
                
                </>
            )
    }
    
}
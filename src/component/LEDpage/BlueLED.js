import React,{Component,useState,useEffect} from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

function BlueButton() {

    const [urlValue, setURLValue] = useState()
 
    const [radioValue, setRadioValue] = useState()
    
    const blueHandleChange=(e)=> {
      if (e){
        setRadioValue("on")
        setURLValue("/ledBlu/on")
      }else{
        setRadioValue("off")
        setURLValue("/ledBlu/off")
      }
      
     
      }
      //handle Synchronize variable
     useEffect(()=>{
        console.log(radioValue)
        console.log(urlValue)


        fetch('http://127.0.0.1:5000'+urlValue
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
        <h3>BLUE LED</h3>
            <BootstrapSwitchButton
                checked={false} 
                width={100}
                onChange={blueHandleChange}
                
          />
        
      </>
    )

}


export default class BlueLED extends Component {
    render() {
        return (
            <><div>
                <BlueButton />
            </div>
                
                </>
            )
    }
    
}
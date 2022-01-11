
import React,{Component,useState,useEffect} from 'react'
import { Button,ButtonGroup,ToggleButton} from 'react-bootstrap'



function ToggleButtonExample() {

  const [urlValue, setURLValue] = useState("/ledRed/off")
 
  const [radioValue, setRadioValue] = useState('off')
  const radios = [
    { name: 'TURN OFF', value: 'off' },
    { name: 'TURN ON', value: 'on' },
  ];
  const handleChange=(e)=> {
    
    setRadioValue(e.currentTarget.value)
    setURLValue("/ledRed/"+e.currentTarget.value)
   
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
        <h3>RED LED</h3>
        <ButtonGroup>
            {radios.map((radio, idx) => (
            <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={handleChange}
                
            >
                {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
        </>
    )
}



export default class LEDpage extends Component {

    render() {
        return (
            <div >
                <h2> LED PAGE</h2>
                <ToggleButtonExample />
                </div>
            )
    }
    
}

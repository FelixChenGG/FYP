import React,{Component,useState} from 'react'

import { Button,ButtonGroup,ToggleButton} from 'react-bootstrap';

function ToggleButtonExample() {
    
const [radioValue, setRadioValue] = useState('1')
  const radios = [
    { name: 'TURN OFF', value: '1' },
    { name: 'TURN ON', value: '2' },
  ];

    return (
        <>
        <br />
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
                onChange={(e) => setRadioValue(e.currentTarget.value)}
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

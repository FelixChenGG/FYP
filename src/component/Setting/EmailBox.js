import React ,{useState}from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css';
//npm install --save font-awesome
import { Form, FloatingLabel,Row} from 'react-bootstrap'

const options = [
    { value: 'luna', label: 'Moon' },
    { value: 'phobos', label: 'Phobos' },
    { value: 'deimos', label: 'Deimos' },
    { value: 'io', label: 'Io' },
    { value: 'europa', label: 'Europa' },
    { value: 'ganymede', label: 'Ganymede' },
    { value: 'callisto', label: 'Callisto' },
    { value: 'mimas', label: 'Mimas' },
    { value: 'enceladus', label: 'Enceladus' },
    { value: 'tethys', label: 'Tethys' },
    { value: 'rhea', label: 'Rhea' },
    { value: 'titan', label: 'Titan' },
    { value: 'iapetus', label: 'Iapetus' },
];

class EmialBox extends React.Component {
    
    state = { selected: ['phobos', 'titan'] };
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(selected) {
        this.setState({ selected });
    }

    render() {
        const { selected } = this.state;

        return (
            <>
            <Form id="mutiaddressForm" >
                  <Form.Group >
                  <Form.Label className="text-info"><h4>Multi Address</h4></Form.Label>
                  <br/>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setAddress(e.target.value) }/>
                </FloatingLabel>
                  {address===""?<Form.Text className="text-muted">Missing Value, Please enter !
                    </Form.Text> : <p1> </p1>}
                  </Form.Group>
                </Form>

            <DualListBox 
                options={options}
                selected={selected}
                onChange={this.onChange}
            />
            </>
            
        );
    }
}

export default EmialBox;
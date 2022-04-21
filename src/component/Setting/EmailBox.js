import React ,{useState}from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css';
//npm install --save font-awesome
import { Form, FloatingLabel,Row} from 'react-bootstrap'
import Button from '@mui/material/Button';

// const options = [
//     { value: 'luna', label: 'Moon' },
//     { value: 'phobos', label: 'Phobos' },
//     { value: 'deimos', label: 'Deimos' },
//     { value: 'io', label: 'Io' },
//     { value: 'europa', label: 'Europa' },
//     { value: 'ganymede', label: 'Ganymede' },
//     { value: 'callisto', label: 'Callisto' },
//     { value: 'mimas', label: 'Mimas' },
//     { value: 'enceladus', label: 'Enceladus' },
//     { value: 'tethys', label: 'Tethys' },
//     { value: 'rhea', label: 'Rhea' },
//     { value: 'titan', label: 'Titan' },
//     { value: 'iapetus', label: 'Iapetus' },
// ];

class EmialBox extends React.Component {
    
    state = { selected: [], address :"",options: []};
    
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.HandleAddress = this.HandleAddress.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    onChange(selected) {
        this.setState({ selected });
    }
    HandleAddress(address){
        console.log(address.target.value);
        this.setState({address:address.target.value});
        
    }
    handleSubmit(e){
        console.log(this.state.address);
        this.setState({options:this.state.options.concat({value:this.state.address,label:this.state.address})})
        e.preventDefault();
    }



    
    render() {
        const { selected } = this.state;

        return (
            <>
            <Form id="mutiaddressForm" onSubmit = {this.handleSubmit}>
                  <Form.Group >
                  <Form.Label className="text-info"><h4>Multi Address</h4></Form.Label>
                  <br/>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com" onChange={this.HandleAddress }/>
                    <Button variant="primary" type="submit">
                            Add
                    </Button>
                </FloatingLabel>
                  {this.state.address===""?<Form.Text className="text-muted">Missing Value, Please enter !
                    </Form.Text> : <p1> </p1>}
                  </Form.Group>
                </Form>

            <DualListBox 
                options={this.state.options}
                selected={selected}
                onChange={this.onChange}
                onClick={this.onClick}
            />

                <Button variant="primary" type="button">
                            Submit
                    </Button>
            </>
            
        );
    }
}

export default EmialBox;
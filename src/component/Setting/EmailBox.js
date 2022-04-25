import React ,{useState}from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import 'font-awesome/css/font-awesome.min.css';
//npm install --save font-awesome
import { Form, FloatingLabel,Row} from 'react-bootstrap'
import Button from '@mui/material/Button';
import { Store } from 'react-notifications-component';
import axios from 'axios';

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
        this.handleOnlick =this.handleOnlick.bind(this);
    }

    onChange(selected) {
        this.setState({selected});
        
    }
    HandleAddress(address){
        this.setState({address:address.target.value});
        
    }
    // 不能重複
    handleSubmit(e){
        console.log(this.state.options);
        var i ;
        if(this.state.options.length == 0){
            this.setState({options:this.state.options.concat({value:this.state.address,label:this.state.address})})
        }else{
            for(i = 0;i <= this.state.options.length; i++){
                if(this.state.options[i].value == this.state.address){
                    Store.addNotification({
                        title: "Worning",
                        message: "Add Fail, has repeated !",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 5000,
                            onScreen: true
                        }
                        })
                }else if(i==this.state.options.length-1 ){
                    this.setState({options:this.state.options.concat({value:this.state.address,label:this.state.address})})
                }
            
            }
        }
        
        e.preventDefault();
        
        
    }

    handleOnlick(e){
        e.preventDefault();
        axios.post('http://192.168.8.101:5000/email/send',{'email':this.state.selected})
        console.log(this.state.selected);
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
                    <br/>
                    <Button variant="primary" type="submit">
                            Add
                    </Button>
                </FloatingLabel>
                  </Form.Group>
                </Form>
                <br/>
                <br/>
            <DualListBox 
                options={this.state.options}
                selected={selected}
                onChange={this.onChange}
                onClick={this.onClick}
            />
            <br/>
            <br/>

                <Button  className="bg-info" variant="primary" type="button" onClick={this.handleOnlick}>
                            Submit
                    </Button>
            </>
            
        );
    }
}

export default EmialBox;
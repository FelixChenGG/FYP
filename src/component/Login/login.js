
import React,{useState} from 'react'
import { Button,Card,Form, Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import "animate.css/animate.min.css";
//npm install react-notifications-component
//npm run build
import {
    useHistory
  } from "react-router-dom";


function Login ()  {
    let history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =(event)=> {
         event.preventDefault();
        if(name == 'admin' && password == '1'){
           
            history.push({pathname:"/index",state:{}})
        }else{
            history.push({pathname:"/",state:{}})
            Store.addNotification({
                title: "Worning",
                message: "Username or Password incorrect !!!",
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
        }
        

    };

        return (
            <div className="Login">
                <br/>
                <br/>
                <br/>
                <br/>
              <Container >
                    <Card >    
                       <Card.Header>   

                            <h3>Sign In</h3>
                        </Card.Header> 

                        <Card.Body>
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="user"/></span>
                                     </div>
                                   <input type="text" className="form-control" placeholder="username" value={name}
          onChange={(e) => setName(e.target.value)}></input>

                                </Form.Group>
                                <p></p>
                                <Form.Group className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="key"/></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
                                </Form.Group>
                                <br/>
                                <br/>

                                <Button type="submit" >Submit form
                                </Button>


                            </Form>
                        </Card.Body>
                    </Card>
	            </Container>
            </div>
            


            );

        }
    export default Login;
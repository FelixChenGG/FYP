
import React from 'react';
import { Button,Card,Form, Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css';
import {
    useHistory
  } from "react-router-dom";


function Login ()  {
    let history = useHistory();

    const handleSubmit =(event)=> {
        
        event.preventDefault();
                
                history.push({pathname:"/index",state:{}})

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
                                   <input type="text" className="form-control" placeholder="username" ></input>

                                </Form.Group>
                                <p></p>
                                <Form.Group className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="key"/></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"></input>
                                </Form.Group>
                                <p></p>
                                <Row className="align-items-center remember"><div className="icheck-primary">
                                            <input type="checkbox" id="remember"></input>
                                            <label for="remember">
                                                Remember Me
                                            </label>
                                            </div>
                                 </Row>
                                 <p></p>

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
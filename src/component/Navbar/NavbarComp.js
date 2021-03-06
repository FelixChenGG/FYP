import React, { Component } from 'react'
import { Navbar,  Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home';
import LEDpage from '../LEDpage/LEDpage';
import NFCreg from '../NFCreg/NFCreg';
import AccessRecord from '../Record/AccessRecord';
import WebCamRecord from '../Record/WebCamRecord';
import Setting from '../Setting/Setting';


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Final Year Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '200px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                                <Nav.Link as={Link} to="/accessrecord">Access Record</Nav.Link>
                                <Nav.Link as={Link} to="/nfcregister">NFC Register</Nav.Link>
                                <Nav.Link as={Link} to="/webcamrecord">WebCam Record</Nav.Link>
                                <Nav.Link as={Link} to="/setting">Setting</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                    <Route path="/home">
                    <Home/>
                        </Route>
                    <Route path="/led">
                    <LEDpage/>
                        </Route>
                    <Route path="/accessrecord">
                    <AccessRecord/>
                        </Route>
                    <Route path="/webcamrecord">
                    <WebCamRecord/>
                        </Route>
                    <Route path="/nfcregister">
                    <NFCreg/>
                        </Route>
                    <Route path="/setting">
                    <Setting/>
                        </Route>

                    </Switch>
                </div>
            </Router>
        )
    }
}
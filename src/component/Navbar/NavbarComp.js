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
import NFCRecord from '../Record/NFCRecord';
import WebCamRecord from '../Record/WebCamRecord';
// import { Store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
// import "animate.css/animate.min.css";
// //npm install react-notifications-component
// //npm run build

// function Noti(){
//     Store.addNotification({
//             title: "Wonderful!",
//             message: "teodosii@react-notifications-component",
//             type: "success",
//             insert: "top",
//             container: "top-right",
//             animationIn: ["animate__animated", "animate__fadeIn"],
//             animationOut: ["animate__animated", "animate__fadeOut"],
//             dismiss: {
//               duration: 5000,
//               onScreen: true
//             }
//           })

// }


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
                                {/* <Nav.Link as={Link} to="/nfcrecord">NFC Record</Nav.Link>
                                <Nav.Link as={Link} to="/webcamrecord">WebCam Record</Nav.Link>
                                <Nav.Link as={Link} to="/led">LED</Nav.Link> */}
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
                    <Route path="/nfcrecord">
                    <NFCRecord/>
                        </Route>
                    <Route path="/webcamrecord">
                    <WebCamRecord/>
                        </Route>

                    </Switch>
                </div>
            </Router>
        )
    }
}
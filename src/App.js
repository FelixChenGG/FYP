//import React, { Header  } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/Login/login';
import NavbarComp from './component/Navbar/NavbarComp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faLock, faUser  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {
  HashRouter as Router ,
  Route,
  Switch
} from "react-router-dom";
library.add(faEnvelope, faKey,faLock,faUser);


function App() {


  return (
    <div className="App">
      <ReactNotifications />
       <Router >
       <Switch>
         <Route exact path="/" component={Login} />
        <Route exact path="/index" component={NavbarComp} />
       </Switch>
      </Router>

    </div>
  );
}

export default App;
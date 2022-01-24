//import React, { Header  } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/Login/login';
import Locate from './component/Navbar/Locate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faLock, faUser  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  Router,
  Route
} from "react-router-dom";
import history from './history/History'
library.add(faEnvelope, faKey,faLock,faUser);


function App() {


  return (
    <div className="App">
       <Router history={history}>
        <Route exact path="/" component={Login} />
        <Route exact path="/index" component={Locate} />
      </Router>

    </div>
  );
}

export default App;
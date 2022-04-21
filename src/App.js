//import React, { Header  } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './component/Navbar/NavbarComp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faLock, faUser  } from '@fortawesome/free-solid-svg-icons';
import React , { useContext, createContext, useState }from 'react';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css';
import { Store } from 'react-notifications-component';
import { Button,Card,Form, Container, AccordionButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
//npm install --save font-awesome
import axios from 'axios'

import {
  HashRouter as Router ,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

library.add(faEnvelope, faKey,faLock,faUser);





function App() {
  return (
    <ProvideAuth>
    <div className="App">
      <ReactNotifications />
       <Router >
       <Switch>
         <Route exact path="/"><Login/></Route>
        <PrivateRoute path="/index"> <NavbarComp/> </PrivateRoute>
       </Switch>
      </Router>

    </div>
    </ProvideAuth>
  );
}



const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};


const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(null);


  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("admin");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


// function AuthButton() {
//   let history = useHistory();
//   let auth = useAuth();

//   return auth.user ? (
//     <p>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

function Login ()  {
  let location = useLocation();
  let history = useHistory();
  let auth = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let { from } = location.state || { from: { pathname: "/index" } };
 
  const handleSubmit =async(event)=> { 
       event.preventDefault();
       await axios.get('http://192.168.8.100:5000/login/'+password)
       .then(function (response)
       {
         if(name === 'admin' && response.statusText =="OK"){
           auth.signin(() => {
          history.replace(from);
        });
           Store.addNotification({
           title: "Congratulation",
           message: "Change Successful  !!!",
           type: "success",
           insert: "top",
           container: "top-right",
           animationIn: ["animate__animated", "animate__fadeIn"],
           animationOut: ["animate__animated", "animate__fadeOut"],
           dismiss: {
               duration: 5000,
               onScreen: true
           }
           })
         }else{
           history.push({pathname:"/",state:{}})
           Store.addNotification({
             title: "Worning",
             message: "Create Fail !!!",
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
        })

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

export default App;

//import React, { Header  } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './component/Login/login';
import NavbarComp from './component/Navbar/NavbarComp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faLock, faUser  } from '@fortawesome/free-solid-svg-icons';
import React , { useContext, createContext, useState ,useReducer}from 'react';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import {
  HashRouter as Router ,
  Route,
  Switch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

library.add(faEnvelope, faKey,faLock,faUser);

export const ACTIONS = {
   SIGNIN:'signin',
   SIGNOUT:'signout'
}



function App() {
  const[state,dispatch] =useReducer(LoginReducer,[])
  return (
    <ProvideAuth>
    <div className="App">
      <ReactNotifications />
       <Router >
       <Switch>
         <Route exact path="/"><Login dispatch={dispatch}/></Route>
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

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
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

function LoginReducer(state, action) {
  // let location = useLocation();
  let auth = useAuth();
  let history = useHistory();
  switch(action.type) {
      case ACTIONS.SIGNIN:
        console.log(action.payload.name)
        auth.signin(() => {
            history.push({pathname:"/index"})
          });

      // case 'success':
      //     return {
      //         ...state,
      //         isLoggedIn: true,
      //         isLoading: false,
      //     }
      // case 'error':
      //     return {
      //         ...state,
      //         error: action.payload.error,
      //         name: '',
      //         pwd: '',
      //         isLoading: false,
      //     }
      // default: 
      //     return state;
  }
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

export default App;

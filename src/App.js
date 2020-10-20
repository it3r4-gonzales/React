import React from "react";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import"./App.css";
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import {NoMatch} from './NoMatch';
import {GlobalProvider} from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return( 
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <h1>Crud Application</h1>
      <GlobalProvider>
        <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/add" component={AddUser}/>
              <Route path="/edit/:id" component={EditUser}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
      </GlobalProvider>
       
    </div>
  );
}


// This code is for routing!
// import React, { Component }  from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Home} from './Home';
// import {NoMatch} from './NoMatch';

// class App extends Component {  
//   render() {
//   return (
//     <React.Fragment>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Home}/>
//           <Route component={NoMatch}/>
//         </Switch>
//       </Router>
//     </React.Fragment>

export default App;
 
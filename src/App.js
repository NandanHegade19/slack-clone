import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Chat from './Components/Chat';
import React, { useState } from 'react';
import LoginPage from './Components/LoginPage';
import { useStateValue } from './StateProviderContext';



function App() {
  
  //const [state, dispatch]...
  const [{user}, dispatch] = useStateValue();


  return (
    <div className="app">
      <Router>
        {!user ? (<LoginPage/>) : (
          <>
          <Header/>
          <div className = "app__body">
            <Sidebar/>
            <Switch >
              <Route path = "/room/:roomId">
                <Chat/>
              </Route>
              <Route path = "/">
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
          </>
        )}
      </Router>
    </div>
  );
}
 
export default App;

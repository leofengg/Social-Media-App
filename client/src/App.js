import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react'

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuBar from './components/MenuBar';
  
import './App.css';
  
function App() {
  return (
    <Router>
      <Container>
        <MenuBar/>
        <Routes>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App; 

import React from 'react'
import {
  BrowserRouter, 
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/pages/Home'
import SobreNos from './components/pages/SobreNos'
import Login from './components/pages/Login'
import Dashboard from './components/pages/dashboard/Dashboard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="body-wrap">
      <BrowserRouter>
        <Switch>
          <Route path={'/aboutUs'} component={SobreNos}></Route>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/dashboard'} component={Dashboard}></Route>
          <Route path={'/'} component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

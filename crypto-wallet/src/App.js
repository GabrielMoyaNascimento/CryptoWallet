import React from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import SobreNos from './components/pages/SobreNos'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Switch>
            <Route path={'/aboutUs'} component={SobreNos}></Route>
            <Route path={'/login'} component={Login}></Route>
            <Route path={'/'} component={Home}></Route>
            <Route path={'/dashboard'} component={Dashboard}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

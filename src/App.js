import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProfilPage from './components/ProfilPage/ProfilPage';
function App() {
  const state = useSelector((state) => state.auth);

  // console.log(state);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/profile'>
            <ProfilPage login={state.login} />
          </Route>
          <Route path='/'>
            <h1>Вход</h1>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

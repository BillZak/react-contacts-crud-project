import React from 'react';
import { Route, BrowserRouter,NavLink } from 'react-router-dom'
import PrivateRoute from './PrivateRouter' 
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login';

const Router = () => {
    return (
        <BrowserRouter>
              <NavLink to="/">Home</NavLink>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/home" component={Home}/>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
        </BrowserRouter>
    );
}

export default Router;

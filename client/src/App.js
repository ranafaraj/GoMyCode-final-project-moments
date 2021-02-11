import React from 'react'
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth.jsx';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
               <Navbar/>
               <Switch>
                   <Route exact path ="/" component={Home}/>
                   <Route exact path ="/auth" component={Auth}/>
               </Switch>
               
            </Container>
        </BrowserRouter>
        
    )
}

export default App

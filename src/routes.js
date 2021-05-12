import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './pages/HomePage';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
               <Redirect exact from='/' to="/homepage"  />
							 <Route path='/homepage' component={HomePage} />
            </Switch>        
        </BrowserRouter>
    );
}
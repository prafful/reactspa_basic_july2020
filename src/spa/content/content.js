import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Service from '../pages/service';

class Content extends React.Component {
   
    render() { 
        return (  
            <span>
               <Switch>
                   <Route exact path="/" component={Home}></Route>
                   <Route path="/about" component={About}></Route>
                   <Route path="/services" component={Service}></Route>
               </Switch>
            </span>
        );
    }
}
 
export default Content;
import ReactDOM from  'react-dom'
import React from 'react';
import { HashRouter } from "react-router-dom";
import SPAContainer from './spa/spa';


ReactDOM.render(
            <HashRouter>
                <SPAContainer></SPAContainer>
            </HashRouter>,
                    document.getElementById('spa'))
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Calculator from './components/Calculator';


const Routes = () => (
    <Router>
        <div className="nav">
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

                <Route exact path="/" component={Calculator} />
            </div>
        </div>
    </Router>
);

export default Routes;

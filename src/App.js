import React, {Component} from 'react';
import './App.css';
import QuotePage from "./pages/QuotePage";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={QuotePage}/>
                </div>
            </Router>
        );
    }
}

export default App;

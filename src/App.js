import React, {Component} from 'react';
import './App.css';
import QuotePage from "./pages/QuotePage";

class App extends Component {
    render() {
        return (
            <QuotePage
                params={this.props.location.search}
            />
        );
    }
}

export default App;

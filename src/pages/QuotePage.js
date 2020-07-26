import React, {Component} from "react";
import queryString from "query-string";
import quoteArray from '../resources/quotes'

class QuotePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quoteArray: [],
            quoteObject: {
                authorImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/1200px-Portrait_Gandhi.jpg",
                quote: "hello",
                author: "AgentP",
                date: "21 june"
            }
        };
    }

    componentDidMount() {
        this.setState({
            quoteArray: quoteArray
        }, () => {
            try {
                let id = this.getCorrectProps().id;
                if (id && parseInt(id) < this.state.quoteArray.length) {
                    console.log("got from id!");
                    this.setState({
                        quoteObject: quoteArray[id]
                    });
                    return;
                }
            } catch (e) {
                console.error("invalid id!");
            }
            console.log("got random!");
            this.setState({
                quoteObject: quoteArray[Math.floor(Math.random() * this.state.quoteArray.length)]
            });
        });
    }

    getCorrectProps = () => {
        let params = this.props.params;
        if(!params) {
            params = {};
        } else if (typeof params === 'string' || params instanceof String) {
            params = queryString.parse(params);
        }
        return params;
    };

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    {
                        this.state.quoteObject.authorImage &&
                        <img src={this.state.quoteObject.authorImage} className="App-logo" alt={this.state.quoteObject.author}/>
                    }
                    <p>“{this.state.quoteObject.quote}”</p>
                    {
                        this.state.quoteObject.author &&
                        <span>-{this.state.quoteObject.author}</span>
                    }
                    {
                        this.state.quoteObject.date &&
                        <span>{this.state.quoteObject.date}</span>
                    }
                </header>
            </div>
        );
    }
}

export default QuotePage;
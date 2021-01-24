import React, {Component} from "react";
import queryString from "query-string";
import quoteArray from '../resources/quotes'
import { Helmet } from "react-helmet";

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
        let params = this.props.location.search;
        if(!params) {
            params = {};
        } else if (typeof params === 'string' || params instanceof String) {
            params = queryString.parse(params);
        }
        return params;
    };

    getMeta = (quoteObject) => {
        return (
            <Helmet>
                <title>{quoteObject.author + ' says that ...'}</title>
                <meta property="og:title" content={quoteObject.author + ' says,'} />
                <meta property="og:url" content="http://prankulsingh.github.io/hereallysaidthat" />
                <meta property="og:image" content={quoteObject.authorImage}/>
                <meta property="og:description" content={'“' + quoteObject.quote + '”'}/>
                <meta property="og:site_name" content="He Really said that?!?" />
            </Helmet>
        )
    };

    render() {
        return(
            <div className="App" style={{fontFamily: 'Kalam'}}>
                {this.getMeta(this.state.quoteObject)}
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
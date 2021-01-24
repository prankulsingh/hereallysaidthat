import React, {Component} from "react";
import queryString from "query-string";
import loadingIcon from '../resources/loading.svg'
import { Helmet } from "react-helmet";
import Tabletop from 'tabletop';

class QuotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteArray: [],
            quoteObject: {
                authorImage: loadingIcon,
                quote: "Loading an awesome quote...",
                author: "From your friend",
                date: "Today!"
            }
        };
    }

    componentDidMount() {
        Tabletop.init({
            key: '1jfO71VCAskGg4VIioUW7FfntRfA6ZoeYSUlTAGARItE',
            callback: googleData => {
                this.setState({
                    quoteArray: googleData
                }, () => {
                    try {
                        let id = this.getCorrectProps().id;
                        if (id && parseInt(id) < this.state.quoteArray.length) {
                            console.log("got from id!");
                            this.setState({
                                quoteObject: this.state.quoteArray[id]
                            });
                            return;
                        }
                    } catch (e) {
                        console.error("invalid id!");
                    }
                    console.log("got random!");
                    this.setState({
                        quoteObject: this.state.quoteArray[Math.floor(Math.random() * this.state.quoteArray.length)]
                    });
                });
            },
            simpleSheet: true
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
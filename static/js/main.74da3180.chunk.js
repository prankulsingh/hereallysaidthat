(this.webpackJsonphereallysaidthat=this.webpackJsonphereallysaidthat||[]).push([[0],{12:function(t){t.exports=JSON.parse('[{"authorImage":"https://media-exp1.licdn.com/dms/image/C5103AQG1pUWUwbQX4Q/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=2zvksfq3v_FCMiTUwtQG32iqy190IiEWBnxSNhKihVg","quote":"Only you can decide what is good/bad for you, people will give their biased opinions based on their past activities and thinking","author":"Vikas G.","date":"27 July, 2020"},{"authorImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2o2hV5J1giBT_XXvKSp7qVWa2vvimZdSW6sPyciFl8507ssQ&s","quote":"Good things leads to better health better eq etc however cigarettes can only cause harm and is a temporary fix for your stress however we should try to strive for permanent fixes and be happy","author":"Vivek N.","date":"27 July, 2020"},{"authorImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2o2hV5J1giBT_XXvKSp7qVWa2vvimZdSW6sPyciFl8507ssQ&s","quote":"Poker teaches patience values of correct plays will always help you in long run. No need to taking stress for short term failures","author":"Vivek N.","date":"27 July, 2020"}]')},24:function(t,e,a){t.exports=a(48)},29:function(t,e,a){},30:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var o=a(0),r=a.n(o),n=a(20),i=a.n(n),s=a(22),c=a(1),u=(a(29),a(8)),l=a(9),h=a(11),p=a(10),d=(a(30),a(21)),m=a.n(d),g=a(12),v=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(t){var o;return Object(u.a)(this,a),(o=e.call(this,t)).getCorrectProps=function(){var t=o.props.params;return t?("string"===typeof t||t instanceof String)&&(t=m.a.parse(t)):t={},t},o.state={quoteArray:[],quoteObject:{authorImage:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Portrait_Gandhi.jpg/1200px-Portrait_Gandhi.jpg",quote:"hello",author:"AgentP",date:"21 june"}},o}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.setState({quoteArray:g},(function(){try{var e=t.getCorrectProps().id;if(e&&parseInt(e)<t.state.quoteArray.length)return console.log("got from id!"),void t.setState({quoteObject:g[e]})}catch(a){console.error("invalid id!")}console.log("got random!"),t.setState({quoteObject:g[Math.floor(Math.random()*t.state.quoteArray.length)]})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.state.quoteObject.authorImage&&r.a.createElement("img",{src:this.state.quoteObject.authorImage,className:"App-logo",alt:this.state.quoteObject.author}),r.a.createElement("p",null,"\u201c",this.state.quoteObject.quote,"\u201d"),this.state.quoteObject.author&&r.a.createElement("span",null,"-",this.state.quoteObject.author),this.state.quoteObject.date&&r.a.createElement("span",null,this.state.quoteObject.date)))}}]),a}(o.Component),b=function(t){Object(h.a)(a,t);var e=Object(p.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(v,{params:this.props.location.search})}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(c.a,{path:"/",component:b})));i.a.render(r.a.createElement(r.a.StrictMode,null,y),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.74da3180.chunk.js.map
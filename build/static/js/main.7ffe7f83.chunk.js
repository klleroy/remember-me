(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/hank-hill-king-of-the-hill-4.3.jpg",clicked:!1},{id:2,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/peggy-hill-king-of-the-hill-2.62.jpg",clicked:!1},{id:3,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/bobby-hill-king-of-the-hill-38.1.jpg",clicked:!1},{id:4,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/dale-gribble-king-of-the-hill-7.71.jpg",clicked:!1},{id:5,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/bill-dauterive-king-of-the-hill-7.39.jpg",clicked:!1},{id:6,image:"https://imgix.ranker.com/node_img/41/805669/original/dale-gribble-tv-characters-photo-1?w=280&h=280&fit=crop&crop=faces&q=50&fm=pjpg",clicked:!1},{id:7,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/luanne-platter-king-of-the-hill-3.38.jpg",clicked:!1},{id:8,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/cotton-hill-king-of-the-hill-74.7.jpg",clicked:!1},{id:9,image:"https://imgix.ranker.com/user_node_img/57/1125053/original/hank-hill-tv-characters-photo-u3?w=120&h=120&q=60&fm=pjpg&fit=crop&crop=faces",clicked:!1},{id:10,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/joseph-gribble-king-of-the-hill-7.01.jpg",clicked:!1},{id:11,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kahn-souphanousinphone-king-of-the-hill-36.5.jpg",clicked:!1},{id:12,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/minh-souphanousinphone-king-of-the-hill-35.4.jpg",clicked:!1},{id:13,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/connie-souphanousinphone-king-of-the-hill-1.97.jpg",clicked:!1},{id:14,image:"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/john-redcorn-king-of-the-hill-6.07.jpg",clicked:!1}]},,,,,,,,function(e,t,i){e.exports=i(21)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),a=i(3),o=i.n(a),r=i(4),l=i(5),h=i(7),s=i(6),d=i(8);i(15);var m=function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{src:e.image,alt:e.name})))},u=(i(16),function(e){return n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"brand animated lightSpeedIn"},n.a.createElement("a",{href:"/remember-me/"},e.title)),n.a.createElement("li",{id:"tf"},e.trueFalse),n.a.createElement("li",{id:"curScore"},"Current Score: ",e.score),n.a.createElement("li",{id:"topScore"},"Top Score: ",e.topScore)))}),g=(i(17),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),p=(i(18),function(e){return n.a.createElement("h3",{className:"title"},e.children)}),f=function(e){return n.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},v=function(e){return n.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},b=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return n.a.createElement("div",{className:t},e.children)},k=i(1);i(19);var S=function(e){function t(){var e,i;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(i=Object(h.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={friends:k,currentScore:0,topScore:0,trueFalse:"",clicked:[]},i.handleClick=function(e){-1===i.state.clicked.indexOf(e)?(i.handleIncrement(),i.setState({clicked:i.state.clicked.concat(e)})):i.handleReset()},i.handleIncrement=function(){var e=i.state.currentScore+1;i.setState({currentScore:e,trueFalse:""}),e>=i.state.topScore?i.setState({topScore:e}):12===e&&i.setState({trueFalse:"Congratulations, Bobby!!"}),i.handleShuffle()},i.handleReset=function(){i.setState({currentScore:0,topScore:i.state.topScore,trueFalse:"Goodbye, Bill",clicked:[]}),i.handleShuffle()},i.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),c=[e[i],e[t]];e[t]=c[0],e[i]=c[1]}return e}(k);i.setState({friends:e})},i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(g,null,n.a.createElement(u,{title:"King of the Hill Memory Game!",score:this.setState.currentScore,topScore:this.setState.topScore,trueFalse:this.state.trueFalse}),n.a.createElement(p,null,"Click on an image to earn points, but don't click on any more than once!"),n.a.createElement(f,null,n.a.createElement(v,null,this.state.friends.map(function(t){return n.a.createElement(b,{size:"md-3 sm-6"},n.a.createElement(m,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(c.Component);i(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.7ffe7f83.chunk.js.map
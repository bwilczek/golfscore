(this.webpackJsonpgolfscore=this.webpackJsonpgolfscore||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(9),l=n.n(s),o=n(10),c=(n(19),n(1)),i=n(2),p=n(3),m=n(4),u=n(5),h=(n(22),n(24)),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.holeWon?"#4c4":"#fff",t=this.props.holeWon?"bold":"normal";return a.a.createElement("div",{style:{color:e,fontWeight:t}},this.props.score,"\xa0\xa0",a.a.createElement(h.a,{style:{margin:"2px",width:"30px"},size:"sm",disabled:this.props.score<1,onClick:this.props.decrement},"-"),a.a.createElement(h.a,{style:{margin:"2px",width:"30px"},size:"sm",onClick:this.props.increment},"+"))}}]),n}(a.a.Component),b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"promptRename",value:function(){var e=prompt("New player name:");this.props.setName(e)}},{key:"render",value:function(){var e=this,t=Object(u.sum)(Object.values(this.props.player.scores)),n=this.props.player.holesWon.length;return a.a.createElement("span",{style:{margin:"10px"}},a.a.createElement(h.a,{style:{width:"100%"},onClick:this.promptRename.bind(this)},this.props.player.name),a.a.createElement("br",null),a.a.createElement("br",null),Object.keys(this.props.player.scores).map((function(t){return a.a.createElement(y,{holeWon:e.props.player.holesWon.includes(t),key:t,hole:t,score:e.props.player.scores[t],increment:function(){return e.props.incrementScore(t)},decrement:function(){return e.props.decrementScore(t)}})})),t,a.a.createElement("br",null),n)}}]),n}(a.a.Component),f=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("span",{style:{marginTop:"85px",paddingRight:"16px"}},a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"1"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"2"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"3"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"4"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"5"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"6"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"7"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"8"),a.a.createElement("br",null),a.a.createElement(h.a,{style:{margin:"2px"},size:"sm"},"9"),a.a.createElement("br",null),"stroke",a.a.createElement("br",null),"match")}}]),n}(a.a.Component),d=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={players:[{name:"Bartek",holesWon:[],scores:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}},{name:"Monika",holesWon:[],scores:{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}}]},r}return Object(i.a)(n,[{key:"setHoleWon",value:function(e,t){Object(u.remove)(t.players[0].holesWon,(function(t){return parseInt(t)===parseInt(e)})),Object(u.remove)(t.players[1].holesWon,(function(t){return parseInt(t)===parseInt(e)})),t.players[0].scores[e]>t.players[1].scores[e]&&(t.players[1].holesWon.includes(e)||t.players[1].holesWon.push(e)),t.players[0].scores[e]<t.players[1].scores[e]&&(t.players[0].holesWon.includes(e)||t.players[0].holesWon.push(e))}},{key:"setPlayerName",value:function(e,t){var n=Object(u.cloneDeep)(this.state);n.players[e].name=t,this.setState(n)}},{key:"incrementPlayerScore",value:function(e,t){var n=Object(u.cloneDeep)(this.state);n.players[e].scores[t]+=1,this.setHoleWon(t,n),this.setState(n)}},{key:"decrementPlayerScore",value:function(e,t){var n=Object(u.cloneDeep)(this.state);0!==n.players[e].scores[t]&&(n.players[e].scores[t]-=1,this.setHoleWon(t,n),this.setState(n))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement(f,null),this.state.players.map((function(t,n){return a.a.createElement(b,{key:n,player:t,setName:e.setPlayerName.bind(e,n),incrementScore:e.incrementPlayerScore.bind(e,n),decrementScore:e.decrementPlayerScore.bind(e,n)})})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{onBeforeunload:function(){return"Scores will be lost if you leave!"}},a.a.createElement(d,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.7bf94cad.chunk.js.map
(this["webpackJsonpfajrant-app"]=this["webpackJsonpfajrant-app"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var a=o(0),s=o(1),n=o.n(s),r=o(3),c=o.n(r),l=(o(13),o(4)),i=o(5),u=o(7),h=o(6),d=function(e){return Object(a.jsxs)("p",{children:["Do fajrantu pozosta\u0142o: ",e.hours," godzin ",e.minutes," minut ",e.seconds," sekund"]})},m=(o(14),function(e){Object(u.a)(o,e);var t=Object(h.a)(o);function o(){var e;Object(l.a)(this,o);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={disableInput:localStorage.getItem("disableInput"),chosenShift:localStorage.getItem("chosenShift"),showCounter:localStorage.getItem("showCounter"),hoursToGo:localStorage.getItem("hoursToGo"),minutesToGo:localStorage.getItem("minutesToGo"),secondsToGo:localStorage.getItem("secondsToGo"),endOfWork:!1,toEarly:!1,weekend:!1},e.setShift=function(t){e.setState({chosenShift:t,endOfWork:!1}),localStorage.setItem("chosenShift",t),localStorage.setItem("endOfWork",!1)},e.setInputDisable=function(){e.setState({disableInput:!0})},e.showTimeToGo=function(t){t.preventDefault(),localStorage.setItem("disableInput",!0),localStorage.setItem("showCounter",!0),e.setInputDisable(),e.setState({showCounter:localStorage.getItem("showCounter")}),localStorage.setItem("hoursToGo",e.state.hoursToGo),localStorage.setItem("minutesToGo",e.state.minutesToGo),localStorage.setItem("secondsToGo",e.state.secondsToGo),localStorage.getItem("hoursToGo")>=8&&localStorage.getItem("minutesToGo")>1&&(e.setState({toEarly:!0}),localStorage.setItem("toEarly",!0),localStorage.removeItem("disableInput"),localStorage.removeItem("showCounter"),localStorage.removeItem("chosenShift"))},e}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=new Date,o=new Date;6!==t.getDay()&&7!==t.getDay()||(localStorage.removeItem("disableInput"),localStorage.removeItem("showCounter"),localStorage.removeItem("chosenShift"),e.setState({weekend:!0})),null!==e.state.chosenShift?(o.setHours(e.state.chosenShift),o.setMinutes(0),o.setSeconds(0)):e.setState({showCounter:!1});var a=Date.parse(o)-Date.parse(t),s=Math.floor(a/1e3%60),n=Math.floor(a/1e3/60%60),r=Math.floor(a/36e5%24);e.setState({hoursToGo:r,minutesToGo:n,secondsToGo:s}),s<10&&s>-1&&(s="0"+s),e.state.secondsToGo<=-1&&(localStorage.removeItem("disableInput"),localStorage.removeItem("showCounter"),localStorage.removeItem("chosenShift"),e.setState({endOfWork:!0}))}),500)}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Chce do d",Object(a.jsx)("span",{}),"mu"]}),Object(a.jsxs)("form",{action:"",children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"radio",name:"shift",value:"14",disabled:this.state.disableInput,onChange:function(t){return e.setShift(t.target.value)}}),"Pierwsza zmiana"]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"radio",name:"shift",value:"22",disabled:this.state.disableInput,onChange:function(t){return e.setShift(t.target.value)}}),"Druga zmiana"]}),Object(a.jsx)("button",{onClick:function(t){return e.showTimeToGo(t)},children:"Potwierd\u017a"})]}),this.state.weekend?Object(a.jsx)("p",{children:"W weekend s\u0105 \u017cniwa!!"}):this.state.toEarly?Object(a.jsx)("p",{children:"Jeste\u015b za wcze\u015bnie"}):this.state.endOfWork?Object(a.jsx)("p",{className:"fajrant",children:"Fajrant!!"}):this.state.showCounter?Object(a.jsx)(d,{hours:this.state.hoursToGo,minutes:this.state.minutesToGo,seconds:this.state.secondsToGo}):null]})})}}]),o}(s.Component)),g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(t){var o=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;o(e),a(e),s(e),n(e),r(e)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.1629d3cb.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[719],{8328:function(n,e,r){r.d(e,{Z:function(){return i}});r(2791);var t=r(7689),o=r(1087),a=r(184),c=function(n){var e=n.movie,r=(0,t.TH)();return(0,a.jsx)("li",{children:(0,a.jsxs)(o.rU,{to:"/movies/".concat(e.id),state:{from:r},children:[e.title," "]})})},i=function(n){var e=n.movies,r=n.title;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:r}),(0,a.jsx)("ul",{children:e.map((function(n){return(0,a.jsx)(c,{movie:n},n.id)}))})]})}},719:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,o=r(5861),a=r(9439),c=r(4687),i=r.n(c),u=r(8328),s=r(2791),p=["title","titleId"];function f(){return f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},f.apply(this,arguments)}function l(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function d(n,e){var r=n.title,o=n.titleId,a=l(n,p);return s.createElement("svg",f({width:"30px",height:"30px",viewBox:"0 0 1024 1024",className:"icon",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},a),r?s.createElement("title",{id:o},r):null,t||(t=s.createElement("path",{d:"M448 768A320 320 0 1 0 448 128a320 320 0 0 0 0 640z m297.344-76.992l214.592 214.592-54.336 54.336-214.592-214.592a384 384 0 1 1 54.336-54.336z",fill:"#000000"})))}var h,v=s.forwardRef(d),x=(r.p,r(168)),m=r(5706).Z.form(h||(h=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 350px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border-radius: 20px;\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: all 250ms;\n    cursor: pointer;\n    outline: none;\n    background: #c8c5c5;\n    transition: all 0.5s;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n    /* background: #c8c5c5; */\n    background: #fff;\n    border: #fff;\n  }\n\n  .SearchForm-button-label {\n    /* position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0; */\n  }\n\n  .SearchForm-input {\n    /* display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px; */\n\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    height: 48px;\n    border: none;\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n    transition: all 0.5s;\n\n    :focus {\n      box-shadow: inset 5px 5px 40px #c8c5c5, inset -5px -5px 40px #c8c5c5;\n      outline: #fff;\n    }\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=r(184),g=function(n){var e=n.onSubmit,r=n.updateQueryString,t=n.searchQuery;return(0,b.jsxs)(m,{onSubmit:e,className:"SearchForm",children:[(0,b.jsx)("button",{type:"submit",className:"SearchForm-button",children:(0,b.jsx)(v,{className:"SearchForm-button-label"})}),(0,b.jsx)("input",{onChange:r,value:t,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})},w=r(1087),y=r(4390);var k=function(){var n,e=(0,w.lr)(),r=(0,a.Z)(e,2),t=r[0],c=r[1],p=(0,s.useState)(""),f=(0,a.Z)(p,2),l=f[0],d=f[1],h=(0,s.useState)(""),v=(0,a.Z)(h,2),x=v[0],m=v[1],k=null!==(n=t.get("query"))&&void 0!==n?n:"";return(0,s.useEffect)((function(){var n=function(){var n=(0,o.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.UN)(k);case 3:e=n.sent,d(e),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[k]),(0,b.jsxs)("div",{children:[(0,b.jsx)(g,{updateQueryString:function(n){m(n.currentTarget.value.toLowerCase())},onSubmit:function(n){if(n.preventDefault(),""===x.trim())return c({}),void alert("Please, enter search value");c({query:x})},searchQuery:x}),l&&(0,b.jsx)(u.Z,{movies:l.results})]})}},4390:function(n,e,r){r.d(e,{M1:function(){return p},TP:function(){return s},UN:function(){return l},Xu:function(){return u},tx:function(){return f}});var t=r(5861),o=r(4687),a=r.n(o),c="https://api.themoviedb.org/3/",i="65175319ff5fdf769ef44bf4c6a21d27",u=function(){var n=(0,t.Z)(a().mark((function n(){var e,r,t,o,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:"",r=u.length>1&&void 0!==u[1]?u[1]:1,n.next=4,fetch("".concat(c,"trending/movie/day?api_key=").concat(i,"&query=").concat(e,"&page=").concat(r));case 4:return t=n.sent,n.next=7,t.json();case 7:return o=n.sent,n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"movie/").concat(e,"?api_key=").concat(i));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Some api error occured");case 5:return n.next=7,r.json();case 7:return t=n.sent,n.abrupt("return",t);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(i));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Some api error occured");case 5:return n.next=7,r.json();case 7:return t=n.sent,n.abrupt("return",t);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(i));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Some api error occured");case 5:return n.next=7,r.json();case 7:return t=n.sent,n.abrupt("return",t);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Some api error occured");case 5:return n.next=7,r.json();case 7:return t=n.sent,n.abrupt("return",t);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5861:function(n,e,r){function t(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(t,o)}function o(n){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=n.apply(e,r);function i(n){t(c,o,a,i,u,"next",n)}function u(n){t(c,o,a,i,u,"throw",n)}i(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=719.3a412be4.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{2884:function(e,n,r){r.r(n);var t=r(5861),c=r(9439),a=r(4687),o=r.n(a),i=r(3772),s=r(2791),u=r(7689),f=r(1087),p=r(4390),h=r(184),l=(0,s.lazy)((function(){return r.e(247).then(r.bind(r,1247))})),d=(0,s.lazy)((function(){return r.e(186).then(r.bind(r,186))}));n.default=function(){var e,n,r=(0,s.useState)(null),a=(0,c.Z)(r,2),v=a[0],x=a[1],m=(0,s.useState)(!1),w=(0,c.Z)(m,2),j=w[0],k=w[1],g=(0,s.useState)(""),b=(0,c.Z)(g,2),y=b[0],_=b[1],Z=(0,u.UO)().movieId,S=(0,u.TH)(),U=(0,s.useRef)(null!==(e=null===(n=S.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,(0,p.TP)(n);case 4:r=e.sent,x(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(e.t0.message);case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();e(Z)}),[Z]),(0,h.jsxs)("div",{children:[y.length>0&&(0,h.jsx)("div",{children:y}),j&&(0,h.jsx)(i.Z,{}),null!==v&&(0,h.jsxs)("div",{children:[(0,h.jsx)(f.rU,{to:U.current,style:{display:"block",marginBottom:"20px"},children:"Go back"}),(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(v.poster_path),alt:v.original_title,width:200}),(0,h.jsx)("h1",{children:v.original_title}),(0,h.jsx)("h2",{children:"Vote Average:"}),(0,h.jsxs)("p",{children:[" ",v.vote_average]}),(0,h.jsx)("h2",{children:"Genres:"}),v.genres.length>0?(0,h.jsx)("ul",{children:v.genres.map((function(e){var n=e.name,r=e.id;return(0,h.jsx)("li",{children:n},r)}))}):"There no genres",(0,h.jsx)("h2",{children:"Overview:"}),(0,h.jsxs)("p",{children:[v.overview,"`"]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"Additional information:"}),(0,h.jsx)(f.rU,{to:"cast",children:"Cast"}),(0,h.jsx)(f.rU,{to:"reviews",children:"Reviews"})]}),(0,h.jsx)("div",{children:(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)(i.Z,{}),children:(0,h.jsxs)(u.Z5,{children:[(0,h.jsx)(u.AW,{path:"cast",element:(0,h.jsx)(l,{})}),(0,h.jsx)(u.AW,{path:"reviews",element:(0,h.jsx)(d,{})})]})})})]})}},4390:function(e,n,r){r.d(n,{M1:function(){return f},TP:function(){return u},UN:function(){return h},Xu:function(){return s},tx:function(){return p}});var t=r(5861),c=r(4687),a=r.n(c),o="https://api.themoviedb.org/3/",i="65175319ff5fdf769ef44bf4c6a21d27",s=function(){var e=(0,t.Z)(a().mark((function e(){var n,r,t,c,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:"",r=s.length>1&&void 0!==s[1]?s[1]:1,e.next=4,fetch("".concat(o,"trending/movie/day?api_key=").concat(i,"&query=").concat(n,"&page=").concat(r));case 4:return t=e.sent,e.next=7,t.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(i));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(i));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(i));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Some api error occured");case 5:return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},5861:function(e,n,r){function t(e,n,r,t,c,a,o){try{var i=e[a](o),s=i.value}catch(u){return void r(u)}i.done?n(s):Promise.resolve(s).then(t,c)}function c(e){return function(){var n=this,r=arguments;return new Promise((function(c,a){var o=e.apply(n,r);function i(e){t(o,c,a,i,s,"next",e)}function s(e){t(o,c,a,i,s,"throw",e)}i(void 0)}))}}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=884.935cc5d8.chunk.js.map
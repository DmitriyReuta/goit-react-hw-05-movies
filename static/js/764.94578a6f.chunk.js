"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{764:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),s=t.n(c),i=t(791),o=t(243),u=t(87),h=t(184);r.default=function(){var e=(0,i.useState)(""),r=(0,a.Z)(e,2),t=r[0],c=r[1],l=(0,i.useState)([]),p=(0,a.Z)(l,2),f=p[0],d=p[1],v=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"fcc6b33c410a16ddfc5977938f0cf7d9",query:t}});case 3:r=e.sent,d(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching for movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Search Movies"}),(0,h.jsx)("input",{type:"text",placeholder:"Search for movies...",value:t,onChange:function(e){return c(e.target.value)}}),(0,h.jsx)("button",{onClick:v,children:"Search"}),(0,h.jsx)("ul",{children:f.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=764.94578a6f.chunk.js.map
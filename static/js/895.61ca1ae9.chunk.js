"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[895,84],{7084:function(t,e,n){n.r(e);n(2791),n(3508);var i=n(184);e.default=function(t){var e=t.title;return(0,i.jsx)("div",{className:"header",children:e})}},895:function(t,e,n){n.r(e);var i=n(9439),r=n(2791),l=n(8987),s=n(7022),c=n(7084),o=n(126),a=n(2150),u=n(184),h={iconStyle:{height:48,width:48,margin:10,marginBottom:0},introTextContainer:{whiteSpace:"pre-wrap"}};e.default=function(t){var e,n,d=t.header,f=(0,r.useState)(null),p=(0,i.Z)(f,2),x=p[0],j=p[1];return(0,r.useEffect)((function(){fetch(o.Z.skills,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return j(t)})).catch((function(t){return t}))}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.default,{title:d}),x?(0,u.jsx)("div",{className:"section-content-container",children:(0,u.jsxs)(s.Z,{children:[(n=x.intro,(0,u.jsx)("h4",{style:h.introTextContainer,children:(0,u.jsx)(l.D,{children:n})})),null===(e=x.skills)||void 0===e?void 0:e.map((function(t){return(0,u.jsxs)("div",{children:[(0,u.jsx)("br",{}),(0,u.jsx)("h3",{children:t.title}),t.items.map((function(t){return(0,u.jsxs)("div",{style:{display:"inline-block"},children:[(0,u.jsx)("img",{style:h.iconStyle,src:t.icon,alt:t.title}),(0,u.jsx)("p",{children:t.title})]},t.title)}))]},t.title)}))]})}):(0,u.jsx)(a.default,{})]})}}}]);
//# sourceMappingURL=895.61ca1ae9.chunk.js.map
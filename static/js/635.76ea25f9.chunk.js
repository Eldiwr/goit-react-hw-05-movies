"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[635],{603:function(n,e,t){t.d(e,{H2:function(){return l},kE:function(){return p},su:function(){return d},uj:function(){return h}});var o,i,r,a,s=t(168),c=t(444),u=t(87),p=c.ZP.li(o||(o=(0,s.Z)(["\n  \n  list-style-position: inside;\n"]))),l=c.ZP.li(i||(i=(0,s.Z)(["\n  padding-bottom: 8px;\n  &::marker {\n    color: #2a363b;\n    font-size: 30px;\n    font-weight: 500;\n  }\n  &:hover {\n    color: orange;\n  }\n"]))),h=(0,c.ZP)(u.rU)(r||(r=(0,s.Z)(["\n  color: #2a363b;\n  font-size: 24px;\n  font-weight: 500;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: orange;\n  }\n"]))),d=c.ZP.h1(a||(a=(0,s.Z)(["\n    margin-left: 32px;\n"])))},635:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var o,i,r,a,s=t(683),c=t(885),u=t(791),p=t(168),l=t(444),h=l.ZP.form(o||(o=(0,p.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 32px;\n  /* margin-left: auto; */\n  margin-right: auto;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  -webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n"]))),d=l.ZP.button(i||(i=(0,p.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    color: orange;\n  }\n"]))),x=l.ZP.input(r||(r=(0,p.Z)(["\n  display: inline-block;\n  //   width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),f=l.ZP.span(a||(a=(0,p.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),m=t(185),g=t(184),b=function(n){var e=n.onSubmit,t=(0,u.useState)(""),o=(0,c.Z)(t,2),i=o[0],r=o[1];return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(h,{onSubmit:function(n){n.preventDefault(),""!==i?(e(i),r("")):alert("Write name !!!")},children:[(0,g.jsxs)(d,{type:"submit",children:[(0,g.jsx)(m.dVI,{}),(0,g.jsx)(f,{children:"Search"})]}),(0,g.jsx)(x,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",name:"name",onChange:function(n){r(n.target.value)}})]})})},v=t(174),w=t(739),Z=t(603),j=function(n){var e=n.movies,t=(0,w.TH)();return(0,g.jsx)("ul",{children:e.map((function(n){return(0,g.jsx)(Z.H2,{children:(0,g.jsx)(Z.uj,{to:"/movies/".concat(n.id),state:{from:t},children:n.original_title})},n.id)}))})};function k(){var n,e=(0,u.useState)([]),t=(0,c.Z)(e,2),o=t[0],i=t[1],r=(0,w.TH)(),a=(0,w.s0)(),p=null!==(n=new URLSearchParams(r.search).get("movieName"))&&void 0!==n?n:"";(0,u.useEffect)((function(){""!==p&&(0,v.IR)(p).then((function(n){return n.results})).then(i)}),[p]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{onSubmit:function(n){a((0,s.Z)((0,s.Z)({},r),{},{search:"movieName=".concat(n)}))}}),o&&(0,g.jsx)(j,{movies:o})]})}}}]);
//# sourceMappingURL=635.76ea25f9.chunk.js.map
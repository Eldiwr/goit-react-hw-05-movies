"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[701],{701:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var i,o,r,s,a,x,p,c,l,d,h,m=e(885),u=e(791),g=e(174),b=e(739),f=e(168),v=e(444),Z=e(731),j=v.ZP.div(i||(i=(0,f.Z)(["\n    display: flex;\n    margin-bottom: 20px;\n"]))),w=v.ZP.img(o||(o=(0,f.Z)(["\nborder-radius: 5px;\n-webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n"]))),_=v.ZP.div(r||(r=(0,f.Z)(["\n    margin-left: 18px;\n"]))),P=v.ZP.h2(s||(s=(0,f.Z)(["\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 30px;\n"]))),k=v.ZP.p(a||(a=(0,f.Z)(["\n     margin-bottom: 20px;\n"]))),z=v.ZP.h3(x||(x=(0,f.Z)(["\n    margin-bottom: 20px;\n    font-size: 25px;\n"]))),y=v.ZP.h4(p||(p=(0,f.Z)(["\n     margin-bottom: 20px;\n    font-size: 22px;\n"]))),C=v.ZP.ul(c||(c=(0,f.Z)(["\n     margin-bottom: 20px;\n   list-style-position: inside;\n   \n"]))),O=v.ZP.li(l||(l=(0,f.Z)(["\n     margin-bottom: 12px;\n    font-size:18px;\n      \n"]))),S=(0,v.ZP)(Z.OL)(d||(d=(0,f.Z)(["\n  color: #2a363b;\n  font-size: 20px;\n  font-weight: 400;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: #dc6300;\n  }\n  /* &:visited {\n    color: #634688;\n  } */\n"]))),E=e(184),F=function(n){var t=n.film,e=n.genres,i=(0,b.TH)();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(j,{children:[(0,E.jsx)(w,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"poster"}),(0,E.jsxs)(_,{children:[(0,E.jsxs)(P,{children:[t.original_title," (",t.release_date.slice(0,4),")"]}),(0,E.jsxs)(k,{children:["User Score: ",t.vote_average]}),(0,E.jsx)(z,{children:"Overview"}),(0,E.jsx)(k,{children:t.overview}),(0,E.jsx)(z,{children:"Genres"}),(0,E.jsx)(k,{children:e})]})]}),(0,E.jsx)(y,{children:"Additional information"}),(0,E.jsxs)(C,{children:[(0,E.jsx)(O,{children:(0,E.jsx)(S,{to:"/movies/".concat(t.id,"/cast"),state:i.state,children:"Cast"})}),(0,E.jsx)(O,{children:(0,E.jsx)(S,{to:"/movies/".concat(t.id,"/reviews"),state:i.state,children:"Reviews"})})]})]})},H=v.ZP.button(h||(h=(0,f.Z)(["\n  display: inline-block;\n  width: auto;\n  height: 48px;\n  margin-top: 20px;\n  margin-bottom: 32px;\n  padding-left: 12px;\n  padding-right: 12px;\n  border: 0;\n  \n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  -webkit-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 0px 30px 0px rgba(34, 60, 80, 0.2);\n  &:hover {\n    color: orange;\n  }\n"]))),T=function(n){var t=n.location,e=(0,b.s0)();return(0,E.jsx)(H,{type:"button",onClick:function(){var n,i;e(null!==(n=null===t||void 0===t||null===(i=t.state)||void 0===i?void 0:i.from)&&void 0!==n?n:"/")},children:"Back"})};function U(){var n=(0,b.TH)(),t=(0,b.UO)().filmId,e=(0,u.useState)(null),i=(0,m.Z)(e,2),o=i[0],r=i[1],s=(0,u.useState)(""),a=(0,m.Z)(s,2),x=a[0],p=a[1];return(0,u.useEffect)((function(){(0,g.d0)(t).then(r)}),[t]),(0,u.useEffect)((function(){if(o){var n=o.genres.map((function(n){return n.name})).join(",");p(n)}}),[o]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(T,{location:n}),o&&(0,E.jsx)(F,{film:o,genres:x}),(0,E.jsx)(b.j3,{})]})}}}]);
//# sourceMappingURL=701.859c4753.chunk.js.map
(this["webpackJsonptypescript-app"]=this["webpackJsonptypescript-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(44)},20:function(e,t,n){},38:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),s=(n(20),n(2)),u=n(13),l=n.n(u),i=(n(38),function(e){var t=e.searchUser,n=e.sourceData,r=Object(a.useState)([]),o=Object(s.a)(r,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){l(n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})))}),[t,n]),c.a.createElement("div",{className:"ListHead"},c.a.createElement("ol",{className:"list"},u.map((function(e){return c.a.createElement("li",{key:e.name},c.a.createElement("span",null,e.name),"@",e.username)}))))}),m=n(14),f=function(e){var t=e.onChange;return c.a.createElement(m.DebounceInput,{onChange:function(e){return t(e.target.value)},debounceTimeout:500,className:"SearchInput",placeholder:"Search by user name..."})},p=(n(42),function(e){var t=e.sourceData,n=Object(a.useState)(""),r=Object(s.a)(n,2),o=r[0],u=r[1];return c.a.createElement("div",{className:"SearchHead"},c.a.createElement("p",null,"Users List"),c.a.createElement("p",null,c.a.createElement(f,{onChange:u})),c.a.createElement(i,{searchUser:o,sourceData:t}))}),h=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){l.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement(p,{sourceData:n})};n(43);var d=function(){return c.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.cc18faa0.chunk.js.map
(this["webpackJsonptrading-interface"]=this["webpackJsonptrading-interface"]||[]).push([[0],{143:function(e,t,n){e.exports=n(373)},148:function(e,t,n){},158:function(e,t){},160:function(e,t){},184:function(e,t){},186:function(e,t){},369:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DECIMALS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},370:function(e,t,n){},373:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),i=n(128),c=n.n(i),r=(n(148),n(41)),u=n(23);var l,s=function(){var e=Object(u.b)(),t=e.chainId,n=e.library,i=Object(a.useState)(),c=Object(r.a)(i,2),l=c[0],s=c[1];return Object(a.useEffect)((function(){if(n){var e=!1;n.getBlockNumber().then((function(t){e||s(t)})).catch((function(){e||s(null)}));var t=function(e){s(e)};return n.on("block",t),function(){e=!0,n.removeListener("block",t),s(void 0)}}}),[n,t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Block Number"),o.a.createElement("span",{role:"img","aria-label":"numbers"},"\ud83d\udd22"),o.a.createElement("span",null,"number"===typeof l?l.toLocaleString():null===l?"Error":n?"...":"awaiting connection..."))},p=n(3),d=n.n(p),f=n(130),m=n(131),b=n.n(m),y=n(52),v=n(132),O=n(133),E={MAINNET:1,ROPSTEN:3,RINKEBY:4,KOVAN:42},_=(l={},Object(y.a)(l,E.MAINNET,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_RPC_URL_MAINNET),Object(y.a)(l,E.ROPSTEN,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_RPC_URL_ROPSTEN),Object(y.a)(l,E.RINKEBY,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_RPC_URL_RINKEBY),Object(y.a)(l,E.KOVAN,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_RPC_URL_KOVAN),l),h=new v.a({supportedChainIds:Object.values(E)}),C=new O.a({urls:Object.fromEntries(Object.values(E).map((function(e){return[e,_[e]]}))),defaultChainId:E.MAINNET,pollingInterval:12e3});var S=function(){var e=Object(u.b)().activate;return o.a.createElement("button",{style:{display:"block"},onClick:function(){return e(h)}},"Connect with MetaMask")},g=n(369);var T=function(e){var t,n=e.address,i=Object(u.b)(),c=i.library,l=i.account,s=Object(a.useState)(null),p=Object(r.a)(s,2),m=p[0],y=p[1];return Object(a.useEffect)((function(){if(c&&"undefined"!==typeof n){var e=new b.a.Contract(n,g,c);Object(f.a)(d.a.mark((function t(){var n,a,o,i,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.name(),e.symbol(),l?e.balanceOf(l):void 0]);case 2:n=t.sent,a=Object(r.a)(n,3),o=a[0],i=a[1],c=a[2],y({name:o,symbol:i,balanceOf:c});case 8:case"end":return t.stop()}}),t)})))()}}),[l,n,c]),o.a.createElement("div",null,n,":"," ",m&&o.a.createElement(o.a.Fragment,null,m.name,l&&o.a.createElement("p",null,"Balance of ",l,":"," ","".concat(null===(t=m.balanceOf)||void 0===t?void 0:t.toString()," ").concat(m.symbol))||o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(S,null)))||"...")};var w=function(e){var t=e.children,n=Object(u.b)(),o=n.connector,i=n.activate,c=n.active,l=function(){var e=Object(u.b)(),t=e.activate,n=e.active,o=Object(a.useState)(!1),i=Object(r.a)(o,2),c=i[0],l=i[1];return Object(a.useEffect)((function(){h.isAuthorized().then((function(e){e?t(h,void 0,!0).catch((function(){l(!0)})):l(!0)}))}),[t]),Object(a.useEffect)((function(){!c&&n&&l(!0)}),[c,n]),c}();return Object(a.useEffect)((function(){l&&!c&&i(C)}),[l,c,o,i]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(u.b)(),n=t.active,o=t.error,i=t.activate;Object(a.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!o&&!e){var a=function(){console.log("Handling 'connect' event"),i(h)},c=function(e){console.log("Handling 'chainChanged' event with payload",e),i(h)},r=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&i(h)},u=function(e){console.log("Handling 'networkChanged' event with payload",e),i(h)};return t.on("connect",a),t.on("chainChanged",c),t.on("accountsChanged",r),t.on("networkChanged",u),function(){t.removeListener&&(t.removeListener("connect",a),t.removeListener("chainChanged",c),t.removeListener("accountsChanged",r),t.removeListener("networkChanged",u))}}}),[n,o,e,i])}(!l),t};n(370);var j=function(){return o.a.createElement(w,null,o.a.createElement("div",{className:"App"},o.a.createElement(s,null),o.a.createElement(T,{address:"0x6b175474e89094c44da98b954eedeac495271d0f"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(141);function P(e){var t=new N.a(e);return t.pollingInterval=12e3,t}var R=function(e){var t=e.children;return o.a.createElement(u.a,{getLibrary:P},t)};c.a.render(o.a.createElement(R,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.bcc3a7e3.chunk.js.map
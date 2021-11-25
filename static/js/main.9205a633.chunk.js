(this["webpackJsonpmonolith-exercise-react-app"]=this["webpackJsonpmonolith-exercise-react-app"]||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(29),i=a.n(c),s=(a(97),a(12)),l=a(194),u=a(195),j=a(196),o=a(197),d=a(43),b=a(61),h=a.n(b),x=a(78),v=a(62),O=a.n(v),p=a(79),g=a.n(p);var f=a(15),m=a(36),y=a.n(m),w=a(80),_=a.n(w);function A(e){var t=new y.a(e);return t.equals(0)?"-":"".concat(t.gte(0)?"+":"").concat(t.toString())}var S=a(186),k=a(198),E=a(202),M=a(201),U=a(199),C=a(200),D=a(193),B=a(189),L=a(81),R=a.n(L),Y=a(2);function G(e){var t=e.uid,a=e.size;return Object(Y.jsx)("div",Object(d.a)({style:{width:a,height:a,borderRadius:a,backgroundColor:"lightgrey",overflow:"hidden"}},e.uid&&{dangerouslySetInnerHTML:{__html:R()(t,a)}}))}var I=[{user_id:"1",gbp:"0",usd:"0",eur:"0",lastActivity:""},{user_id:"2",gbp:"0",usd:"0",eur:"0",lastActivity:""},{user_id:"3",gbp:"0",usd:"0",eur:"0",lastActivity:""},{user_id:"4",gbp:"0",usd:"0",eur:"0",lastActivity:""},{user_id:"5",gbp:"0",usd:"0",eur:"0",lastActivity:""}];function P(e){return parseFloat(e)<0?{color:"#ec535a"}:parseFloat(e)>0?{color:"#27a197"}:{}}function T(e){var t=e.data,a=e.loading,n=e.error,c=Object(r.useMemo)((function(){return a?I:t}),[t,a]);return n?Object(Y.jsx)(l.a,{sx:{p:1},children:Object(Y.jsx)(B.a,{severity:"error",children:n.message})}):0===c.length?Object(Y.jsx)(l.a,{sx:{p:1},children:Object(Y.jsx)(B.a,{severity:"info",children:"No Transactions"})}):Object(Y.jsx)(S.a,{children:Object(Y.jsxs)(k.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(Y.jsx)(U.a,{children:Object(Y.jsxs)(C.a,{children:[Object(Y.jsx)(M.a,{padding:"checkbox"}),Object(Y.jsx)(M.a,{align:"left",children:"User ID"}),Object(Y.jsx)(M.a,{align:"right",children:"GBP"}),Object(Y.jsx)(M.a,{align:"right",children:"USD"}),Object(Y.jsx)(M.a,{align:"right",children:"EUR"}),Object(Y.jsx)(M.a,{align:"right",children:"Last Activity"})]})}),Object(Y.jsx)(E.a,{children:c.map((function(e){return Object(Y.jsxs)(C.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(Y.jsx)(M.a,{children:a?Object(Y.jsx)(D.a,{variant:"circular",width:30,height:30}):Object(Y.jsx)(G,{uid:e.user_id,size:30})}),Object(Y.jsx)(M.a,{component:"th",scope:"row",children:a?Object(Y.jsx)(D.a,{variant:"text",width:300}):e.user_id}),Object(Y.jsx)(M.a,{align:"right",sx:P(e.gbp),children:a?Object(Y.jsx)(D.a,{variant:"text"}):e.gbp}),Object(Y.jsx)(M.a,{align:"right",sx:P(e.usd),children:a?Object(Y.jsx)(D.a,{variant:"text"}):e.usd}),Object(Y.jsx)(M.a,{align:"right",sx:P(e.eur),children:a?Object(Y.jsx)(D.a,{variant:"text"}):e.eur}),Object(Y.jsx)(M.a,{align:"right",children:a?Object(Y.jsx)(D.a,{variant:"text"}):e.lastActivity})]},e.user_id)}))})]})})}var z=a(191),F=a(190),J=a(187);function q(e){var t=e.value,a=e.onChange,r=e.options;return Object(Y.jsx)(z.a,{sx:{p:1,width:200},children:Object(Y.jsx)(J.a,{value:t,onChange:function(e){var t=e.target.value;if(a){var n=r.find((function(e){return e.value===t}));n&&a(n)}},children:r.map((function(e){return Object(Y.jsx)(F.a,{value:e.value,children:e.display},e.value)}))})})}var H="/monolith-exercise-react-app",N=[{value:"small",display:"Small",url:"".concat(H,"/transactions-small.json")},{value:"medium",display:"Medium",url:"".concat(H,"/transactions-medium.json")},{value:"large",display:"Large",url:"".concat(H,"/transactions-large.json")},{value:"xlarge",display:"X-Large (404)",url:"".concat(H,"/transactions-x-large.json")},{value:"empty",display:"Empty",url:"".concat(H,"/transactions-empty.json")}];var W=function(){var e=Object(r.useState)(N[0]),t=Object(s.a)(e,2),a=t[0],n=t[1],c=function(e){var t=Object(r.useState)(),a=Object(s.a)(t,2),n=a[0],c=a[1],i=Object(r.useState)(),l=Object(s.a)(i,2),u=l[0],j=l[1],o=Object(r.useState)(!1),b=Object(s.a)(o,2),v=b[0],p=b[1],f=Object(r.useCallback)(function(){var e=Object(x.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),j(void 0),e.prev=2,e.next=5,g()(1e3);case 5:return e.next=7,O.a.get(t);case 7:a=e.sent,c(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),O.a.isAxiosError(e.t0)&&j(e.t0);case 14:return e.prev=14,p(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(r.useEffect)((function(){f(e)}),[e]),Object(d.a)(Object(d.a)({},n),{},{loading:v,error:u})}(a.url),i=c.data,b=c.error,v=c.loading,p=Object(r.useMemo)((function(){return function(e){var t=new Map;return e.forEach((function(e){t.has(e.user_id)||t.set(e.user_id,{GBP:new y.a(0),USD:new y.a(0),EUR:new y.a(0),lastActivity:e.timestamp});var a=t.get(e.user_id);return a&&(a[e.currency]=a[e.currency].add(e.amount),e.timestamp>a.lastActivity&&(a.lastActivity=e.timestamp)),t})),Object(f.a)(t).map((function(e){var t=Object(s.a)(e,2),a=t[0],r=t[1];return{user_id:a,gbp:A(r.GBP),usd:A(r.USD),eur:A(r.EUR),lastActivity:_()(r.lastActivity).format("DD-MM-YYYY")}}))}(i||[])}),[i]),m=Object(r.useCallback)((function(e){n(e)}),[]);return Object(Y.jsx)(l.a,{sx:{m:6},children:Object(Y.jsxs)(u.a,{children:[Object(Y.jsxs)(j.a,{children:[Object(Y.jsx)(o.a,{sx:{flex:"1 1 100%"},variant:"h6",children:"Transactions"}),Object(Y.jsx)(q,{value:a.value,options:N,onChange:m})]}),Object(Y.jsx)(T,{data:p,loading:v,error:b})]})})};i.a.render(Object(Y.jsx)(n.a.StrictMode,{children:Object(Y.jsx)(W,{})}),document.getElementById("root"))},97:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.9205a633.chunk.js.map
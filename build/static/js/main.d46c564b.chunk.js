(this["webpackJsonpfrontend-alarmclock"]=this["webpackJsonpfrontend-alarmclock"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(28),i=n.n(r),s=n(16),o=(n(35),n(5)),u=n(2),j=(n(36),function(e){var t=e.createAlarm,n=e.modifyAlarm,r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],u=i[1],j=Object(a.useState)(""),l=Object(o.a)(j,2),d=l[0],b=l[1],h=Object(a.useState)(""),m=Object(o.a)(h,2),O=m[0],x=m[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),g=f[0],v=f[1],w=Object(a.useState)(15),y=Object(o.a)(w,2),k=y[0],N=y[1];Object(a.useEffect)((function(){u(n.id||""),x(n.message||""),v(n.code||"")}),[n]);return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"alarm-form",onSubmit:function(e){var n=d.split(":");e.preventDefault(),t(""===s?{hours:n[0],minutes:n[1],message:O,timeToExpire:k,code:g}:{id:s,hours:n[0],minutes:n[1],message:O,timeToExpire:k,code:g}),b(""),x(""),v(""),N(15)},children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"id-alarm",children:"ID"}),Object(c.jsx)("input",{id:"id-alarm",type:"text",value:s,name:"ID",onChange:function(e){var t=e.target;return u(t.value)},disabled:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"time",children:"Gi\u1edd b\xe1o th\u1ee9c"}),Object(c.jsx)("input",{id:"time",type:"time",value:d,name:"Time",onChange:function(e){var t=e.target;return b(t.value)},required:!0})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"message",children:"Tin nh\u1eafn"}),Object(c.jsx)("textarea",{id:"message",type:"text",value:O,name:"Message",onChange:function(e){var t=e.target;return x(t.value)}})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"code",children:"Code"}),Object(c.jsx)("input",{id:"code",type:"text",value:g,name:"Code",minLength:"4",maxLength:"4",onChange:function(e){var t=e.target;return v(t.value)},required:!0}),Object(c.jsx)("span",{className:"rules",children:"*Y\xeau c\u1ea7u code t\u1ed1i \u0111a 4 k\xed t\u1ef1 b\u1ea5t k\xec"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"timetoexpire",children:"Th\u1eddi gian t\u1ef1 h\u1ee7y"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{id:"timetoexpire",type:"number",value:k,name:"TimeToExpire",min:"15",onChange:function(e){var t=e.target;return N(t.value)},required:!0})," gi\xe2y"]})]}),Object(c.jsxs)("div",{id:"select-choice",children:[Object(c.jsx)("button",{id:"create-button",type:"submit",className:"btn-pill",children:Object(c.jsx)("span",{children:"\u0110\u1eb7t/S\u1eeda b\xe1o th\u1ee9c"})}),Object(c.jsx)("button",{onClick:function(){u(""),b(""),x(""),v(""),N(15)},className:"btn-shine",children:Object(c.jsx)("span",{children:"H\u1ee7y b\u1ecf thay \u0111\u1ed5i"})})]})]})})}),l=n(9),d=n.n(l),b=n(13),h=n(11),m=n.n(h),O="/api/alarmMessages",x={getAll:function(){return m.a.get(O).then((function(e){return e.data}))},create:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post(O,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(d.a.mark((function e(t,n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.put("".concat(O,"/").concat(t),n);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("".concat(O,"/").concat(t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getSDMessage:function(){var e=Object(b.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(O,"/code/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({}),s=Object(o.a)(i,2),u=s[0],l=s[1];Object(a.useEffect)((function(){x.getAll().then((function(e){return r(e)}))}),[]);return Object(c.jsxs)("div",{className:"alarm-manager",children:[Object(c.jsxs)("h1",{id:"manager-title",children:["Alarm Manager ",Object(c.jsx)("span",{children:"version 0.0.1"})]}),Object(c.jsx)("div",{className:"add-alarm",children:Object(c.jsx)(j,{createAlarm:function(e){e.id?x.update(e.id,e).then((function(e){r(n.map((function(t){return t.id===e.id?e:t})))})):x.create(e).then((function(e){r(n.concat(e))}))},modifyAlarm:u})}),Object(c.jsx)("div",{className:"alarm-table",children:Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"Th\u1eddi gian"}),Object(c.jsx)("th",{children:"Code"}),Object(c.jsx)("th",{children:"Tin nh\u1eafn"}),Object(c.jsx)("th",{children:"Th\u1eddi gian t\u1ed3n t\u1ea1i(s)"}),Object(c.jsx)("th",{children:"H\xe0nh \u0111\u1ed9ng"})]})}),Object(c.jsx)("tbody",{children:n.map((function(e){return console.log(e),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.id}),Object(c.jsxs)("td",{children:[e.hours,":",e.minutes]}),Object(c.jsx)("td",{children:e.code}),Object(c.jsx)("td",{children:e.message}),Object(c.jsx)("td",{children:e.timeToExpire}),Object(c.jsxs)("td",{children:[Object(c.jsx)("button",{className:"action-button btn-pill",onClick:function(){l(e)},children:"Ch\u1ec9nh s\u1eeda"}),Object(c.jsx)("button",{className:"action-button btn-shine",onClick:function(){return t=e.id,void x.remove(t).then((function(e){r(n.filter((function(e){return e.id!==t})))}));var t},children:"X\xf3a"})]})]},e.id)}))})]})})]})},f=function(e){var t=Object(a.useState)({}),n=Object(o.a)(t,2),r=n[0],i=n[1],s=e.match.params.code;return Object(a.useEffect)((function(){x.getSDMessage(s).then((function(e){i(e),setTimeout((function(){return window.location.replace(window.location.origin)}),1e3*e.timeToExpire)})).catch((function(){return window.location.replace(window.location.origin)}))}),[s]),r?Object(c.jsxs)("div",{className:"sd-message",children:[Object(c.jsx)("h3",{children:"Tin nh\u1eafn b\u1ea1n nh\xe2n \u0111\u01b0\u1ee3c l\xe0"}),Object(c.jsxs)("p",{id:"message-content",children:['"',r.message,'"']}),Object(c.jsxs)("p",{id:"time-to-expire",children:["Tin nh\u1eafn s\u1ebd t\u1ef1 h\u1ee7y sau ",Object(c.jsx)("span",{children:r.timeToExpire})," gi\xe2y n\u1eefa"]})]}):Object(c.jsx)("div",{children:"Loading..."})};var g=function(){var e=Object(u.e)(),t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(c.jsxs)("div",{className:"App grid-container",children:[Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)("h1",{children:"Share your anonymous thought for everyone to see..."})}),Object(c.jsxs)("main",{className:"main",children:[Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),4===r.length?e.push("/message/".concat(r)):"luonvuituoi"===r?e.push("/qgql27cqKE4gHkMDYsob"):(window.alert("Your opinion has been send"),e.push("/"))},className:"keyword-bar",children:[Object(c.jsx)("input",{type:"text",name:"keyword-input",id:"keyword-input",onChange:function(e){var t=e.target;return i(t.value)}}),Object(c.jsx)("button",{type:"submit",children:" Send "})]}),Object(c.jsxs)("section",{className:"content",children:[Object(c.jsx)(u.a,{path:"/message/:code",component:f}),Object(c.jsx)(u.a,{path:"/qgql27cqKE4gHkMDYsob",exact:!0,component:p})]})]}),Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)("span",{children:"Follow me in "}),Object(c.jsx)("a",{href:"https://www.facebook.com/CH2VOV/",children:Object(c.jsx)("i",{className:"fab fa-facebook"})}),Object(c.jsx)("a",{href:"https://github.com/iulover99",children:Object(c.jsx)("i",{className:"fab fa-github-alt"})}),Object(c.jsx)("a",{href:"https://www.instagram.com/hoang_uaena_0223/",children:Object(c.jsx)("i",{className:"fab fa-instagram"})})]})]})};i.a.render(Object(c.jsx)(s.a,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.d46c564b.chunk.js.map
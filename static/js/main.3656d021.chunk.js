(this.webpackJsonpzopper=this.webpackJsonpzopper||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(24),a=c.n(n),l=(c(31),c(32),c.p+"static/media/ZRP Logo@2x.a3a1af73.png"),r=c.p+"static/media/Group 4759@2x.dc3ffb6f.png",d=c(0),o=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"box",children:Object(d.jsx)("img",{src:l,width:200,height:150})}),Object(d.jsx)("div",{className:"box",children:Object(d.jsx)("img",{src:r,width:200,height:150})})]})},j=(c(34),c(35),function(e){var t=e.color,c=e.heading,s={backgroundColor:t},i={borderLeft:"10px solid "+t,backgroundColor:t},n={borderRight:"10px solid "+t,backgroundColor:t};return Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("div",{className:"left-triangle",style:n}),Object(d.jsx)("div",{className:"rectangle",style:s,children:c}),Object(d.jsx)("div",{className:"right-triangle",style:i})]})}),b=c.p+"static/media/Image 4@2x.7851b756.png",u=c.p+"static/media/Image 6@2x.dcea2fe8.png",h=[{key:1,color:"cyan",heading:"Basic",amount:"249",subtitle:"Coupons",title:"Including Group Personal Accident Policy"},{key:2,color:"yellow",heading:"Standard",amount:"499",subtitle:"5X Coupons",title:"Including Group Personal Accident Policy & Group Terms Life"},{key:3,color:"rgb(131,201,190)",heading:"Premium",amount:"999",subtitle:"10X Coupons",title:"Including Group Personal Accident Policy, Group Terms Life & Hospicash"}],m=c(10),x=function(){return Object(d.jsx)("div",{className:"container",children:h.map((function(e){return Object(d.jsxs)("div",{className:"card",style:{border:"2px solid "+e.color},children:[Object(d.jsx)("div",{className:"pos",children:Object(d.jsx)(j,{color:e.color,heading:e.heading})}),Object(d.jsxs)("div",{className:"rupee",children:[Object(d.jsxs)("span",{className:"amount",style:{color:e.color},children:["\u20b9 ",e.amount,"  "]}),Object(d.jsxs)("span",{children:["+ ",e.subtitle]})]}),Object(d.jsxs)("div",{className:"image",children:[2===e.key?Object(d.jsx)("img",{src:b,height:50,width:50}):Object(d.jsx)("div",{}),3===e.key?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"image-1",children:Object(d.jsx)("img",{src:b,height:50,width:50})}),Object(d.jsx)("div",{className:"image-2",children:Object(d.jsx)("img",{src:u,height:50,width:50})})]}):Object(d.jsx)("div",{})]}),Object(d.jsx)("div",{className:"text",children:Object(d.jsxs)("div",{className:"text",children:[e.title,Object(d.jsx)(m.b,{to:"/plans/"+e.heading,className:"button",children:"Buy Now"})]})})]},e.key)}))})},g=c(2),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAAAFCAYAAAApDAtaAAAAAXNSR0IArs4c6QAAAG1JREFUWAnt1EENgDAQRUFAA26wgAukFAkIQQMyOGACAeCgt9+kyfTapm8zhx3X6/2Gzs5ynJ1NbFwCdYHtuesPwrfzXsKF/PdTPqFAgACBvIBlljdWIECggYBl1gBZggCBvIBlljdWIECggcAPlOkHv8BQ65QAAAAASUVORK5CYII=",O=(c(44),function(){return Object(d.jsxs)("div",{className:"head",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h2",{children:"Zopper Plans"})}),Object(d.jsx)("div",{className:"underline",children:Object(d.jsx)("img",{src:p,width:200,height:5})})]})}),v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{}),Object(d.jsx)(O,{}),Object(d.jsx)(x,{})]})},A=c(11),f=(c(45),c(26)),N=c.n(f),y=function(){var e=Object(s.useState)(""),t=Object(A.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(""),a=Object(A.a)(n,2),l=a[0],r=a[1],o=Object(s.useState)(""),j=Object(A.a)(o,2),b=j[0],u=j[1];return Object(d.jsxs)("div",{className:"buy-container",children:[Object(d.jsx)("h1",{children:"Basic ZRP Plan"}),Object(d.jsx)("img",{src:p,width:350,height:5}),Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t={t:c,b:l,u:b};N.a.post("https://jsonplaceholder.typicode.com/posts",t).then((function(e){return window.alert("Success")}))},children:[Object(d.jsx)("div",{className:"json",children:"JSON Placeholder Post"}),Object(d.jsxs)("div",{className:"body",children:[Object(d.jsxs)("div",{className:"inputs",children:[Object(d.jsx)("div",{className:"input-1",children:Object(d.jsx)("input",{type:"text",placeholder:"Title",className:"field",value:c,onChange:function(e){i(e.target.value)}})}),Object(d.jsx)("div",{className:"input-2",children:Object(d.jsx)("input",{type:"text",placeholder:"Body",className:"field",value:l,onChange:function(e){r(e.target.value)}})}),Object(d.jsx)("div",{className:"input-3",children:Object(d.jsx)("input",{type:"text",placeholder:"UserId",className:"field",value:b,onChange:function(e){u(e.target.value)}})})]}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{type:"submit",className:"submit"})})]})]})]})};var C=function(){return Object(d.jsx)(m.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g.a,{path:"/",exact:!0,component:v}),Object(d.jsx)(g.a,{path:"/plans/(Basic|Standard|Premium)",exact:!0,component:y})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),P()}},[[64,1,2]]]);
//# sourceMappingURL=main.3656d021.chunk.js.map
(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t.n(c),i=t(8),o=t.n(i),a=(t(21),t(3)),u=t(4),s=t.n(u),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},j=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=t(0),h=function(e){var n=e.message;return Object(b.jsx)("div",{style:{color:"green",fontsize:16,backgroundColor:"orange"},children:Object(b.jsx)("h1",{children:n})})},f=function(e){var n=e.newFilter,t=e.filterfunction;return Object(b.jsxs)("div",{children:["Filter shown with:",Object(b.jsx)("input",{value:n,onChange:t})]})},O=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameChange,r=e.newNumber,i=e.handleNumberChange;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsxs)("div",{children:["name:",Object(b.jsx)("input",{value:t,onChange:c})]}),Object(b.jsxs)("div",{children:["number:",Object(b.jsx)("input",{value:r,onChange:i})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var n=e.newFilter,t=e.persons,c=e.deletePerson;return Object(b.jsx)("ul",{children:t.filter((function(e){return e.name.includes(n)})).map((function(e){return Object(b.jsxs)("li",{children:[e.name," ",e.number," ",Object(b.jsx)("button",{onClick:function(){return c(e.id)},children:"DELETE"})]},e.name)}))})},x=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(""),o=Object(a.a)(i,2),u=o[0],d=o[1],x=Object(c.useState)(""),p=Object(a.a)(x,2),g=p[0],v=p[1],w=Object(c.useState)(""),C=Object(a.a)(w,2),F=C[0],N=C[1],S=Object(c.useState)(""),k=Object(a.a)(S,2),y=k[0],P=k[1];Object(c.useEffect)((function(){l().then((function(e){r(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{message:y}),Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(f,{newFilter:F,filterfunction:function(e){N(e.target.value)}}),Object(b.jsx)("h3",{children:"Add a new person"}),Object(b.jsx)(O,{addPerson:function(e){e.preventDefault();var n={name:u,number:g,id:t.name+1};t.some((function(e){return e.name===u}))?(window.alert("".concat(u," is already added to phonebook")),d("")):j(n).then((function(e){r(t.concat(n)),d(""),v(""),P("Sucessfully added ".concat(n.name)),setTimeout((function(){P(null)}),2e3)}))},newName:u,handleNameChange:function(e){d(e.target.value)},newNumber:g,handleNumberChange:function(e){v(e.target.value)}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(m,{newFilter:F,persons:t,deletePerson:function(e){var n="http://localhost:3001/api/persons/".concat(e),c=t.find((function(n){return n.id===e}));if(window.confirm("Do you really want to delete ".concat(c.name,"?"))){t.indexOf(c);r(t.filter((function(n){return n.id!==e}))),s.a.delete(n)}}})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.6cc11a7c.chunk.js.map
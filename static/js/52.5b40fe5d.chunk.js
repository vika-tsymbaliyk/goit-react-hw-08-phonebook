"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[52],{1052:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,a,s,i,o,c,u,d,l=t(2791),m=t(9434),p=t(4270),x=t(6916),f=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},b=(0,x.P1)([f,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),j=t(3634),Z=t(168),g=t(5867),y=g.ZP.div(r||(r=(0,Z.Z)(["\n  display:flex;\n  flex-direction: row;\n  gap: 10px;\n"]))),v=g.ZP.button(a||(a=(0,Z.Z)(["\n  font-size:14px;\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n"]))),w=t(184),P=function(n){var e=n.contact,t=(0,m.I0)(),r=e.id,a=e.name,s=e.phone;return(0,w.jsxs)(y,{children:[(0,w.jsxs)("p",{children:[a,": ",s]}),(0,w.jsx)(v,{onClick:function(){return t((0,j.GK)(r))},children:"Delete"})]})},k=g.ZP.ul(s||(s=(0,Z.Z)(["\n  padding:10px;\n"]))),C=g.ZP.li(i||(i=(0,Z.Z)(["\n  margin-bottom:8px;\n"]))),q=function(){var n=(0,m.v9)(b);return(0,w.jsx)(k,{children:n.map((function(n){return(0,w.jsx)(C,{children:(0,w.jsx)(P,{contact:n})},n.id)}))})},z=t(5705),A=t(6727),_=(0,g.ZP)(z.l0)(o||(o=(0,Z.Z)(["\n  display:flex;\n  flex-direction:column;\n  gap: 15px;\n  border: 1px solid black;\n  border-radius:5px;\n  padding: 10px;\n"]))),L=g.ZP.label(c||(c=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),F=(0,g.ZP)(z.gN)(u||(u=(0,Z.Z)(["\n \n"]))),N=(0,g.ZP)(z.Bc)(d||(d=(0,Z.Z)(["\ncolor: red;\nfont-size:12px;  \n"]))),R=A.Ry().shape({name:A.Z_().test("name","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",(function(n){return/^[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407 ]+((['][a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407 ])?[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407]*)*$/.test(n)})).required("Required"),number:A.Z_().test("number","Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",(function(n){return/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(n)})).required("Required")}),I=function(){var n=(0,m.v9)(f),e=(0,m.I0)();return(0,w.jsx)(z.J9,{initialValues:{name:"",number:""},validationSchema:R,onSubmit:function(t,r){return function(t,r){n.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()||n.number===t.number}))?alert("".concat(t.name," or ").concat(t.number," is already in contacts.")):(e((0,j.uK)(t)),r.resetForm())}(t,r)},children:(0,w.jsxs)(_,{children:[(0,w.jsxs)(L,{children:["Name",(0,w.jsx)(F,{name:"name",type:"text"}),(0,w.jsx)(N,{name:"name",component:"span"})]}),(0,w.jsxs)(L,{children:["Namber",(0,w.jsx)(F,{name:"number",type:"tel"}),(0,w.jsx)(N,{name:"number",component:"span"})]}),(0,w.jsx)("button",{type:"submit",children:"Add contact"})]})})};function B(){var n=(0,m.I0)(),e=(0,m.v9)(h);return(0,l.useEffect)((function(){n((0,j.yF)())}),[n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.q,{children:(0,w.jsx)("title",{children:"Your tasks"})}),(0,w.jsx)(I,{}),(0,w.jsx)("div",{children:e&&"Request in progress..."}),(0,w.jsx)(q,{})]})}}}]);
//# sourceMappingURL=52.5b40fe5d.chunk.js.map
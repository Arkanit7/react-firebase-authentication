(this["webpackJsonpreact-create-app"]=this["webpackJsonpreact-create-app"]||[]).push([[0],{62:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),s=a(25),n=a.n(s),i=(a(51),a(65)),j=a(17),l=a(12),b=a(14),u=a(45),d=(a(54),u.a.initializeApp({apiKey:"AIzaSyAev_RbwriHiGzsaoUxwQqPDX546ew5wNc",authDomain:"react-authentication-ba820.firebaseapp.com",projectId:"react-authentication-ba820",storageBucket:"react-authentication-ba820.appspot.com",messagingSenderId:"2723672591",appId:"1:2723672591:web:948905fe32b8efe835a97a"})),o=d.auth(),O=a(3),h=r.a.createContext();function p(){return Object(c.useContext)(h)}var x=function(e){var t=e.children,a=Object(c.useState)(),r=Object(b.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(!1),j=Object(b.a)(i,2)[1];Object(c.useEffect)((function(){return o.onAuthStateChanged((function(e){n(e),j(!1)}))}),[]);var l={currentUser:s,signup:function(e,t){return o.createUserWithEmailAndPassword(e,t)},login:function(e,t){return o.signInWithEmailAndPassword(e,t)},logout:function(){return o.signOut()},resetPassword:function(e){return o.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(O.jsx)(h.Provider,{value:l,children:t})},m={HOME:"/react-firebase-authentication",LOGIN:"/react-firebase-authentication/login",SIGNUP:"/react-firebase-authentication/signup",PASSWORD:"/react-firebase-authentication/forgot_password",UPDATE:"/react-firebase-authentication/update_profile"},f=a(21),v=a.n(f),w=a(23),g=a(68),N=a(66),y=a(64);var S=function(){var e=p(),t=e.currentUser,a=e.logout,r=Object(c.useState)(!1),s=Object(b.a)(r,2),n=s[0],i=s[1],u=Object(c.useState)(""),d=Object(b.a)(u,2),o=d[0],h=d[1],x=Object(l.g)();function f(){return(f=Object(w.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,h(""),i(!0),e.next=6,a();case 6:x.push(m.LOGIN),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),i(!1),h(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a,{className:"w-100 mb-2",children:Object(O.jsxs)(g.a.Body,{children:[Object(O.jsx)("h1",{className:"text-center mb-4",children:"Personal page"}),o&&Object(O.jsx)(N.a,{variant:"danger",children:o}),Object(O.jsx)("p",{className:"text-center mb-4",children:null===t||void 0===t?void 0:t.email}),Object(O.jsx)(y.a,{disabled:n,variant:"warning",className:"w-100",onClick:function(e){return f.apply(this,arguments)},children:"Log out"})]})}),Object(O.jsx)("div",{className:"w-100 text-center",children:Object(O.jsx)(j.b,{to:m.UPDATE,children:"Update profile"})})]})},P=a(67);var L=function(){var e=Object(c.useRef)(""),t=Object(c.useRef)(""),a=p().login,r=Object(c.useState)(!1),s=Object(b.a)(r,2),n=s[0],i=s[1],u=Object(c.useState)(""),d=Object(b.a)(u,2),o=d[0],h=d[1],x=Object(l.g)();function f(){return(f=Object(w.a)(v.a.mark((function c(r){return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,h(""),i(!0),c.next=6,a(e.current.value,t.current.value);case 6:i(!1),x.push(m.HOME),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),h(c.t0.message),i(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a,{className:"w-100",children:Object(O.jsxs)(g.a.Body,{children:[Object(O.jsx)("h1",{className:"text-center mb-4",children:"Log in"}),o&&Object(O.jsx)(N.a,{variant:"danger",children:o}),Object(O.jsxs)(P.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(O.jsxs)(P.a.Group,{id:"email",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Email"}),Object(O.jsx)(P.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(P.a.Group,{id:"password",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Password"}),Object(O.jsx)(P.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsx)(y.a,{disabled:n,className:"w-100 mb-2",type:"submit",children:"Log in"}),Object(O.jsx)("div",{className:"w-100 text-center",children:Object(O.jsx)(j.b,{to:m.PASSWORD,children:"Forgot password?"})})]})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(O.jsx)(j.b,{to:m.SIGNUP,children:"Sign up"})]})]})};var E=function(){var e=Object(c.useRef)(""),t=Object(c.useRef)(""),a=Object(c.useRef)(""),r=p().signup,s=Object(c.useState)(!1),n=Object(b.a)(s,2),i=n[0],u=n[1],d=Object(c.useState)(""),o=Object(b.a)(d,2),h=o[0],x=o[1],f=Object(l.g)();function S(){return(S=Object(w.a)(v.a.mark((function c(s){return v.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",x("Passwords don't match."));case 3:return c.prev=3,x(""),u(!0),c.next=8,r(e.current.value,a.current.value);case 8:u(!1),f.push(m.HOME),c.next=16;break;case 12:c.prev=12,c.t0=c.catch(3),u(!1),x(c.t0.message);case 16:case"end":return c.stop()}}),c,null,[[3,12]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a,{className:"w-100",children:Object(O.jsxs)(g.a.Body,{children:[Object(O.jsx)("h1",{className:"text-center mb-4",children:"Sign Up"}),h&&Object(O.jsx)(N.a,{variant:"danger",children:h}),Object(O.jsxs)(P.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(O.jsxs)(P.a.Group,{id:"email",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Email"}),Object(O.jsx)(P.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(P.a.Group,{id:"password",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Password"}),Object(O.jsx)(P.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsxs)(P.a.Group,{id:"password-confirm",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Password confirmation"}),Object(O.jsx)(P.a.Control,{type:"password",ref:a,required:!0})]}),Object(O.jsx)(y.a,{disabled:i,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(O.jsx)(j.b,{to:m.LOGIN,children:"Log In"})]})]})},G=a(36);var I=function(e){var t=p().currentUser;return Object(O.jsx)(l.b,Object(G.a)(Object(G.a)({},e),{},{children:t?e.children:Object(O.jsx)(l.a,{to:m.LOGIN})}))};var U=function(){var e=Object(c.useRef)(""),t=p().resetPassword,a=Object(c.useState)(!1),r=Object(b.a)(a,2),s=r[0],n=r[1],i=Object(c.useState)(""),l=Object(b.a)(i,2),u=l[0],d=l[1],o=Object(c.useState)(""),h=Object(b.a)(o,2),x=h[0],f=h[1];function S(){return(S=Object(w.a)(v.a.mark((function a(c){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,f(""),d(""),n(!0),a.next=7,t(e.current.value);case 7:f("An email with instructions to reset password has been sent to ".concat(e.current.value,".")),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),d(a.t0.message);case 13:n(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a,{className:"w-100",children:Object(O.jsxs)(g.a.Body,{children:[Object(O.jsx)("h1",{className:"text-center mb-4",children:"Password reset"}),u&&Object(O.jsx)(N.a,{variant:"danger",children:u}),x&&Object(O.jsx)(N.a,{variant:"success",children:x}),Object(O.jsxs)(P.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(O.jsxs)(P.a.Group,{id:"email",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Email"}),Object(O.jsx)(P.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsx)(y.a,{disabled:s,className:"w-100",type:"submit",children:"Reset"})]})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(O.jsx)(j.b,{to:m.LOGIN,children:"Log In"})]}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(O.jsx)(j.b,{to:m.SIGNUP,children:"Sign up"})]})]})};var A=function(){var e=p(),t=e.currentUser,a=e.updateEmail,r=e.updatePassword,s=Object(c.useRef)(""),n=Object(c.useRef)(""),i=Object(c.useRef)(""),l=Object(c.useState)(!1),u=Object(b.a)(l,2),d=u[0],o=u[1],h=Object(c.useState)(""),x=Object(b.a)(h,2),f=x[0],v=x[1],w=Object(c.useState)(""),S=Object(b.a)(w,2),L=S[0],E=S[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a,{className:"w-100",children:Object(O.jsxs)(g.a.Body,{children:[Object(O.jsx)("h1",{className:"text-center mb-4",children:"Update Profile"}),f&&Object(O.jsx)(N.a,{variant:"danger",children:f}),L&&Object(O.jsx)(N.a,{variant:"success",children:L}),Object(O.jsxs)(P.a,{onSubmit:function(e){if(e.preventDefault(),n.current.value!==i.current.value)return v("Passwords do not match");var c=[];o(!0),v(""),s.current.value!==t.email&&c.push(a(s.current.value)),n.current.value&&c.push(r(n.current.value)),Promise.all(c).then((function(){E("Success!")})).catch((function(e){var t=e.message;v(t)})).finally((function(){o(!1)}))},children:[Object(O.jsxs)(P.a.Group,{id:"email",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Email"}),Object(O.jsx)(P.a.Control,{type:"email",ref:s,placeholder:"Leave empty to not change it."})]}),Object(O.jsxs)(P.a.Group,{id:"password",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"New password"}),Object(O.jsx)(P.a.Control,{type:"password",ref:n,placeholder:"Leave empty to not change it."})]}),Object(O.jsxs)(P.a.Group,{id:"password-confirm",className:"mb-4",children:[Object(O.jsx)(P.a.Label,{children:"Confirm new password"}),Object(O.jsx)(P.a.Control,{type:"password",ref:i,placeholder:"Leave empty to not change it."})]}),Object(O.jsx)(y.a,{disabled:d,className:"w-100 mb-2",type:"submit",children:"Update"})]})]})}),Object(O.jsx)("div",{className:"w-100 text-center mt-2",children:Object(O.jsx)(j.b,{to:m.HOME,children:"Dashboard"})})]})};function R(){return Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsx)(i.a,{className:"d-flex flex-column align-items-center justify-content-center",style:{minHeight:"100vh",maxWidth:"400px"},children:Object(O.jsx)(j.a,{children:Object(O.jsx)(l.d,{children:Object(O.jsxs)(x,{children:[Object(O.jsx)(l.b,{path:m.SIGNUP,children:Object(O.jsx)(E,{})}),Object(O.jsx)(l.b,{path:m.LOGIN,children:Object(O.jsx)(L,{})}),Object(O.jsx)(l.b,{path:m.PASSWORD,children:Object(O.jsx)(U,{})}),Object(O.jsx)(I,{path:m.UPDATE,children:Object(O.jsx)(A,{})}),Object(O.jsx)(I,{exact:!0,path:m.HOME,children:Object(O.jsx)(S,{})})]})})})})})}n.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(R,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.b9631ea5.chunk.js.map
(this["webpackJsonpreact-admin-dashboard-harvey-roberts"]=this["webpackJsonpreact-admin-dashboard-harvey-roberts"]||[]).push([[5],{296:function(e,t,n){"use strict";var r=n(5),a=Object(r.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=a},297:function(e,t,n){"use strict";var r=n(12),a=n(45),i=n(259),s=n(83),c=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,o);return Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(c.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},308:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},309:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.a57081bd.svg"},310:function(e,t,n){"use strict";var r=n(234),a=n(64),i=n(285),s=n(1);t.a=function(){return Object(s.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(s.jsx)(a.a,{variant:"subtitle2",component:i.a,href:"https://abu-hasan-me.web.app",target:"_blank",underline:"hover",children:"dev.abuhasan"}),Object(s.jsx)(a.a,{variant:"subtitle2",component:i.a,href:"https://abu-hasan-me.web.app",target:"_blank",underline:"hover",children:"\xa9 harveyroberts.com"})]})}},475:function(e,t,n){"use strict";n.r(t);var r=n(32),a=n(21),i=n(239),s=n(251),c=n(234),o=n(64),l=n(143),d=n(296),j=n(297),b=n(12),u=n(108),h=n.n(u),x=n(123),m=n(13),O=n(0),p=n(27),g=n(262),f=n(259),v=n(268),w=n(250),y=n(252),C=n(269),k=n(261),S=n(273),I=n(274),E=n(471),B=n(341),z=n(340),R=n(308),W=n(88),P=n(338),D=n.n(P),q=n(339),A=n.n(q),F=n(309),G=n(1),H=function(e){var t=Object.assign({},e),n=Object(a.a)(),r=Object(R.a)(),d=Object(i.a)(n.breakpoints.down("md")),j=Object(p.c)((function(e){return e.customization})),u=Object(O.useState)(!0),P=Object(m.a)(u,2),q=P[0],H=P[1],J=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("Login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=Object(O.useState)(!1),U=Object(m.a)(M,2),V=U[0],_=U[1],L=function(){_(!V)},K=function(e){e.preventDefault()};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(G.jsx)(s.a,{item:!0,xs:12,children:Object(G.jsx)(W.a,{children:Object(G.jsxs)(g.a,{disableElevation:!0,fullWidth:!0,onClick:J,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:n.palette.grey[50],borderColor:n.palette.grey[100]},children:[Object(G.jsx)(f.a,{sx:{mr:{xs:1,sm:2,width:20}},children:Object(G.jsx)("img",{src:F.a,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign in with Google"]})})}),Object(G.jsx)(s.a,{item:!0,xs:12,children:Object(G.jsxs)(f.a,{sx:{alignItems:"center",display:"flex"},children:[Object(G.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(G.jsx)(g.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"".concat(n.palette.grey[100]," !important"),color:"".concat(n.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(j.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),Object(G.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(G.jsx)(s.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(G.jsx)(f.a,{sx:{mb:2},children:Object(G.jsx)(o.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(G.jsx)(z.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:B.a().shape({email:B.b().email("Must be a valid email").max(255).required("Email is required"),password:B.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(x.a)(h.a.mark((function e(t,n){var a,i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,s=n.setSubmitting;try{r.current&&(i({success:!0}),s(!1))}catch(t){console.error(t),r.current&&(i({success:!1}),a({submit:t.message}),s(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,a=e.handleBlur,i=e.handleChange,s=e.handleSubmit,l=e.isSubmitting,d=e.touched,j=e.values;return Object(G.jsxs)("form",Object(b.a)(Object(b.a)({noValidate:!0,onSubmit:s},t),{},{children:[Object(G.jsxs)(v.a,{fullWidth:!0,error:Boolean(d.email&&r.email),sx:Object(b.a)({},n.typography.customInput),children:[Object(G.jsx)(w.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(G.jsx)(y.a,{id:"outlined-adornment-email-login",type:"email",value:j.email,name:"email",onBlur:a,onChange:i,label:"Email Address / Username",inputProps:{}}),d.email&&r.email&&Object(G.jsx)(C.a,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),Object(G.jsxs)(v.a,{fullWidth:!0,error:Boolean(d.password&&r.password),sx:Object(b.a)({},n.typography.customInput),children:[Object(G.jsx)(w.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(G.jsx)(y.a,{id:"outlined-adornment-password-login",type:V?"text":"password",value:j.password,name:"password",onBlur:a,onChange:i,endAdornment:Object(G.jsx)(k.a,{position:"end",children:Object(G.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:K,edge:"end",size:"large",children:V?Object(G.jsx)(D.a,{}):Object(G.jsx)(A.a,{})})}),label:"Password",inputProps:{}}),d.password&&r.password&&Object(G.jsx)(C.a,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),Object(G.jsxs)(c.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(G.jsx)(I.a,{control:Object(G.jsx)(E.a,{checked:q,onChange:function(e){return H(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(G.jsx)(o.a,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),r.submit&&Object(G.jsx)(f.a,{sx:{mt:3},children:Object(G.jsx)(C.a,{error:!0,children:r.submit})}),Object(G.jsx)(f.a,{sx:{mt:2},children:Object(G.jsx)(W.a,{children:Object(G.jsx)(g.a,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})},J=n(122),M=n(310);t.default=function(){var e=Object(a.a)(),t=Object(i.a)(e.breakpoints.down("md"));return Object(G.jsx)(d.a,{children:Object(G.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(G.jsx)(s.a,{item:!0,xs:12,children:Object(G.jsx)(s.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(G.jsx)(s.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(G.jsx)(j.a,{children:Object(G.jsxs)(s.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(G.jsx)(s.a,{item:!0,sx:{mb:3},children:Object(G.jsx)(r.b,{to:"#",children:Object(G.jsx)(J.a,{})})}),Object(G.jsx)(s.a,{item:!0,xs:12,children:Object(G.jsx)(s.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(G.jsx)(s.a,{item:!0,children:Object(G.jsxs)(c.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(G.jsx)(o.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(G.jsx)(o.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),Object(G.jsx)(s.a,{item:!0,xs:12,children:Object(G.jsx)(H,{})}),Object(G.jsx)(s.a,{item:!0,xs:12,children:Object(G.jsx)(l.a,{})}),Object(G.jsx)(s.a,{item:!0,xs:12,children:Object(G.jsx)(s.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(G.jsx)(o.a,{component:r.b,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),Object(G.jsx)(s.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(G.jsx)(M.a,{})})]})})}}}]);
//# sourceMappingURL=5.ddecc8f4.chunk.js.map
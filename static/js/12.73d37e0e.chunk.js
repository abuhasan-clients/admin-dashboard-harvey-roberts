(this["webpackJsonpreact-admin-dashboard-harvey-roberts"]=this["webpackJsonpreact-admin-dashboard-harvey-roberts"]||[]).push([[12],{470:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(0),c=a(251),r=a(12),s=a(3),j=a(5),o=a(21),l=a(259),b=a(253),d=a(140),h=a(474),x=a(64),O=a(83),m=a(144),g=a(145),p=a(472),u=a(1),f=function(){return Object(u.jsx)(m.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",width:44,height:44})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",width:34,height:34})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",sx:{my:2},height:40})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:30})})]})})})},y=a.p+"static/media/earning.00f461a5.svg",v=a(342),k=a.n(v),w=a(347),C=a.n(w),z=a(343),I=a.n(z),S=a(344),T=a.n(S),L=a(345),M=a.n(L),A=a(346),R=a.n(A),W=Object(j.a)(O.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.secondary.dark,color:"#fff",overflow:"hidden",position:"relative","&:after":Object(s.a)({content:'""',position:"absolute",width:210,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-85,right:-95},t.breakpoints.down("sm"),{top:-105,right:-140}),"&:before":Object(s.a)({content:'""',position:"absolute",width:210,height:210,background:t.palette.secondary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5},t.breakpoints.down("sm"),{top:-155,right:-70})}})),$=function(e){var t=e.isLoading,a=Object(o.a)(),s=Object(i.useState)(null),j=Object(n.a)(s,2),O=j[0],m=j[1],g=function(){m(null)};return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)(f,{}):Object(u.jsx)(W,{border:!1,content:!1,children:Object(u.jsx)(l.a,{sx:{p:2.25},children:Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{variant:"rounded",sx:Object(r.a)(Object(r.a)(Object(r.a)({},a.typography.commonAvatar),a.typography.largeAvatar),{},{backgroundColor:a.palette.secondary[800],mt:1}),children:Object(u.jsx)("img",{src:y,alt:"Notification"})})}),Object(u.jsxs)(c.a,{item:!0,children:[Object(u.jsx)(b.a,{variant:"rounded",sx:Object(r.a)(Object(r.a)(Object(r.a)({},a.typography.commonAvatar),a.typography.mediumAvatar),{},{backgroundColor:a.palette.secondary.dark,color:a.palette.secondary[200],zIndex:1}),"aria-controls":"menu-earning-card","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},children:Object(u.jsx)(k.a,{fontSize:"inherit"})}),Object(u.jsxs)(d.a,{id:"menu-earning-card",anchorEl:O,keepMounted:!0,open:Boolean(O),onClose:g,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(u.jsxs)(h.a,{onClick:g,children:[Object(u.jsx)(I.a,{sx:{mr:1.75}})," Import Card"]}),Object(u.jsxs)(h.a,{onClick:g,children:[Object(u.jsx)(T.a,{sx:{mr:1.75}})," Copy Data"]}),Object(u.jsxs)(h.a,{onClick:g,children:[Object(u.jsx)(M.a,{sx:{mr:1.75}})," Export"]}),Object(u.jsxs)(h.a,{onClick:g,children:[Object(u.jsx)(R.a,{sx:{mr:1.75}})," Archive File"]})]})]})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:"$500.00"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{sx:Object(r.a)(Object(r.a)({cursor:"pointer"},a.typography.smallAvatar),{},{backgroundColor:a.palette.secondary[200],color:a.palette.secondary.dark}),children:Object(u.jsx)(C.a,{fontSize:"inherit",sx:{transform:"rotate3d(1, 1, 1, 45deg)"}})})})]})}),Object(u.jsx)(c.a,{item:!0,sx:{mb:1.25},children:Object(u.jsx)(x.a,{sx:{fontSize:"1rem",fontWeight:500,color:a.palette.secondary[200]},children:"Total Earning"})})]})})})})},F=a(143),E=a(270),J=a(262),P=a(27),B=a(294),G=a.n(B),Y=a(295),D=a.n(Y),N={type:"area",height:95,options:{chart:{id:"support-chart",sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:"Ticket "},marker:{show:!1}}},series:[{data:[0,15,10,50,30,40,25]}]},X=function(){var e=Object(o.a)(),t=Object(P.c)((function(e){return e.customization})).navType,a=e.palette.secondary[800];return Object(i.useEffect)((function(){var e=Object(r.a)(Object(r.a)({},N.options),{},{colors:[a],tooltip:{theme:"light"}});G.a.exec("support-chart","updateOptions",e)}),[t,a]),Object(u.jsxs)(m.a,{sx:{bgcolor:"secondary.light"},children:[Object(u.jsxs)(c.a,{container:!0,sx:{p:2,pb:0,color:"#fff"},children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",sx:{color:e.palette.secondary.dark},children:"Bajaj Finery"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"h4",sx:{color:e.palette.grey[800]},children:"$1839.00"})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:e.palette.grey[800]},children:"10% Profit"})})]}),Object(u.jsx)(D.a,Object(r.a)({},N))]})},V=a(36),q=function(){return Object(u.jsxs)(m.a,{children:[Object(u.jsx)(g.a,{children:Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20,width:20})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(p.a,{variant:"rectangular",height:150})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:1,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:1,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:1,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:1,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:1,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",spacing:V.b,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:16,width:16})})]})})]})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})})]})})]})}),Object(u.jsx)(g.a,{sx:{p:1.25,display:"flex",pt:0,justifyContent:"center"},children:Object(u.jsx)(p.a,{variant:"rectangular",height:25,width:75})})]})},H=a(351),K=a.n(H),Q=a(348),U=a.n(Q),Z=a(349),_=a.n(Z),ee=a(350),te=a.n(ee),ae=function(e){var t=e.isLoading,a=Object(o.a)(),r=Object(i.useState)(null),s=Object(n.a)(r,2),j=s[0],l=s[1],m=function(){l(null)};return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)(q,{}):Object(u.jsxs)(O.a,{content:!1,children:[Object(u.jsx)(g.a,{children:Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignContent:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"h4",children:"Popular Stocks"})}),Object(u.jsxs)(c.a,{item:!0,children:[Object(u.jsx)(U.a,{fontSize:"small",sx:{color:a.palette.primary[200],cursor:"pointer"},"aria-controls":"menu-popular-card","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}}),Object(u.jsxs)(d.a,{id:"menu-popular-card",anchorEl:j,keepMounted:!0,open:Boolean(j),onClose:m,variant:"selectedMenu",anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(u.jsx)(h.a,{onClick:m,children:" Today"}),Object(u.jsx)(h.a,{onClick:m,children:" This Month"}),Object(u.jsx)(h.a,{onClick:m,children:" This Year "})]})]})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,sx:{pt:"16px !important"},children:Object(u.jsx)(X,{})}),Object(u.jsxs)(c.a,{item:!0,xs:12,children:[Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"Bajaj Finery"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"$1839.00"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:a.palette.success.light,color:a.palette.success.dark,ml:2},children:Object(u.jsx)(_.a,{fontSize:"small",color:"inherit"})})})]})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:"success.dark"},children:"10% Profit"})})]}),Object(u.jsx)(F.a,{sx:{my:1.5}}),Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"TTML"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"$100.00"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:a.palette.orange.light,color:a.palette.orange.dark,marginLeft:1.875},children:Object(u.jsx)(te.a,{fontSize:"small",color:"inherit"})})})]})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:a.palette.orange.dark},children:"10% loss"})})]}),Object(u.jsx)(F.a,{sx:{my:1.5}}),Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"Reliance"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"$200.00"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:a.palette.success.light,color:a.palette.success.dark,ml:2},children:Object(u.jsx)(_.a,{fontSize:"small",color:"inherit"})})})]})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:a.palette.success.dark},children:"10% Profit"})})]}),Object(u.jsx)(F.a,{sx:{my:1.5}}),Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"TTML"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"$189.00"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:a.palette.orange.light,color:a.palette.orange.dark,ml:2},children:Object(u.jsx)(te.a,{fontSize:"small",color:"inherit"})})})]})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:a.palette.orange.dark},children:"10% loss"})})]}),Object(u.jsx)(F.a,{sx:{my:1.5}}),Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"Stolon"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle1",color:"inherit",children:"$189.00"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{variant:"rounded",sx:{width:16,height:16,borderRadius:"5px",backgroundColor:a.palette.orange.light,color:a.palette.orange.dark,ml:2},children:Object(u.jsx)(te.a,{fontSize:"small",color:"inherit"})})})]})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:a.palette.orange.dark},children:"10% loss"})})]})]})]})}),Object(u.jsx)(E.a,{sx:{p:1.25,pt:0,justifyContent:"center"},children:Object(u.jsxs)(J.a,{size:"small",disableElevation:!0,children:["View All",Object(u.jsx)(K.a,{})]})})]})})},ne={type:"line",height:90,options:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#fff"],fill:{type:"solid",opacity:1},stroke:{curve:"smooth",width:3},yaxis:{min:0,max:100},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:"Total Order"},marker:{show:!1}}},series:[{name:"series1",data:[45,66,41,89,25,44,9,54]}]},ie={type:"line",height:90,options:{chart:{sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#fff"],fill:{type:"solid",opacity:1},stroke:{curve:"smooth",width:3},yaxis:{min:0,max:100},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:"Total Order"},marker:{show:!1}}},series:[{name:"series1",data:[35,44,9,54,45,66,41,69]}]},ce=a(352),re=a.n(ce),se=a(353),je=a.n(se),oe=Object(j.a)(O.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.primary.dark,color:"#fff",overflow:"hidden",position:"relative","&>div":{position:"relative",zIndex:5},"&:after":Object(s.a)({content:'""',position:"absolute",width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",zIndex:1,top:-85,right:-95},t.breakpoints.down("sm"),{top:-105,right:-140}),"&:before":Object(s.a)({content:'""',position:"absolute",zIndex:1,width:210,height:210,background:t.palette.primary[800],borderRadius:"50%",top:-125,right:-15,opacity:.5},t.breakpoints.down("sm"),{top:-155,right:-70})}})),le=function(e){var t=e.isLoading,a=Object(o.a)(),s=Object(i.useState)(!1),j=Object(n.a)(s,2),d=j[0],h=j[1],O=function(e,t){h(t)};return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)(f,{}):Object(u.jsx)(oe,{border:!1,content:!1,children:Object(u.jsx)(l.a,{sx:{p:2.25},children:Object(u.jsxs)(c.a,{container:!0,direction:"column",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{variant:"rounded",sx:Object(r.a)(Object(r.a)(Object(r.a)({},a.typography.commonAvatar),a.typography.largeAvatar),{},{backgroundColor:a.palette.primary[800],color:"#fff",mt:1}),children:Object(u.jsx)(re.a,{fontSize:"inherit"})})}),Object(u.jsxs)(c.a,{item:!0,children:[Object(u.jsx)(J.a,{disableElevation:!0,variant:d?"contained":"text",size:"small",sx:{color:"inherit"},onClick:function(e){return O(0,!0)},children:"Month"}),Object(u.jsx)(J.a,{disableElevation:!0,variant:d?"text":"contained",size:"small",sx:{color:"inherit"},onClick:function(e){return O(0,!1)},children:"Year"})]})]})}),Object(u.jsx)(c.a,{item:!0,sx:{mb:.75},children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",children:[Object(u.jsx)(c.a,{item:!0,xs:6,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",children:[Object(u.jsx)(c.a,{item:!0,children:d?Object(u.jsx)(x.a,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:"$108"}):Object(u.jsx)(x.a,{sx:{fontSize:"2.125rem",fontWeight:500,mr:1,mt:1.75,mb:.75},children:"$961"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(b.a,{sx:Object(r.a)(Object(r.a)({},a.typography.smallAvatar),{},{cursor:"pointer",backgroundColor:a.palette.primary[200],color:a.palette.primary.dark}),children:Object(u.jsx)(je.a,{fontSize:"inherit",sx:{transform:"rotate3d(1, 1, 1, 45deg)"}})})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(x.a,{sx:{fontSize:"1rem",fontWeight:500,color:a.palette.primary[200]},children:"Total Order"})})]})}),Object(u.jsx)(c.a,{item:!0,xs:6,children:d?Object(u.jsx)(D.a,Object(r.a)({},ne)):Object(u.jsx)(D.a,Object(r.a)({},ie))})]})})]})})})})},be=a(264),de=a(265),he=a(267),xe=a(238),Oe=function(){return Object(u.jsx)(m.a,{sx:{p:2},children:Object(u.jsx)(be.a,{sx:{py:0},children:Object(u.jsxs)(de.a,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[Object(u.jsx)(he.a,{children:Object(u.jsx)(p.a,{variant:"rectangular",width:44,height:44})}),Object(u.jsx)(xe.a,{sx:{py:0},primary:Object(u.jsx)(p.a,{variant:"rectangular",height:20}),secondary:Object(u.jsx)(p.a,{variant:"text"})})]})})})},me=a(128),ge=a.n(me),pe=Object(j.a)(O.a)((function(e){var t=e.theme;return{backgroundColor:t.palette.primary.dark,color:t.palette.primary.light,overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(210.04deg, ".concat(t.palette.primary[200]," -50.94%, rgba(144, 202, 249, 0) 83.49%)"),borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(140.9deg, ".concat(t.palette.primary[200]," -14.02%, rgba(144, 202, 249, 0) 77.58%)"),borderRadius:"50%",top:-160,right:-130}}})),ue=function(e){var t=e.isLoading,a=Object(o.a)();return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)(Oe,{}):Object(u.jsx)(pe,{border:!1,content:!1,children:Object(u.jsx)(l.a,{sx:{p:2},children:Object(u.jsx)(be.a,{sx:{py:0},children:Object(u.jsxs)(de.a,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[Object(u.jsx)(he.a,{children:Object(u.jsx)(b.a,{variant:"rounded",sx:Object(r.a)(Object(r.a)(Object(r.a)({},a.typography.commonAvatar),a.typography.largeAvatar),{},{backgroundColor:a.palette.primary[800],color:"#fff"}),children:Object(u.jsx)(ge.a,{fontSize:"inherit"})})}),Object(u.jsx)(xe.a,{sx:{py:0,mt:.45,mb:.45},primary:Object(u.jsx)(x.a,{variant:"h4",sx:{color:"#fff"},children:"$203k"}),secondary:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:"primary.light",mt:.25},children:"Total Income"})})]})})})})})},fe=a(354),ye=a.n(fe),ve=Object(j.a)(O.a)((function(e){var t=e.theme;return{overflow:"hidden",position:"relative","&:after":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(210.04deg, ".concat(t.palette.warning.dark," -50.94%, rgba(144, 202, 249, 0) 83.49%)"),borderRadius:"50%",top:-30,right:-180},"&:before":{content:'""',position:"absolute",width:210,height:210,background:"linear-gradient(140.9deg, ".concat(t.palette.warning.dark," -14.02%, rgba(144, 202, 249, 0) 70.50%)"),borderRadius:"50%",top:-160,right:-130}}})),ke=function(e){var t=e.isLoading,a=Object(o.a)();return Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)(Oe,{}):Object(u.jsx)(ve,{border:!1,content:!1,children:Object(u.jsx)(l.a,{sx:{p:2},children:Object(u.jsx)(be.a,{sx:{py:0},children:Object(u.jsxs)(de.a,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[Object(u.jsx)(he.a,{children:Object(u.jsx)(b.a,{variant:"rounded",sx:Object(r.a)(Object(r.a)(Object(r.a)({},a.typography.commonAvatar),a.typography.largeAvatar),{},{backgroundColor:a.palette.warning.light,color:a.palette.warning.dark}),children:Object(u.jsx)(ye.a,{fontSize:"inherit"})})}),Object(u.jsx)(xe.a,{sx:{py:0,mt:.45,mb:.45},primary:Object(u.jsx)(x.a,{variant:"h4",children:"$203k"}),secondary:Object(u.jsx)(x.a,{variant:"subtitle2",sx:{color:a.palette.grey[500],mt:.5},children:"Total Income"})})]})})})})})},we=a(245),Ce=function(){return Object(u.jsx)(m.a,{children:Object(u.jsx)(g.a,{children:Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(u.jsxs)(c.a,{container:!0,spacing:1,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(p.a,{variant:"text"})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(p.a,{variant:"rectangular",height:20})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(p.a,{variant:"rectangular",height:50,width:80})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(p.a,{variant:"rectangular",height:530})})]})})})},ze={height:480,type:"bar",options:{chart:{id:"bar-chart",stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,columnWidth:"50%"}},xaxis:{type:"category",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},legend:{show:!0,fontSize:"14px",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:20,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},fill:{type:"solid"},dataLabels:{enabled:!1},grid:{show:!0}},series:[{name:"Investment",data:[35,125,35,35,35,80,35,20,35,45,15,75]},{name:"Loss",data:[35,15,15,35,65,40,80,25,15,85,25,75]},{name:"Profit",data:[35,145,35,35,20,105,100,10,65,45,30,10]},{name:"Maintenance",data:[0,0,75,0,0,115,0,0,0,0,150,0]}]},Ie=[{value:"today",label:"Today"},{value:"month",label:"This Month"},{value:"year",label:"This Year"}],Se=function(e){var t=e.isLoading,a=Object(i.useState)("today"),s=Object(n.a)(a,2),j=s[0],l=s[1],b=Object(o.a)(),d=Object(P.c)((function(e){return e.customization})).navType,m=b.palette.text.primary,g=b.palette.dark.light,p=b.palette.grey[200],f=b.palette.grey[500],y=b.palette.primary[200],v=b.palette.primary.dark,k=b.palette.secondary.main,w=b.palette.secondary.light;return Object(i.useEffect)((function(){var e=Object(r.a)(Object(r.a)({},ze.options),{},{colors:[y,v,k,w],xaxis:{labels:{style:{colors:[m,m,m,m,m,m,m,m,m,m,m,m]}}},yaxis:{labels:{style:{colors:[m]}}},grid:{borderColor:p},tooltip:{theme:"light"},legend:{labels:{colors:f}}});t||G.a.exec("bar-chart","updateOptions",e)}),[d,y,v,k,w,m,g,p,t,f]),Object(u.jsx)(u.Fragment,{children:t?Object(u.jsx)(Ce,{}):Object(u.jsx)(O.a,{children:Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsxs)(c.a,{container:!0,direction:"column",spacing:1,children:[Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"subtitle2",children:"Total Growth"})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(x.a,{variant:"h3",children:"$2,324.00"})})]})}),Object(u.jsx)(c.a,{item:!0,children:Object(u.jsx)(we.a,{id:"standard-select-currency",select:!0,value:j,onChange:function(e){return l(e.target.value)},children:Ie.map((function(e){return Object(u.jsx)(h.a,{value:e.value,children:e.label},e.value)}))})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(D.a,Object(r.a)({},ze))})]})})})};t.default=function(){var e=Object(i.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){r(!1)}),[]),Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,lg:4,md:6,sm:6,xs:12,children:Object(u.jsx)($,{isLoading:a})}),Object(u.jsx)(c.a,{item:!0,lg:4,md:6,sm:6,xs:12,children:Object(u.jsx)(le,{isLoading:a})}),Object(u.jsx)(c.a,{item:!0,lg:4,md:12,sm:12,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,sm:6,xs:12,md:6,lg:12,children:Object(u.jsx)(ue,{isLoading:a})}),Object(u.jsx)(c.a,{item:!0,sm:6,xs:12,md:6,lg:12,children:Object(u.jsx)(ke,{isLoading:a})})]})})]})}),Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsxs)(c.a,{container:!0,spacing:V.b,children:[Object(u.jsx)(c.a,{item:!0,xs:12,md:8,children:Object(u.jsx)(Se,{isLoading:a})}),Object(u.jsx)(c.a,{item:!0,xs:12,md:4,children:Object(u.jsx)(ae,{isLoading:a})})]})})]})}}}]);
//# sourceMappingURL=12.73d37e0e.chunk.js.map
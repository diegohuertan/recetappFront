"use strict";(self.webpackChunkrecetapp=self.webpackChunkrecetapp||[]).push([[87],{2087:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(2791),s=a(3044),o=a(4294),n=a(4708),i=a(8165),l=a(1087),c=a(1889),d=a(4554),u=a(403),m=a(890),x=a(9164),p=a(7107),h=a(4507),g=a(5294),Z=a(184);const f="http://localhost:3000",b=(0,p.Z)();const v=function(){const[e,t]=(0,r.useState)(!1),[a,p]=(0,r.useState)(!1),[v,j]=(0,r.useState)(""),[C,W]=(0,r.useState)("");return(0,Z.jsx)(h.Z,{theme:b,children:(0,Z.jsxs)(x.Z,{component:"main",maxWidth:"xs",children:[(0,Z.jsx)(n.ZP,{}),(0,Z.jsxs)(d.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,Z.jsx)(u.Z,{})}),(0,Z.jsx)(m.Z,{component:"h1",variant:"h5",children:"Registro"}),(0,Z.jsxs)(d.Z,{component:"form",noValidate:!0,onSubmit:async e=>{e.preventDefault();const a=e.currentTarget.email.value,r={correo:a},s={correo:a,"contrase\xf1a":e.currentTarget.password.value,perfil:"usuario"};console.log(s),console.log(r);try{const e=await g.Z.post("".concat(f,"/api/validarCorreo"),r);if(console.log(e.data.message),"Correo previamente registrado"===e.data.message)t(!0);else{t(!1);try{201===(await g.Z.post("".concat(f,"/api/crearUsuario"),s)).status&&(console.log("usuario creado exitosamente"),p(!0),j(""),W(""))}catch(o){console.error("Error al realizar la solicitud al servidor",o)}}}catch(o){console.error("Error al realizar la solicitud al servidor",o)}},sx:{mt:3},children:[(0,Z.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(c.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,id:"email",label:"Correo",name:"email",autoComplete:"email",value:v,onChange:e=>j(e.target.value)})}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,children:(0,Z.jsx)(i.Z,{required:!0,fullWidth:!0,name:"password",label:"Contrase\xf1a",type:"password",id:"password",autoComplete:"new-password",value:C,onChange:e=>W(e.target.value)})})]}),(0,Z.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Registrarse"}),e&&(0,Z.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Z.jsx)(m.Z,{variant:"body2",color:"error",children:"Correo ya est\xe1 en uso, pruebe otro"})}),a&&(0,Z.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Z.jsx)(m.Z,{variant:"body2",color:"green",children:"Usuario registrado exitosamente"})}),(0,Z.jsx)(c.ZP,{container:!0,justifyContent:"flex-end",children:(0,Z.jsx)(c.ZP,{item:!0,children:(0,Z.jsx)(l.rU,{to:"/login",children:(0,Z.jsx)(o.Z,{children:"Ya est\xe1s registrado? Ingresa aqu\xed"})})})})]})]})]})})}},9164:(e,t,a)=>{a.d(t,{Z:()=>C});var r=a(3366),s=a(7462),o=a(2791),n=a(3733),i=a(1122),l=a(1217),c=a(4419),d=a(7078),u=a(3457),m=a(5080),x=a(184);const p=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.Z)(),g=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t["maxWidth".concat((0,i.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),Z=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:h});var f=a(4036),b=a(6934),v=a(1402);const j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=g,useThemeProps:a=Z,componentName:d="MuiContainer"}=e,u=t((e=>{let{theme:t,ownerState:a}=e;return(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:a}=e;return a.fixed&&Object.keys(t.breakpoints.values).reduce(((e,a)=>{const r=a,s=t.breakpoints.values[r];return 0!==s&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(s).concat(t.breakpoints.unit)}),e}),{})}),(e=>{let{theme:t,ownerState:a}=e;return(0,s.Z)({},"xs"===a.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},a.maxWidth&&"xs"!==a.maxWidth&&{[t.breakpoints.up(a.maxWidth)]:{maxWidth:"".concat(t.breakpoints.values[a.maxWidth]).concat(t.breakpoints.unit)}})})),m=o.forwardRef((function(e,t){const o=a(e),{className:m,component:h="div",disableGutters:g=!1,fixed:Z=!1,maxWidth:f="lg"}=o,b=(0,r.Z)(o,p),v=(0,s.Z)({},o,{component:h,disableGutters:g,fixed:Z,maxWidth:f}),j=((e,t)=>{const{classes:a,fixed:r,disableGutters:s,maxWidth:o}=e,n={root:["root",o&&"maxWidth".concat((0,i.Z)(String(o))),r&&"fixed",s&&"disableGutters"]};return(0,c.Z)(n,(e=>(0,l.Z)(t,e)),a)})(v,d);return(0,x.jsx)(u,(0,s.Z)({as:h,ownerState:v,className:(0,n.Z)(j.root,m),ref:t},b))}));return m}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t["maxWidth".concat((0,f.Z)(String(a.maxWidth)))],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,v.Z)({props:e,name:"MuiContainer"})}),C=j}}]);
//# sourceMappingURL=87.a75028c9.chunk.js.map
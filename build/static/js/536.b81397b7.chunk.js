"use strict";(self.webpackChunkrecetapp=self.webpackChunkrecetapp||[]).push([[536],{6018:(e,o,t)=>{t.d(o,{Z:()=>a});t(2791);var n=t(4270),r=t(184);const a=e=>{let{title:o,description:t,children:a}=e;return(0,r.jsxs)("div",{className:"mainApp",children:[(0,r.jsxs)(n.q,{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{name:"description",content:t})]}),a]})}},8536:(e,o,t)=>{t.r(o),t.d(o,{default:()=>pe});var n=t(2791),r=t(5294),a=t(7689),i=t(6018),l=t(3044),c=t(4294),s=t(4708),d=t(8165),u=t(3366),m=t(7462),p=t(3733),h=t(4419),b=t(2930),v=t(6314),Z=t(890),f=t(4036),x=t(6934),g=t(1402),k=t(5878),y=t(1217);function P(e){return(0,y.Z)("MuiFormControlLabel",e)}const j=(0,k.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var w=t(6147),S=t(184);const C=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],R=(0,x.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{["& .".concat(j.label)]:o.label},o.root,o["labelPlacement".concat((0,f.Z)(t.labelPlacement))]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,m.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(j.disabled)]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(j.label)]:{["&.".concat(j.disabled)]:{color:(o.vars||o).palette.text.disabled}}})})),F=(0,x.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})((e=>{let{theme:o}=e;return{["&.".concat(j.error)]:{color:(o.vars||o).palette.error.main}}})),z=n.forwardRef((function(e,o){var t,r;const a=(0,g.Z)({props:e,name:"MuiFormControlLabel"}),{className:i,componentsProps:l={},control:c,disabled:s,disableTypography:d,label:x,labelPlacement:k="end",required:y,slotProps:j={}}=a,z=(0,u.Z)(a,C),N=(0,b.Z)(),M=null!=(t=null!=s?s:c.props.disabled)?t:null==N?void 0:N.disabled,B=null!=y?y:c.props.required,I={disabled:M,required:B};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof c.props[e]&&"undefined"!==typeof a[e]&&(I[e]=a[e])}));const L=(0,w.Z)({props:a,muiFormControl:N,states:["error"]}),q=(0,m.Z)({},a,{disabled:M,labelPlacement:k,required:B,error:L.error}),D=(e=>{const{classes:o,disabled:t,labelPlacement:n,error:r,required:a}=e,i={root:["root",t&&"disabled","labelPlacement".concat((0,f.Z)(n)),r&&"error",a&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",r&&"error"]};return(0,h.Z)(i,P,o)})(q),A=null!=(r=j.typography)?r:l.typography;let O=x;return null==O||O.type===Z.Z||d||(O=(0,S.jsx)(Z.Z,(0,m.Z)({component:"span"},A,{className:(0,p.Z)(D.label,null==A?void 0:A.className),children:O}))),(0,S.jsxs)(R,(0,m.Z)({className:(0,p.Z)(D.root,i),ownerState:q,ref:o},z,{children:[n.cloneElement(c,I),B?(0,S.jsxs)(v.Z,{direction:"row",alignItems:"center",children:[O,(0,S.jsxs)(F,{ownerState:q,"aria-hidden":!0,className:D.asterisk,children:["\u2009","*"]})]}):O]}))}));var N=t(2065),M=t(4556),B=t(533);function I(e){return(0,y.Z)("PrivateSwitchBase",e)}(0,k.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const L=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],q=(0,x.ZP)(B.Z)((e=>{let{ownerState:o}=e;return(0,m.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),D=(0,x.ZP)("input",{shouldForwardProp:x.FO})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),A=n.forwardRef((function(e,o){const{autoFocus:t,checked:n,checkedIcon:r,className:a,defaultChecked:i,disabled:l,disableFocusRipple:c=!1,edge:s=!1,icon:d,id:v,inputProps:Z,inputRef:x,name:g,onBlur:k,onChange:y,onFocus:P,readOnly:j,required:w=!1,tabIndex:C,type:R,value:F}=e,z=(0,u.Z)(e,L),[N,B]=(0,M.Z)({controlled:n,default:Boolean(i),name:"SwitchBase",state:"checked"}),A=(0,b.Z)();let O=l;A&&"undefined"===typeof O&&(O=A.disabled);const T="checkbox"===R||"radio"===R,V=(0,m.Z)({},e,{checked:N,disabled:O,disableFocusRipple:c,edge:s}),E=(e=>{const{classes:o,checked:t,disabled:n,edge:r}=e,a={root:["root",t&&"checked",n&&"disabled",r&&"edge".concat((0,f.Z)(r))],input:["input"]};return(0,h.Z)(a,I,o)})(V);return(0,S.jsxs)(q,(0,m.Z)({component:"span",className:(0,p.Z)(E.root,a),centerRipple:!0,focusRipple:!c,disabled:O,tabIndex:null,role:void 0,onFocus:e=>{P&&P(e),A&&A.onFocus&&A.onFocus(e)},onBlur:e=>{k&&k(e),A&&A.onBlur&&A.onBlur(e)},ownerState:V,ref:o},z,{children:[(0,S.jsx)(D,(0,m.Z)({autoFocus:t,checked:n,defaultChecked:i,className:E.input,disabled:O,id:T?v:void 0,name:g,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const o=e.target.checked;B(o),y&&y(e,o)},readOnly:j,ref:x,required:w,ownerState:V,tabIndex:C,type:R},"checkbox"===R&&void 0===F?{}:{value:F},Z)),N?r:d]}))}));var O=t(9201);const T=(0,O.Z)((0,S.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),V=(0,O.Z)((0,S.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=(0,O.Z)((0,S.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function H(e){return(0,y.Z)("MuiCheckbox",e)}const W=(0,k.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),G=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],$=(0,x.ZP)(A,{shouldForwardProp:e=>(0,x.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o["size".concat((0,f.Z)(t.size))],"default"!==t.color&&o["color".concat((0,f.Z)(t.color))]]}})((e=>{let{theme:o,ownerState:t}=e;return(0,m.Z)({color:(o.vars||o).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat("default"===t.color?o.vars.palette.action.activeChannel:o.vars.palette[t.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,N.Fq)("default"===t.color?o.palette.action.active:o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{["&.".concat(W.checked,", &.").concat(W.indeterminate)]:{color:(o.vars||o).palette[t.color].main},["&.".concat(W.disabled)]:{color:(o.vars||o).palette.action.disabled}})})),U=(0,S.jsx)(V,{}),J=(0,S.jsx)(T,{}),K=(0,S.jsx)(E,{}),Q=n.forwardRef((function(e,o){var t,r;const a=(0,g.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:i=U,color:l="primary",icon:c=J,indeterminate:s=!1,indeterminateIcon:d=K,inputProps:b,size:v="medium",className:Z}=a,x=(0,u.Z)(a,G),k=s?d:c,y=s?d:i,P=(0,m.Z)({},a,{color:l,indeterminate:s,size:v}),j=(e=>{const{classes:o,indeterminate:t,color:n,size:r}=e,a={root:["root",t&&"indeterminate","color".concat((0,f.Z)(n)),"size".concat((0,f.Z)(r))]},i=(0,h.Z)(a,H,o);return(0,m.Z)({},o,i)})(P);return(0,S.jsx)($,(0,m.Z)({type:"checkbox",inputProps:(0,m.Z)({"data-indeterminate":s},b),icon:n.cloneElement(k,{fontSize:null!=(t=k.props.fontSize)?t:v}),checkedIcon:n.cloneElement(y,{fontSize:null!=(r=y.props.fontSize)?r:v}),ownerState:P,ref:o,className:(0,p.Z)(j.root,Z)},x,{classes:j}))}));var X=t(3031),Y=t(2071);function _(e){return(0,y.Z)("MuiLink",e)}const ee=(0,k.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var oe=t(8529);const te={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ne=e=>{let{theme:o,ownerState:t}=e;const n=(e=>te[e]||e)(t.color),r=(0,oe.DW)(o,"palette.".concat(n),!1)||t.color,a=(0,oe.DW)(o,"palette.".concat(n,"Channel"));return"vars"in o&&a?"rgba(".concat(a," / 0.4)"):(0,N.Fq)(r,.4)},re=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],ae=(0,x.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o["underline".concat((0,f.Z)(t.underline))],"button"===t.component&&o.button]}})((e=>{let{theme:o,ownerState:t}=e;return(0,m.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,m.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:ne({theme:o,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(ee.focusVisible)]:{outline:"auto"}})})),ie=n.forwardRef((function(e,o){const t=(0,g.Z)({props:e,name:"MuiLink"}),{className:r,color:a="primary",component:i="a",onBlur:l,onFocus:c,TypographyClasses:s,underline:d="always",variant:b="inherit",sx:v}=t,Z=(0,u.Z)(t,re),{isFocusVisibleRef:x,onBlur:k,onFocus:y,ref:P}=(0,X.Z)(),[j,w]=n.useState(!1),C=(0,Y.Z)(o,P),R=(0,m.Z)({},t,{color:a,component:i,focusVisible:j,underline:d,variant:b}),F=(e=>{const{classes:o,component:t,focusVisible:n,underline:r}=e,a={root:["root","underline".concat((0,f.Z)(r)),"button"===t&&"button",n&&"focusVisible"]};return(0,h.Z)(a,_,o)})(R);return(0,S.jsx)(ae,(0,m.Z)({color:a,className:(0,p.Z)(F.root,r),classes:s,component:i,onBlur:e=>{k(e),!1===x.current&&w(!1),l&&l(e)},onFocus:e=>{y(e),!0===x.current&&w(!0),c&&c(e)},ref:C,ownerState:R,variant:b,sx:[...Object.keys(te).includes(a)?[]:[{color:a}],...Array.isArray(v)?v:[v]]},Z))}));var le=t(5527),ce=t(4554),se=t(1889),de=t(403),ue=t(7107),me=t(4507);const pe=function(){const e=(0,a.s0)(),[o,t]=(0,n.useState)(!1),u=(0,ue.Z)();return(0,S.jsx)(i.Z,{title:"Login",description:"P\xe1gina de inicio de sesi\xf3n",children:(0,S.jsx)("div",{className:"d-flex justify-content-center align-items-center vh-100",children:(0,S.jsx)(me.Z,{theme:u,children:(0,S.jsxs)(se.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,S.jsx)(s.ZP,{}),(0,S.jsx)(se.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random?wallpapers)",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}}),(0,S.jsx)(se.ZP,{item:!0,xs:12,sm:8,md:5,component:le.Z,elevation:6,square:!0,children:(0,S.jsxs)(ce.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,S.jsx)(l.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,S.jsx)(de.Z,{})}),(0,S.jsx)(Z.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,S.jsxs)(ce.Z,{component:"form",noValidate:!0,onSubmit:async o=>{o.preventDefault();const n={correo:o.target.elements.email.value,"contrase\xf1a":o.target.elements.password.value};try{const o=await r.Z.post("".concat("http://localhost:3000","/api/validarsesion"),n);o.data.success?(t(!0),console.log("Inicio de sesi\xf3n exitoso"),sessionStorage.setItem("token",o.data.token),e("/")):console.log("Credenciales de inicio de sesi\xf3n no v\xe1lidas")}catch(a){console.error("Error al realizar la solicitud:",a)}},sx:{mt:1},children:[(0,S.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,S.jsx)(d.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,S.jsx)(z,{control:(0,S.jsx)(Q,{value:"remember",color:"primary"}),label:"Remember me"}),(0,S.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,S.jsxs)(se.ZP,{container:!0,children:[(0,S.jsx)(se.ZP,{item:!0,xs:!0,children:(0,S.jsx)(ie,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,S.jsx)(se.ZP,{item:!0,children:(0,S.jsx)(ie,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})})]})})})})}},6314:(e,o,t)=>{t.d(o,{Z:()=>S});var n=t(3366),r=t(7462),a=t(2791),i=t(3733),l=t(2466),c=t(4419),s=t(1217),d=t(3457),u=t(7078),m=t(8519),p=t(5080),h=t(1184),b=t(5682),v=t(184);const Z=["component","direction","spacing","divider","children","className","useFlexGap"],f=(0,p.Z)(),x=(0,d.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function g(e){return(0,u.Z)({props:e,name:"MuiStack",defaultTheme:f})}function k(e,o){const t=a.Children.toArray(e).filter(Boolean);return t.reduce(((e,n,r)=>(e.push(n),r<t.length-1&&e.push(a.cloneElement(o,{key:"separator-".concat(r)})),e)),[])}const y=e=>{let{ownerState:o,theme:t}=e,n=(0,r.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:t},(0,h.P$)({values:o.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(o.spacing){const e=(0,b.hB)(t),r=Object.keys(t.breakpoints.values).reduce(((e,t)=>(("object"===typeof o.spacing&&null!=o.spacing[t]||"object"===typeof o.direction&&null!=o.direction[t])&&(e[t]=!0),e)),{}),a=(0,h.P$)({values:o.direction,base:r}),i=(0,h.P$)({values:o.spacing,base:r});"object"===typeof a&&Object.keys(a).forEach(((e,o,t)=>{if(!a[e]){const n=o>0?a[t[o-1]]:"column";a[e]=n}}));const c=(t,n)=>{return o.useFlexGap?{gap:(0,b.NA)(e,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((r=n?a[n]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]))]:(0,b.NA)(e,t)}};var r};n=(0,l.Z)(n,(0,h.k9)({theme:t},i,c))}return n=(0,h.dt)(t.breakpoints,n),n};var P=t(6934),j=t(1402);const w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:o=x,useThemeProps:t=g,componentName:l="MuiStack"}=e,d=o(y),u=a.forwardRef((function(e,o){const a=t(e),u=(0,m.Z)(a),{component:p="div",direction:h="column",spacing:b=0,divider:f,children:x,className:g,useFlexGap:y=!1}=u,P=(0,n.Z)(u,Z),j={direction:h,spacing:b,useFlexGap:y},w=(0,c.Z)({root:["root"]},(e=>(0,s.Z)(l,e)),{});return(0,v.jsx)(d,(0,r.Z)({as:p,ownerState:j,ref:o,className:(0,i.Z)(w.root,g)},P,{children:f?k(x,f):x}))}));return u}({createStyledComponent:(0,P.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>(0,j.Z)({props:e,name:"MuiStack"})}),S=w}}]);
//# sourceMappingURL=536.b81397b7.chunk.js.map
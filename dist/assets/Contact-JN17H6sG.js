import{r as m,j as o}from"./index-B5Mvk6i_.js";const _={_origin:"https://api.emailjs.com"},O=(t,e="https://api.emailjs.com")=>{_._userID=t,_._origin=e},F=(t,e,a)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class T{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const z=(t,e,a={})=>new Promise((r,n)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:i})=>{const c=new T(i);c.status===200||c.text==="OK"?r(c):n(c)}),s.addEventListener("error",({target:i})=>{n(new T(i))}),s.open("POST",_._origin+t,!0),Object.keys(a).forEach(i=>{s.setRequestHeader(i,a[i])}),s.send(e)}),I=(t,e,a,r)=>{const n=r||_._userID;return F(n,t,e),z("/api/v1.0/email/send",JSON.stringify({lib_version:"3.12.1",user_id:n,service_id:t,template_id:e,template_params:a}),{"Content-type":"application/json"})},A=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},P=(t,e,a,r)=>{const n=r||_._userID,s=A(a);F(n,t,e);const i=new FormData(s);return i.append("lib_version","3.12.1"),i.append("service_id",t),i.append("template_id",e),i.append("user_id",n),z("/api/v1.0/email/send-form",i)},H={init:O,send:I,sendForm:P};let V={data:""},W=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||V,Z=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,J=/\/\*[^]*?\*\/|  +/g,M=/\n+/g,g=(t,e)=>{let a="",r="",n="";for(let s in t){let i=t[s];s[0]=="@"?s[1]=="i"?a=s+" "+i+";":r+=s[1]=="f"?g(i,s):s+"{"+g(i,s[1]=="k"?"":e)+"}":typeof i=="object"?r+=g(i,e?e.replace(/([^,])+/g,c=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):s):i!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=g.p?g.p(s,i):s+":"+i+";")}return a+(e&&n?e+"{"+n+"}":n)+r},f={},q=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+q(t[a]);return e}return t},R=(t,e,a,r,n)=>{let s=q(t),i=f[s]||(f[s]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(s));if(!f[i]){let l=s!==t?t:(d=>{let p,b,y=[{}];for(;p=Z.exec(d.replace(J,""));)p[4]?y.shift():p[3]?(b=p[3].replace(M," ").trim(),y.unshift(y[0][b]=y[0][b]||{})):y[0][p[1]]=p[2].replace(M," ").trim();return y[0]})(t);f[i]=g(n?{["@keyframes "+i]:l}:l,a?"":"."+i)}let c=a&&f.g?f.g:null;return a&&(f.g=f[i]),((l,d,p,b)=>{b?d.data=d.data.replace(b,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(f[i],e,r,c),i},B=(t,e,a)=>t.reduce((r,n,s)=>{let i=e[s];if(i&&i.call){let c=i(a),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;i=l?"."+l:c&&typeof c=="object"?c.props?"":g(c,""):c===!1?"":c}return r+n+(i??"")},"");function w(t){let e=this||{},a=t.call?t(e.p):t;return R(a.unshift?a.raw?B(a,[].slice.call(arguments,1),e.p):a.reduce((r,n)=>Object.assign(r,n&&n.call?n(e.p):n),{}):a,W(e.target),e.g,e.o,e.k)}let D,E,$;w.bind({g:1});let h=w.bind({k:1});function G(t,e,a,r){g.p=e,D=t,E=a,$=r}function x(t,e){let a=this||{};return function(){let r=arguments;function n(s,i){let c=Object.assign({},s),l=c.className||n.className;a.p=Object.assign({theme:E&&E()},c),a.o=/ *go\d+/.test(l),c.className=w.apply(a,r)+(l?" "+l:"");let d=t;return t[0]&&(d=c.as||t,delete c.as),$&&d[0]&&$(c),D(d,c)}return n}}var X=t=>typeof t=="function",k=(t,e)=>X(t)?t(e):t,K=(()=>{let t=0;return()=>(++t).toString()})(),Q=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),U=20,j=new Map,Y=1e3,S=t=>{if(j.has(t))return;let e=setTimeout(()=>{j.delete(t),N({type:4,toastId:t})},Y);j.set(t,e)},tt=t=>{let e=j.get(t);e&&clearTimeout(e)},L=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,U)};case 1:return e.toast.id&&tt(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:a}=e;return t.toasts.find(s=>s.id===a.id)?L(t,{type:1,toast:a}):L(t,{type:0,toast:a});case 3:let{toastId:r}=e;return r?S(r):t.toasts.forEach(s=>{S(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let n=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+n}))}}},et=[],C={toasts:[],pausedAt:void 0},N=t=>{C=L(C,t),et.forEach(e=>{e(C)})},at=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||K()}),v=t=>(e,a)=>{let r=at(e,t,a);return N({type:2,toast:r}),r.id},u=(t,e)=>v("blank")(t,e);u.error=v("error");u.success=v("success");u.loading=v("loading");u.custom=v("custom");u.dismiss=t=>{N({type:3,toastId:t})};u.remove=t=>N({type:4,toastId:t});u.promise=(t,e,a)=>{let r=u.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(n=>(u.success(k(e.success,n),{id:r,...a,...a==null?void 0:a.success}),n)).catch(n=>{u.error(k(e.error,n),{id:r,...a,...a==null?void 0:a.error})}),t};var st=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,rt=h`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ot=h`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,it=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${st} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${rt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ot} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,nt=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ct=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${nt} 1s linear infinite;
`,lt=h`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,dt=h`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,mt=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${dt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,pt=x("div")`
  position: absolute;
`,ut=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ft=h`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ht=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ft} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,gt=({toast:t})=>{let{icon:e,type:a,iconTheme:r}=t;return e!==void 0?typeof e=="string"?m.createElement(ht,null,e):e:a==="blank"?null:m.createElement(ut,null,m.createElement(ct,{...r}),a!=="loading"&&m.createElement(pt,null,a==="error"?m.createElement(it,{...r}):m.createElement(mt,{...r})))},xt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,bt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,yt="0%{opacity:0;} 100%{opacity:1;}",_t="0%{opacity:1;} 100%{opacity:0;}",vt=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,jt=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,wt=(t,e)=>{let a=t.includes("top")?1:-1,[r,n]=Q()?[yt,_t]:[xt(a),bt(a)];return{animation:e?`${h(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${h(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:t,position:e,style:a,children:r})=>{let n=t.height?wt(t.position||e||"top-center",t.visible):{opacity:0},s=m.createElement(gt,{toast:t}),i=m.createElement(jt,{...t.ariaProps},k(t.message,t));return m.createElement(vt,{className:t.className,style:{...n,...a,...t.style}},typeof r=="function"?r({icon:s,message:i}):m.createElement(m.Fragment,null,s,i))});G(m.createElement);w`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;const Ct=()=>{const t=m.useRef(),e=a=>{a.preventDefault();const r=new FormData(void 0);H.sendForm("service_0ono1ks","template_1rr3qte",t.current,"Shlb63OBTO14n9iqh",{name:r.get("name"),email:r.get("email"),message:r.get("message")}),u.success("Message send Successfully!"),a.target.reset()};return o.jsx(o.Fragment,{children:o.jsxs("section",{className:"contact section",id:"contact",children:[o.jsx("h2",{className:"section_title","data-aos":"zoom-in",children:"Get in touch"}),o.jsx("span",{className:"section_subtitle","data-aos":"zoom-in",children:"Contact Me"}),o.jsxs("div",{className:"contact_container container ",children:[o.jsxs("div",{className:"contact_content",children:[o.jsx("h3",{className:"contact_title","data-aos":"fade-right","data-aos-delay":"0",children:"Talk to me"}),o.jsxs("div",{className:"contact_info",children:[o.jsxs("div",{className:"contact_card","data-aos":"fade-up","data-aos-delay":"300",children:[o.jsx("i",{className:"uil uil-envelope-upload contact_card_icon"}),o.jsx("h3",{className:"contact_card_title",children:"Email"}),o.jsx("span",{className:"contact_card_data",children:"zainali5002@gmail.com"}),o.jsxs("a",{href:"mailto:zainali5002@gmail.com",rel:"noreferrer",className:"contact_button",target:"_blank",children:["Write me",o.jsx("i",{className:"uil uil-arrow-right contact_button_icon"})]})]}),o.jsxs("div",{className:"contact_card","data-aos":"fade-up","data-aos-delay":"500",children:[o.jsx("i",{className:"uil uil-whatsapp contact_card_icon"}),o.jsx("h3",{className:"contact_card_title",children:"Whatsapp"}),o.jsx("span",{className:"contact_card_data",children:"+92 319 4634198"}),o.jsxs("a",{href:"tel:+923194634198",rel:"noreferrer",className:"contact_button",children:["Call me",o.jsx("i",{className:"uil uil-arrow-right contact_button_icon"})]})]}),o.jsxs("div",{className:"contact_card","data-aos":"fade-up","data-aos-delay":"700",children:[o.jsx("i",{className:"uil uil-linkedin contact_card_icon"}),o.jsx("h3",{className:"contact_card_title",children:"Linkedin"}),o.jsx("span",{className:"contact_card_data",children:"dev"}),o.jsxs("a",{href:"https://www.linkedin.com/in/rjzainalii/",rel:"noreferrer",className:"contact_button",target:"_blank",children:["View Me",o.jsx("i",{className:"uil uil-arrow-right contact_button_icon"})]})]})]})]}),o.jsxs("div",{className:"contact_content",children:[o.jsx("h3",{className:"contact_title","data-aos":"fade-left","data-aos-delay":"0",children:"Write me your project"}),o.jsxs("form",{ref:t,onSubmit:e,className:"contact_form",children:[o.jsxs("div",{className:"contact_form_div","data-aos":"fade-up","data-aos-delay":"300",children:[o.jsx("label",{className:"contact_form_tag",children:"Name"}),o.jsx("input",{type:"text",name:"name",className:"contact_form_input",placeholder:"Insert your name",required:!0})]}),o.jsxs("div",{className:"contact_form_div","data-aos":"fade-up","data-aos-delay":"500",children:[o.jsx("label",{className:"contact_form_tag",children:"Email"}),o.jsx("input",{type:"email",name:"email",className:"contact_form_input",placeholder:"Insert your email",required:!0})]}),o.jsxs("div",{className:"contact_form_div contact_project_area","data-aos":"fade-up","data-aos-delay":"700",children:[o.jsx("label",{className:"contact_form_tag",children:"Project"}),o.jsx("textarea",{name:"message",cols:"30",rows:"10",className:"contact_form_input",placeholder:"Write your project",required:!0})]}),o.jsxs("button",{className:"button button_flex justify_center","data-aos":"flip-right","data-aos-delay":"800",children:["Send Message",o.jsxs("svg",{className:"button_icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z",fill:"var(--container-color)"}),o.jsx("path",{d:"M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z",fill:"var(--container-color)"})]})]})]})]})]})]})})};export{Ct as default};

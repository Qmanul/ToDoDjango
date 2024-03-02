"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[487],{487:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(540);const l=e=>{let t=[[],[]];return e.forEach((e=>e.completed?t[0].push(e):t[1].push(e))),t};var a=n(605),o=n(535),c=n(376),i=n(615),s=n(230);function u({tasks:e,onTaskCompletionUpdate:t,onTaskDelete:n}){return r.createElement(a.A,{direction:"horizontal",gap:3,className:"align-items-baseline"},l(e).map(((e,l)=>r.createElement(o.A,{key:l,className:"w-50"},e.length>0?r.createElement(r.Fragment,null,e.map((e=>r.createElement(o.A.Item,{key:e.id},r.createElement(a.A,{direction:"horizontal"},r.createElement(c.A.Label,{className:"me-auto text-break mb-0"},e.content),r.createElement(c.A.Check,{type:"checkbox",checked:e.completed,onChange:n=>t(n,e.id)}),r.createElement(i.A,{variant:"link",size:"auto",onClick:t=>n(t,e.id)},r.createElement(s.A,null))))))):r.createElement(o.A.Item,{sm:3},r.createElement(a.A,{direction:"horizontal"},r.createElement(i.A,null,r.createElement(s.A,null))))))))}},230:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(540),l=n(556),a=n.n(l),o=["color","size","title"];function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var i=(0,r.forwardRef)((function(e,t){var n=e.color,l=e.size,a=e.title,i=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,o);return r.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:n},i),a?r.createElement("title",null,a):null,r.createElement("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"}))}));i.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),title:a().string},i.defaultProps={color:"currentColor",size:"1em",title:null};const s=i},535:(e,t,n)=>{n.d(t,{A:()=>z});var r=n(942),l=n.n(r),a=n(540),o=(n(771),n(266)),c=Function.prototype.bind.call(Function.prototype.call,[].slice),i=n(804);const s=a.createContext(null);s.displayName="NavContext";const u=s,d=(e,t=null)=>null!=e?String(e):t||null,f=a.createContext(null),v=a.createContext(null),m="data-rr-ui-";function p(e){return`${m}${e}`}var y=n(895),b=n(753),h=n(848);const g=["as","active","eventKey"];function k({key:e,onClick:t,active:n,id:r,role:l,disabled:o}){const c=(0,a.useContext)(f),i=(0,a.useContext)(u),s=(0,a.useContext)(v);let d=n;const m={role:l};if(i){l||"tablist"!==i.role||(m.role="tab");const t=i.getControllerId(null!=e?e:null),a=i.getControlledId(null!=e?e:null);m[p("event-key")]=e,m.id=t||r,d=null==n&&null!=e?i.activeKey===e:n,!d&&(null!=s&&s.unmountOnExit||null!=s&&s.mountOnEnter)||(m["aria-controls"]=a)}return"tab"===m.role&&(m["aria-selected"]=d,d||(m.tabIndex=-1),o&&(m.tabIndex=-1,m["aria-disabled"]=!0)),m.onClick=(0,y.A)((n=>{o||(null==t||t(n),null!=e&&c&&!n.isPropagationStopped()&&c(e,n))})),[m,{isActive:d}]}const x=a.forwardRef(((e,t)=>{let{as:n=b.Ay,active:r,eventKey:l}=e,a=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,g);const[o,c]=k(Object.assign({key:d(l,a.href),active:r},a));return o[p("active")]=c.isActive,(0,h.jsx)(n,Object.assign({},a,o,{ref:t}))}));x.displayName="NavItem";const w=x,A=["as","onSelect","activeKey","role","onKeyDown"],C=()=>{},E=p("event-key"),O=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:r,activeKey:l,role:o,onKeyDown:s}=e,m=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,A);const p=function(){const[,e]=(0,a.useReducer)((e=>!e),!1);return e}(),y=(0,a.useRef)(!1),b=(0,a.useContext)(f),g=(0,a.useContext)(v);let k,x;g&&(o=o||"tablist",l=g.activeKey,k=g.getControlledId,x=g.getControllerId);const w=(0,a.useRef)(null),O=e=>{const t=w.current;if(!t)return null;const n=(r=`[${E}]:not([aria-disabled=true])`,c(t.querySelectorAll(r)));var r;const l=t.querySelector("[aria-selected=true]");if(!l||l!==document.activeElement)return null;const a=n.indexOf(l);if(-1===a)return null;let o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},j=(e,t)=>{null!=e&&(null==r||r(e,t),null==b||b(e,t))};(0,a.useEffect)((()=>{if(w.current&&y.current){const e=w.current.querySelector(`[${E}][aria-selected=true]`);null==e||e.focus()}y.current=!1}));const $=(0,i.A)(t,w);return(0,h.jsx)(f.Provider,{value:j,children:(0,h.jsx)(u.Provider,{value:{role:o,activeKey:d(l),getControlledId:k||C,getControllerId:x||C},children:(0,h.jsx)(n,Object.assign({},m,{onKeyDown:e=>{if(null==s||s(e),!g)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=O(-1);break;case"ArrowRight":case"ArrowDown":t=O(1);break;default:return}t&&(e.preventDefault(),j(t.dataset[("EventKey","rrUiEventKey")]||null,e),y.current=!0,p())},ref:$,role:o}))})})}));O.displayName="Nav";const j=Object.assign(O,{Item:w});var $=n(519);const N=a.forwardRef((({bsPrefix:e,active:t,disabled:n,eventKey:r,className:a,variant:o,action:c,as:i,...s},u)=>{e=(0,$.oU)(e,"list-group-item");const[f,v]=k({key:d(r,s.href),active:t,...s}),m=(0,y.A)((e=>{if(n)return e.preventDefault(),void e.stopPropagation();f.onClick(e)}));n&&void 0===s.tabIndex&&(s.tabIndex=-1,s["aria-disabled"]=!0);const p=i||(c?s.href?"a":"button":"div");return(0,h.jsx)(p,{ref:u,...s,...f,onClick:m,className:l()(a,e,v.isActive&&"active",n&&"disabled",o&&`${e}-${o}`,c&&`${e}-action`)})}));N.displayName="ListGroupItem";const I=N,K=a.forwardRef(((e,t)=>{const{className:n,bsPrefix:r,variant:a,horizontal:c,numbered:i,as:s="div",...u}=(0,o.Zw)(e,{activeKey:"onSelect"}),d=(0,$.oU)(r,"list-group");let f;return c&&(f=!0===c?"horizontal":`horizontal-${c}`),(0,h.jsx)(j,{ref:t,...u,as:s,className:l()(n,d,a&&`${d}-${a}`,f&&`${d}-${f}`,i&&`${d}-numbered`)})}));K.displayName="ListGroup";const z=Object.assign(K,{Item:I})},605:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(942),l=n.n(r),a=n(540),o=n(519);function c(e,t=o.Jy,n=o.ff){const r=[];return Object.entries(e).forEach((([e,l])=>{null!=l&&("object"==typeof l?t.forEach((t=>{const a=l[t];if(null!=a){const l=t!==n?`-${t}`:"";r.push(`${e}${l}-${a}`)}})):r.push(`${e}-${l}`))})),r}var i=n(848);const s=a.forwardRef((({as:e="div",bsPrefix:t,className:n,direction:r,gap:a,...s},u)=>{t=(0,o.oU)(t,"horizontal"===r?"hstack":"vstack");const d=(0,o.gy)(),f=(0,o.Jm)();return(0,i.jsx)(e,{...s,ref:u,className:l()(n,t,...c({gap:a},d,f))})}));s.displayName="Stack";const u=s}}]);
//# sourceMappingURL=487.main.js.map
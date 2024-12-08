import{R as N,a6 as A,aH as m,aq as g,aC as M,y as E,aI as O,U as V,v as T,g as l,aJ as x,aK as W,x as _,k as f,h as j,j as q}from"./runtime.FnWCUTe1.js";function K(e,t){if(t){const r=document.body;e.autofocus=!0,N(()=>{document.activeElement===r&&e.focus()})}}let S=!1;function R(){S||(S=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Q(e,t,r,o=!0){o&&r();for(var a of t)e.addEventListener(a,r);A(()=>{for(var n of t)e.removeEventListener(n,r)})}function C(e){var t=M,r=E;m(null),g(null);try{return e()}finally{m(t),g(r)}}function X(e,t,r,o=r){e.addEventListener(t,()=>C(r));const a=e.__on_r;a?e.__on_r=()=>{a(),o(!0)}:e.__on_r=()=>o(!0),R()}const B=new Set,F=new Set;function U(e,t,r,o){function a(n){if(o.capture||$.call(t,n),!n.cancelBubble)return C(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?N(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function Y(e,t,r,o,a){var n={capture:o,passive:a},u=U(e,t,r,n);(t===document.body||t===window||t===document)&&A(()=>{t.removeEventListener(e,u,n)})}function Z(e){for(var t=0;t<e.length;t++)B.add(e[t]);for(var r of F)r(e)}function $(e){var k;var t=this,r=t.ownerDocument,o=e.type,a=((k=e.composedPath)==null?void 0:k.call(e))||[],n=a[0]||e.target,u=0,d=e.__root;if(d){var s=a.indexOf(d);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var c=a.indexOf(t);if(c===-1)return;s<=c&&(u=s)}if(n=a[u]||e.target,n!==t){O(e,"currentTarget",{configurable:!0,get(){return n||r}});var y=M,b=E;m(null),g(null);try{for(var v,L=[];n!==null;){var w=n.assignedSlot||n.parentNode||n.host||null;try{var p=n["__"+o];if(p!==void 0&&!n.disabled)if(V(p)){var[D,...I]=p;D.apply(n,[e,...I])}else p.call(n,e)}catch(h){v?L.push(h):v=h}if(e.cancelBubble||w===t||w===null)break;n=w}if(v){for(let h of L)queueMicrotask(()=>{throw h});throw v}}finally{e.__root=t,delete e.currentTarget,m(y),g(b)}}}function P(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function i(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ee(e,t){var r=(t&x)!==0,o=(t&W)!==0,a,n=!e.startsWith("<!>");return()=>{if(_)return i(f,null),f;a===void 0&&(a=P(n?e:"<!>"+e),r||(a=l(a)));var u=o?document.importNode(a,!0):a.cloneNode(!0);if(r){var d=l(u),s=u.lastChild;i(d,s)}else i(u,u);return u}}function te(e,t,r="svg"){var o=!e.startsWith("<!>"),a=(t&x)!==0,n=`<${r}>${o?e:"<!>"+e}</${r}>`,u;return()=>{if(_)return i(f,null),f;if(!u){var d=P(n),s=l(d);if(a)for(u=document.createDocumentFragment();l(s);)u.appendChild(l(s));else u=l(s)}var c=u.cloneNode(!0);if(a){var y=l(c),b=c.lastChild;i(y,b)}else i(c,c);return c}}function re(e=""){if(!_){var t=T(e+"");return i(t,t),t}var r=f;return r.nodeType!==3&&(r.before(r=T()),j(r)),i(r,r),r}function ae(){if(_)return i(f,null),f;var e=document.createDocumentFragment(),t=document.createComment(""),r=T();return e.append(t,r),i(t,r),e}function ne(e,t){if(_){E.nodes_end=f,q();return}e!==null&&e.before(t)}function oe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const G=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ue(e){return G.includes(e)}const H={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function ie(e){return e=e.toLowerCase(),H[e]??e}const z=["touchstart","touchmove"];function se(e){return z.includes(e)}export{ne as a,B as b,i as c,R as d,oe as e,U as f,Z as g,$ as h,se as i,K as j,ue as k,re as l,ae as m,ie as n,Y as o,X as p,te as q,F as r,P as s,ee as t,Q as u,C as w};
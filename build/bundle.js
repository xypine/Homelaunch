var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function a(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function s(){return l(" ")}function g(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function f(t){return""===t?null:+t}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function p(t,n){t.value=null==n?"":n}function _(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let m;function k(t){m=t}const $=[],v=[],y=[],x=[],w=Promise.resolve();let S=!1;function G(t){y.push(t)}let N=!1;const E=new Set;function O(){if(!N){N=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];k(n),C(n.$$)}for(k(null),$.length=0;v.length;)v.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while($.length);for(;x.length;)x.pop()();S=!1,N=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const A=new Set;function T(t,n){t&&t.i&&(A.delete(t),t.i(n))}function j(t,e,a,i){const{fragment:d,on_mount:u,on_destroy:c,after_update:l}=t.$$;d&&d.m(e,a),i||G((()=>{const e=u.map(n).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(G)}function J(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&($.push(t),S||(S=!0,w.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,r,a,i,d,c,l=[-1]){const s=m;k(n);const g=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:r.context||[]),callbacks:e(),dirty:l,skip_bound:!1};let b=!1;if(g.ctx=a?a(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return g.ctx&&d(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),b&&q(n,t)),e})):[],g.update(),b=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();r.intro&&T(n.$$.fragment),j(n,r.target,r.anchor,r.customElement),O()}k(s)}class I{$destroy(){J(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(n){let e,r,a,m,k,$,v,y,x,w,S,G,N,E,O,C,A,T,j,J,q,H,I,L,D,P,R,K,M,V,z,F,Q,U,W,X,Y,Z,tt,nt,et,ot,rt,at,it,dt,ut,ct,lt,st;return{c(){e=c("main"),r=c("div"),a=c("h1"),a.textContent="Settings",m=s(),k=c("div"),$=c("label"),v=l("Name "),y=c("input"),x=s(),w=c("label"),S=l("Gradient rotation\n\t\t\t"),G=c("input"),N=s(),E=c("input"),O=s(),C=c("label"),A=l("Gradient percentage 1\n\t\t\t"),T=c("input"),j=s(),J=c("input"),q=s(),H=c("label"),I=l("Gradient percentage 2\n\t\t\t"),L=c("input"),D=s(),P=c("input"),R=s(),K=c("br"),M=s(),V=c("label"),z=l("Gradient start color "),F=c("input"),Q=s(),U=c("label"),W=l("Gradient end color "),X=c("input"),Y=s(),Z=c("h3"),tt=l(n[1]),nt=s(),et=c("button"),et.textContent="Save",ot=s(),rt=c("button"),rt.textContent="Show JSON",at=s(),it=c("button"),it.textContent="Reset",dt=s(),ut=c("p"),ct=l(n[2]),b(a,"class","svelte-1l192wd"),b(y,"type","text"),b(y,"id","name"),b($,"for","name"),b(G,"type","number"),b(G,"min","0"),b(G,"max","360"),b(E,"type","range"),b(E,"min","0"),b(E,"max","360"),b(E,"id","gradient-rot"),b(w,"for","gradient-rot"),b(T,"type","number"),b(T,"min","0"),b(T,"max","100"),b(J,"type","range"),b(J,"min","0"),b(J,"max","100"),b(J,"id","gradient-per"),b(C,"for","gradient-per"),b(L,"type","number"),b(L,"min","0"),b(L,"max","200"),b(P,"type","range"),b(P,"min","0"),b(P,"max","200"),b(P,"id","gradient-per2"),b(H,"for","gradient-per2"),b(F,"type","color"),b(F,"id","gradient-1"),b(V,"for","gradient-1"),b(X,"type","color"),b(X,"id","gradient-2"),b(U,"for","gradient-2"),b(ut,"class","svelte-1l192wd"),b(r,"class","settings svelte-1l192wd"),b(r,"id","settings"),_(e,"--bg-start",n[0].background_gradient_start),_(e,"--bg-end",n[0].background_gradient_end),_(e,"--bg-rot",n[0].background_rot+"deg"),_(e,"--bg-handle1",n[0].background_handle1+"%"),_(e,"--bg-handle2",n[0].background_handle2+"%")},m(t,o){d(t,e,o),i(e,r),i(r,a),i(r,m),i(r,k),i(k,$),i($,v),i($,y),p(y,n[0].name),i(k,x),i(k,w),i(w,S),i(w,G),p(G,n[0].background_rot),i(w,N),i(w,E),p(E,n[0].background_rot),i(k,O),i(k,C),i(C,A),i(C,T),p(T,n[0].background_handle1),i(C,j),i(C,J),p(J,n[0].background_handle1),i(k,q),i(k,H),i(H,I),i(H,L),p(L,n[0].background_handle2),i(H,D),i(H,P),p(P,n[0].background_handle2),i(k,R),i(k,K),i(k,M),i(k,V),i(V,z),i(V,F),p(F,n[0].background_gradient_start),i(k,Q),i(k,U),i(U,W),i(U,X),p(X,n[0].background_gradient_end),i(r,Y),i(r,Z),i(Z,tt),i(r,nt),i(r,et),i(r,ot),i(r,rt),i(r,at),i(r,it),i(r,dt),i(r,ut),i(ut,ct),lt||(st=[g(y,"input",n[5]),g(G,"input",n[6]),g(E,"change",n[7]),g(E,"input",n[7]),g(T,"input",n[8]),g(J,"change",n[9]),g(J,"input",n[9]),g(L,"input",n[10]),g(P,"change",n[11]),g(P,"input",n[11]),g(F,"input",n[12]),g(X,"input",n[13]),g(et,"click",n[3]),g(rt,"click",n[4]),g(it,"click",B)],lt=!0)},p(t,[n]){1&n&&y.value!==t[0].name&&p(y,t[0].name),1&n&&f(G.value)!==t[0].background_rot&&p(G,t[0].background_rot),1&n&&p(E,t[0].background_rot),1&n&&f(T.value)!==t[0].background_handle1&&p(T,t[0].background_handle1),1&n&&p(J,t[0].background_handle1),1&n&&f(L.value)!==t[0].background_handle2&&p(L,t[0].background_handle2),1&n&&p(P,t[0].background_handle2),1&n&&p(F,t[0].background_gradient_start),1&n&&p(X,t[0].background_gradient_end),2&n&&h(tt,t[1]),4&n&&h(ct,t[2]),1&n&&_(e,"--bg-start",t[0].background_gradient_start),1&n&&_(e,"--bg-end",t[0].background_gradient_end),1&n&&_(e,"--bg-rot",t[0].background_rot+"deg"),1&n&&_(e,"--bg-handle1",t[0].background_handle1+"%"),1&n&&_(e,"--bg-handle2",t[0].background_handle2+"%")},i:t,o:t,d(t){t&&u(e),lt=!1,o(st)}}}function B(){localStorage.clear()}function D(t,n,e){let{settings:o}=n;o={valid:!0,name:"Name Here",background_gradient_start:"#1c1b21",background_gradient_end:"#3A2856",background_rot:"180",background_handle1:"10",background_handle2:"100"};const r=localStorage.getItem("settings");let a="";if(null!=r)try{let t=JSON.parse(r);console.log(t),!0===t.valid&&(o=t)}catch{a="error: couldn't parse json: '"+r+"'",console.log(a)}let i="";return t.$$set=t=>{"settings"in t&&e(0,o=t.settings)},[o,a,i,function(){localStorage.setItem("settings",JSON.stringify(o))},function(){e(2,i=JSON.stringify(o))},function(){o.name=this.value,e(0,o)},function(){o.background_rot=f(this.value),e(0,o)},function(){o.background_rot=f(this.value),e(0,o)},function(){o.background_handle1=f(this.value),e(0,o)},function(){o.background_handle1=f(this.value),e(0,o)},function(){o.background_handle2=f(this.value),e(0,o)},function(){o.background_handle2=f(this.value),e(0,o)},function(){o.background_gradient_start=this.value,e(0,o)},function(){o.background_gradient_end=this.value,e(0,o)}]}class P extends I{constructor(t){super(),H(this,t,D,L,a,{settings:0})}}function R(t){let n,e,o,r,a,f,p,m,k,$,y,w,S,G,N,E,O,C,q,H,I,L,B,D,R,K,M=t[1].name+"";function V(n){t[6](n)}let z={};return void 0!==t[1]&&(z.settings=t[1]),r=new P({props:z}),v.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(r,"settings",V))),{c(){var a;n=c("link"),e=s(),o=c("div"),(a=r.$$.fragment)&&a.c(),f=s(),p=c("main"),m=c("p"),k=l("Homelaunch "),$=c("button"),$.textContent="Settings",y=s(),w=c("div"),S=c("h1"),G=l(t[2]),N=s(),E=l(M),O=s(),C=c("h1"),q=l("The time is "),H=l(t[3]),I=s(),L=c("input"),B=c("br"),document.title=" New Tab ",b(n,"rel","icon"),b(n,"href","data:;base64,iVBORw0KGgo="),b(o,"class","content svelte-12roglb"),_(o,"display",t[0]),_(o,"background","black"),_(o,"padding","0"),_(o,"margin","0"),b($,"class","settingsbtn svelte-12roglb"),b(m,"class","logo svelte-12roglb"),b(S,"class","svelte-12roglb"),b(C,"class","svelte-12roglb"),b(L,"type","text"),b(L,"id","query"),b(L,"name","query"),L.autofocus=!0,b(L,"class","svelte-12roglb"),b(w,"class","content svelte-12roglb"),_(p,"--bg-start",t[1].background_gradient_start),_(p,"--bg-end",t[1].background_gradient_end),_(p,"--bg-rot",t[1].background_rot+"deg"),_(p,"--bg-handle1",t[1].background_handle1+"%"),_(p,"--bg-handle2",t[1].background_handle2+"%"),b(p,"class","svelte-12roglb")},m(a,u){i(document.head,n),d(a,e,u),d(a,o,u),j(r,o,null),d(a,f,u),d(a,p,u),i(p,m),i(m,k),i(m,$),i(p,y),i(p,w),i(w,S),i(S,G),i(S,N),i(S,E),i(w,O),i(w,C),i(C,q),i(C,H),i(w,I),i(w,L),i(w,B),D=!0,L.focus(),R||(K=g($,"click",t[4]),R=!0)},p(t,[n]){const e={};var i;!a&&2&n&&(a=!0,e.settings=t[1],i=()=>a=!1,x.push(i)),r.$set(e),(!D||1&n)&&_(o,"display",t[0]),(!D||4&n)&&h(G,t[2]),(!D||2&n)&&M!==(M=t[1].name+"")&&h(E,M),(!D||8&n)&&h(H,t[3]),(!D||2&n)&&_(p,"--bg-start",t[1].background_gradient_start),(!D||2&n)&&_(p,"--bg-end",t[1].background_gradient_end),(!D||2&n)&&_(p,"--bg-rot",t[1].background_rot+"deg"),(!D||2&n)&&_(p,"--bg-handle1",t[1].background_handle1+"%"),(!D||2&n)&&_(p,"--bg-handle2",t[1].background_handle2+"%")},i(t){D||(T(r.$$.fragment,t),D=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(r.$$.fragment,t),D=!1},d(t){u(n),t&&u(e),t&&u(o),J(r),t&&u(f),t&&u(p),R=!1,K()}}}function K(t,n,e){let o,r=!1,a="none",i={};let d=new Date;setInterval((()=>{e(5,d=new Date)}),1e3);let u="Good morning,";var c=d.getHours();return u=c<12?"Good morning,":c<18||c<21?"Good afternoon,":"Good night,",t.$$.update=()=>{32&t.$$.dirty&&e(3,o=d.toLocaleTimeString().replaceAll(".",":"))},[a,i,u,o,function(){r=!r,e(0,a=r?"inherit":"none")},d,function(t){i=t,e(1,i)}]}return new class extends I{constructor(t){super(),H(this,t,K,R,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map

import{s as T,c as S,u as j,g as q,d as y,e as z}from"../chunks/scheduler.711bf361.js";import{S as C,i as I,e as h,s as L,g,x as w,f as r,c as B,h as k,j as D,y as E,a as b,d as F,t as G,k as d}from"../chunks/index.03153aed.js";import{p as H}from"../chunks/stores.06c9818b.js";function A(l){let t,n;return{c(){t=g("meta"),this.h()},l(e){t=k(e,"META",{name:!0,content:!0}),this.h()},h(){d(t,"name","description"),d(t,"content",n=l[0].data.meta_description)},m(e,i){b(e,t,i)},p(e,i){i&1&&n!==(n=e[0].data.meta_description)&&d(t,"content",n)},d(e){e&&r(t)}}}function M(l){let t,n;return{c(){t=g("meta"),this.h()},l(e){t=k(e,"META",{name:!0,content:!0}),this.h()},h(){d(t,"name","og:title"),d(t,"content",n=l[0].data.meta_title)},m(e,i){b(e,t,i)},p(e,i){i&1&&n!==(n=e[0].data.meta_title)&&d(t,"content",n)},d(e){e&&r(t)}}}function N(l){let t,n;return{c(){t=g("meta"),this.h()},l(e){t=k(e,"META",{name:!0,content:!0}),this.h()},h(){d(t,"name","og:image"),d(t,"content",n=l[0].data.meta_image.url)},m(e,i){b(e,t,i)},p(e,i){i&1&&n!==(n=e[0].data.meta_image.url)&&d(t,"content",n)},d(e){e&&r(t)}}}function J(l){let t,n,e,i,u,c,p;document.title=t=l[0].data.title;let o=l[0].data.meta_description&&A(l),s=l[0].data.meta_title&&M(l),m=l[0].data.meta_image&&N(l);const v=l[2].default,_=S(v,l,l[1],null);return{c(){o&&o.c(),n=h(),s&&s.c(),e=h(),m&&m.c(),i=h(),u=L(),c=g("main"),_&&_.c()},l(a){const f=w("svelte-1d7z4x7",document.head);o&&o.l(f),n=h(),s&&s.l(f),e=h(),m&&m.l(f),i=h(),f.forEach(r),u=B(a),c=k(a,"MAIN",{});var $=D(c);_&&_.l($),$.forEach(r)},m(a,f){o&&o.m(document.head,null),E(document.head,n),s&&s.m(document.head,null),E(document.head,e),m&&m.m(document.head,null),E(document.head,i),b(a,u,f),b(a,c,f),_&&_.m(c,null),p=!0},p(a,[f]){(!p||f&1)&&t!==(t=a[0].data.title)&&(document.title=t),a[0].data.meta_description?o?o.p(a,f):(o=A(a),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null),a[0].data.meta_title?s?s.p(a,f):(s=M(a),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),a[0].data.meta_image?m?m.p(a,f):(m=N(a),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null),_&&_.p&&(!p||f&2)&&j(_,v,a,a[1],p?y(v,a[1],f,null):q(a[1]),null)},i(a){p||(F(_,a),p=!0)},o(a){G(_,a),p=!1},d(a){a&&(r(u),r(c)),o&&o.d(a),r(n),s&&s.d(a),r(e),m&&m.d(a),r(i),_&&_.d(a)}}}function K(l,t,n){let e;z(l,H,c=>n(0,e=c));let{$$slots:i={},$$scope:u}=t;return l.$$set=c=>{"$$scope"in c&&n(1,u=c.$$scope)},[e,u,i]}class R extends C{constructor(t){super(),I(this,t,K,J,T,{})}}export{R as component};

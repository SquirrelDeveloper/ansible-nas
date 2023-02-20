"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8970],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Gotify"},i=void 0,p={unversionedId:"applications/other/gotify",id:"applications/other/gotify",title:"Gotify",description:"Homepage:",source:"@site/docs/applications/other/gotify.md",sourceDirName:"applications/other",slug:"/applications/other/gotify",permalink:"/docs/applications/other/gotify",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/gotify.md",tags:[],version:"current",frontMatter:{title:"Gotify"},sidebar:"tutorialSidebar",previous:{title:"Flarum",permalink:"/docs/applications/other/flarum"},next:{title:"Grocy",permalink:"/docs/applications/other/grocy"}},l={},s=[{value:"Usage",id:"usage",level:2}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://gotify.net/"},"https://gotify.net/")),(0,o.kt)("p",null,"A simple server for sending and receiving messages in real-time per WebSocket. (Includes a sleek web-ui)"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"gotify_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,o.kt)("p",null,"The Gotify web interface can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:2346"},"http://ansible_nas_host_or_ip:2346"),"."),(0,o.kt)("p",null,"Android client: ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.github.gotify"},"https://play.google.com/store/apps/details?id=com.github.gotify"),"\niOS client: n/a\nChrome extension: n/a\nFirefox extension: ",(0,o.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/gotify-for-firefox/"},"https://addons.mozilla.org/en-US/firefox/addon/gotify-for-firefox/")))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Guacamole"},i=void 0,c={unversionedId:"applications/other/guacamole",id:"applications/other/guacamole",title:"Guacamole",description:"Homepage:",source:"@site/docs/applications/other/guacamole.md",sourceDirName:"applications/other",slug:"/applications/other/guacamole",permalink:"/docs/applications/other/guacamole",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/other/guacamole.md",tags:[],version:"current",frontMatter:{title:"Guacamole"},sidebar:"tutorialSidebar",previous:{title:"Grocy",permalink:"/docs/applications/other/grocy"},next:{title:"Hello World",permalink:"/docs/applications/other/hello_world"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"What to connect to?",id:"what-to-connect-to",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://guacamole.apache.org/"},"https://guacamole.apache.org/")),(0,a.kt)("p",null,"Apache Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC, RDP, and SSH."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"guacamole_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,a.kt)("p",null,"The default username and password is ",(0,a.kt)("inlineCode",{parentName:"p"},"guacadmin"),". Change it!"),(0,a.kt)("h2",{id:"what-to-connect-to"},"What to connect to?"),(0,a.kt)("p",null,"You can run a virtual desktop from your Ansible-NAS box, check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/applications/other/virtual_desktop"},"Virtual Desktop docs"),"."))}m.isMDXComponent=!0}}]);
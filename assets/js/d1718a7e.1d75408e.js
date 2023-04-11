"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={title:"Linkding",description:"Self-hosted bookmark service"},a=void 0,s={unversionedId:"applications/other/linkding",id:"applications/other/linkding",title:"Linkding",description:"Self-hosted bookmark service",source:"@site/docs/applications/other/linkding.md",sourceDirName:"applications/other",slug:"/applications/other/linkding",permalink:"/docs/applications/other/linkding",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/linkding.md",tags:[],version:"current",frontMatter:{title:"Linkding",description:"Self-hosted bookmark service"},sidebar:"tutorialSidebar",previous:{title:"Librephotos",permalink:"/docs/applications/other/librephotos"},next:{title:"Listmonk",permalink:"/docs/applications/other/listmonk"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Homepage: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sissbruecker/linkding"},"https://github.com/sissbruecker/linkding")),(0,i.kt)("p",null,"linkding is a simple bookmark service that you can host yourself. It's designed be to be minimal, fast, and easy to set up using Docker."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"linkding_enabled: true")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,i.kt)("p",null,"linkding web interface can be found at ",(0,i.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:9094"},"http://ansible_nas_host_or_ip:9094"),"."),(0,i.kt)("p",null,"Login using ",(0,i.kt)("inlineCode",{parentName:"p"},"linkding_superuser_name"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"linkding_superuser_password")," credentials, go to Admin and add a new user."))}u.isMDXComponent=!0}}]);
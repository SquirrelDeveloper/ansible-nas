"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[6461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={title:"Dufs",description:"Distinctive utility file server"},o=void 0,s={unversionedId:"applications/other/dufs",id:"applications/other/dufs",title:"Dufs",description:"Distinctive utility file server",source:"@site/docs/applications/other/dufs.md",sourceDirName:"applications/other",slug:"/applications/other/dufs",permalink:"/docs/applications/other/dufs",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/dufs.md",tags:[],version:"current",frontMatter:{title:"Dufs",description:"Distinctive utility file server"},sidebar:"tutorialSidebar",previous:{title:"Claper",permalink:"/docs/applications/other/claper"},next:{title:"Excalidraw",permalink:"/docs/applications/other/exaclidraw"}},p={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Homepage: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sigoden/dufs"},"https://github.com/sigoden/dufs")),(0,i.kt)("p",null,"Dufs is a distinctive utility file server that supports static serving, uploading, searching, accessing control, webdav..."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"dufs_enabled: true")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. Optionally, edit ",(0,i.kt)("inlineCode",{parentName:"p"},"dufs_options")," to set the needed dufs options."),(0,i.kt)("p",null,"dufs web interface can be found at ",(0,i.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8118"},"http://ansible_nas_host_or_ip:8118"),"."))}f.isMDXComponent=!0}}]);
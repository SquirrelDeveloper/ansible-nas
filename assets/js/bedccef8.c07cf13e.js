"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||b[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Releasebell",description:"Starred GitHub repositories notifications"},i=void 0,l={unversionedId:"applications/other/releasebell",id:"applications/other/releasebell",title:"Releasebell",description:"Starred GitHub repositories notifications",source:"@site/docs/applications/other/releasebell.md",sourceDirName:"applications/other",slug:"/applications/other/releasebell",permalink:"/docs/applications/other/releasebell",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/releasebell.md",tags:[],version:"current",frontMatter:{title:"Releasebell",description:"Starred GitHub repositories notifications"},sidebar:"tutorialSidebar",previous:{title:"Piwigo",permalink:"/docs/applications/other/piwigo"},next:{title:"Restic",permalink:"/docs/applications/other/seafile"}},s={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/anarion80/releasebell"},"https://github.com/anarion80/releasebell")),(0,a.kt)("p",null,"Release Bell tracks your starred GitHub repositories and will notify you on every new tag or release. Furthermore it allows to manually track GitLab project releases."),(0,a.kt)("p",null,"All notifications are sent out via email."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"releasebell_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. Use of LDAP for user management is encouraged. If you don't set up LDAP environment variables, then you need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"releasebell_users")," to a dictionary of users to be created."),(0,a.kt)("p",null,"Releasebell web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:3006"},"http://ansible_nas_host_or_ip:3006"),"."))}b.isMDXComponent=!0}}]);
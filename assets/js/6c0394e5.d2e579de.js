"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[4595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Keycloak",description:"Open Source Identity and Access Management"},i=void 0,c={unversionedId:"applications/other/keycloak",id:"applications/other/keycloak",title:"Keycloak",description:"Open Source Identity and Access Management",source:"@site/docs/applications/other/keycloak.md",sourceDirName:"applications/other",slug:"/applications/other/keycloak",permalink:"/docs/applications/other/keycloak",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/keycloak.md",tags:[],version:"current",frontMatter:{title:"Keycloak",description:"Open Source Identity and Access Management"},sidebar:"tutorialSidebar",previous:{title:"Immich",permalink:"/docs/applications/other/immich"},next:{title:"Mealie",permalink:"/docs/applications/other/mealie"}},l={},p=[{value:"Usage",id:"usage",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"https://www.keycloak.org/")),(0,a.kt)("p",null,"Open Source Identity and Access Management"),(0,a.kt)("p",null,"Add authentication to applications and secure services with minimum effort.\nNo need to deal with storing users or authenticating users."),(0,a.kt)("p",null,"Keycloak provides user federation, strong authentication, user management, fine-grained authorization, and more."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"keycloak_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file.\nSet all the ",(0,a.kt)("inlineCode",{parentName:"p"},"keycloak_*")," environment variables in your inventory. ",(0,a.kt)("inlineCode",{parentName:"p"},"keycloak_command")," is the key variable where all Keycloak configuration options are set. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/server/all-config?f=config"},"Keycloak configuration documentation")," and to ",(0,a.kt)("a",{parentName:"p",href:"https://www.keycloak.org/server/containers"},"Running Keycloak in a container")," for more details."),(0,a.kt)("p",null,"Keycloak web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8093"},"http://ansible_nas_host_or_ip:8093"),"."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8044],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=s(n),h=i,d=f["".concat(l,".").concat(h)]||f[h]||c[h]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"Authentik"},o=void 0,p={unversionedId:"applications/other/authentik",id:"applications/other/authentik",title:"Authentik",description:"Homepage:",source:"@site/docs/applications/other/authentik.md",sourceDirName:"applications/other",slug:"/applications/other/authentik",permalink:"/docs/applications/other/authentik",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/authentik.md",tags:[],version:"current",frontMatter:{title:"Authentik"},sidebar:"tutorialSidebar",previous:{title:"Authelia",permalink:"/docs/applications/other/authelia"},next:{title:"Barcode Buddy",permalink:"/docs/applications/other/barcodebuddy"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Homepage: ",(0,i.kt)("a",{parentName:"p",href:"https://goauthentik.io"},"https://goauthentik.io")),(0,i.kt)("p",null,"authentik is an open-source Identity Provider focused on flexibility and versatility. You can use authentik in an existing environment to add support for new protocols, implement sign-up/recovery/etc. in your application so you don't have to deal with it, and many other things."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"authentik_enabled: true")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,i.kt)("p",null,"Set all ",(0,i.kt)("inlineCode",{parentName:"p"},"authentik_*")," variables in ",(0,i.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/group_vars/all.yml"),"."),(0,i.kt)("p",null,"The Authentik web interface can be found at ",(0,i.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:9000"},"http://ansible_nas_host_or_ip:9000"),"."),(0,i.kt)("p",null,"To start the initial setup, navigate to ",(0,i.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:9000/if/flow/initial-setup/"},"http://ansible_nas_host_or_ip:9000/if/flow/initial-setup/"),". There you will be prompted to set a password for the akadmin user."),(0,i.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"https://goauthentik.io/docs/installation/configuration"},"https://goauthentik.io/docs/installation/configuration")," for full list of configuration options."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7761],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},629:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const i={title:"Photoprism",description:"AI-Powered Photos App for the Decentralized Web"},a=void 0,p={unversionedId:"applications/other/photoprism",id:"applications/other/photoprism",title:"Photoprism",description:"AI-Powered Photos App for the Decentralized Web",source:"@site/docs/applications/other/photoprism.md",sourceDirName:"applications/other",slug:"/applications/other/photoprism",permalink:"/docs/applications/other/photoprism",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/photoprism.md",tags:[],version:"current",frontMatter:{title:"Photoprism",description:"AI-Powered Photos App for the Decentralized Web"},sidebar:"tutorialSidebar",previous:{title:"Photofield",permalink:"/docs/applications/other/photofield"},next:{title:"Piwigo",permalink:"/docs/applications/other/piwigo"}},s={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Homepage: ",(0,n.kt)("a",{parentName:"p",href:"https://www.photoprism.app/"},"https://www.photoprism.app/")),(0,n.kt)("p",null,"PhotoPrism\xae is an AI-Powered Photos App for the Decentralized Web."),(0,n.kt)("p",null,"It makes use of the latest technologies to tag and find pictures automatically without getting in your way. You can run it at home, on a private server, or in the cloud."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"photoprism_enabled: true")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,n.kt)("p",null,"Photoprism web interface can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:2342"},"http://ansible_nas_host_or_ip:2342"),". Login with ",(0,n.kt)("inlineCode",{parentName:"p"},"photoprism_admin_user")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"photoprism_admin_password"),"."),(0,n.kt)("p",null,"Photoprism has many configration options. Most of them are defined as variables in the role so that you can just use the defaults or overload them in you inventory file. For more advanced configuration create ",(0,n.kt)("inlineCode",{parentName:"p"},"photoprism_optional_env")," dictionary in your inventory and add any Photoprism environment variables you need. Please check ",(0,n.kt)("a",{parentName:"p",href:"https://docs.photoprism.app/getting-started/config-options/"},"Phootoprism documentation")," for details."))}u.isMDXComponent=!0}}]);
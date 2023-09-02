"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7755],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||h[m]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"PhotoStructure",description:"Your new home for all your photos & videos"},i=void 0,p={unversionedId:"applications/other/photostructure",id:"applications/other/photostructure",title:"PhotoStructure",description:"Your new home for all your photos & videos",source:"@site/docs/applications/other/photostructure.md",sourceDirName:"applications/other",slug:"/applications/other/photostructure",permalink:"/docs/applications/other/photostructure",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/photostructure.md",tags:[],version:"current",frontMatter:{title:"PhotoStructure",description:"Your new home for all your photos & videos"},sidebar:"tutorialSidebar",previous:{title:"Photoprism",permalink:"/docs/applications/other/photoprism"},next:{title:"Piwigo",permalink:"/docs/applications/other/piwigo"}},l={},u=[{value:"Usage",id:"usage",level:2}],s={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Homepage: ",(0,n.kt)("a",{parentName:"p",href:"https://photostructure.com"},"https://photostructure.com")),(0,n.kt)("p",null,"PhotoStructure is designed to be a safe, permanent home for all your photos and videos.\nThere are many, many software packages to help manage photos and video libraries.\nPhotoStructure is uniquely focused on"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udff0  ownership,"),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfd6\ufe0f  convenience,"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udee1  privacy, and"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc8e  permanence of your library.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"photostructure_enabled: true")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,n.kt)("p",null,"Provide your own photo storage location in ",(0,n.kt)("inlineCode",{parentName:"p"},"photostructure_optional_volumes")," to be accessible for PhotoStructure."),(0,n.kt)("p",null,"PhotoStructure web interface can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:1878"},"http://ansible_nas_host_or_ip:1878"),"."))}h.isMDXComponent=!0}}]);
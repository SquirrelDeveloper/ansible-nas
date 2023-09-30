"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[5066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},135:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"CommaFeed",description:"Google Reader inspired self-hosted RSS reader"},i=void 0,l={unversionedId:"applications/news/commafeed",id:"applications/news/commafeed",title:"CommaFeed",description:"Google Reader inspired self-hosted RSS reader",source:"@site/docs/applications/news/commafeed.md",sourceDirName:"applications/news",slug:"/applications/news/commafeed",permalink:"/docs/applications/news/commafeed",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/news/commafeed.md",tags:[],version:"current",frontMatter:{title:"CommaFeed",description:"Google Reader inspired self-hosted RSS reader"},sidebar:"tutorialSidebar",previous:{title:"News",permalink:"/docs/category/news"},next:{title:"FreshRSS",permalink:"/docs/applications/news/freshrss"}},s={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lcomplete/commafeed"},"https://github.com/lcomplete/commafeed")),(0,a.kt)("p",null,"Google Reader inspired self-hosted RSS reader, based on Dropwizard and React/TypeScript."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4 different layouts"),(0,a.kt)("li",{parentName:"ul"},"Dark theme"),(0,a.kt)("li",{parentName:"ul"},"Fully responsive"),(0,a.kt)("li",{parentName:"ul"},"Keyboard shortcuts for almost everything"),(0,a.kt)("li",{parentName:"ul"},"Support for right-to-left feeds"),(0,a.kt)("li",{parentName:"ul"},"Translated in 25+ languages"),(0,a.kt)("li",{parentName:"ul"},"Supports thousands of users and millions of feeds"),(0,a.kt)("li",{parentName:"ul"},"OPML import/export"),(0,a.kt)("li",{parentName:"ul"},"REST API"),(0,a.kt)("li",{parentName:"ul"},"Browser extension")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"commafeed_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"CommaFeed web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8122"},"http://ansible_nas_host_or_ip:8122"),"."))}m.isMDXComponent=!0}}]);
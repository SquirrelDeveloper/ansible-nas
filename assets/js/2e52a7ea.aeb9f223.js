"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[5318],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),y=a,d=f["".concat(p,".").concat(y)]||f[y]||u[y]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Firefly III"},o=void 0,l={unversionedId:"applications/other/firefly",id:"applications/other/firefly",title:"Firefly III",description:"Homepage:",source:"@site/docs/applications/other/firefly.md",sourceDirName:"applications/other",slug:"/applications/other/firefly",permalink:"/docs/applications/other/firefly",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/firefly.md",tags:[],version:"current",frontMatter:{title:"Firefly III"},sidebar:"tutorialSidebar",previous:{title:"Excalidraw",permalink:"/docs/applications/other/exaclidraw"},next:{title:"Flarum",permalink:"/docs/applications/other/flarum"}},p={},s=[{value:"Usage",id:"usage",level:2}],c={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://firefly-iii.org/"},"https://firefly-iii.org/")),(0,a.kt)("p",null,"Firefly III is a self-hosted financial manager. It can help you keep track of expenses, income, budgets and everything in between. It supports credit cards, shared household accounts and savings accounts. It's pretty fancy. You should use it to save and organize money."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"firefly_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"The Firefly III web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8066"},"http://ansible_nas_host_or_ip:8066"),"."),(0,a.kt)("p",null,"Optionally, you can install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/firefly-iii/data-importer"},"Firefly Data Importer")," by creating a Personal Access Token in Firefly, copying it into ",(0,a.kt)("inlineCode",{parentName:"p"},"firefly_access_token")," variable, setting ",(0,a.kt)("inlineCode",{parentName:"p"},"firefly_importer_enabled")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and re-running the playbook."))}u.isMDXComponent=!0}}]);
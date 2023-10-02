"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"Stirling-PDF",description:"Locally hosted web application that allows you to perform various operations on PDF files "},a=void 0,l={unversionedId:"applications/other/stirlingpdf",id:"applications/other/stirlingpdf",title:"Stirling-PDF",description:"Locally hosted web application that allows you to perform various operations on PDF files ",source:"@site/docs/applications/other/stirlingpdf.md",sourceDirName:"applications/other",slug:"/applications/other/stirlingpdf",permalink:"/docs/applications/other/stirlingpdf",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/stirlingpdf.md",tags:[],version:"current",frontMatter:{title:"Stirling-PDF",description:"Locally hosted web application that allows you to perform various operations on PDF files "},sidebar:"tutorialSidebar",previous:{title:"Shaarli",permalink:"/docs/applications/other/shaarli"},next:{title:"The Lounge",permalink:"/docs/applications/other/thelounge"}},s={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Frooodle/Stirling-PDF"},"https://github.com/Frooodle/Stirling-PDF")),(0,o.kt)("p",null,"This is a powerful locally hosted web based PDF manipulation tool using docker that allows you to perform various operations on PDF files, such as splitting merging, converting, reorganizing, adding images, rotating, compressing, and more. This locally hosted web application started as a 100% ChatGPT-made application and has evolved to include a wide range of features to handle all your PDF needs."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"stirlingpdf_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,o.kt)("p",null,"stirlingpdf web interface can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8124"},"http://ansible_nas_host_or_ip:8124"),"."))}d.isMDXComponent=!0}}]);
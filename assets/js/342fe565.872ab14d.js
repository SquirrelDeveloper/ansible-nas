"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"phpMyAdmin",description:"MySQL/MariaDB administration tool"},i=void 0,p={unversionedId:"applications/system-tools/phpmyadmin",id:"applications/system-tools/phpmyadmin",title:"phpMyAdmin",description:"MySQL/MariaDB administration tool",source:"@site/docs/applications/system-tools/phpmyadmin.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/phpmyadmin",permalink:"/docs/applications/system-tools/phpmyadmin",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/phpmyadmin.md",tags:[],version:"current",frontMatter:{title:"phpMyAdmin",description:"MySQL/MariaDB administration tool"},sidebar:"tutorialSidebar",previous:{title:"OpenLDAP",permalink:"/docs/applications/system-tools/openldap"},next:{title:"Portainer",permalink:"/docs/applications/system-tools/portainer"}},s={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://www.phpmyadmin.net/"},"https://www.phpmyadmin.net/")),(0,a.kt)("p",null,"phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"phpmyadmin_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"phpmyadmin web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8097"},"http://ansible_nas_host_or_ip:8097"),"."),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"phpmyadmin_databases")," to a list of container names that you want to have available as selection of servers to connect to via phpMyAdmin."),(0,a.kt)("p",null,"\u2757 Make sure your ",(0,a.kt)("inlineCode",{parentName:"p"},"phpmyadmin")," and your database container are on the same docker network!"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"phpmyadmin_arbitrary")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to be able to enter an arbitrary address of a server to connect to. Be mindful about docker network routing and therefore network host reachability."))}d.isMDXComponent=!0}}]);
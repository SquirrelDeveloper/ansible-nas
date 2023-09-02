"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[9209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Minetest Server",description:"An open source voxel game engine"},o=void 0,s={unversionedId:"applications/gaming/minetest-server",id:"applications/gaming/minetest-server",title:"Minetest Server",description:"An open source voxel game engine",source:"@site/docs/applications/gaming/minetest-server.md",sourceDirName:"applications/gaming",slug:"/applications/gaming/minetest-server",permalink:"/docs/applications/gaming/minetest-server",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/gaming/minetest-server.md",tags:[],version:"current",frontMatter:{title:"Minetest Server",description:"An open source voxel game engine"},sidebar:"tutorialSidebar",previous:{title:"Minecraft Server",permalink:"/docs/applications/gaming/minecraft-server"},next:{title:"Home Automation",permalink:"/docs/category/home-automation"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://www.minetest.net/"},"https://www.minetest.net/")),(0,a.kt)("p",null,"An open source voxel game engine. Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"minetest_server_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. The whole ",(0,a.kt)("inlineCode",{parentName:"p"},"minetest.conf")," is templated with some basic settings exposed as inventory variables. If you need to edit more settings, then just edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"templates/minetest.conf.j2")," file."),(0,a.kt)("p",null,"Minetest server will be available at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:30000"},"http://ansible_nas_host_or_ip:30000"),"."))}u.isMDXComponent=!0}}]);
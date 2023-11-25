"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3265],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Vaultwarden"},o=void 0,l={unversionedId:"applications/other/vaultwarden",id:"applications/other/vaultwarden",title:"Vaultwarden",description:"Homepage:",source:"@site/docs/applications/other/vaultwarden.md",sourceDirName:"applications/other",slug:"/applications/other/vaultwarden",permalink:"/docs/applications/other/vaultwarden",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/other/vaultwarden.md",tags:[],version:"current",frontMatter:{title:"Vaultwarden"},sidebar:"tutorialSidebar",previous:{title:"Traefik",permalink:"/docs/applications/other/traefik"},next:{title:"Virtual Desktop",permalink:"/docs/applications/other/virtual_desktop"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dani-garcia/vaultwarden"},"https://github.com/dani-garcia/vaultwarden")),(0,a.kt)("p",null,"This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients*, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"vaultwarden_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"The Vaultwarden web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:19080"},"http://ansible_nas_host_or_ip:19080"),"."),(0,a.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,a.kt)("p",null,"Make sure you set your admin token! It is ",(0,a.kt)("inlineCode",{parentName:"p"},"vaultwarden_admin_token")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"group_vars/all.yml")," file. The string you put here will be the login to the admin section of your Vaultwarden installation (",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:19080/admin"},"http://ansible_nas_host_or_ip:19080/admin"),"). This token can be anything, but it's recommended to use a long, randomly generated string of characters, for example running:\n",(0,a.kt)("inlineCode",{parentName:"p"},"openssl rand -base64 48"),"."),(0,a.kt)("p",null,"To create a user, you need to set ",(0,a.kt)("inlineCode",{parentName:"p"},"vaultwarden_allow_signups")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"group_vars/all.yml"),", and re-run the playbook to reprovision the\ncontainer. Once you've created your users, set ",(0,a.kt)("inlineCode",{parentName:"p"},"vaultwarden_allow_signups")," back to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and run again."),(0,a.kt)("p",null,"For speed you can target just Vaultwarden by appending ",(0,a.kt)("inlineCode",{parentName:"p"},"-t vaultwarden")," to your ",(0,a.kt)("inlineCode",{parentName:"p"},"ansible-playbook")," command."))}d.isMDXComponent=!0}}]);
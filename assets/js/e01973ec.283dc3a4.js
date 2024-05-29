"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8526],{5387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(5893),a=n(1151);const o={title:"Authelia"},s=void 0,r={id:"applications/other/authelia",title:"Authelia",description:"Homepage//www.authelia.com/",source:"@site/docs/applications/other/authelia.md",sourceDirName:"applications/other",slug:"/applications/other/authelia",permalink:"/ansible-nas/docs/applications/other/authelia",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/other/authelia.md",tags:[],version:"current",frontMatter:{title:"Authelia"},sidebar:"tutorialSidebar",previous:{title:"Appsmith",permalink:"/ansible-nas/docs/applications/other/appsmith"},next:{title:"Authentik",permalink:"/ansible-nas/docs/applications/other/authentik"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Homepage: ",(0,i.jsx)(t.a,{href:"https://www.authelia.com/",children:"https://www.authelia.com/"})]}),"\n",(0,i.jsx)(t.p,{children:"Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access management (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for your applications via a web portal. It acts as a companion for common reverse proxies."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["Set ",(0,i.jsx)(t.code,{children:"authelia_enabled: true"})," in your ",(0,i.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["Set all ",(0,i.jsx)(t.code,{children:"authelia_*"})," variables in ",(0,i.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/all.yml"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The authelia web interface can be found at ",(0,i.jsx)(t.a,{href:"http://ansible_nas_host_or_ip:9093",children:"http://ansible_nas_host_or_ip:9093"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["This a basic working example of forward auth to Authelia. You need to adjust the config file (",(0,i.jsx)(t.code,{children:"roles/authelia/templates/configuration.yml"}),") to suit your environment (Authentication Backend, Access Control, etc)."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3265],{2833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(5893),i=t(1151);const r={title:"Vaultwarden"},o=void 0,s={id:"applications/other/vaultwarden",title:"Vaultwarden",description:"Homepage//github.com/dani-garcia/vaultwarden",source:"@site/docs/applications/other/vaultwarden.md",sourceDirName:"applications/other",slug:"/applications/other/vaultwarden",permalink:"/ansible-nas/docs/applications/other/vaultwarden",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/other/vaultwarden.md",tags:[],version:"current",frontMatter:{title:"Vaultwarden"},sidebar:"tutorialSidebar",previous:{title:"Traefik",permalink:"/ansible-nas/docs/applications/other/traefik"},next:{title:"Virtual Desktop",permalink:"/ansible-nas/docs/applications/other/virtual_desktop"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Homepage: ",(0,a.jsx)(n.a,{href:"https://github.com/dani-garcia/vaultwarden",children:"https://github.com/dani-garcia/vaultwarden"})]}),"\n",(0,a.jsx)(n.p,{children:"This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients*, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal."}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"vaultwarden_enabled: true"})," in your ",(0,a.jsx)(n.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,a.jsxs)(n.p,{children:["The Vaultwarden web interface can be found at ",(0,a.jsx)(n.a,{href:"http://ansible_nas_host_or_ip:19080",children:"http://ansible_nas_host_or_ip:19080"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["Make sure you set your admin token! It is ",(0,a.jsx)(n.code,{children:"vaultwarden_admin_token"})," in ",(0,a.jsx)(n.code,{children:"group_vars/all.yml"})," file. The string you put here will be the login to the admin section of your Vaultwarden installation (",(0,a.jsx)(n.a,{href:"http://ansible_nas_host_or_ip:19080/admin",children:"http://ansible_nas_host_or_ip:19080/admin>"}),"). This token can be anything, but it's recommended to use a long, randomly generated string of characters, for example running:\n",(0,a.jsx)(n.code,{children:"openssl rand -base64 48"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["To create a user, you need to set ",(0,a.jsx)(n.code,{children:"vaultwarden_allow_signups"})," to ",(0,a.jsx)(n.code,{children:"true"})," in your ",(0,a.jsx)(n.code,{children:"group_vars/all.yml"}),", and re-run the playbook to reprovision the\ncontainer. Once you've created your users, set ",(0,a.jsx)(n.code,{children:"vaultwarden_allow_signups"})," back to ",(0,a.jsx)(n.code,{children:"false"})," and run again."]}),"\n",(0,a.jsxs)(n.p,{children:["For speed you can target just Vaultwarden by appending ",(0,a.jsx)(n.code,{children:"-t vaultwarden"})," to your ",(0,a.jsx)(n.code,{children:"ansible-playbook"})," command."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(7294);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
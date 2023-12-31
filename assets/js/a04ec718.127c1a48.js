"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[6396],{9672:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=s(5893),o=s(1151);const a={title:"Virtual Desktop"},i=void 0,r={id:"applications/other/virtual_desktop",title:"Virtual Desktop",description:"It's possible to run a cut down desktop within a Docker container. We use RattyDAVE's custom Ubuntu Mate image.",source:"@site/docs/applications/other/virtual_desktop.md",sourceDirName:"applications/other",slug:"/applications/other/virtual_desktop",permalink:"/docs/applications/other/virtual_desktop",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/other/virtual_desktop.md",tags:[],version:"current",frontMatter:{title:"Virtual Desktop"},sidebar:"tutorialSidebar",previous:{title:"Vaultwarden",permalink:"/docs/applications/other/vaultwarden"},next:{title:"Wallabag",permalink:"/docs/applications/other/wallabag"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Mounts",id:"mounts",level:2},{value:"Remote Access",id:"remote-access",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["It's possible to run a cut down desktop within a Docker container. We use ",(0,n.jsx)(t.a,{href:"https://github.com/RattyDAVE/docker-ubuntu-xrdp-mate-custom",children:"RattyDAVE's custom Ubuntu Mate image"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"virtual_desktop_enabled: true"})," in your ",(0,n.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,n.jsx)(t.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["By default ",(0,n.jsx)(t.code,{children:"ansible_nas_user"})," will be granted access with a password of ",(0,n.jsx)(t.code,{children:"topsecret"})," with sudo rights. To change or add additional users override ",(0,n.jsx)(t.code,{children:"vd_users"})," in your ",(0,n.jsx)(t.code,{children:"nas.yml"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'vd_users:\n  - username: "{{ ansible_nas_user }}"\n    password: "topsecret"\n    sudo: "Y"\n  - username: "larrylaffer"\n    password: "kensentme"\n    sudo: "Y"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"mounts",children:"Mounts"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"samba_shares_root"})," is mounted to ",(0,n.jsx)(t.code,{children:"/samba"}),".\n",(0,n.jsx)(t.code,{children:"docker_home"})," is mounted to ",(0,n.jsx)(t.code,{children:"/docker"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"remote-access",children:"Remote Access"}),"\n",(0,n.jsxs)(t.p,{children:["It's possible to access your virtual desktop through a web browser! Check out ",(0,n.jsx)(t.a,{href:"/docs/applications/other/guacamole",children:"Guacamole"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>i});var n=s(7294);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
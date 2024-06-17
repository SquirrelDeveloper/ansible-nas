"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7602],{235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(5893),s=n(1151);const i={title:"Drone CI"},r=void 0,a={id:"applications/development-tools/drone_ci",title:"Drone CI",description:"Drone is a self-service Continuous Integration platform for busy development teams.",source:"@site/docs/applications/development-tools/drone_ci.md",sourceDirName:"applications/development-tools",slug:"/applications/development-tools/drone_ci",permalink:"/ansible-nas/docs/applications/development-tools/drone_ci",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/development-tools/drone_ci.md",tags:[],version:"current",frontMatter:{title:"Drone CI"},sidebar:"tutorialSidebar",previous:{title:"Directus",permalink:"/ansible-nas/docs/applications/development-tools/directus"},next:{title:"Gitea",permalink:"/ansible-nas/docs/applications/development-tools/gitea"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Setup Tasks",id:"setup-tasks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Drone is a self-service Continuous Integration platform for busy development teams."}),"\n",(0,o.jsxs)(t.p,{children:["Check it out at ",(0,o.jsx)(t.a,{href:"https://drone.io",children:"https://drone.io"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"drone_ci_enabled: true"})," in your ",(0,o.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,o.jsxs)(t.p,{children:["Gitea (",(0,o.jsx)(t.code,{children:"gitea_enabled: true"}),") must be set up and running before attempting to set up Drone CI."]}),"\n",(0,o.jsx)(t.h2,{id:"setup-tasks",children:"Setup Tasks"}),"\n",(0,o.jsxs)(t.p,{children:["An Oauth2 application must be set up in Gitea. Visit ",(0,o.jsx)(t.a,{href:"https://docs.drone.io/server/provider/gitea/",children:"https://docs.drone.io/server/provider/gitea/"})," for more info, then set ",(0,o.jsx)(t.code,{children:"drone_ci_gitea_client_id"})," and ",(0,o.jsx)(t.code,{children:"drone_ci_gitea_client_secret"})," accordingly. The Gitea Redirect URL will be ",(0,o.jsx)(t.code,{children:"http://<ansible_nas_ip>:{{ drone_ci_port_http }}/login"})]}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"drone_ci_admin_user"})," to the same username as your user in Gitea."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
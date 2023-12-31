"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8316],{8328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(5893),o=n(1151);const a={title:"phpMyAdmin",description:"MySQL/MariaDB administration tool"},i=void 0,r={id:"applications/system-tools/phpmyadmin",title:"phpMyAdmin",description:"MySQL/MariaDB administration tool",source:"@site/docs/applications/system-tools/phpmyadmin.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/phpmyadmin",permalink:"/docs/applications/system-tools/phpmyadmin",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/system-tools/phpmyadmin.md",tags:[],version:"current",frontMatter:{title:"phpMyAdmin",description:"MySQL/MariaDB administration tool"},sidebar:"tutorialSidebar",previous:{title:"OpenLDAP",permalink:"/docs/applications/system-tools/openldap"},next:{title:"Portainer",permalink:"/docs/applications/system-tools/portainer"}},p={},d=[{value:"Usage",id:"usage",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Homepage: ",(0,s.jsx)(t.a,{href:"https://www.phpmyadmin.net/",children:"https://www.phpmyadmin.net/"})]}),"\n",(0,s.jsx)(t.p,{children:"phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web."}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["Set ",(0,s.jsx)(t.code,{children:"phpmyadmin_enabled: true"})," in your ",(0,s.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["phpmyadmin web interface can be found at ",(0,s.jsx)(t.a,{href:"http://ansible_nas_host_or_ip:8097",children:"http://ansible_nas_host_or_ip:8097"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Set ",(0,s.jsx)(t.code,{children:"phpmyadmin_databases"})," to a list of container names that you want to have available as selection of servers to connect to via phpMyAdmin."]}),"\n",(0,s.jsxs)(t.p,{children:["\u2757"," Make sure your ",(0,s.jsx)(t.code,{children:"phpmyadmin"})," and your database container are on the same docker network!"]}),"\n",(0,s.jsxs)(t.p,{children:["Set ",(0,s.jsx)(t.code,{children:"phpmyadmin_arbitrary"})," to ",(0,s.jsx)(t.code,{children:"true"})," to be able to enter an arbitrary address of a server to connect to. Be mindful about docker network routing and therefore network host reachability."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var s=n(7294);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);
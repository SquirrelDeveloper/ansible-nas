"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[4940],{7470:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=n(5893),r=n(1151);const a={title:"TiddlyWiki",description:"A notebook for capturing, organizing, and sharing information"},o=void 0,s={id:"applications/content-management/tiddlywiki",title:"TiddlyWiki",description:"A notebook for capturing, organizing, and sharing information",source:"@site/docs/applications/content-management/tiddlywiki.md",sourceDirName:"applications/content-management",slug:"/applications/content-management/tiddlywiki",permalink:"/ansible-nas/docs/applications/content-management/tiddlywiki",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/content-management/tiddlywiki.md",tags:[],version:"current",frontMatter:{title:"TiddlyWiki",description:"A notebook for capturing, organizing, and sharing information"},sidebar:"tutorialSidebar",previous:{title:"SuiteCRM",permalink:"/ansible-nas/docs/applications/content-management/suitecrm"},next:{title:"TriliumNext Notes",permalink:"/ansible-nas/docs/applications/content-management/trilium"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Data and Networking",id:"data-and-networking",level:3},{value:"Server Configuration",id:"server-configuration",level:3}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Homepage: ",(0,t.jsx)(i.a,{href:"https://www.tiddlywiki.com",children:"https://www.tiddlywiki.com"})]}),"\n",(0,t.jsx)(i.p,{children:"TiddlyWiki is a unique non-linear notebook for capturing, organizing, and sharing complex information. Use it to keep your to-do list, to plan an essay or novel, or to organise your wedding. Record every thought that crosses your brain, or build a flexible and responsive website. Unlike conventional online services, TiddlyWiki lets you choose where to keep your data, guaranteeing that in the decades to come you will still be able to use the notes you take today."}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"tiddlywiki_enabled: true"})," in your ",(0,t.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,t.jsxs)(i.p,{children:["If you want to access TiddlyWiki externally, set ",(0,t.jsx)(i.code,{children:"tiddlywiki_available_externally: true"})," in your ",(0,t.jsx)(i.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,t.jsxs)(i.p,{children:["The TiddlyWiki web interface can be found at ",(0,t.jsx)(i.a,{href:"http://ansible_nas_host_or_ip:8092",children:"http://ansible_nas_host_or_ip:8092"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,t.jsx)(i.p,{children:"The TiddlyWiki role has several configuration parameters. All parameters are optional."}),"\n",(0,t.jsx)(i.h3,{id:"data-and-networking",children:"Data and Networking"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"tiddlywiki_data_directory"}),(0,t.jsx)(i.td,{children:"Host location to store data"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"tiddlywiki_port"}),(0,t.jsx)(i.td,{children:"Host port for internal access"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"tiddlywiki_hostname"}),(0,t.jsx)(i.td,{children:"Subdomain for external access"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"server-configuration",children:"Server Configuration"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Parameter"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"tiddlywiki_username"}),(0,t.jsx)(i.td,{children:"Basic Auth username"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"tiddlywiki_password"}),(0,t.jsx)(i.td,{children:"Basic Auth password"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"tiddlywiki_node_memory"}),(0,t.jsx)(i.td,{children:"NodeJS memory allocation"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"tiddlywiki_debug_level"}),(0,t.jsx)(i.td,{children:"Service debugging"})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>o});var t=n(7294);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);
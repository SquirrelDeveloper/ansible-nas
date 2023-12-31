"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[9006],{3267:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=s(5893),n=s(1151);const o={title:"Mergerfs"},i=void 0,a={id:"applications/system-tools/mergerfs",title:"Mergerfs",description:"Homepage//github.com/trapexit/mergerfs",source:"@site/docs/applications/system-tools/mergerfs.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/mergerfs",permalink:"/docs/applications/system-tools/mergerfs",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/system-tools/mergerfs.md",tags:[],version:"current",frontMatter:{title:"Mergerfs"},sidebar:"tutorialSidebar",previous:{title:"Loki",permalink:"/docs/applications/system-tools/loki"},next:{title:"Minio",permalink:"/docs/applications/system-tools/minio"}},c={},l=[{value:"Usage",id:"usage",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Homepage: ",(0,r.jsx)(t.a,{href:"https://github.com/trapexit/mergerfs",children:"https://github.com/trapexit/mergerfs"})]}),"\n",(0,r.jsx)(t.p,{children:"mergerfs is a union filesystem geared towards simplifying storage and management of files across numerous commodity storage devices. It is similar to mhddfs, unionfs, and aufs."}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"mergerfs_enabled: true"})," in your ",(0,r.jsx)(t.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file.\nSet ",(0,r.jsx)(t.code,{children:"mergerfs_branches"})," to the list of paths you want to merge and ",(0,r.jsx)(t.code,{children:"mergerfs_mount"})," the the resulting merged mount."]}),"\n",(0,r.jsx)(t.p,{children:"This basic setting will create and enable mergerfs systemd service."}),"\n",(0,r.jsxs)(t.p,{children:["For more advanced usage, if you have Rclone installed and ",(0,r.jsx)(t.code,{children:"rclone_mount_enabled"}),", the role will create a service that will merge ",(0,r.jsx)(t.code,{children:"mergerfs_rclone_local_mount"})," and your ",(0,r.jsx)(t.code,{children:"rclone_mount"})," (so your mounted remote) together. This can be further augumented by cloud_upload (TBD) scripts that would periodically sync your ",(0,r.jsx)(t.code,{children:"mergerfs_rclone_local_path"})," to your rclone remote."]})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var r=s(7294);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
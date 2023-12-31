"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[5506],{1295:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var l=o(5893),s=o(1151);const t={title:"Rclone"},i=void 0,c={id:"applications/system-tools/rclone",title:"Rclone",description:"Homepage//rclone.org",source:"@site/docs/applications/system-tools/rclone.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/rclone",permalink:"/docs/applications/system-tools/rclone",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/system-tools/rclone.md",tags:[],version:"current",frontMatter:{title:"Rclone"},sidebar:"tutorialSidebar",previous:{title:"Promtail",permalink:"/docs/applications/system-tools/promtail"},next:{title:"Restic",permalink:"/docs/applications/system-tools/restic"}},r={},a=[{value:"Usage",id:"usage",level:2},{value:"Basic",id:"basic",level:3},{value:"Rclone mount",id:"rclone-mount",level:3},{value:"Cloud upload",id:"cloud-upload",level:3},{value:"Disabling",id:"disabling",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Homepage: ",(0,l.jsx)(n.a,{href:"https://rclone.org",children:"https://rclone.org"})]}),"\n",(0,l.jsx)(n.p,{children:"Rclone is a command-line program to manage files on cloud storage. It is a feature-rich alternative to cloud vendors' web storage interfaces. Over 40 cloud storage products support rclone including S3 object stores, business & consumer file storage services, as well as standard transfer protocols."}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"rclone_enabled: true"})," in your ",(0,l.jsx)(n.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file."]}),"\n",(0,l.jsxs)(n.p,{children:["Set all the rclone variables that you need (see ",(0,l.jsx)(n.code,{children:"defaults/main.yml"})," for reference), especially the ",(0,l.jsx)(n.code,{children:"rclone_configs"})," variable to have your remotes added to rclone config."]}),"\n",(0,l.jsxs)(n.p,{children:["The base version just installs Rclone using ",(0,l.jsx)(n.a,{href:"https://galaxy.ansible.com/stefangweichinger/ansible_rclone",children:"stefangweichinger.ansible_rclone"})," role."]}),"\n",(0,l.jsx)(n.h3,{id:"rclone-mount",children:"Rclone mount"}),"\n",(0,l.jsxs)(n.p,{children:["Optionally, you can enable ",(0,l.jsx)(n.code,{children:"rclone_mount_enabled: true"})," and then an Rclone service will be created based on you config, which will automatically mount the selected ",(0,l.jsx)(n.code,{children:"rclone_remote_to_mount"})," in ",(0,l.jsx)(n.code,{children:"rclone_remote_path_to_mount"})," location."]}),"\n",(0,l.jsx)(n.h3,{id:"cloud-upload",children:"Cloud upload"}),"\n",(0,l.jsxs)(n.p,{children:["Optionally, if Rclone mount is enabled and mergerfs is enabled, you can enable ",(0,l.jsx)(n.code,{children:"rclone_cloud_upload_enabled: true"})," and then a script will be created and added as a cron job, that will periodically execute ",(0,l.jsx)(n.code,{children:"rclone move"})," command to move files from your ",(0,l.jsx)(n.code,{children:"mergerfs_rclone_local_mount"})," to your ",(0,l.jsx)(n.code,{children:"rclone_remote_to_mount"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Only files older than ",(0,l.jsx)(n.code,{children:"rclone_cloud_upload_min_age"})," will be moved."]}),"\n",(0,l.jsxs)(n.li,{children:["Files matching ",(0,l.jsx)(n.code,{children:"rclone_cloud_upload_excludes"})," will be excluded from moving to remote"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"This is useful when you indeed use mergerfs to merge together some local directory (where you add new stuff) and Rclone remote (backup location). This way your applications can always see full content, but in the background a script will move files from local storage to remote storage, transparently to your applications."}),"\n",(0,l.jsx)(n.h3,{id:"disabling",children:"Disabling"}),"\n",(0,l.jsxs)(n.p,{children:["Disabling both ",(0,l.jsx)(n.code,{children:"rclone_enabled"})," and ",(0,l.jsx)(n.code,{children:"rclone_mount_enabled"})," and rerunning the playbook will disable and mask the created Rclone service.\nDisabling ",(0,l.jsx)(n.code,{children:"rclone_cloud_upload_enbled"})," will remove the cron job and script files."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var l=o(7294);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);
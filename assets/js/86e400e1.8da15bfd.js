"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[9403],{1381:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=r(5893),i=r(1151);const a={title:"Minecraft Server"},s=void 0,o={id:"applications/gaming/minecraft-server",title:"Minecraft Server",description:"Homepage//www.minecraft.net/",source:"@site/docs/applications/gaming/minecraft-server.md",sourceDirName:"applications/gaming",slug:"/applications/gaming/minecraft-server",permalink:"/ansible-nas/docs/applications/gaming/minecraft-server",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/gaming/minecraft-server.md",tags:[],version:"current",frontMatter:{title:"Minecraft Server"},sidebar:"tutorialSidebar",previous:{title:"Minecraft Bedrock Server",permalink:"/ansible-nas/docs/applications/gaming/minecraft-bedrock-server"},next:{title:"Minetest Server",permalink:"/ansible-nas/docs/applications/gaming/minetest-server"}},c={},l=[{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Homepage: ",(0,t.jsx)(n.a,{href:"https://www.minecraft.net/",children:"https://www.minecraft.net/"})]}),"\n",(0,t.jsx)(n.p,{children:'The server version of the game Minecraft, running in a container. "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."'}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"minecraft_server_enabled: true"})," in your ",(0,t.jsx)(n.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file.\nOptionally, set ",(0,t.jsx)(n.code,{children:"minecraft_server_install_rcon: true"})," to also install RCON alongside Minecraft Server."]}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"minecraft_server_optional_env"})," to a list of environment variables you need for the server. You can use many ",(0,t.jsx)(n.code,{children:"minecraft_server_*"})," variables alredy defined as defaults."]}),"\n",(0,t.jsx)(n.p,{children:"The Ansible NAS host or ip address should then be usable as a server within the Minecraft multiplayer game menu."}),"\n",(0,t.jsxs)(n.p,{children:["The image ",(0,t.jsx)(n.code,{children:"itzg/minecraft-server"})," has ",(0,t.jsx)(n.a,{href:"https://github.com/itzg/docker-minecraft-server/blob/master/README.md",children:"documentation"})," with further details on how to manage the Minecraft server instance."]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(7294);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);
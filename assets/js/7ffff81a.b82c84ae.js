"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[4350],{6629:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(5893),r=n(1151);const s={Title:"Calibre"},t=void 0,o={id:"applications/media-serving/calibre",title:"calibre",description:"Homepage//calibre-ebook.com",source:"@site/docs/applications/media-serving/calibre.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/calibre",permalink:"/ansible-nas/docs/applications/media-serving/calibre",draft:!1,unlisted:!1,editUrl:"https://github.com/anarion80/ansible-nas/tree/main/website/docs/applications/media-serving/calibre.md",tags:[],version:"current",frontMatter:{Title:"Calibre"},sidebar:"tutorialSidebar",previous:{title:"Calibre-web",permalink:"/ansible-nas/docs/applications/media-serving/calibre-web"},next:{title:"Emby",permalink:"/ansible-nas/docs/applications/media-serving/emby"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Ports",id:"ports",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Homepage: ",(0,a.jsx)(i.a,{href:"https://calibre-ebook.com",children:"https://calibre-ebook.com"})]}),"\n",(0,a.jsx)(i.p,{children:"Calibre is a powerful and easy to use e-book manager."}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(i.p,{children:["Set ",(0,a.jsx)(i.code,{children:"calibre_enabled: true"})," in your ",(0,a.jsx)(i.code,{children:"inventories/<your_inventory>/nas.yml"})," file."]}),"\n",(0,a.jsx)(i.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,a.jsxs)(i.p,{children:["By default, there is no password set for the main gui. Optional ",(0,a.jsx)(i.code,{children:"calibre_password"})," will allow setting a password for the user ",(0,a.jsx)(i.code,{children:"abc"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["Optionally, cli start arguments can be passed to calibre using ",(0,a.jsx)(i.code,{children:"calibre_cli_args"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"The Calibre webserver must be turned on in the Calibre manager to make it available at the selected port (8094 by default)."}),"\n",(0,a.jsx)(i.h2,{id:"ports",children:"Ports"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-yml",children:'calibre_port: "8093"\ncalibre_webserver_port: "8094"\n'})})]})}function p(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>t});var a=n(7294);const r={},s=a.createContext(r);function t(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);
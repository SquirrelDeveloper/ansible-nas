"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[4959],{938:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=i(5893),o=i(1151);const t={title:"Emby"},a=void 0,r={id:"applications/media-serving/emby",title:"Emby",description:"Homepage//emby.media/",source:"@site/docs/applications/media-serving/emby.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/emby",permalink:"/docs/applications/media-serving/emby",draft:!1,unlisted:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/media-serving/emby.md",tags:[],version:"current",frontMatter:{title:"Emby"},sidebar:"tutorialSidebar",previous:{title:"Calibre-web",permalink:"/docs/applications/media-serving/calibre"},next:{title:"Gaps",permalink:"/docs/applications/media-serving/gaps"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Naming movies and TV shows",id:"naming-movies-and-tv-shows",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Homepage: ",(0,s.jsx)(n.a,{href:"https://emby.media/",children:"https://emby.media/"})]}),"\n",(0,s.jsx)(n.p,{children:"Emby is a mostly open-source media server with a client-server model. This\ninstall for Ansible-NAS provides a server, which various clients can then\nconnect to from platforms such as other computers, smartphones and smart TVs."}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.a,{href:"https://www.plex.tv/",children:"Plex"}),", also included in Ansible-NAS, has a very\nsimilar functionality."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Set ",(0,s.jsx)(n.code,{children:"emby_enabled: true"})," in your ",(0,s.jsx)(n.code,{children:"inventories/<your_inventory>/group_vars/nas.yml"})," file. There are further\nparameters you can edit such as ",(0,s.jsx)(n.code,{children:"movies_root"})," and ",(0,s.jsx)(n.code,{children:"tv_root"})," lower down."]}),"\n",(0,s.jsx)(n.h2,{id:"specific-configuration",children:"Specific Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The emby web interface can be found at port 8096 (http) or 8920 (https, if\nconfigured) of your NAS. Heimdall has a dedicated icon for emby\nBy default, Ansible-NAS gives emby read/write access to the folders where your\nmovies and TV shows are stored. To change this to read-only, edit the following\nlines in ",(0,s.jsx)(n.code,{children:"all.yml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'        emby_movies_permissions: "rw"\n        emby_tv_permissions: "rw"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["so that they end in ",(0,s.jsx)(n.code,{children:"ro"})," instead of ",(0,s.jsx)(n.code,{children:"rw"}),". Note that emby will not be able to\ndelete files then, which might be exactly what you want. However, you will not\nhave the option to store cover art in the related folders. Always leave the\nconfiguration directory read/write"]}),"\n",(0,s.jsx)(n.h2,{id:"naming-movies-and-tv-shows",children:"Naming movies and TV shows"}),"\n",(0,s.jsxs)(n.p,{children:["Emby is very fussy about how movies and TV shows must be named to enable\nautomatic downloads of cover art and metadata. In short, movie files should\nfollow how movies are listed in the ",(0,s.jsx)(n.a,{href:"https://www.imdb.com/",children:"IMDb"}),", including the\nyear of publication:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-raw",children:"        movies/Bride of Frankenstein (1935).mp4\n"})}),"\n",(0,s.jsx)(n.p,{children:'Note the spaces. You should probably remove colons and other special characters\nTV shows require a folder structure with the name of the series - again if\npossible with the year of publication - followed by sub-folders for the\nindividual seasons. For example, the first episode of the first season of\nthe original "Doctor Who" could be stored as:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-raw",children:"        tv/Doctor Who (1963)/Season 1/Doctor Who - s01e01.mp4\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://www.thetvdb.com/",children:"TVDB"})," is one source for the exact names of TV\nshows."]}),"\n",(0,s.jsxs)(n.p,{children:["Unfortunately, there are number of special cases, especially related to split\nmovies and older series. See the ",(0,s.jsx)(n.a,{href:"https://github.com/MediaBrowser/Wiki/wiki/Movie%20naming",children:"movie\nnaming"})," and ",(0,s.jsx)(n.a,{href:"https://github.com/MediaBrowser/Wiki/wiki/TV-naming",children:"TV\nnaming"})," guides for further\ninformation."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var s=i(7294);const o={},t=s.createContext(o);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
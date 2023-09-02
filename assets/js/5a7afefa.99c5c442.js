"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[9116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={title:"Jellyfin"},o=void 0,l={unversionedId:"applications/media-serving/jellyfin",id:"applications/media-serving/jellyfin",title:"Jellyfin",description:"Homepage:",source:"@site/docs/applications/media-serving/jellyfin.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/jellyfin",permalink:"/docs/applications/media-serving/jellyfin",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/media-serving/jellyfin.md",tags:[],version:"current",frontMatter:{title:"Jellyfin"},sidebar:"tutorialSidebar",previous:{title:"Invidious",permalink:"/docs/applications/media-serving/invidious"},next:{title:"Kavita",permalink:"/docs/applications/media-serving/kavita"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Naming movies and TV shows",id:"naming-movies-and-tv-shows",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://jellyfin.org/"},"https://jellyfin.org/")),(0,r.kt)("p",null,"Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media. It is an alternative to the proprietary Emby and Plex, to provide media from a dedicated server to end-user devices via multiple apps. Jellyfin is descended from Emby's 3.5.2 release and ported to the .NET Core framework to enable full cross-platform support. There are no strings attached, no premium licenses or features, and no hidden agendas: just a team who want to build something better and work together to achieve it. We welcome anyone who is interested in joining us in our quest!"),(0,r.kt)("p",null,"Note that ",(0,r.kt)("a",{parentName:"p",href:"https://www.plex.tv/"},"Plex"),", also included in Ansible-NAS, has a very\nsimilar functionality."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"jellyfin_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. There are further\nparameters you can edit such as ",(0,r.kt)("inlineCode",{parentName:"p"},"movies_root"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tv_root")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"music_root")," lower down"),(0,r.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,r.kt)("p",null,"The jellyfin web interface can be found at port 8896 (http) or 8928 (https, if\nconfigured) of your NAS."),(0,r.kt)("p",null,"By default, Ansible-NAS gives jellyfin read/write access to the folders where your\nmovies, TV shows and music are stored. To change this to read-only, edit the following\nlines in ",(0,r.kt)("inlineCode",{parentName:"p"},"all.yml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'        jellyfin_movies_permissions: "rw"\n        jellyfin_tv_permissions: "rw"\n        jellyfin_books_permissions: "rw"\n        jellyfin_audiobooks_permissions: "rw"\n        jellyfin_music_permissions: "rw"\n')),(0,r.kt)("p",null,"so that they end in ",(0,r.kt)("inlineCode",{parentName:"p"},"ro")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"rw"),". Note that jellyfin will not be able to\ndelete files then, which might be exactly what you want. However, you will not\nhave the option to store cover art in the related folders. Always leave the\nconfiguration directory read/write"),(0,r.kt)("h2",{id:"naming-movies-and-tv-shows"},"Naming movies and TV shows"),(0,r.kt)("p",null,"jellyfin is very fussy about how movies and TV shows must be named to enable\nautomatic downloads of cover art and metadata. In short, movie files should\nfollow how movies are listed in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.imdb.com/"},"IMDb"),", including the\nyear of publication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-raw"},"        movies/Bride of Frankenstein (1935).mp4\n")),(0,r.kt)("p",null,'Note the spaces. You should probably remove colons and other special characters\nTV shows require a folder structure with the name of the series - again if\npossible with the year of publication - followed by sub-folders for the\nindividual seasons. For example, the first episode of the first season of\nthe original "Doctor Who" could be stored as:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-raw"},"        tv/Doctor Who (1963)/Season 1/Doctor Who - s01e01.mp4\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.thetvdb.com/"},"TVDB")," is one source for the exact names of TV\nshows."),(0,r.kt)("p",null,"Unfortunately, there are number of special cases, especially related to split\nmovies and older series. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MediaBrowser/Wiki/wiki/Movie%20naming"},"movie\nnaming")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MediaBrowser/Wiki/wiki/TV-naming"},"TV\nnaming")," guides for further\ninformation."))}u.isMDXComponent=!0}}]);
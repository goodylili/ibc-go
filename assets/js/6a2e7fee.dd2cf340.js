"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[334],{37464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(85893),o=t(11151);const r={title:"Routing",sidebar_label:"Routing",sidebar_position:6,slug:"/ibc/apps/routing"},s="Routing",a={id:"ibc/apps/routing",title:"Routing",description:"Pre-requisite readings",source:"@site/versioned_docs/version-v7.8.x/01-ibc/03-apps/06-routing.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/routing",permalink:"/v7/ibc/apps/routing",draft:!1,unlisted:!1,tags:[],version:"v7.8.x",sidebarPosition:6,frontMatter:{title:"Routing",sidebar_label:"Routing",sidebar_position:6,slug:"/ibc/apps/routing"},sidebar:"defaultSidebar",previous:{title:"Define packets and acks",permalink:"/v7/ibc/apps/packets_acks"},next:{title:"IBC middleware",permalink:"/v7/ibc/middleware/develop"}},c={},d=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"routing",children:"Routing"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.h2,{id:"pre-requisite-readings",children:"Pre-requisite readings"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/v7/ibc/overview",children:"IBC Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/v7/ibc/integration",children:"IBC default integration"})}),"\n"]})]}),"\n",(0,i.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,i.jsx)(n.p,{children:"Learn how to hook a route to the IBC router for the custom IBC module."})}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned above, modules must implement the ",(0,i.jsx)(n.code,{children:"IBCModule"})," interface (which contains both channel\nhandshake callbacks and packet handling callbacks). The concrete implementation of this interface\nmust be registered with the module name as a route on the IBC ",(0,i.jsx)(n.code,{children:"Router"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"// app.go\nfunc NewApp(...args) *App {\n// ...\n\n// Create static IBC router, add module routes, then set and seal it\nibcRouter := port.NewRouter()\n\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferModule)\n// Note: moduleCallbacks must implement IBCModule interface\nibcRouter.AddRoute(moduleName, moduleCallbacks)\n\n// Setting Router will finalize all routes by sealing router\n// No more routes can be added\napp.IBCKeeper.SetRouter(ibcRouter)\n\n// ...\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
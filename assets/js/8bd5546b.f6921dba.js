"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1906],{34693:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=s(85893),t=s(11151);const a={title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},o="Parameters",d={id:"apps/transfer/params",title:"Params",description:"The IBC transfer application module contains the following parameters:",source:"@site/versioned_docs/version-v7.8.x/02-apps/01-transfer/07-params.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/params",permalink:"/v7/apps/transfer/params",draft:!1,unlisted:!1,tags:[],version:"v7.8.x",sidebarPosition:7,frontMatter:{title:"Params",sidebar_label:"Params",sidebar_position:7,slug:"/apps/transfer/params"},sidebar:"defaultSidebar",previous:{title:"Metrics",permalink:"/v7/apps/transfer/metrics"},next:{title:"Authorizations",permalink:"/v7/apps/transfer/authorizations"}},i={},l=[{value:"<code>SendEnabled</code>",id:"sendenabled",level:2},{value:"<code>ReceiveEnabled</code>",id:"receiveenabled",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The IBC transfer application module contains the following parameters:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SendEnabled"})}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReceiveEnabled"})}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"sendenabled",children:(0,r.jsx)(n.code,{children:"SendEnabled"})}),"\n",(0,r.jsx)(n.p,{children:"The transfers enabled parameter controls send cross-chain transfer capabilities for all fungible tokens."}),"\n",(0,r.jsxs)(n.p,{children:["To prevent a single token from being transferred from the chain, set the ",(0,r.jsx)(n.code,{children:"SendEnabled"})," parameter to ",(0,r.jsx)(n.code,{children:"true"})," and then, depending on the Cosmos SDK version, do one of the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,r.jsxs)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled",children:[(0,r.jsx)(n.code,{children:"SendEnabled"})," parameter"]})," for the denomination to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,r.jsx)(n.code,{children:"SendEnabled"})," entry for the denomination to ",(0,r.jsx)(n.code,{children:"false"})," using ",(0,r.jsx)(n.code,{children:"MsgSetSendEnabled"})," as a governance proposal."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"receiveenabled",children:(0,r.jsx)(n.code,{children:"ReceiveEnabled"})}),"\n",(0,r.jsx)(n.p,{children:"The transfers enabled parameter controls receive cross-chain transfer capabilities for all fungible tokens."}),"\n",(0,r.jsxs)(n.p,{children:["To prevent a single token from being transferred to the chain, set the ",(0,r.jsx)(n.code,{children:"ReceiveEnabled"})," parameter to ",(0,r.jsx)(n.code,{children:"true"})," and then, depending on the Cosmos SDK version, do one of the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK v0.46.x or earlier, set the bank module's ",(0,r.jsxs)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/release/v0.46.x/x/bank/spec/05_params.md#sendenabled",children:[(0,r.jsx)(n.code,{children:"SendEnabled"})," parameter"]})," for the denomination to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For Cosmos SDK versions above v0.46.x, set the bank module's ",(0,r.jsx)(n.code,{children:"SendEnabled"})," entry for the denomination to ",(0,r.jsx)(n.code,{children:"false"})," using ",(0,r.jsx)(n.code,{children:"MsgSetSendEnabled"})," as a governance proposal."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var r=s(67294);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
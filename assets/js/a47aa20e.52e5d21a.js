"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6105],{36980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(85893),s=n(11151);const a={title:"Authorizations",sidebar_label:"Authorizations",sidebar_position:8,slug:"/apps/transfer/authorizations"},r="TransferAuthorization",o={id:"apps/transfer/authorizations",title:"Authorizations",description:"TransferAuthorization implements the Authorization interface for ibc.applications.transfer.v1.MsgTransfer. It allows a granter to grant a grantee the privilege to submit MsgTransfer on its behalf. Please see the Cosmos SDK docs for more details on granting privileges via the x/authz module.",source:"@site/versioned_docs/version-v8.5.x/02-apps/01-transfer/08-authorizations.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/authorizations",permalink:"/v8/apps/transfer/authorizations",draft:!1,unlisted:!1,tags:[],version:"v8.5.x",sidebarPosition:8,frontMatter:{title:"Authorizations",sidebar_label:"Authorizations",sidebar_position:8,slug:"/apps/transfer/authorizations"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/v8/apps/transfer/params"},next:{title:"Client",permalink:"/v8/apps/transfer/client"}},l={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"transferauthorization",children:(0,i.jsx)(t.code,{children:"TransferAuthorization"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"TransferAuthorization"})," implements the ",(0,i.jsx)(t.code,{children:"Authorization"})," interface for ",(0,i.jsx)(t.code,{children:"ibc.applications.transfer.v1.MsgTransfer"}),". It allows a granter to grant a grantee the privilege to submit ",(0,i.jsx)(t.code,{children:"MsgTransfer"})," on its behalf. Please see the ",(0,i.jsx)(t.a,{href:"https://docs.cosmos.network/v0.47/modules/authz",children:"Cosmos SDK docs"})," for more details on granting privileges via the ",(0,i.jsx)(t.code,{children:"x/authz"})," module."]}),"\n",(0,i.jsx)(t.p,{children:"More specifically, the granter allows the grantee to transfer funds that belong to the granter over a specified channel."}),"\n",(0,i.jsx)(t.p,{children:"For the specified channel, the granter must be able to specify a spend limit of a specific denomination they wish to allow the grantee to be able to transfer."}),"\n",(0,i.jsx)(t.p,{children:"The granter may be able to specify the list of addresses that they allow to receive funds. If empty, then all addresses are allowed."}),"\n",(0,i.jsx)(t.p,{children:"It takes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["a ",(0,i.jsx)(t.code,{children:"SourcePort"})," and a ",(0,i.jsx)(t.code,{children:"SourceChannel"})," which together comprise the unique transfer channel identifier over which authorized funds can be transferred."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["a ",(0,i.jsx)(t.code,{children:"SpendLimit"})," that specifies the maximum amount of tokens the grantee can transfer. The ",(0,i.jsx)(t.code,{children:"SpendLimit"})," is updated as the tokens are transferred, unless the sentinel value of the maximum value for a 256-bit unsigned integer (i.e. 2^256 - 1) is used for the amount, in which case the ",(0,i.jsx)(t.code,{children:"SpendLimit"})," will not be updated (please be aware that using this sentinel value will grant the grantee the privilege to transfer ",(0,i.jsx)(t.strong,{children:"all"})," the tokens of a given denomination available at the granter's account). The helper function ",(0,i.jsx)(t.code,{children:"UnboundedSpendLimit"})," in the ",(0,i.jsx)(t.code,{children:"types"})," package of the ",(0,i.jsx)(t.code,{children:"transfer"})," module provides the sentinel value that can be used. This ",(0,i.jsx)(t.code,{children:"SpendLimit"})," may also be updated to increase or decrease the limit as the granter wishes."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["an ",(0,i.jsx)(t.code,{children:"AllowList"})," list that specifies the list of addresses that are allowed to receive funds. If this list is empty, then all addresses are allowed to receive funds from the ",(0,i.jsx)(t.code,{children:"TransferAuthorization"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["an ",(0,i.jsx)(t.code,{children:"AllowedPacketData"})," list that specifies the list of memo strings that are allowed to be included in the memo field of the packet. If this list is empty, then only an empty memo is allowed (a ",(0,i.jsx)(t.code,{children:"memo"})," field with non-empty content will be denied). If this list includes a single element equal to ",(0,i.jsx)(t.code,{children:'"*"'}),", then any content in the ",(0,i.jsx)(t.code,{children:"memo"})," field will be allowed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Setting a ",(0,i.jsx)(t.code,{children:"TransferAuthorization"})," is expected to fail if:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"the spend limit is nil"}),"\n",(0,i.jsx)(t.li,{children:"the denomination of the spend limit is an invalid coin type"}),"\n",(0,i.jsx)(t.li,{children:"the source port ID is invalid"}),"\n",(0,i.jsx)(t.li,{children:"the source channel ID is invalid"}),"\n",(0,i.jsxs)(t.li,{children:["there are duplicate entries in the ",(0,i.jsx)(t.code,{children:"AllowList"})]}),"\n",(0,i.jsxs)(t.li,{children:["the ",(0,i.jsx)(t.code,{children:"memo"})," field is not allowed by ",(0,i.jsx)(t.code,{children:"AllowedPacketData"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Below is the ",(0,i.jsx)(t.code,{children:"TransferAuthorization"})," message:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'func NewTransferAuthorization(allocations ...Allocation) *TransferAuthorization {\n  return &TransferAuthorization{\n    Allocations: allocations,\n  }\n}\n\ntype Allocation struct {\n  // the port on which the packet will be sent\n  SourcePort string \n  // the channel by which the packet will be sent\n  SourceChannel string \n  // spend limitation on the channel\n  SpendLimit sdk.Coins  \n  // allow list of receivers, an empty allow list permits any receiver address\n  AllowList []string \n  // allow list of packet data keys, an empty list prohibits all packet data keys;\n  // a list only with "*" permits any packet data key\n  AllowedPacketData []string \n}\n\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
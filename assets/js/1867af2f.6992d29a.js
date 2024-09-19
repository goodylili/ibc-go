"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4259],{6593:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=n(85893),r=n(11151);const t={title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},a="Messages",o={id:"apps/transfer/messages",title:"Messages",description:"MsgTransfer",source:"@site/versioned_docs/version-v7.8.x/02-apps/01-transfer/04-messages.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/messages",permalink:"/v7/apps/transfer/messages",draft:!1,unlisted:!1,tags:[],version:"v7.8.x",sidebarPosition:4,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:4,slug:"/apps/transfer/messages"},sidebar:"defaultSidebar",previous:{title:"State Transitions",permalink:"/v7/apps/transfer/state-transitions"},next:{title:"Events",permalink:"/v7/apps/transfer/events"}},c={},d=[{value:"<code>MsgTransfer</code>",id:"msgtransfer",level:2},{value:"Memo",id:"memo",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"messages",children:"Messages"}),"\n",(0,i.jsx)(s.h2,{id:"msgtransfer",children:(0,i.jsx)(s.code,{children:"MsgTransfer"})}),"\n",(0,i.jsxs)(s.p,{children:["A fungible token cross chain transfer is achieved by using the ",(0,i.jsx)(s.code,{children:"MsgTransfer"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-go",children:"type MsgTransfer struct {\n  SourcePort        string\n  SourceChannel     string\n  Token             sdk.Coin\n  Sender            string\n  Receiver          string\n  TimeoutHeight     ibcexported.Height\n  TimeoutTimestamp  uint64\n  Memo              string\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:"This message is expected to fail if:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SourcePort"})," is invalid (see ",(0,i.jsx)(s.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"SourceChannel"})," is invalid (see ",(0,i.jsx)(s.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Token"})," is invalid (denom is invalid or amount is negative)","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Token.Amount"})," is not positive."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Token.Denom"})," is not a valid IBC denomination as per ",(0,i.jsx)(s.a,{href:"/architecture/adr-001-coin-source-tracing",children:"ADR 001 - Coin Source Tracing"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Sender"})," is empty."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Receiver"})," is empty or contains more than 2048 bytes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"Memo"})," contains more than 32768 bytes."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"TimeoutHeight"})," and ",(0,i.jsx)(s.code,{children:"TimeoutTimestamp"})," are both zero."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["This message will send a fungible token to the counterparty chain represented by the counterparty Channel End connected to the Channel End with the identifiers ",(0,i.jsx)(s.code,{children:"SourcePort"})," and ",(0,i.jsx)(s.code,{children:"SourceChannel"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"The denomination provided for transfer should correspond to the same denomination represented on this chain. The prefixes will be added as necessary upon by the receiving chain."}),"\n",(0,i.jsxs)(s.p,{children:["If the ",(0,i.jsx)(s.code,{children:"Amount"})," is set to the maximum value for a 256-bit unsigned integer (i.e. 2^256 - 1), then the whole balance of the corresponding denomination will be transferred. The helper function ",(0,i.jsx)(s.code,{children:"UnboundedSpendLimit"})," in the ",(0,i.jsx)(s.code,{children:"types"})," package of the ",(0,i.jsx)(s.code,{children:"transfer"})," module provides the sentinel value that can be used."]}),"\n",(0,i.jsx)(s.h3,{id:"memo",children:"Memo"}),"\n",(0,i.jsx)(s.p,{children:"The memo field was added to allow applications and users to attach metadata to transfer packets. The field is optional and may be left empty. When it is used to attach metadata for a particular middleware, the memo field should be represented as a json object where different middlewares use different json keys."}),"\n",(0,i.jsxs)(s.p,{children:["For example, the following memo field is used by the ",(0,i.jsx)(s.a,{href:"/v7/middleware/callbacks/overview",children:"callbacks middleware"})," to attach a source callback to a transfer packet:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsonc",children:'{\n  "src_callback": {\n    "address": "callbackAddressString",\n    // optional\n    "gas_limit": "userDefinedGasLimitString",\n  }\n}\n'})}),"\n",(0,i.jsxs)(s.p,{children:["You can find more information about other applications that use the memo field in the ",(0,i.jsx)(s.a,{href:"https://github.com/cosmos/chain-registry/blob/master/_memo_keys/ICS20_memo_keys.json",children:"chain registry"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var i=n(67294);const r={},t=i.createContext(r);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
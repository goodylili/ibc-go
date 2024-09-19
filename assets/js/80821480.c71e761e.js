"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4805],{71955:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(85893),i=n(11151);const r={title:"Support transfer of coins whose base denom contains slashes",sidebar_label:"Support transfer of coins whose base denom contains slashes",sidebar_position:1,slug:"/migrations/support-denoms-with-slashes"},a="Migrating from not supporting base denoms with slashes to supporting base denoms with slashes",o={id:"migrations/support-denoms-with-slashes",title:"Support transfer of coins whose base denom contains slashes",description:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.",source:"@site/versioned_docs/version-v8.5.x/05-migrations/01-support-denoms-with-slashes.md",sourceDirName:"05-migrations",slug:"/migrations/support-denoms-with-slashes",permalink:"/v8/migrations/support-denoms-with-slashes",draft:!1,unlisted:!1,tags:[],version:"v8.5.x",sidebarPosition:1,frontMatter:{title:"Support transfer of coins whose base denom contains slashes",sidebar_label:"Support transfer of coins whose base denom contains slashes",sidebar_position:1,slug:"/migrations/support-denoms-with-slashes"},sidebar:"defaultSidebar",previous:{title:"Gas Management",permalink:"/v8/middleware/callbacks/gas"},next:{title:"SDK v0.43 to IBC-Go v1",permalink:"/v8/migrations/sdk-to-v1"}},c={},l=[{value:"Chains",id:"chains",level:2},{value:"ICS20 - Transfer",id:"ics20---transfer",level:3},{value:"Upgrade Proposal",id:"upgrade-proposal",level:3},{value:"Genesis Migration",id:"genesis-migration",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"migrating-from-not-supporting-base-denoms-with-slashes-to-supporting-base-denoms-with-slashes",children:"Migrating from not supporting base denoms with slashes to supporting base denoms with slashes"}),"\n",(0,t.jsx)(s.p,{children:"This document is intended to highlight significant changes which may require more information than presented in the CHANGELOG.\nAny changes that must be done by a user of ibc-go should be documented here."}),"\n",(0,t.jsx)(s.p,{children:"There are four sections based on the four potential user groups of this document:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Chains"}),"\n",(0,t.jsx)(s.li,{children:"IBC Apps"}),"\n",(0,t.jsx)(s.li,{children:"Relayers"}),"\n",(0,t.jsx)(s.li,{children:"IBC Light Clients"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["This document is necessary when chains are upgrading from a version that does not support base denoms with slashes (e.g. v3.0.0) to a version that does (e.g. v3.2.0). All versions of ibc-go smaller than v1.5.0 for the v1.x release line, v2.3.0 for the v2.x release line, and v3.1.0 for the v3.x release line do ",(0,t.jsx)(s.strong,{children:"NOT"})," support IBC token transfers of coins whose base denoms contain slashes. Therefore the in-place of genesis migration described in this document are required when upgrading."]}),"\n",(0,t.jsx)(s.p,{children:"If a chain receives coins of a base denom with slashes before it upgrades to supporting it, the receive may pass however the trace information will be incorrect."}),"\n",(0,t.jsxs)(s.p,{children:["E.g. If a base denom of ",(0,t.jsx)(s.code,{children:"testcoin/testcoin/testcoin"})," is sent to a chain that does not support slashes in the base denom, the receive will be successful. However, the trace information stored on the receiving chain will be: ",(0,t.jsx)(s.code,{children:'Trace: "transfer/{channel-id}/testcoin/testcoin", BaseDenom: "testcoin"'}),"."]}),"\n",(0,t.jsx)(s.p,{children:"This incorrect trace information must be corrected when the chain does upgrade to fully supporting denominations with slashes."}),"\n",(0,t.jsx)(s.p,{children:"To do so, chain binaries should include a migration script that will run when the chain upgrades from not supporting base denominations with slashes to supporting base denominations with slashes."}),"\n",(0,t.jsx)(s.h2,{id:"chains",children:"Chains"}),"\n",(0,t.jsx)(s.h3,{id:"ics20---transfer",children:"ICS20 - Transfer"}),"\n",(0,t.jsx)(s.p,{children:"The transfer module will now support slashes in base denoms, so we must iterate over current traces to check if any of them are incorrectly formed and correct the trace information."}),"\n",(0,t.jsx)(s.h3,{id:"upgrade-proposal",children:"Upgrade Proposal"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'app.UpgradeKeeper.SetUpgradeHandler("MigrateTraces",\n  func(ctx sdk.Context, _ upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {\n    // transfer module consensus version has been bumped to 2\n    return app.mm.RunMigrations(ctx, app.configurator, fromVM)\n  })\n'})}),"\n",(0,t.jsx)(s.p,{children:"This is only necessary if there are denom traces in the store with incorrect trace information from previously received coins that had a slash in the base denom. However, it is recommended that any chain upgrading to support base denominations with slashes runs this code for safety."}),"\n",(0,t.jsxs)(s.p,{children:["For a more detailed sample, please check out the code changes in ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/pull/1680",children:"this pull request"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"genesis-migration",children:"Genesis Migration"}),"\n",(0,t.jsx)(s.p,{children:"If the chain chooses to add support for slashes in base denoms via genesis export, then the trace information must be corrected during genesis migration."}),"\n",(0,t.jsx)(s.p,{children:"The migration code required may look like:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:"func migrateGenesisSlashedDenomsUpgrade(appState genutiltypes.AppMap, clientCtx client.Context, genDoc *tmtypes.GenesisDoc) (genutiltypes.AppMap, error) {\n if appState[ibctransfertypes.ModuleName] != nil {\n  transferGenState := &ibctransfertypes.GenesisState{}\n  clientCtx.Codec.MustUnmarshalJSON(appState[ibctransfertypes.ModuleName], transferGenState)\n\n  substituteTraces := make([]ibctransfertypes.DenomTrace, len(transferGenState.DenomTraces))\n  for i, dt := range transferGenState.DenomTraces {\n    // replace all previous traces with the latest trace if validation passes\n    // note most traces will have same value\n    newTrace := ibctransfertypes.ParseDenomTrace(dt.GetFullDenomPath())\n\n    if err := newTrace.Validate(); err != nil {\n      substituteTraces[i] = dt\n    } else {\n      substituteTraces[i] = newTrace\n    }\n  }\n\n  transferGenState.DenomTraces = substituteTraces\n\n  // delete old genesis state\n  delete(appState, ibctransfertypes.ModuleName)\n\n  // set new ibc transfer genesis state\n  appState[ibctransfertypes.ModuleName] = clientCtx.Codec.MustMarshalJSON(transferGenState)\n }\n\n return appState, nil\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For a more detailed sample, please check out the code changes in ",(0,t.jsx)(s.a,{href:"https://github.com/cosmos/ibc-go/pull/1528",children:"this pull request"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var t=n(67294);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
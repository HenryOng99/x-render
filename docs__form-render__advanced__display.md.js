(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0zqC":function(B,m,l){"use strict";l.r(m);var r=l("tJVT"),e=l("q1tI"),t=l.n(e),C=l("k3GJ"),n=l("MZF8"),a=l("dEAq"),h=l.n(a),f=l("ZpkN"),F=l("TIsu"),y=l.n(F);function s(E,d){var i,c=(i=E.match(/\.(\w+)$/))===null||i===void 0?void 0:i[1];return c||(c=d.tsx?"tsx":"jsx"),c}var v=E=>{var d,i,c,O=Object(e.useRef)(),R=Object(e.useContext)(a.context),b=R.locale,u=Object(a.useLocaleProps)(b,E),x=Object(a.useDemoUrl)(u.identifier),P=u.demoUrl||x,k=(n.e===null||n.e===void 0?void 0:n.e.location.hash)==="#".concat(u.identifier),U=Object.keys(u.sources).length===1,M=Object(a.useCodeSandbox)((d=u.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:u),w=Object(a.useRiddle)((i=u.hideActions)!==null&&i!==void 0&&i.includes("RIDDLE")?null:u),K=Object(a.useMotions)(u.motions||[],O.current),N=Object(r.default)(K,2),W=N[0],J=N[1],$=Object(a.useCopy)(),g=Object(r.default)($,2),G=g[0],z=g[1],X=Object(e.useState)("_"),T=Object(r.default)(X,2),_=T[0],Z=T[1],H=Object(e.useState)(s(_,u.sources[_])),I=Object(r.default)(H,2),A=I[0],V=I[1],Q=Object(e.useState)(Boolean(u.defaultShowCode)),L=Object(r.default)(Q,2),p=L[0],Y=L[1],q=Object(e.useState)(Math.random()),S=Object(r.default)(q,2),ee=S[0],j=S[1],D=u.sources[_][A]||u.sources[_].content,ue=Object(a.useTSPlaygroundUrl)(b,D),te=Object(e.useRef)(),ae=Object(a.usePrefersColor)(),le=Object(r.default)(ae,1),ne=le[0];Object(e.useEffect)(()=>{j(Math.random())},[ne]);function re(o){Z(o),V(s(o,u.sources[o]))}return t.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",k?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0,"data-iframe":u.iframe||void 0},u.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:u.transform?"translate(0, 0)":void 0,padding:u.compact||u.iframe&&u.compact!==!1?"0":void 0,background:u.background}},u.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(u.iframe).replace(/(\d)$/,"$1px")},key:ee,src:P,ref:te}):u.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&t.a.createElement(a.AnchorLink,{to:"#".concat(u.identifier)},u.title),u.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},M&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:M}),w&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),u.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>W()}),u.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>j(Math.random())}),!((c=u.hideActions)!==null&&c!==void 0&&c.includes("EXTERNAL"))&&t.a.createElement(a.Link,{target:"_blank",to:P},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":z,onClick:()=>G(D)}),A==="tsx"&&p&&t.a.createElement(a.Link,{target:"_blank",to:ue},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(p?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Y(!p)})),p&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!U&&t.a.createElement(C.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:re},Object.keys(u.sources).map(o=>t.a.createElement(C.TabPane,{tab:o==="_"?"index.".concat(s(o,u.sources[o])):o,key:o}))),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(f.a,{code:D,lang:A,showCopy:!1}))))};m.default=v},LiGJ:function(B,m,l){"use strict";l.r(m);var r=l("q1tI"),e=l.n(r),t=l("dEAq"),C=l.n(t),n=l("0zqC"),a=l("JjdP"),h=e.a.memo(a.default["display-demo"].component),f=e.a.memo(a.default["display-demo-1"].component),F=e.a.memo(a.default["display-demo-2"].component),y=e.a.memo(a.default["display-demo-3"].component),s=e.a.memo(a.default["display-demo-4"].component),v=e.a.memo(a.default["display-demo-5"].component),E=e.a.memo(a.default["display-demo-6"].component),d=e.a.memo(a.default["display-demo-7"].component);m.default=function(){return e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5"},e.a.createElement(t.AnchorLink,{to:"#\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5"),e.a.createElement("h2",{id:"displaytype"},e.a.createElement(t.AnchorLink,{to:"#displaytype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"displayType")),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A'row' | 'column' | 'inline'"),e.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A 'column'"),e.a.createElement("li",null,"\u8BF4\u660E\uFF1A\u7528\u4E8E\u63A7\u5236\u6807\u7B7E\u7684\u4F4D\u7F6E\u3002\u6CA1\u6709\u7279\u6B8A\u60C5\u51B5\uFF0C\u4E00\u822C\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u7684 display: column\u3002\u6CE8\u610F ",e.a.createElement("code",null,"displayType")," \u65E2\u662F props\uFF0C\u53C8\u662F schema \u7684\u5B57\u6BB5\uFF0C\u53EF\u4EE5"))),e.a.createElement(n.default,a.default["display-demo"].previewerProps,e.a.createElement(h,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("p",null,"\u975E\u5E38\u7279\u522B\u7684\u60C5\u51B5\uFF0C\u4F1A\u7528\u5230 display: inline")),e.a.createElement(n.default,a.default["display-demo-1"].previewerProps,e.a.createElement(f,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"readonly"},e.a.createElement(t.AnchorLink,{to:"#readonly","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"ReadOnly"),e.a.createElement("p",null,"\u65B0\u589E\u4E86\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u5728 <Form /> \u7EC4\u4EF6\u4E0A\u7528 props \u58F0\u660E")),e.a.createElement(n.default,a.default["display-demo-2"].previewerProps,e.a.createElement(F,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"labelwidth"},e.a.createElement(t.AnchorLink,{to:"#labelwidth","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"labelWidth"),e.a.createElement("p",null,"\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u5728\u9876\u5C42\u7528 props \u58F0\u660E\uFF0C\u6216\u8005\u5728\u6BCF\u4E2A schema \u4E2D\u5355\u72EC\u58F0\u660E"),e.a.createElement("h3",{id:"width"},e.a.createElement(t.AnchorLink,{to:"#width","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"width"),e.a.createElement("p",null,"\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u5728\u6BCF\u4E2A schema \u4E2D\u5355\u72EC\u58F0\u660E\u3002\u6CA1\u6709\u7279\u522B\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u4E00\u884C\u4E00\u4E2A\u5143\u7D20\uFF08\u5373\u9ED8\u8BA4\u7684 100%\uFF09\uFF0C\u7B26\u5408\u7528\u6237\u586B\u5199\u8868\u5355\u7684\u4E60\u60EF")),e.a.createElement(n.default,a.default["display-demo-3"].previewerProps,e.a.createElement(y,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"\u5217\u8868\u7684\u5C55\u793A"},e.a.createElement(t.AnchorLink,{to:"#\u5217\u8868\u7684\u5C55\u793A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5217\u8868\u7684\u5C55\u793A"),e.a.createElement("p",null,"\u5217\u8868\u7684\u5C55\u793A\u5BF9\u4E8E\u7B80\u5355\u9700\u6C42\u5360\u4F4D\u592A\u591A\uFF0C\u590D\u6742\u9700\u6C42\u5B9A\u5236\u4E0D\u591F\u4E00\u76F4\u662F\u75DB\u70B9\u3002\u6240\u4EE5\u6211\u4EEC\u7ED9\u51FA\u4E86\u56DB\u79CD\u5C55\u793A\uFF0C\u5145\u5206\u6EE1\u8DB3\u4ECE\u6781\u7B80\u5230\u590D\u6742\u7684\u6240\u6709\u9700\u6C42"),e.a.createElement("ol",null,e.a.createElement("li",null,"\u9ED8\u8BA4\u5C55\u793A\u4F7F\u7528 widget: 'list0'\uFF0C\u5361\u7247\u7C7B\u578B\uFF0C\u7528\u4E8E\u5C55\u793A\u6570\u91CF\u4E0D\u592A\u591A\u4F46\u7ED3\u6784\u590D\u6742\u7684 list"))),e.a.createElement(n.default,a.default["display-demo-4"].previewerProps,e.a.createElement(s,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("ol",{start:2},e.a.createElement("li",null,"widget: 'list1' \u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 1-3 \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5"))),e.a.createElement(n.default,a.default["display-demo-5"].previewerProps,e.a.createElement(v,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("ol",{start:3},e.a.createElement("li",null,"widget: 'list2' \u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 3 - n \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5\uFF0C\u7279\u522B\u662F\u6570\u636E\u91CF\u5F88\u5927\u9700\u8981\u5206\u9875\u7684"))),e.a.createElement(n.default,a.default["display-demo-6"].previewerProps,e.a.createElement(E,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("ol",{start:4},e.a.createElement("li",null,"widget: 'list3' \u7528\u4E8E\u5C55\u793A\u5B58\u5728\u5217\u8868\u5957\u5217\u8868\uFF0C\u5217\u8868\u5957\u5BF9\u8C61\u7B49\u590D\u6742\u5143\u7D20\u7684\u60C5\u51B5"))),e.a.createElement(n.default,a.default["display-demo-7"].previewerProps,e.a.createElement(d,null))))}},TIsu:function(B,m,l){}}]);
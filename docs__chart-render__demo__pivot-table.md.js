(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0zqC":function(b,c,u){"use strict";u.r(c);var l=u("tJVT"),e=u("q1tI"),a=u.n(e),E=u("k3GJ"),o=u("MZF8"),n=u("dEAq"),A=u.n(n),f=u("ZpkN"),v=u("TIsu"),re=u.n(v);function p(C,s){var i,d=(i=C.match(/\.(\w+)$/))===null||i===void 0?void 0:i[1];return d||(d=s.tsx?"tsx":"jsx"),d}var N=C=>{var s,i,d,h=Object(e.useRef)(),x=Object(e.useContext)(n.context),P=x.locale,t=Object(n.useLocaleProps)(P,C),F=Object(n.useDemoUrl)(t.identifier),M=t.demoUrl||F,U=(o.e===null||o.e===void 0?void 0:o.e.location.hash)==="#".concat(t.identifier),w=Object.keys(t.sources).length===1,y=Object(n.useCodeSandbox)((s=t.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:t),S=Object(n.useRiddle)((i=t.hideActions)!==null&&i!==void 0&&i.includes("RIDDLE")?null:t),K=Object(n.useMotions)(t.motions||[],h.current),j=Object(l.default)(K,2),W=j[0],k=j[1],J=Object(n.useCopy)(),T=Object(l.default)(J,2),$=T[0],G=T[1],z=Object(e.useState)("_"),I=Object(l.default)(z,2),m=I[0],X=I[1],Z=Object(e.useState)(p(m,t.sources[m])),g=Object(l.default)(Z,2),O=g[0],H=g[1],V=Object(e.useState)(Boolean(t.defaultShowCode)),L=Object(l.default)(V,2),_=L[0],Q=L[1],Y=Object(e.useState)(Math.random()),R=Object(l.default)(Y,2),q=R[0],B=R[1],D=t.sources[m][O]||t.sources[m].content,ee=Object(n.useTSPlaygroundUrl)(P,D),te=Object(e.useRef)(),ae=Object(n.usePrefersColor)(),ue=Object(l.default)(ae,1),ne=ue[0];Object(e.useEffect)(()=>{B(Math.random())},[ne]);function le(r){X(r),H(p(r,t.sources[r]))}return a.a.createElement("div",{style:t.style,className:[t.className,"__dumi-default-previewer",U?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:t.identifier,"data-debug":t.debug||void 0,"data-iframe":t.iframe||void 0},t.iframe&&a.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),a.a.createElement("div",{ref:h,className:"__dumi-default-previewer-demo",style:{transform:t.transform?"translate(0, 0)":void 0,padding:t.compact||t.iframe&&t.compact!==!1?"0":void 0,background:t.background}},t.iframe?a.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(t.iframe).replace(/(\d)$/,"$1px")},key:q,src:M,ref:te}):t.children),a.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":t.title},t.title&&a.a.createElement(n.AnchorLink,{to:"#".concat(t.identifier)},t.title),t.description&&a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}})),a.a.createElement("div",{className:"__dumi-default-previewer-actions"},y&&a.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),S&&a.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:S}),t.motions&&a.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:k,onClick:()=>W()}),t.iframe&&a.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>B(Math.random())}),!((d=t.hideActions)!==null&&d!==void 0&&d.includes("EXTERNAL"))&&a.a.createElement(n.Link,{target:"_blank",to:M},a.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),a.a.createElement("span",null),a.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":G,onClick:()=>$(D)}),O==="tsx"&&_&&a.a.createElement(n.Link,{target:"_blank",to:ee},a.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),a.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(_?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Q(!_)})),_&&a.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!w&&a.a.createElement(E.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:m,onChange:le},Object.keys(t.sources).map(r=>a.a.createElement(E.TabPane,{tab:r==="_"?"index.".concat(p(r,t.sources[r])):r,key:r}))),a.a.createElement("div",{className:"__dumi-default-previewer-source"},a.a.createElement(f.a,{code:D,lang:O,showCopy:!1}))))};c.default=N},Jd6f:function(b,c,u){"use strict";u.r(c);var l=u("q1tI"),e=u.n(l),a=u("dEAq"),E=u.n(a),o=u("0zqC"),n=u("JjdP"),A=e.a.memo(n.default["pivot-table-demo"].component),f=e.a.memo(n.default["pivot-table-demo-1"].component),v=e.a.memo(n.default["pivot-table-demo-2"].component);c.default=function(){return e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u57FA\u672C\u7528\u6CD5"},e.a.createElement(a.AnchorLink,{to:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7528\u6CD5"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u8868\u683C\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",e.a.createElement("code",null,"\u5DE6\u8868\u5934"),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",e.a.createElement("code",null,"\u9876\u8868\u5934"),"\u3002"))),e.a.createElement(o.default,n.default["pivot-table-demo"].previewerProps,e.a.createElement(A,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},e.a.createElement(a.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),e.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3"},e.a.createElement(a.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),e.a.createElement(o.default,n.default["pivot-table-demo-1"].previewerProps,e.a.createElement(f,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"\u53EF\u5C55\u5F00\u6536\u8D77"},e.a.createElement(a.AnchorLink,{to:"#\u53EF\u5C55\u5F00\u6536\u8D77","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u53EF\u5C55\u5F00/\u6536\u8D77")),e.a.createElement(o.default,n.default["pivot-table-demo-2"].previewerProps,e.a.createElement(v,null))))}},TIsu:function(b,c,u){}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{mV8e:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("q1tI"),r=n.n(a);function l(){return r.a.createElement("div",null,"hello world")}},ov5M:function(e,t,n){"use strict";n.r(t);var a=n("wx14"),r=n("55Ip"),l=n("q1tI"),i=n.n(l),o=(n("B2uJ"),n("+su7"),n("qOys"),n("5Yjd")),c=n.n(o),d=i.a.memo((function(){var e=n("284h"),t=n("TqRt"),a=t(n("ODXe")),r=e(n("q1tI")),l=t(n("NuvN")),i=t(n("mV8e")),o=function(){var e=(0,r.useState)(),t=(0,a["default"])(e,2),n=t[0],o=t[1],c=function(){alert(JSON.stringify(n,null,2))};return r["default"].createElement("div",null,r["default"].createElement(l["default"],{formData:n,onChange:o,widgets:{HelloWorld:i["default"]},schema:{type:"object","ui:displayType":"row",properties:{string:{title:"\u6d4b\u8bd5",type:"string","ui:widget":"HelloWorld"},select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}}}),r["default"].createElement("button",{onClick:c},"\u63d0\u4ea4"))};return r["default"].createElement(o)})),m=i.a.memo((function(){var e=n("284h"),t=n("TqRt"),a=t(n("ODXe")),r=e(n("q1tI")),l=t(n("NuvN")),o=t(n("u+UE")),c={type:"object",properties:{content:{title:"\u5bcc\u6587\u672c\u7f16\u8f91\u5668",type:"string","ui:widget":"RichTextEditor"}}};function d(){var e=(0,r.useState)({}),t=(0,a["default"])(e,2),n=t[0],i=t[1],d=(0,r.useState)([]),m=(0,a["default"])(d,2),u=m[0],s=m[1],f=function(){u.length>0?alert("\u6821\u9a8c\u672a\u901a\u8fc7\u5b57\u6bb5\uff1a".concat(u.toString())):alert(JSON.stringify(n,null,2))};return r["default"].createElement("div",null,r["default"].createElement(l["default"],{schema:c,formData:n,onChange:i,onValidate:s,widgets:{RichTextEditor:o["default"]}}),r["default"].createElement("button",{onClick:f},"\u63d0\u4ea4"))}return i.a.createElement(d)}));t["default"]=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},i.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),i.a.createElement("h2",{id:"\u5f00\u53d1"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u5f00\u53d1"},i.a.createElement("span",{className:"icon icon-link"})),"\u5f00\u53d1"),i.a.createElement("p",null,"\u8fd9\u91cc\u662f\u6240\u6709\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u5c55\u793a\u7a7a\u95f4\uff0c\u9700\u8981\u5f00\u53d1\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u975e\u5e38\u7b80\u6613\uff1a"),i.a.createElement("ol",null,i.a.createElement("li",null,"\u6253\u5f00 github \u4ed3\u5e93 /widgets/ \u6587\u4ef6\u5939"),i.a.createElement("li",null,"\u590d\u5236\u4e00\u4efd /widgets/template"),i.a.createElement("li",null,"\u4fee\u6539\u4ee3\u7801\u3001package.json \u91cc\u7684\u53d1\u5e03\u540d\u79f0\uff08\u6ce8\u610f\u53d1\u5e03\u540d\u9075\u5faa @form-render/xxx \u7684\u89c4\u8303\uff09"),i.a.createElement("li",null,"\u8fd0\u884c\u3001\u6d4b\u8bd5 & \u53d1\u5e03")),i.a.createElement("p",null,"\u6b22\u8fce\u5927\u5bb6\u63d0\u4ea4\u5e38\u7528\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u8ba9\u8fd9\u4e2a\u5e93\u53d8\u7684\u66f4\u4e3a\u4e30\u5bcc"),i.a.createElement("h2",{id:"\u5c55\u793a"},i.a.createElement("a",{"aria-hidden":"true",href:"#\u5c55\u793a"},i.a.createElement("span",{className:"icon icon-link"})),"\u5c55\u793a"),i.a.createElement("h3",{id:"form-rendertemplate"},i.a.createElement("a",{"aria-hidden":"true",href:"#form-rendertemplate"},i.a.createElement("span",{className:"icon icon-link"})),"@form-render/template"),i.a.createElement("p",null,"\u4e00\u4e2a\u5c55\u793a hello world \u6587\u6848\u7684\u6a21\u677f\u81ea\u5b9a\u4e49\u7ec4\u4ef6")),i.a.createElement(c.a,Object(a["default"])({source:{jsx:"import React, { useState } from 'react';\nimport FR from 'form-render/lib/antd';\nimport HelloWorld from '@form-render/template';\n\nexport default () => {\n  const [data, setData] = useState();\n\n  const submit = () => {\n    alert(JSON.stringify(data, null, 2));\n  };\n\n  return (\n    <div>\n      <FR\n        formData={data}\n        onChange={setData}\n        widgets={{ HelloWorld: HelloWorld }}\n        schema={{\n          type: 'object',\n          'ui:displayType': 'row',\n          properties: {\n            string: {\n              title: '\u6d4b\u8bd5',\n              type: 'string',\n              'ui:widget': 'HelloWorld',\n            },\n            select: {\n              title: '\u5355\u9009',\n              type: 'string',\n              enum: ['a', 'b', 'c'],\n              enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],\n            },\n          },\n        }}\n      />\n      <button onClick={submit}>\u63d0\u4ea4</button>\n    </div>\n  );\n};"}},{CSSInDependencies:["@alifd/next/dist/next.css","antd/dist/antd.css"],dependencies:{"@alifd/next":"^1.x",antd:"^4.x",react:"^16.8.0 || ^17.0.0","react-dom":"^16.8.0 || ^17.0.0","form-render":"0.9.5","@form-render/template":"1.0.0"},files:{}}),i.a.createElement(d,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("h3",{id:"form-renderrich-text"},i.a.createElement("a",{"aria-hidden":"true",href:"#form-renderrich-text"},i.a.createElement("span",{className:"icon icon-link"})),"@form-render/rich-text"),i.a.createElement("p",null,"\u5bcc\u6587\u672c\u7f16\u8f91\u5668")),i.a.createElement(c.a,Object(a["default"])({source:{jsx:"import React, { useState } from 'react';\nimport FormRender from 'form-render/lib/antd';\nimport RichTextEditor from '@form-render/rich-text';\n\nconst schema = {\n  type: 'object',\n  properties: {\n    content: {\n      title: '\u5bcc\u6587\u672c\u7f16\u8f91\u5668',\n      type: 'string',\n      'ui:widget': 'RichTextEditor',\n    },\n  },\n};\n\nexport default function Demo() {\n  const [formData, setData] = useState({});\n  const [valid, setValid] = useState([]);\n\n  const onSubmit = () => {\n    if (valid.length > 0) {\n      alert(`\u6821\u9a8c\u672a\u901a\u8fc7\u5b57\u6bb5\uff1a${valid.toString()}`);\n    } else {\n      alert(JSON.stringify(formData, null, 2));\n    }\n  };\n\n  return (\n    <div>\n      <FormRender\n        schema={schema}\n        formData={formData}\n        onChange={setData}\n        onValidate={setValid}\n        widgets={{\n          RichTextEditor: RichTextEditor,\n        }}\n      />\n      <button onClick={onSubmit}>\u63d0\u4ea4</button>\n    </div>\n  );\n}"}},{CSSInDependencies:["@alifd/next/dist/next.css","antd/dist/antd.css"],dependencies:{"@alifd/next":"^1.x",antd:"^4.x",react:"^16.8.0 || ^17.0.0","react-dom":"^16.8.0 || ^17.0.0","form-render":"0.9.5","@form-render/rich-text":"1.0.0"},files:{}}),i.a.createElement(m,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("p",null,"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u5f00\u53d1\u89c4\u8303\u8be6\u89c1 ",i.a.createElement(r["a"],{to:"/guide/advanced/widget"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"))))}},"u+UE":function(e,t,n){"use strict";n.r(t);var a=n("ODXe"),r=n("Ff2n"),l=n("q1tI"),i=n.n(l),o=n("yEr3"),c=n.n(o),d=(n("Lzxq"),c.a.createEditorState),m=e=>{var t=e.name,n=e.onChange,o=e.value,m=(Object(r["a"])(e,["name","onChange","value"]),Object(l["useState"])((()=>d(o)))),u=Object(a["default"])(m,2),s=u[0],f=u[1],p=e=>{f(e);var a=e.toHTML();n(t,a)},E=()=>{};return i.a.createElement("div",{style:{border:"1px solid rgba(0,0,0,0.2)"}},i.a.createElement(c.a,{contentStyle:{minHeight:100,height:"auto",maxHeight:500},value:s,onChange:p,onSave:E,onBlur:E}))};t["default"]=m}}]);
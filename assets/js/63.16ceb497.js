(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{296:function(a,t,s){"use strict";s.r(t);var e=s(16),n=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"数据安全保护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据安全保护","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据安全保护")]),a._v(" "),s("blockquote",[s("p",[a._v("该功能为了保护数据库配置及数据安全，在一定的程度上控制开发人员流动导致敏感信息泄露。")])]),a._v(" "),s("ul",[s("li",[a._v("配置安全")])]),a._v(" "),s("p",[a._v("YML 配置：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 加密配置 mpw: 开头紧接加密内容（ 非数据库配置专用 YML 中其它配置也是可以使用的 ）\nspring:\n  datasource:\n    url: mpw:qRhvCwF4GOqjessEB3G+a5okP+uXXr96wcucn2Pev6BfaoEMZ1gVpPPhdDmjQqoM\n    password: mpw:Hzy5iliJbwDHhjLs1L0j6w==\n    username: mpw:Xb+EgsyuYRXw7U7sBJjBpA==\n")])])]),s("p",[a._v("密钥加密：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 生成 16 位随机 AES 密钥\nString randomKey = AES.generateRandomKey();\n\n// 随机密钥加密\nString result = AES.encrypt(data, randomKey);\n")])])]),s("p",[a._v("如何使用：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// Java 启动参数（ idea 设置 Program arguments ）\n--mpw.key=d1104d7c2b606f0b\n")])])]),s("ul",[s("li",[a._v("数据安全：")])]),a._v(" "),s("p",[a._v("待完善")]),a._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[a._v("注意！")]),a._v(" "),s("ul",[s("li",[a._v("加密配置必须以 mpw: 字符串开头")]),a._v(" "),s("li",[a._v("随机密钥保存请负责人妥善保管，当然越少人知道越好。")])])])])},[],!1,null,null,null);n.options.__file="safety.md";t.default=n.exports}}]);
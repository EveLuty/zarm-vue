(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{204:function(s,t,a){"use strict";a.r(t);var l={data:()=>({v1:"",v2:"这是一个textarea",v3:"",v4:"",v5:"",v6:"",v7:"327198092039342"}),methods:{handleChange(s){console.log(this.v1,s)},handleChange2(s){console.log(this.v2,s)},handleChange3(s){console.log(s)},focus(){this.$refs.inputFirst.focus()}}},v=a(1),n=Object(v.a)(l,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[s._m(0),s._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",{attrs:{title:"单行文本"}},[a("za-input",{ref:"inputFirst",attrs:{type:"text",placeholder:"type is text"},on:{change:s.handleChange},model:{value:s.v1,callback:function(t){s.v1=t},expression:"v1"}})],1),s._v(" "),a("za-cell",{attrs:{title:"多行文本"}},[a("za-input",{attrs:{type:"textarea",placeholder:"type is textarea"},on:{change:s.handleChange2},model:{value:s.v2,callback:function(t){s.v2=t},expression:"v2"}})],1),s._v(" "),a("za-cell",[a("a",{on:{click:s.focus}},[s._v("click to focus the first input")])])],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(1),s._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",{attrs:{title:"数字"}},[a("za-input-number",{attrs:{type:"number"},on:{change:s.handleChange},model:{value:s.v5,callback:function(t){s.v5=t},expression:"v5"}})],1),s._v(" "),a("za-cell",{attrs:{title:"金额"}},[a("za-input-number",{attrs:{type:"price"},on:{change:s.handleChange},model:{value:s.v6,callback:function(t){s.v6=t},expression:"v6"}})],1),s._v(" "),a("za-cell",{attrs:{title:"证件"}},[a("za-input-number",{attrs:{type:"idcard"},on:{change:s.handleChange},model:{value:s.v7,callback:function(t){s.v7=t},expression:"v7"}})],1)],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(2),s._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",{attrs:{title:"多行文本"}},[a("za-input",{attrs:{autosize:"",type:"textarea",placeholder:"this is a autosize textarea"},model:{value:s.v3,callback:function(t){s.v3=t},expression:"v3"}})],1)],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(3),s._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",[a("za-input",{attrs:{type:"text",placeholder:"标题"},on:{change:s.handleChange3}})],1),s._v(" "),a("za-cell",[a("za-input",{attrs:{autosize:"",type:"textarea",rows:"4",placeholder:"摘要"},model:{value:s.v4,callback:function(t){s.v4=t},expression:"v4"}})],1)],1)]),s._v(" "),a("div",{staticClass:"za-panel"},[s._m(4),s._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",[a("za-input",{attrs:{autosize:"","show-length":"",type:"textarea",rows:"4","max-length":"200",placeholder:"摘要"},model:{value:s.v5,callback:function(t){s.v5=t},expression:"v5"}})],1)],1)])]),s._m(5)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel-header"},[t("div",{staticClass:"za-panel-title"},[this._v("普通\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel-header"},[t("div",{staticClass:"za-panel-title"},[this._v("输入类型\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel-header"},[t("div",{staticClass:"za-panel-title"},[this._v("高度自适应\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel-header"},[t("div",{staticClass:"za-panel-title"},[this._v("无标签栏\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"za-panel-header"},[t("div",{staticClass:"za-panel-title"},[this._v("显示输入字数\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[s._v("文本框 Input")]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("普通")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"单行文本"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"inputFirst"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"type is text"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"多行文本"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"textarea"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"type is textarea"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange2"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"focus"')]),s._v(">")]),s._v("click to focus the first input"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("输入类型")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"数字"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input-number")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v5"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"number"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input-number")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"金额"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input-number")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v6"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"price"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input-number")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"证件"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input-number")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v7"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"idcard"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input-number")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("高度自适应")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"多行文本"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("autosize")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"textarea"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"this is a autosize textarea"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("无标签栏")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"标题"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"handleChange3"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("autosize")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"textarea"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rows")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"摘要"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("显示输入字数")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("autosize")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("show-length")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"textarea"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rows")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("max-length")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"200"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"摘要"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"v5"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-input")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("za-cell")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h3",[s._v("Vue JavaScript代码")]),s._v(" "),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v1")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v2")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'这是一个textarea'")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v3")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v4")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v5")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v6")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v("v7")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'327198092039342'")]),s._v(",\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    handleChange(v) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v1, v);\n    },\n    handleChange2(v) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".v2, v);\n    },\n    handleChange3(v) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(v);\n    },\n    focus() {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$refs.inputFirst.focus()\n    },\n  },\n};\n")])]),s._v(" "),a("h3",[s._v("API")]),s._v(" "),a("h4",[s._v("Input Attributes")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("类型")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("默认值")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("可选值／参数")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("prefixCls")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("za-input")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("类名前缀")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("type")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("string")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("text")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("显示类型")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("disabled")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("bool")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否禁用")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("rows")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("string")]),s._v(", "),a("code",[s._v("number")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("多行文本时的显示行数")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("autosize")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否高度自适应")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("showLength")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("bool")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("false")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}}),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否显示输入字数")])])])]),s._v(" "),a("h4",[s._v("Input Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("事件名称")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("说明")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("回调参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("change")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("当绑定值变化时触发的事件")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("最新的值")])])])])])}],!1,null,null,null);t.default=n.exports},265:function(s,t,a){var l={"./2.0.0/input.md":204};function v(s){var t=n(s);return a(t)}function n(s){var t=l[s];if(!(t+1)){var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}return t}v.keys=function(){return Object.keys(l)},v.resolve=n,s.exports=v,v.id=265}}]);
//# sourceMappingURL=73.07c87cc03ced7b8fe7c8.js.map
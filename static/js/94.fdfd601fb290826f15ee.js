(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{202:function(t,a,s){"use strict";s.r(a);var l={data:()=>({value:""}),methods:{handleClick(){this.$refs.searchRef.focus()},handleChange(t){this.value=t},handleSubmit(t){console.log(`搜索内容为${t}`)},handleChange(t){console.log(`搜索内容为${t}`)},handleFocus(){console.log("获取焦点")},handleBlur(){console.log("失去焦点")},handleClear(){console.log("点击了清除")},handleCancel(){console.log("点击了取消")}}},e=s(1),i=Object(e.a)(l,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"zarm-vue-demo"},[s("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),s("div",{staticClass:"za-panel-body"},[s("za-search-bar",{attrs:{placeholder:"搜索",cancelText:"取消",showCancel:!1},on:{change:t.handleChange,submit:t.handleSubmit,blur:t.handleBlur,focus:t.handleFocus,clear:t.handleClear,cancel:t.handleCancel}})],1)]),t._v(" "),s("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),s("div",{staticClass:"za-panel-body"},[s("za-search-bar",{attrs:{placeholder:"搜索",shape:"round",cancelText:"取消",showCancel:!0,value:"默认搜索关键字"}})],1)]),t._v(" "),s("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),s("div",{staticClass:"za-panel-body"},[s("za-search-bar",{ref:"searchRef",attrs:{placeholder:"搜索",shape:"round",cancelText:"取消",showCancel:!0}}),t._v(" "),s("za-cell",[s("za-button",{attrs:{theme:"primary",size:"xs",shape:"radius"},on:{click:t.handleClick}},[t._v("点击获取焦点")])],1)],1)])]),t._m(3)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"za-panel-header"},[a("div",{staticClass:"za-panel-title"},[this._v("基本\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"za-panel-header"},[a("div",{staticClass:"za-panel-title"},[this._v("始终展示取消按钮\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"za-panel-header"},[a("div",{staticClass:"za-panel-title"},[this._v("点击获取焦点\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"zarm-markdown-doc"},[s("h2",[t._v("搜索框 SearchBar")]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("基本")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"搜索"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("cancelText")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"取消"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":showCancel")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("submit")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleSubmit"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("blur")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleBlur"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("focus")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleFocus"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("clear")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleClear"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("cancel")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleCancel"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("始终展示取消按钮")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"搜索"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"round"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("cancelText")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"取消"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":showCancel")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"默认搜索关键字"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("点击获取焦点")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"搜索"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"round"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("cancelText")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"取消"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":showCancel")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("ref")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"searchRef"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-search-bar")]),t._v(">")]),t._v("  \n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("    \n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("theme")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"primary"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("shape")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"radius"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleClick"')]),t._v(">")]),t._v("点击获取焦点"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),s("h4",[t._v("SearchBar Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("za-search-bar")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("defaultValue")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("初始值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("value")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string, number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("搜索关键字")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("shape")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("radius")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("形状，"),s("code",[t._v("round")]),t._v(","),s("code",[t._v("radius")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cancelText")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'取消'")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("取消文本")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("showCancel")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示取消操作")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("clearable")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否可以清除操作")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("maxLength")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("输入字数上限")])])])]),t._v(" "),s("h4",[t._v("SearchBar Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值变化时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最新的值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("focus")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当获取焦点时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("blur")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当失去焦点时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("clear")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值被清除时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最新的值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("cancel")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当取消操作时触发的事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("submit")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当绑定值变化时触发的Form搜索事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最新的值")])])])])])}],!1,null,null,null);a.default=i.exports},286:function(t,a,s){var l={"./2.0.0/searchBar.md":202};function e(t){var a=i(t);return s(a)}function i(t){var a=l[t];if(!(a+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a}e.keys=function(){return Object.keys(l)},e.resolve=i,t.exports=e,e.id=286}}]);
//# sourceMappingURL=94.fdfd601fb290826f15ee.js.map
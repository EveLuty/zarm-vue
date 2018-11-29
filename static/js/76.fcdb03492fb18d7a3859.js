(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{201:function(t,a,s){"use strict";s.r(a);var l={data:()=>({min:"2018-05-06",max:"2018-10-02",value:"2018-05-08",defaultValue:["2018-05-07","2018-06-08"],multiple:1,multipleOptions:[{value:"1",label:"true"},{value:"0",label:"false"}]}),methods:{change(t){console.log("change:"+t)},handleChange(t){this.multiple=t.value},disabledDate:t=>t.getDate()%10},watch:{value(t){console.log("watch:"+t)}}},e=s(1),i=Object(e.a)(l,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"zarm-vue-demo"},[s("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),s("div",{staticClass:"za-panel-body"},[s("za-cell",{attrs:{title:"multiple"}},[s("za-select",{attrs:{"data-source":t.multipleOptions},on:{ok:t.handleChange},model:{value:t.multiple,callback:function(a){t.multiple=a},expression:"multiple"}})],1),t._v(" "),s("za-cell",{attrs:{title:"min"}},[s("za-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"date",format:"yyyy-MM-dd",max:"2030-10-25",min:"1917-10-25"},model:{value:t.min,callback:function(a){t.min=a},expression:"min"}})],1),t._v(" "),s("za-cell",{attrs:{title:"max"}},[s("za-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"date",format:"yyyy-MM-dd",max:"2030-10-25",min:"1917-10-25"},model:{value:t.max,callback:function(a){t.max=a},expression:"max"}})],1),t._v(" "),s("za-calendar",{attrs:{defaultValue:t.defaultValue,multiple:"1"==t.multiple,disabledDate:t.disabledDate,min:t.min,max:t.max},on:{change:t.change},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)])]),t._m(1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"za-panel-header"},[a("div",{staticClass:"za-panel-title"},[this._v("简单日历\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"zarm-markdown-doc"},[s("h2",[t._v("日历 Calendar")]),t._v(" "),s("div",{staticClass:"demo custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("简单日历")]),t._v(" "),s("pre",{staticClass:"hljs"},[s("code",[t._v("  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"multiple"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-select")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"multiple"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":data-source")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"multipleOptions"')]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-select")]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("format")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"yyyy-MM-dd"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("format")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"yyyy-MM-dd"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n  \n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("za-calendar")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"value"')]),t._v(" @"),s("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"change"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"defaultValue"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":multiple")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v("\"multiple == '1'\"")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":disabledDate")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"disabledDate"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":min")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"min"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":max")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"max"')]),t._v(">")]),t._v("\n")])])]),t._v(" "),s("h3",[t._v("API")]),t._v(" "),s("h4",[t._v("Calendar Attributes")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("za-calendar")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("titles")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("['日', '一', '二', '三', '四', '五', '六']")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("周期标题")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("multiple")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是否日期范围选择开关")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("defaultValue")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date / [Date, Date]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置选中的日期")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date / [Date, Date]")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("双向绑定日期值")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("min")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当天日期")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("\b最小日期限制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("max")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String / Number / Date")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("min开始往后一年")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("\b最大日期限制")])])])]),t._v(" "),s("h4",[t._v("Calendar Events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当选择日期点击时触发的事件。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("multiple 为 true 返回 [Date, Date]，否则返回 Date")])])])])])}],!1,null,null,null);a.default=i.exports},268:function(t,a,s){var l={"./2.0.0/calendar.md":201};function e(t){var a=i(t);return s(a)}function i(t){var a=l[t];if(!(a+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a}e.keys=function(){return Object.keys(l)},e.resolve=i,t.exports=e,e.id=268}}]);
//# sourceMappingURL=76.fcdb03492fb18d7a3859.js.map
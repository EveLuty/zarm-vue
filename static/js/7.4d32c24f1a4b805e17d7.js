(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{219:function(t,s,a){"use strict";a.r(s);var l={data:()=>({visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1,v1:"",v2:"",v3:"",v4:"",v5:"2008-01-10",v6:"2018-12-24 11:23",v7:"2008-01-10",minuteStep:15}),methods:{handleOk(t){console.log("it may still scrolling when ok is clicked. so ues v-model or @change instead"),console.log(t),this.$zaToast(t.toString())},handleChange(t){console.log(t)},handleCancel(t){console.log("cancelled")},displayGenerator:t=>t.map(t=>t.name).join("/")}},i=a(1),v=Object(i.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"zarm-vue-demo"},[a("div",{staticClass:"za-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",{attrs:{title:"日期选择"}},[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(s){t.visible1=!0}},slot:"description"},[t._v("开启")])],1),t._v(" "),a("za-cell",{attrs:{title:"年份选择"}},[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(s){t.visible5=!0}},slot:"description"},[t._v("开启")])],1),t._v(" "),a("za-cell",{attrs:{title:"月份选择"}},[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(s){t.visible2=!0}},slot:"description"},[t._v("开启")])],1),t._v(" "),a("za-cell",{attrs:{title:"时间选择"}},[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(s){t.visible3=!0}},slot:"description"},[t._v("开启")])],1),t._v(" "),a("za-cell",{attrs:{title:"时间&日期"}},[a("za-button",{attrs:{slot:"description",size:"xs"},on:{click:function(s){t.visible4=!0}},slot:"description"},[t._v("开启")])],1),t._v(" "),a("za-date-picker",{attrs:{"close-on-click-modal":!1,visible:t.visible1,title:"选择日期",placeholder:"请选择日期",mode:"date",max:"2030-10-25",min:"1917-02-12"},on:{"update:visible":function(s){t.visible1=s},ok:t.handleOk}}),t._v(" "),a("za-date-picker",{attrs:{visible:t.visible5,title:"选择年份",defaultValue:"2015",placeholder:"请选择年份",mode:"year"},on:{"update:visible":function(s){t.visible5=s},ok:t.handleOk}}),t._v(" "),a("za-date-picker",{attrs:{visible:t.visible2,title:"选择月份",defaultValue:"2018-09",placeholder:"请选择月份",mode:"month"},on:{"update:visible":function(s){t.visible2=s},ok:t.handleOk}}),t._v(" "),a("za-date-picker",{attrs:{visible:t.visible3,title:"选择时间",defaultValue:"2018-09-10 09:45",placeholder:"请选择时间",mode:"time","minute-step":t.minuteStep},on:{"update:visible":function(s){t.visible3=s},ok:t.handleOk}}),t._v(" "),a("za-date-picker",{attrs:{visible:t.visible4,title:"选择",placeholder:"请选择时间和日期",mode:"datetime"},on:{"update:visible":function(s){t.visible4=s},ok:t.handleOk}})],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(1),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-cell",{attrs:{title:"日期选择"}},[a("za-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"date",format:"yyyy年MM月dd日",max:"2030-10-25",min:"1917-10-25"},on:{ok:t.handleOk},model:{value:t.v5,callback:function(s){t.v5=s},expression:"v5"}})],1),t._v(" "),a("za-cell",{attrs:{title:"日期格式化"}},[a("za-date-select",{attrs:{title:"选择日期",placeholder:"请选择日期",mode:"datetime","value-format":"yyyy-MM-dd HH:mm",max:"2030-10-25",min:"1917-10-25"},on:{ok:t.handleOk},model:{value:t.v7,callback:function(s){t.v7=s},expression:"v7"}})],1)],1)]),t._v(" "),a("div",{staticClass:"za-panel"},[t._m(2),t._v(" "),a("div",{staticClass:"za-panel-body"},[a("za-date-picker-view",{attrs:{title:"选择年份",placeholder:"请选择年份",mode:"datetime",min:"2018-01-13",max:"2090-11-27",defaultValue:t.v6},on:{change:t.handleChange}})],1)])]),t._m(3)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("日期选择器\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("日期选择器Select\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"za-panel-header"},[s("div",{staticClass:"za-panel-title"},[this._v("平铺日期选择器DatePickerView\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"zarm-markdown-doc"},[a("h2",[t._v("日期选择器 DatePicker & DateSelect")]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("日期选择器")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"日期选择"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible1 = true"')]),t._v(">")]),t._v("开启"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"年份选择"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible5 = true"')]),t._v(">")]),t._v("开启"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"月份选择"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible2 = true"')]),t._v(">")]),t._v("开启"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"时间选择"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible3 = true"')]),t._v(">")]),t._v("开启"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"时间&日期"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("slot")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"description"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"xs"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible4 = true"')]),t._v(">")]),t._v("开启"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-button")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":close-on-click-modal")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible1"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"1917-02-12"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择年份"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultValue")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2015"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择年份"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"year"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible2"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择月份"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultValue")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2018-09"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择月份"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"month"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible3"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择时间"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("defaultValue")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2018-09-10 09:45"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择时间"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"time"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":minute-step")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"minuteStep"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"visible4"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择时间和日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"datetime"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("日期选择器Select")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"日期选择"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v5"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"date"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("format")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"yyyy年MM月dd日"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(">")]),t._v("\n        "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"日期格式化"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v7"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择日期"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"datetime"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("value-format")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"yyyy-MM-dd HH:mm"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2030-10-25"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"1917-10-25"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("ok")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleOk"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-select")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-cell")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("平铺日期选择器DatePickerView")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"选择年份"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请选择年份"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"datetime"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("min")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2018-01-13"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"2090-11-27"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":defaultValue")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"v6"')]),t._v(" @"),a("span",{staticClass:"hljs-attr"},[t._v("change")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"handleChange"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("za-date-picker-view")]),t._v(">")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("API")]),t._v(" "),a("h4",[t._v("Date Picker & \bDate Select Attributes")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值／参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("prefixCls")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("za-picker")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("类名前缀")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("visible")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示, 支持.sync修饰符 (v2.3.0+)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("default-value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("初始值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("v-model")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disabled")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("bool")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'请选择'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择器标题")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("placeholder")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("'请选择'")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入提示信息")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("year")]),t._v(", "),a("code",[t._v("date")]),t._v(", "),a("code",[t._v("time")]),t._v(" , "),a("code",[t._v("datetime")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定日期选择模式")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("format")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("例：yyyy年MM月dd日"),a("br"),t._v(" 年:"),a("code",[t._v("yyyy")]),t._v(", 月:"),a("code",[t._v("MM")]),t._v(", 日:"),a("code",[t._v("dd")]),t._v(", 时:"),a("code",[t._v("HH")]),t._v(", 分:"),a("code",[t._v("mm")]),t._v("。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("格式化显示值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value-format")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("例："),a("code",[t._v("yyyy-MM-dd HH:mm")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("格式化绑定值")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("max")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("例：2017-08-10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("min")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("例：2000-01-03")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("minuteStep")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("分钟步长")])])])]),t._v(" "),a("h4",[t._v("Picker & Select Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ok")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击确定时触发的回调函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中值的对象列表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("cancel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("点击取消时触发的回调函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("event对象")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("change")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("滚动时值变化时触发的回调函数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选中值的对象列表")])])])])])}],!1,null,null,null);s.default=v.exports}}]);
//# sourceMappingURL=7.4d32c24f1a4b805e17d7.js.map
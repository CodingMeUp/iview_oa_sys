webpackJsonp([4],{

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(403)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(215),
  /* template */
  __webpack_require__(598),
  /* scopeId */
  "data-v-e8958854",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            formValidate: {
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                name: [{
                    required: true,
                    message: '姓名不能为空',
                    trigger: 'blur'
                }],
                mail: [{
                    required: true,
                    message: '邮箱不能为空',
                    trigger: 'blur'
                }, {
                    type: 'email',
                    message: '邮箱格式不正确',
                    trigger: 'blur'
                }],
                city: [{
                    required: true,
                    message: '请选择城市',
                    trigger: 'change'
                }],
                gender: [{
                    required: true,
                    message: '请选择性别',
                    trigger: 'change'
                }],
                interest: [{
                    required: true,
                    type: 'array',
                    min: 1,
                    message: '至少选择一个爱好',
                    trigger: 'change'
                }, {
                    type: 'array',
                    max: 2,
                    message: '最多选择两个爱好',
                    trigger: 'change'
                }],
                date: [{
                    required: true,
                    type: 'date',
                    message: '请选择日期',
                    trigger: 'change'
                }],
                time: [{
                    required: true,
                    type: 'date',
                    message: '请选择时间',
                    trigger: 'change'
                }],
                desc: [{
                    required: true,
                    message: '请输入个人介绍',
                    trigger: 'blur'
                }, {
                    type: 'string',
                    min: 20,
                    message: '介绍不能少于20字',
                    trigger: 'blur'
                }]
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$Message.success('这是一条成功的提示');
        },
        handleReset(name) {
            this.$Message.warning('这是一条警告的提示');
        }
    }
});

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token {\n    at exports.runInThisContext (vm.js:53:16)\n    at Module._compile (module.js:404:25)\n    at Object.Module._extensions..js (module.js:432:10)\n    at Module.load (module.js:356:32)\n    at Function.Module._load (module.js:313:12)\n    at Module.require (module.js:366:17)\n    at require (module.js:385:17)\n    at loadLoader (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModule.js:163:3)\n    at NormalModule.build (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModule.js:252:15)\n    at Compilation.buildModule (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\Compilation.js:142:10)\n    at factoryCallback (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\Compilation.js:325:11)\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModuleFactory.js:251:4\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModuleFactory.js:93:13\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\tapable\\lib\\Tapable.js:204:11\n    at NormalModuleFactory.<anonymous> (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)");

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(193)("5f134d4e", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e8958854\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e8958854\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 598:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form"
  }, [_c('i-form', {
    attrs: {
      "ref:form-validate": "",
      "model": _vm.formValidate,
      "rules": _vm.ruleValidate,
      "label-width": 80
    }
  }, [_c('Form-item', {
    attrs: {
      "label": "姓名",
      "prop": "name"
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入姓名"
    },
    model: {
      value: (_vm.formValidate.name),
      callback: function($$v) {
        _vm.formValidate.name = $$v
      },
      expression: "formValidate.name"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "邮箱",
      "prop": "mail"
    }
  }, [_c('i-input', {
    attrs: {
      "placeholder": "请输入邮箱"
    },
    model: {
      value: (_vm.formValidate.mail),
      callback: function($$v) {
        _vm.formValidate.mail = $$v
      },
      expression: "formValidate.mail"
    }
  })], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "城市",
      "prop": "city"
    }
  }, [_c('i-select', {
    attrs: {
      "value": _vm.formValidate.city,
      "placeholder": "请选择所在地"
    }
  }, [_c('i-option', {
    attrs: {
      "value": "beijing"
    }
  }, [_vm._v("北京市")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "shanghai"
    }
  }, [_vm._v("上海市")]), _vm._v(" "), _c('i-option', {
    attrs: {
      "value": "shenzhen"
    }
  }, [_vm._v("深圳市")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "选择日期"
    }
  }, [_c('Row', [_c('i-col', {
    attrs: {
      "span": "11"
    }
  }, [_c('Form-item', {
    attrs: {
      "prop": "date"
    }
  }, [_c('Date-picker', {
    attrs: {
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.formValidate.date),
      callback: function($$v) {
        _vm.formValidate.date = $$v
      },
      expression: "formValidate.date"
    }
  })], 1)], 1), _vm._v(" "), _c('i-col', {
    staticStyle: {
      "text-align": "center"
    },
    attrs: {
      "span": "2"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "11"
    }
  }, [_c('Form-item', {
    attrs: {
      "prop": "time"
    }
  }, [_c('Time-picker', {
    attrs: {
      "type": "time",
      "placeholder": "选择时间"
    },
    model: {
      value: (_vm.formValidate.time),
      callback: function($$v) {
        _vm.formValidate.time = $$v
      },
      expression: "formValidate.time"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "性别",
      "prop": "gender"
    }
  }, [_c('Radio-group', {
    model: {
      value: (_vm.formValidate.gender),
      callback: function($$v) {
        _vm.formValidate.gender = $$v
      },
      expression: "formValidate.gender"
    }
  }, [_c('Radio', {
    attrs: {
      "label": "male"
    }
  }, [_vm._v("男")]), _vm._v(" "), _c('Radio', {
    attrs: {
      "label": "female"
    }
  }, [_vm._v("女")])], 1)], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "爱好",
      "prop": "interest"
    }
  }, [_c('Checkbox-group', {
    model: {
      value: (_vm.formValidate.interest),
      callback: function($$v) {
        _vm.formValidate.interest = $$v
      },
      expression: "formValidate.interest"
    }
  }, [_c('Checkbox', {
    attrs: {
      "label": "吃饭"
    }
  }), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": "睡觉"
    }
  }), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": "跑步"
    }
  }), _vm._v(" "), _c('Checkbox', {
    attrs: {
      "label": "看电影"
    }
  })], 1)], 1), _vm._v(" "), _c('Form-item', {
    attrs: {
      "label": "介绍",
      "prop": "desc"
    }
  }, [_c('i-input', {
    attrs: {
      "type": "textarea",
      "autosize": {
        minRows: 2,
        maxRows: 5
      },
      "placeholder": "请输入..."
    },
    model: {
      value: (_vm.formValidate.desc),
      callback: function($$v) {
        _vm.formValidate.desc = $$v
      },
      expression: "formValidate.desc"
    }
  })], 1), _vm._v(" "), _c('Form-item', [_c('i-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleSubmit('formValidate')
      }
    }
  }, [_vm._v("提交")]), _vm._v(" "), _c('i-button', {
    staticStyle: {
      "margin-left": "8px"
    },
    attrs: {
      "type": "ghost"
    },
    nativeOn: {
      "click": function($event) {
        _vm.handleReset('formValidate')
      }
    }
  }, [_vm._v("重置")])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=4.eef255b4d630e70a2855.js.map
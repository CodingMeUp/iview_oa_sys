webpackJsonp([7],{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(395)

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(212),
  /* template */
  __webpack_require__(589),
  /* scopeId */
  "data-v-2ae483e8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 212:
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
            spanLeft: 5,
            spanRight: 19,
            activePage: '1',
            pageName: 'about',
            //pageLink: '',
            page: [{
                index: 1,
                name: 'about'
            }, {
                index: 2,
                name: 'form'
            }, {
                index: 3,
                name: 'table'
            }, {
                index: 4,
                name: 'markdown-viewer'
            }, {
                index: 5,
                name: 'markdown-editor-1'
            }, {
                index: 6,
                name: 'markdown-editor-2'
            }, {
                index: 7,
                name: 'rtf'
            }, {
                index: 8,
                name: 'upload'
            }, {
                index: 9,
                name: 'echarts'
            }]
        };
    },
    // created: {
    //   function () {
    //     this.$Message.success('提交成功!');
    //   }
    // },
    computed: {
        iconSize() {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        },
        routeTo(e) {
            //console.log(e);
            this.$router.push(this.$data.page[e - 1].name);
            this.$set(this.$data, 'pageName', this.$data.page[e - 1].name);
            //this.$set(this.$data,'activePage',this.$data.page[e - 1].index+'');
        },
        setActive() {
            console.log('gg');
        }
    }

});

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token {\n    at exports.runInThisContext (vm.js:53:16)\n    at Module._compile (module.js:404:25)\n    at Object.Module._extensions..js (module.js:432:10)\n    at Module.load (module.js:356:32)\n    at Function.Module._load (module.js:313:12)\n    at Module.require (module.js:366:17)\n    at require (module.js:385:17)\n    at loadLoader (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (D:\\STgithub\\iview_oa_sys\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModule.js:163:3)\n    at NormalModule.build (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModule.js:252:15)\n    at Compilation.buildModule (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\Compilation.js:142:10)\n    at factoryCallback (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\Compilation.js:325:11)\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModuleFactory.js:251:4\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\NormalModuleFactory.js:93:13\n    at D:\\STgithub\\iview_oa_sys\\node_modules\\tapable\\lib\\Tapable.js:204:11\n    at NormalModuleFactory.<anonymous> (D:\\STgithub\\iview_oa_sys\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)");

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(193)("02956aa7", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2ae483e8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":true,\"sourceMap\":true}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2ae483e8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout",
    class: {
      'layout-hide-text': _vm.spanLeft < 5
    }
  }, [_c('Row', {
    attrs: {
      "type": "flex"
    }
  }, [_c('i-col', {
    staticClass: "layout-menu-left",
    attrs: {
      "span": _vm.spanLeft
    }
  }, [_c('Menu', {
    attrs: {
      "activeName": _vm.activePage,
      "theme": "dark",
      "width": "auto"
    },
    on: {
      "on-select": _vm.routeTo,
      "updateActiveName": _vm.setActive
    }
  }, [_c('div', {
    staticClass: "layout-logo-left"
  }, [_c('h3', [_vm._v("后台管理")])]), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-navigate",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("关于")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "2"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "document",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("表单")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "3"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "navicon",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("表格")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "4"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "social-markdown",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("Markdown")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "5"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "edit",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("Md编辑器(1)")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "6"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "edit",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("Md编辑器(2)")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "7"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "document-text",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("富文本框")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "8"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-cloud-upload-outline",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("文件上传")])], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "9"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "pie-graph",
      "size": _vm.iconSize
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "layout-text"
  }, [_vm._v("图表(Echarts)")])], 1)], 1)], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": _vm.spanRight
    }
  }, [_c('div', {
    staticClass: "layout-header"
  }, [_c('i-button', {
    attrs: {
      "type": "text"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toggleClick($event)
      }
    }
  }, [_c('Icon', {
    attrs: {
      "type": "navicon",
      "size": "32"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-breadcrumb"
  }, [_c('Breadcrumb', [_c('Breadcrumb-item', [_vm._v("首页")]), _vm._v(" "), _c('Breadcrumb-item', [_vm._v("页面")]), _vm._v(" "), _c('Breadcrumb-item', [_vm._v(_vm._s(_vm.pageName))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_c('div', {
    staticClass: "layout-content-main"
  }, [_c('transition', {
    attrs: {
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "layout-copy"
  }, [_vm._v("\n                2011-2016 © NSLab\n            ")])])], 1)], 1)
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=7.2634c304c28421fee8a1.js.map
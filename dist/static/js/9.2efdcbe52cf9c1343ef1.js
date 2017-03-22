webpackJsonp([9],{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(29)(
  /* script */
  __webpack_require__(220),
  /* template */
  __webpack_require__(588),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            self: this,
            columns7: [{
                title: '姓名',
                key: 'name',
                render(row, column, index) {
                    return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                }
            }, {
                title: '年龄',
                key: 'age'
            }, {
                title: '地址',
                key: 'address'
            }, {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render(row, column, index) {
                    return `<i-button type="primary" size="small" @click.native="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                }
            }],
            data6: [{
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居'
            }, {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗'
            }, {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道'
            }, {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道'
            }, {
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居'
            }, {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗'
            }, {
                name: '李小红',
                age: 30,
                address: '上海市浦东新区世纪大道'
            }, {
                name: '周小伟',
                age: 26,
                address: '深圳市南山区深南大道'
            }, {
                name: '王小明',
                age: 18,
                address: '北京市朝阳区芍药居'
            }, {
                name: '张小刚',
                age: 25,
                address: '北京市海淀区西二旗'
            }]
        };
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: '用户信息',
                content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
            });
        },
        remove(index) {
            this.data6.splice(index, 1);
        }
    }
});

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Table', {
    attrs: {
      "border": "",
      "content": _vm.self,
      "columns": _vm.columns7,
      "data": _vm.data6
    }
  })
},staticRenderFns: []}

/***/ })

});
//# sourceMappingURL=9.2efdcbe52cf9c1343ef1.js.map
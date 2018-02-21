webpackJsonp([0],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(17);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMaterialize = __webpack_require__(34);\n\nvar _SubmitBtn = __webpack_require__(108);\n\nvar _SubmitBtn2 = _interopRequireDefault(_SubmitBtn);\n\nvar _Subsection = __webpack_require__(110);\n\nvar _Subsection2 = _interopRequireDefault(_Subsection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Section = function (_Component) {\n  _inherits(Section, _Component);\n\n  function Section() {\n    _classCallCheck(this, Section);\n\n    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this));\n\n    _this.deleteSubsection = function (idx) {\n      return function () {\n        _this.setState({\n          subsection: _this.state.subsection.filter(function (sub, _idx) {\n            return _idx !== idx;\n          })\n        });\n      };\n    };\n\n    _this.state = {\n      name: '',\n      subsection: [{\n        subname: ''\n      }]\n    };\n    return _this;\n  }\n\n  _createClass(Section, [{\n    key: 'handleOnChange',\n    value: function handleOnChange(e, idx) {\n      var subsection = this.state.subsection;\n      subsection[idx].subname = e.target.value;\n      this.forceUpdate();\n    }\n  }, {\n    key: 'addNewSubsection',\n    value: function addNewSubsection() {\n      this.setState({\n        subsection: this.state.subsection.concat([{ subname: '' }])\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log(this.state);\n      return _react2.default.createElement(\n        'div',\n        { style: styles.containerStyle },\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Course:'\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, { s: 12 })\n        ),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Upload'\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '#' },\n            _react2.default.createElement(\n              _reactMaterialize.Icon,\n              { large: true },\n              'folder'\n            )\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, {\n            s: 12,\n            type: 'checkbox',\n            value: 'add_to_trial',\n            label: 'included in trial'\n          })\n        ),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Worksheet:'\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '#' },\n            _react2.default.createElement(\n              _reactMaterialize.Icon,\n              { large: true },\n              'folder'\n            )\n          )\n        ),\n        _react2.default.createElement(_Subsection2.default, {\n          subsection: this.state.subsection,\n          handleOnChange: this.handleOnChange.bind(this),\n          deleteSubsection: this.deleteSubsection.bind(this),\n          addNewSubsection: this.addNewSubsection.bind(this)\n        }),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(\n            _reactMaterialize.Button,\n            null,\n            _react2.default.createElement(_SubmitBtn2.default, { submit: 'submit' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Section;\n}(_react.Component);\n\nvar styles = {\n  containerStyle: {\n    textAlign: 'center'\n  }\n};\n\nexports.default = Section;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzPzc0NWMiXSwibmFtZXMiOlsiU2VjdGlvbiIsImRlbGV0ZVN1YnNlY3Rpb24iLCJpZHgiLCJzZXRTdGF0ZSIsInN1YnNlY3Rpb24iLCJzdGF0ZSIsImZpbHRlciIsInN1YiIsIl9pZHgiLCJuYW1lIiwic3VibmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcmNlVXBkYXRlIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImNvbnRhaW5lclN0eWxlIiwiaGFuZGxlT25DaGFuZ2UiLCJiaW5kIiwiYWRkTmV3U3Vic2VjdGlvbiIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxPOzs7QUFDSixxQkFBYztBQUFBOztBQUFBOztBQUFBLFVBZ0JkQyxnQkFoQmMsR0FnQkssVUFBQ0MsR0FBRDtBQUFBLGFBQVMsWUFBTTtBQUNoQyxjQUFLQyxRQUFMLENBQWM7QUFDWkMsc0JBQVksTUFBS0MsS0FBTCxDQUFXRCxVQUFYLENBQXNCRSxNQUF0QixDQUE2QixVQUFDQyxHQUFELEVBQU1DLElBQU47QUFBQSxtQkFBZUEsU0FBU04sR0FBeEI7QUFBQSxXQUE3QjtBQURBLFNBQWQ7QUFHRCxPQUprQjtBQUFBLEtBaEJMOztBQUVaLFVBQUtHLEtBQUwsR0FBYTtBQUNYSSxZQUFNLEVBREs7QUFFWEwsa0JBQVksQ0FDUjtBQUNFTSxpQkFBUztBQURYLE9BRFE7QUFGRCxLQUFiO0FBRlk7QUFVYjs7OzttQ0FDY0MsQyxFQUFHVCxHLEVBQUs7QUFDckIsVUFBTUUsYUFBYSxLQUFLQyxLQUFMLENBQVdELFVBQTlCO0FBQ0FBLGlCQUFXRixHQUFYLEVBQWdCUSxPQUFoQixHQUEwQkMsRUFBRUMsTUFBRixDQUFTQyxLQUFuQztBQUNBLFdBQUtDLFdBQUw7QUFDRDs7O3VDQU1rQjtBQUNqQixXQUFLWCxRQUFMLENBQWM7QUFDVkMsb0JBQVksS0FBS0MsS0FBTCxDQUFXRCxVQUFYLENBQXNCVyxNQUF0QixDQUE2QixDQUFDLEVBQUVMLFNBQVMsRUFBWCxFQUFELENBQTdCO0FBREYsT0FBZDtBQUdEOzs7NkJBQ1E7QUFDUE0sY0FBUUMsR0FBUixDQUFZLEtBQUtaLEtBQWpCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxPQUFPYSxPQUFPQyxjQUFuQjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLG1FQUFPLEdBQUcsRUFBVjtBQUZGLFNBRkY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBWTtBQUFBO0FBQUEsZ0JBQU0sV0FBTjtBQUFBO0FBQUE7QUFBWixXQUZGO0FBR0U7QUFDRSxlQUFHLEVBREw7QUFFRSxrQkFBSyxVQUZQO0FBR0UsbUJBQU0sY0FIUjtBQUlFLG1CQUFNO0FBSlI7QUFIRixTQVBGO0FBa0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFHLE1BQUssR0FBUjtBQUFZO0FBQUE7QUFBQSxnQkFBTSxXQUFOO0FBQUE7QUFBQTtBQUFaO0FBRkYsU0FsQkY7QUF1QkU7QUFDRSxzQkFBWSxLQUFLZCxLQUFMLENBQVdELFVBRHpCO0FBRUUsMEJBQWdCLEtBQUtnQixjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUZsQjtBQUdFLDRCQUFrQixLQUFLcEIsZ0JBQUwsQ0FBc0JvQixJQUF0QixDQUEyQixJQUEzQixDQUhwQjtBQUlFLDRCQUFrQixLQUFLQyxnQkFBTCxDQUFzQkQsSUFBdEIsQ0FBMkIsSUFBM0I7QUFKcEIsVUF2QkY7QUE4QkUsaURBOUJGO0FBK0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLGlFQUFXLFFBQU8sUUFBbEI7QUFERjtBQURGO0FBL0JGLE9BREY7QUF1Q0Q7Ozs7OztBQUdILElBQU1ILFNBQVM7QUFDYkMsa0JBQWdCO0FBQ2RJLGVBQVc7QUFERztBQURILENBQWY7O2tCQU1ldkIsTyIsImZpbGUiOiIxMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm93LCBJbnB1dCwgSWNvbiwgQnV0dG9uIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IFN1Ym1pdEJ0biBmcm9tICcuLi9idXR0b25zL1N1Ym1pdEJ0bic7XG5pbXBvcnQgU3Vic2VjdGlvbiBmcm9tICcuLi9zdWJzZWN0aW9uL1N1YnNlY3Rpb24nO1xuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBzdWJzZWN0aW9uOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3VibmFtZTogJydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuICB9XG4gIGhhbmRsZU9uQ2hhbmdlKGUsIGlkeCkge1xuICAgIGNvbnN0IHN1YnNlY3Rpb24gPSB0aGlzLnN0YXRlLnN1YnNlY3Rpb247XG4gICAgc3Vic2VjdGlvbltpZHhdLnN1Ym5hbWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cbiAgZGVsZXRlU3Vic2VjdGlvbiA9IChpZHgpID0+ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN1YnNlY3Rpb246IHRoaXMuc3RhdGUuc3Vic2VjdGlvbi5maWx0ZXIoKHN1YiwgX2lkeCkgPT4gX2lkeCAhPT0gaWR4KSxcbiAgICB9KTtcbiAgfVxuICBhZGROZXdTdWJzZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdWJzZWN0aW9uOiB0aGlzLnN0YXRlLnN1YnNlY3Rpb24uY29uY2F0KFt7IHN1Ym5hbWU6ICcnIH1dKVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgey8qc2VjdGlvbiBuYW1lICAqL31cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8aDU+Q291cnNlOjwvaDU+XG4gICAgICAgICAgPElucHV0IHM9ezEyfSAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgey8qaW50cm8gdmlkZW8qL31cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8aDU+VXBsb2FkPC9oNT5cbiAgICAgICAgICA8YSBocmVmPScjJz48SWNvbiBsYXJnZT5mb2xkZXI8L0ljb24+PC9hPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcz17MTJ9XG4gICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgIHZhbHVlPSdhZGRfdG9fdHJpYWwnXG4gICAgICAgICAgICBsYWJlbD1cImluY2x1ZGVkIGluIHRyaWFsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgey8qcmVzb3VyY2Uvd29ya3NoaXQqL31cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8aDU+V29ya3NoZWV0OjwvaDU+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj48SWNvbiBsYXJnZT5mb2xkZXI8L0ljb24+PC9hPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgey8qc3Vic2VjdGlvbiBjb21wb25lbnQqL31cbiAgICAgICAgPFN1YnNlY3Rpb25cbiAgICAgICAgICBzdWJzZWN0aW9uPXt0aGlzLnN0YXRlLnN1YnNlY3Rpb259XG4gICAgICAgICAgaGFuZGxlT25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICBkZWxldGVTdWJzZWN0aW9uPXt0aGlzLmRlbGV0ZVN1YnNlY3Rpb24uYmluZCh0aGlzKX1cbiAgICAgICAgICBhZGROZXdTdWJzZWN0aW9uPXt0aGlzLmFkZE5ld1N1YnNlY3Rpb24uYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgey8qU3VibWl0IHdob2xlIHBhZ2UgICovfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgPFN1Ym1pdEJ0biBzdWJtaXQ9J3N1Ym1pdCcgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyU3R5bGU6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///103\n");

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(17);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMaterialize = __webpack_require__(34);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Subsection from '../subsection/Subsection.js';\n\nvar AddSubBtn = function AddSubBtn(_ref) {\n  var button = _ref.button,\n      addNewSubsection = _ref.addNewSubsection;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactMaterialize.Button,\n      { onClick: function onClick() {\n          return addNewSubsection();\n        } },\n      button\n    )\n  );\n};\n\nexports.default = AddSubBtn;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9ucy9BZGRTdWJCdG4uanM/YWM4MiJdLCJuYW1lcyI6WyJBZGRTdWJCdG4iLCJidXR0b24iLCJhZGROZXdTdWJzZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQWtDO0FBQUEsTUFBL0JDLE1BQStCLFFBQS9CQSxNQUErQjtBQUFBLE1BQXZCQyxnQkFBdUIsUUFBdkJBLGdCQUF1Qjs7QUFDbEQsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBUSxTQUFTO0FBQUEsaUJBQU1BLGtCQUFOO0FBQUEsU0FBakI7QUFBNENEO0FBQTVDO0FBREYsR0FERjtBQUtELENBTkQ7O2tCQVFlRCxTIiwiZmlsZSI6IjEwNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1tYXRlcmlhbGl6ZSc7XG4vLyBpbXBvcnQgU3Vic2VjdGlvbiBmcm9tICcuLi9zdWJzZWN0aW9uL1N1YnNlY3Rpb24uanMnO1xuXG5jb25zdCBBZGRTdWJCdG4gPSAoeyBidXR0b24sIGFkZE5ld1N1YnNlY3Rpb24gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZE5ld1N1YnNlY3Rpb24oKX0+e2J1dHRvbn08L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFN1YkJ0bjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b25zL0FkZFN1YkJ0bi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///107\n");

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(17);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SubmitBtn = function SubmitBtn(_ref) {\n  var submit = _ref.submit;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    submit\n  );\n};\n\nexports.default = SubmitBtn;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9ucy9TdWJtaXRCdG4uanM/YzI1MCJdLCJuYW1lcyI6WyJTdWJtaXRCdG4iLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQ2hDLFNBQ0U7QUFBQTtBQUFBO0FBQ0dBO0FBREgsR0FERjtBQUtELENBTkQ7O2tCQVFlRCxTIiwiZmlsZSI6IjEwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN1Ym1pdEJ0biA9ICh7IHN1Ym1pdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtzdWJtaXR9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRCdG47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9ucy9TdWJtaXRCdG4uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///108\n");

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(17);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(45);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Section = __webpack_require__(103);\n\nvar _Section2 = _interopRequireDefault(_Section);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconsole.log('React Fired');\n\n// import MetaData from './components/Metadata';\n\nvar App = function App() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Section2.default, null)\n  );\n};\n\n_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiQXBwIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQUVBQSxRQUFRQyxHQUFSLENBQVksYUFBWjs7QUFIQTs7QUFJQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU07QUFBQSxTQUNWO0FBQUE7QUFBQTtBQUVFO0FBRkYsR0FEVTtBQUFBLENBQVo7O0FBT0EsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QiIsImZpbGUiOiIxMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8vIGltcG9ydCBNZXRhRGF0YSBmcm9tICcuL2NvbXBvbmVudHMvTWV0YWRhdGEnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb24nO1xuXG5jb25zb2xlLmxvZygnUmVhY3QgRmlyZWQnKTtcbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICB7LyogPE1ldGFEYXRhIC8+ICovfVxuICAgIDxTZWN0aW9uIC8+XG4gIDwvZGl2PlxuICApO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///109\n");

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(17);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactMaterialize = __webpack_require__(34);\n\nvar _AddSubBtn = __webpack_require__(107);\n\nvar _AddSubBtn2 = _interopRequireDefault(_AddSubBtn);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Subsection = function (_Component) {\n  _inherits(Subsection, _Component);\n\n  function Subsection() {\n    _classCallCheck(this, Subsection);\n\n    return _possibleConstructorReturn(this, (Subsection.__proto__ || Object.getPrototypeOf(Subsection)).apply(this, arguments));\n  }\n\n  _createClass(Subsection, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.scrollToBottom();\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate() {\n      this.scrollToBottom();\n    }\n  }, {\n    key: 'scrollToBottom',\n    value: function scrollToBottom() {\n      this.el.scrollIntoView({ behavior: 'smooth' });\n    }\n  }, {\n    key: 'renderSubsection',\n    value: function renderSubsection() {\n      var _props = this.props,\n          subsection = _props.subsection,\n          handleOnChange = _props.handleOnChange,\n          deleteSubsection = _props.deleteSubsection;\n\n      return subsection.map(function (sub, idx) {\n        // console.log();\n        return _react2.default.createElement(\n          _reactMaterialize.Row,\n          { key: idx },\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Name:',\n            _react2.default.createElement(\n              'a',\n              { onClick: deleteSubsection(idx) },\n              _react2.default.createElement(\n                _reactMaterialize.Icon,\n                null,\n                'clear'\n              )\n            )\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, {\n            s: 12,\n            onChange: function onChange(event) {\n              return handleOnChange(event, idx);\n            },\n            value: sub.subname\n          }),\n          _react2.default.createElement(\n            'h5',\n            null,\n            'Video album'\n          ),\n          _react2.default.createElement(\n            'a',\n            { href: '#', s: 12 },\n            _react2.default.createElement(\n              _reactMaterialize.Icon,\n              { large: true },\n              'attach_file'\n            )\n          ),\n          _react2.default.createElement(_reactMaterialize.Input, {\n            s: 12,\n            type: 'checkbox',\n            value: 'add_to_trial',\n            label: 'included in trial'\n          })\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.renderSubsection(),\n        _react2.default.createElement(\n          _reactMaterialize.Row,\n          null,\n          _react2.default.createElement(_AddSubBtn2.default, {\n            button: 'Add New',\n            addNewSubsection: this.props.addNewSubsection\n          })\n        ),\n        _react2.default.createElement('div', { ref: function ref(el) {\n            _this2.el = el;\n          } })\n      );\n    }\n  }]);\n\n  return Subsection;\n}(_react.Component);\n\nexports.default = Subsection;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3Vic2VjdGlvbi9TdWJzZWN0aW9uLmpzPzdjYmMiXSwibmFtZXMiOlsiU3Vic2VjdGlvbiIsInNjcm9sbFRvQm90dG9tIiwiZWwiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwicHJvcHMiLCJzdWJzZWN0aW9uIiwiaGFuZGxlT25DaGFuZ2UiLCJkZWxldGVTdWJzZWN0aW9uIiwibWFwIiwic3ViIiwiaWR4IiwiZXZlbnQiLCJzdWJuYW1lIiwicmVuZGVyU3Vic2VjdGlvbiIsImFkZE5ld1N1YnNlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQixXQUFLQyxjQUFMO0FBQ0Q7Ozt5Q0FDb0I7QUFDbkIsV0FBS0EsY0FBTDtBQUNEOzs7cUNBQ2dCO0FBQ2YsV0FBS0MsRUFBTCxDQUFRQyxjQUFSLENBQXVCLEVBQUVDLFVBQVUsUUFBWixFQUF2QjtBQUNEOzs7dUNBQ2tCO0FBQUEsbUJBQ3dDLEtBQUtDLEtBRDdDO0FBQUEsVUFDVEMsVUFEUyxVQUNUQSxVQURTO0FBQUEsVUFDR0MsY0FESCxVQUNHQSxjQURIO0FBQUEsVUFDbUJDLGdCQURuQixVQUNtQkEsZ0JBRG5COztBQUVqQixhQUFPRixXQUFXRyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDbEM7QUFDQSxlQUNFO0FBQUE7QUFBQSxZQUFLLEtBQUtBLEdBQVY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFTO0FBQUE7QUFBQSxnQkFBRyxTQUFTSCxpQkFBaUJHLEdBQWpCLENBQVo7QUFBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQztBQUFULFdBREY7QUFFRTtBQUNFLGVBQUcsRUFETDtBQUVFLHNCQUFVO0FBQUEscUJBQVNKLGVBQWVLLEtBQWYsRUFBc0JELEdBQXRCLENBQVQ7QUFBQSxhQUZaO0FBR0UsbUJBQU9ELElBQUlHO0FBSGIsWUFGRjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FQRjtBQVFFO0FBQUE7QUFBQSxjQUFHLE1BQUssR0FBUixFQUFZLEdBQUcsRUFBZjtBQUFtQjtBQUFBO0FBQUEsZ0JBQU0sV0FBTjtBQUFBO0FBQUE7QUFBbkIsV0FSRjtBQVNFO0FBQ0UsZUFBRyxFQURMO0FBRUUsa0JBQUssVUFGUDtBQUdFLG1CQUFNLGNBSFI7QUFJRSxtQkFBTTtBQUpSO0FBVEYsU0FERjtBQWtCRCxPQXBCTSxDQUFQO0FBcUJEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNNO0FBQUE7QUFBQTtBQUNHLGFBQUtDLGdCQUFMLEVBREg7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUNFLG9CQUFPLFNBRFQ7QUFFRSw4QkFBa0IsS0FBS1QsS0FBTCxDQUFXVTtBQUYvQjtBQURGLFNBRkY7QUFRRSwrQ0FBSyxLQUFLLGFBQUNiLEVBQUQsRUFBUTtBQUFFLG1CQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFBZSxXQUFuQztBQVJGLE9BRE47QUFZRDs7Ozs7O2tCQUdZRixVIiwiZmlsZSI6IjExMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3csIElucHV0LCBJY29uIH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuaW1wb3J0IEFkZFN1YkJ0biBmcm9tICcuLi9idXR0b25zL0FkZFN1YkJ0bic7XG5cbmNsYXNzIFN1YnNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNjcm9sbFRvQm90dG9tKCk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuICBzY3JvbGxUb0JvdHRvbSgpIHtcbiAgICB0aGlzLmVsLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9XG4gIHJlbmRlclN1YnNlY3Rpb24oKSB7XG4gICAgY29uc3QgeyBzdWJzZWN0aW9uLCBoYW5kbGVPbkNoYW5nZSwgZGVsZXRlU3Vic2VjdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gc3Vic2VjdGlvbi5tYXAoKHN1YiwgaWR4KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBrZXk9e2lkeH0+XG4gICAgICAgICAgPGg1Pk5hbWU6PGEgb25DbGljaz17ZGVsZXRlU3Vic2VjdGlvbihpZHgpfT48SWNvbj5jbGVhcjwvSWNvbj48L2E+PC9oNT5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHM9ezEyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IGhhbmRsZU9uQ2hhbmdlKGV2ZW50LCBpZHgpfVxuICAgICAgICAgICAgdmFsdWU9e3N1Yi5zdWJuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGg1PlZpZGVvIGFsYnVtPC9oNT5cbiAgICAgICAgICA8YSBocmVmPScjJyBzPXsxMn0+PEljb24gbGFyZ2U+YXR0YWNoX2ZpbGU8L0ljb24+PC9hPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgcz17MTJ9XG4gICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgIHZhbHVlPSdhZGRfdG9fdHJpYWwnXG4gICAgICAgICAgICBsYWJlbD1cImluY2x1ZGVkIGluIHRyaWFsXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3Vic2VjdGlvbigpfVxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPEFkZFN1YkJ0blxuICAgICAgICAgICAgICAgIGJ1dHRvbj0nQWRkIE5ldydcbiAgICAgICAgICAgICAgICBhZGROZXdTdWJzZWN0aW9uPXt0aGlzLnByb3BzLmFkZE5ld1N1YnNlY3Rpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxkaXYgcmVmPXsoZWwpID0+IHsgdGhpcy5lbCA9IGVsOyB9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzZWN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1YnNlY3Rpb24vU3Vic2VjdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///110\n");

/***/ })

},[109]);
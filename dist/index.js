'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pageBus = require('page-bus');

var _pageBus2 = _interopRequireDefault(_pageBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageBusTransport = function () {
  function PageBusTransport(_ref) {
    var key = _ref.key;

    _classCallCheck(this, PageBusTransport);

    this._bus = null;
    this._bus = (0, _pageBus2.default)({ key: key });
    this._bus.on('event', this._handleEvent.bind(this));
    this._handler = null;
  }

  _createClass(PageBusTransport, [{
    key: 'setHandler',
    value: function setHandler(handler) {
      this._handler = handler;
    }
  }, {
    key: 'send',
    value: function send(event) {
      var data = JSON.stringify(event);
      this._bus.emit('event', data);
      return Promise.resolve(null);
    }
  }, {
    key: '_handleEvent',
    value: function _handleEvent(data) {
      var event = JSON.parse(data);
      this._handler(event);
    }
  }]);

  return PageBusTransport;
}();

exports.default = PageBusTransport;
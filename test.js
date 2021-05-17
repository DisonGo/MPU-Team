'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        this.state.liked = false;
        return 'You liked this.';
      }

      return React.createElement(
        'button',
        { onClick: function onClick() {
            return _this2.setState({ liked: true });
          } },
        'Like'
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var Conteiner = function (_React$Component2) {
  _inherits(Conteiner, _React$Component2);

  function Conteiner(props) {
    _classCallCheck(this, Conteiner);

    return _possibleConstructorReturn(this, (Conteiner.__proto__ || Object.getPrototypeOf(Conteiner)).call(this, props));
  }

  return Conteiner;
}(React.Component);

var BlurExample = function (_React$Component3) {
  _inherits(BlurExample, _React$Component3);

  function BlurExample(props) {
    _classCallCheck(this, BlurExample);

    var _this4 = _possibleConstructorReturn(this, (BlurExample.__proto__ || Object.getPrototypeOf(BlurExample)).call(this, props));

    _this4.state = { isOpen: false };
    _this4.timeOutId = null;

    _this4.onClickHandler = _this4.onClickHandler.bind(_this4);
    _this4.onBlurHandler = _this4.onBlurHandler.bind(_this4);
    _this4.onFocusHandler = _this4.onFocusHandler.bind(_this4);
    return _this4;
  }

  _createClass(BlurExample, [{
    key: 'onClickHandler',
    value: function onClickHandler() {
      this.setState(function (currentState) {
        return {
          isOpen: !currentState.isOpen
        };
      });
    }

    // Мы закрываем выпадающий список по таймеру setTimeout.  // Это нужно чтобы для дочерних элементов событие выделения  // происходило перед событием получения фокуса.  onBlurHandler() {    this.timeOutId = setTimeout(() => {      this.setState({        isOpen: false      });    });  }  // Не закрывать выпадающий список при получении фокуса дочерним элементом.

  }, {
    key: 'onFocusHandler',
    value: function onFocusHandler() {
      clearTimeout(this.timeOutId);
    }
  }, {
    key: 'render',
    value: function render() {
      // React помогает нам благодаря всплытию потери фокуса и
      // фокусировке событий на родителе.   
      return React.createElement(
        'div',
        { onBlur: this.onBlurHandler,
          onFocus: this.onFocusHandler },
        React.createElement(
          'button',
          { onClick: this.onClickHandler,
            'aria-haspopup': 'true',
            'aria-expanded': this.state.isOpen },
          'Select an option'
        ),
        this.state.isOpen && React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            'Option 1'
          ),
          React.createElement(
            'li',
            null,
            'Option 2'
          ),
          React.createElement(
            'li',
            null,
            'Option 3'
          )
        )
      );
    }
  }]);

  return BlurExample;
}(React.Component);

var test = React.createElement(
  'div',
  { id: getRandom(0, 100) },
  ' test '
);
var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(BlurExample, null), domContainer);
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

function addLink(head, href) {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', href);
  head.appendChild(link);
}

module.exports = React.createClass({
  displayName: 'Frame',

  render: function render() {
    this._children = this.props.children;
    delete this.props.children; // render children manually
    return React.createElement('iframe', _extends({}, this.props, { onLoad: this.renderFrame }));
  },

  renderFrame: function renderFrame() {
    var frame = this.getDOMNode();
    var head = frame.contentDocument.head;
    var body = frame.contentDocument.body;

    var styleSheets = this.props.styleSheets;
    if (styleSheets && styleSheets.length) {
      styleSheets.forEach(function (link) {
        addLink(head, link);
      });
    }

    React.render(this._children, body);
  },

  componentDidMount: function componentDidMount() {
    this.renderFrame();
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    React.render(nextProps.children, this.getDOMNode().contentDocument.body);
  },

  componentWillUnmount: function componentWillUnmount() {
    React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
  }
});
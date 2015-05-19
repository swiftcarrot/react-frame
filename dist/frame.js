'use strict';

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
    return React.createElement('iframe', { className: this.props.className, id: this.props.id });
  },

  componentDidMount: function componentDidMount() {
    var frame = this.getDOMNode();
    var head = frame.contentDocument.head;
    var body = frame.contentDocument.body;

    var styleSheets = this.props.styleSheets;
    if (styleSheets && styleSheets.length) {
      styleSheets.forEach(function (link) {
        addLink(head, link);
      });
    }

    React.render(this.props.children, body);
  },

  componentDidUpdate: function componentDidUpdate() {
    var frame = this.getDOMNode();
    var body = frame.contentDocument.body;
    React.render(this.props.children, body);
  },

  componentWillUnmount: function componentWillUnmount() {
    React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
  }
});
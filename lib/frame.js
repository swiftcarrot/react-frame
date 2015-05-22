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

  render() {
    this._children = this.props.children;
    delete this.props.children; // render children manually
    return <iframe {... this.props} onLoad={this.renderFrame}/>;
  },

  renderFrame() {
    var frame = this.getDOMNode();
    var head = frame.contentDocument.head;
    var body = frame.contentDocument.body;

    var styleSheets = this.props.styleSheets;
    if(styleSheets && styleSheets.length) {
      styleSheets.forEach((link) => {
        addLink(head, link);
      });
    }

    React.render(this._children, body);
  },

  componentDidMount() {
    this.renderFrame();
  },

  componentWillReceiveProps(nextProps) {
    React.render(nextProps.children,
      this.getDOMNode().contentDocument.body);
  },

  componentWillUnmount() {
    React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
  }
});

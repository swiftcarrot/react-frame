var React = require('react');

module.exports = React.createClass({
  displayName: 'Frame',

  render() {
    this._children = this.props.children;
    delete this.props.children; // render children manually
    return <iframe {... this.props} onLoad={this.renderFrame}/>;
  },

  updateStylesheets(styleSheets) {
    var links = this.head.querySelectorAll('link');
    for(var i = 0, l = links.length; i < l; i++) {
      var link = links[i];
      link.parentNode.removeChild(link);
    }

    if(styleSheets && styleSheets.length) {
      styleSheets.forEach((href) => {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', href);
        this.head.appendChild(link);
      });
    }
  },

  updateStyles(css) {
    if(!css) return;
    if(!this.styleDom) {
      var dom = document.createElement('style');
      dom.type = "text/css";
      this.head.appendChild(dom);
      this.styleDom = dom;
    }

    this.styleDom.innerHTML = css;
  },

  renderFrame() {
    var frame = this.getDOMNode();
    this.head = frame.contentDocument.head;
    this.body = frame.contentDocument.body;

    this.updateStylesheets(this.props.styleSheets);
    this.updateStyles(this.props.css);

    React.render(this._children, this.body);
  },

  componentDidMount() {
    this.renderFrame();
  },

  componentWillReceiveProps(nextProps) {
    if(nextProps.styleSheets.join('') !== this.props.styleSheets.join(''))
      this.updateStylesheets(nextProps.styleSheets);

    if(nextProps.css !== this.props.css)
      this.updateStyles(nextProps.css);

    React.render(nextProps.children,
      this.getDOMNode().contentDocument.body);
  },

  componentWillUnmount() {
    React.unmountComponentAtNode(this.getDOMNode().contentDocument.body);
  }
});

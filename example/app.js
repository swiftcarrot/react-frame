var React = require('react');
var Frame = require('../lib/frame');
var jcss = require('../lib/json-css');

var App = React.createClass({
  getInitialState() {
    return {
      text: 'Parturient Ipsum Cursus Purus Justo',
      background: '#aaa',
      frame1: true,
      frame2: false
    };
  },

  handleChange(e) {
    this.setState({text: e.target.value});
  },

  handleBackgroundChange(e) {
    this.setState({background: e.target.value});
  },

  toggleStyle(frame) {
    var s = {};
    s[frame] = !this.state[frame];
    this.setState(s);
  },

  getCss() {
    return jcss([
      {'body': {'background-color': this.state.background}}
    ]);
  },

  getStyleSheets() {
    var s = [];
    if(this.state.frame1) s.push('frame1.css');
    if(this.state.frame2) s.push('frame2.css');
    return s;
  },

  render() {
    var styleSheets = this.getStyleSheets();
    var css = this.getCss();

    return (
      <div>
        <h1>react-frame</h1>
        <div className="title">{this.state.text}</div>
        <Frame
          className="iframe"
          id="iframe"
          styleSheets={styleSheets}
          css={css}>

          <div className="title">{this.state.text}</div>

        </Frame>

        <div>
          <textarea
            style={{width: 400}}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label>Background Color</label>
          <input
            type="text"
            value={this.state.background}
            onChange={this.handleBackgroundChange}
          />
        </div>

        <div>
          <input
            type="checkbox"
            checked={this.state.frame1}
            onChange={this.toggleStyle.bind(null, 'frame1')}
          />
          <label>frame1.css</label>
        </div>

        <div>
          <input
            type="checkbox"
            checked={this.state.frame2}
            onChange={this.toggleStyle.bind(null, 'frame2')}
          />
          <label>frame2.css</label>
        </div>
      </div>
    )
  }
});

React.render(<App/>, document.getElementById('app'));

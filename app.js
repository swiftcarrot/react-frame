const React = require('react');
const ReactDOM = require('react-dom');
const Frame = require('../lib/frame');
const jcss = require('./json-css');

class App extends React.Component {
  state = {
    text: 'Parturient Ipsum Cursus Purus Justo',
    background: '#aaa',
    frame1: true,
    frame2: false
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleBackgroundChange = e => {
    this.setState({ background: e.target.value });
  };

  toggleStyle = frame => {
    this.setState({ ...this.state, [frame]: !this.state[frame] });
  };

  getCss = () => {
    return jcss([{ body: { 'background-color': this.state.background } }]);
  };

  getStyleSheets = () => {
    const s = [];
    if (this.state.frame1) s.push('frame1.css');
    if (this.state.frame2) s.push('frame2.css');
    return s;
  };

  render() {
    const styleSheets = this.getStyleSheets();
    const css = this.getCss();

    return (
      <div className="app">
        <h1>react-frame</h1>
        <div className="title">
          {this.state.text}
        </div>
        <Frame
          className="iframe"
          id="iframe"
          styleSheets={styleSheets}
          css={css}
        >
          <div className="title">
            {this.state.text}
          </div>
        </Frame>

        <div>
          <textarea
            style={{ width: 400 }}
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
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

var React = require('react');
var Frame = require('../lib/frame');

var App = React.createClass({
  getInitialState() {
    return {text: 'Parturient Ipsum Cursus Purus Justo'};
  },

  handleChange(e) {
    this.setState({text: e.target.value});
  },

  render() {
    return (
      <div>
        <textarea style={{width: 400}} value={this.state.text} onChange={this.handleChange}/>
        <div className="title">{this.state.text}</div>
        <Frame className="iframe" id="iframe" styleSheets={['frame.css']}>
        <div>
          <div className="title">{this.state.text}</div>
        </div>
        </Frame>
      </div>
    )
  }
});

React.render(<App/>, document.body);

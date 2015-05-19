var React = require('react');
var Frame = require('../lib/frame');

var App = React.createClass({
  render() {
    return (
      <div>
        <div className="title">Parturient Ipsum Cursus Purus Justo</div>
        <Frame styleSheets={['/example/frame.css']}>
          <div className="title">Parturient Ipsum Cursus Purus Justo</div>
        </Frame>
      </div>
    )
  }
});

React.render(<App/>, document.body);

var React = require('react');
var ReactDOM = require('react-dom');

class Counter extends React.Component {
    render () {
      return (
        <div className="counter">
          {this.props.text}
          {": "}
          <span className="counter-value">0</span>
          <button>+</button>
          <button>-</button>
        </div>
      );
    }
  }

ReactDOM.render(
  <Counter text="COUNTER"/>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// OH NO! A BREAKING CHANGE!!!!

class Counter extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    if (event.target.innerHTML === '+') {
      this.setState({
        value: this.state.value + 1
      })
    } else {
      if (this.state.value === 0) {
        return;
      }
      this.setState({
        value: this.state.value - 1
      })
    }
  }

  render () {
    return (
      <div className="counter">
        {this.props.title}
        {": "}
        <span className="counter-value">{this.state.value}</span>
        <button onClick={this.handleChange}>+</button>
        <button onClick={this.handleChange}>-</button>
      </div>
    );
  }
}


ReactDOM.render(
  <Counter title="BLA BLA BLA"/>,
  document.getElementById('root')
);
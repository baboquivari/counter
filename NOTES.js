var React = require('react');
var ReactDOM = require('react-dom');

// ReactDOM.render(
//   <h1>Counter App</h1>,
//   document.getElementById('root')
// );

//////////////////////////////////////////////////////////////////////////
// INTRODUCING JSX //
//////////////////////////////////////////////////////////////////////////


// function formatName (user) {
//     return user.firstName + " " + user.lastName;
//   }
  
//   var user = {
//     firstName: "Tony", lastName: "Sian"
//   };
  
//   var buttonVariable = <button id="poop">A SHITTY BUTTON</button>;

//   // JSX syntax, wrapped in normal parentheses
//   var element = (
//     <div>
//         <h1>
//         Hello, {formatName(user)}
//         </h1>
        
//         {buttonVariable}
//     </div>
//   );
  
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

//////////////////////////////////////////////////////////////////////////
// SPECIFYING CHILDREN WITH JSX //
//////////////////////////////////////////////////////////////////////////

var element = (
    <div>
      <h1>My Counter App</h1>
      <ul id="counter-list">
        <li className="counter">
          Cofees drank today:
          {" "}
          <span className="counter-value">2</span>
          <button>+</button>
          <button>-</button>
        </li>
      </ul>
    </div>
  );

// BABEL TRANSPILES THE JSX DOWN INTO React.createElement() calls...

//   var element = (
//     <h1 className="counter">
//       Coffees: 2
//     </h1>
//   );
  
  // GETS COMPILED TO:
  
//   var element = React.createElement(
//     'h1',                     // element type
//     {className: 'counter'},   // object with attributes
//     'Coffees: 2'              // children nodes
//   );

//   ReactDOM.render(element, document.getElementById('root'));

//////////////////////////////////////////////////////////////////////////
// COMPONENTS AND PROPS IN REACT 
//////////////////////////////////////////////////////////////////////////

// React uses ES6 class syntax, but underneath the hood, this just boils down to a simple constructor function that spits out object instances

// class Counter extends React.Component {
//     render () {
//       return (
//         <div className="counter">
//           {this.props.title}
//           {": "}
//           <span className="counter-value">0</span>
//           {"  "}
//           <button>+</button>
//           <button>-</button>
//         </div>
//         );
//     }
// }

// reactDOM can accept component classes too - just written like normal HTML tags
// when we write components like this, we can pass them props (which is essentially just like passing a normal JS function an argument). The syntax for passing props looks just like HTML attribute key/value pairs.
// ReactDOM.render(
//     <Counter title="Counter "/>,
//     document.getElementById('root')
// );

//////////////////////////////////////////////////////////////////////////
// COMPOSING COMPONENTS 
//////////////////////////////////////////////////////////////////////////

// class App extends React.Component {
//     render () {
//       return (
//         <div id='app'>
//           <h1>My Counter App</h1>
//           <Counter title="Coffees" />
//           <Counter title="Cycling distance" />
//         </div>
//       );
//     }
//   }

//   ReactDOM.render(
//         <App title="Counter"/>,
//         document.getElementById('root')
//     );

//////////////////////////////////////////////////////////////////////////
// STATE AND LIFECYCLE 
//////////////////////////////////////////////////////////////////////////

// the example on the MD is acutally wrong, should be this...

// class Counter extends React.Component {
//     render () {
//       return (
//         <div className="counter">
//           {this.props.title}
//           {": "}
//           <span className="counter-value">{this.props.value}</span>
//         </div>
//       );
//     }
//   }
  
//   function renderCounter (value) {
//     ReactDOM.render(
//       <Counter title='Coffees' value={value} />,
//       document.getElementById('root')
//     );
//   }
  
//   var counter = 0;
//   var $incButton = document.createElement('button');
//   $incButton.innerText = '+';
//   $incButton.addEventListener('click', function () {
//     counter++;
//     renderCounter(counter);
//   });
//   document.querySelector('body').appendChild($incButton);
  
//   renderCounter(counter);

///////////////////////////////////////////////////////////////////////
  // *** USING STATE INTERNALLY ON EACH INSTANCE COMPONENT*** ...............
///////////////////////////////////////////////////////////////////////

// again, another mistake in the MD - missing a this.state.value in the SPAN in the render

class Counter extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        value: 0
      }
      this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement () {
      this.setState({
        value: this.state.value + 1
      });
    }
    render () {
      return (
        <div className="counter">
          {this.props.title}
          {": "}
          <span className="counter-value">{this.state.value}</span>
          <button onClick={this.handleIncrement}>+</button>
        </div>
      );
    }
  }

//   ReactDOM.render(
//         <Counter title="Counter"/>,
//         document.getElementById('root')
//     );

///////////////////////////////////////////////////////////////////////
  // DATA FLOW DIRECTION
///////////////////////////////////////////////////////////////////////

class App extends React.Component {
    render () {
      return (
        <div id='app'>
          <h1>My Counter App</h1>
          <Counter title="Coffees" />
          <Counter title="Cycling distance" />
          <Counter title="Pomodoros" />
        </div>
      );
    }
  }

  ReactDOM.render(
        <App />,
        document.getElementById('root')
    );



import React from 'react';
import ReactDOM from 'react-dom';

// This code imlements "State Basics" No. 5 video Maddalone egghead.io
// Note this is CLASS-BASED JavaScript
class App extends React.Component {
  // Works just like Java--call super() before adding your own code
  constructor () {
    super();
    this.state = {txt: 'This is my state text'}
  }

  // Used by the form to input the state variable
  update(e) {
    this.setState({txt: e.target.value})
  }

  // Required in all React components; it's what actually puts up the component
  render() {
    return (<div>
    <input type="text"
      // Watch the field and call update when its contents change
      onChange={this.update.bind(this)} />
    <h2>{this.state.txt}</h2>
    </div>
  );
  }
}
// This renders the overall class in its container div
ReactDOM.render (
  <App />,
  document.getElementById('app')
)

// ES2015 syntax; see companion import in main.js
export default App

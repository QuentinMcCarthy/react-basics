import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<Person name="Jacob" age="35">My hobby is Cycling</Person>
		{/*<Welcome />*/}
      </div>
    );
	// return React.createElement("div", null, React.createElement("h1", null, "Hello darkness my old friend"));
  }
}

// class Welcome extends App {
// 	render(){
// 		return(
// 			<p>I don't know, what do you want from me?</p>
// 		);
// 	}
// }

export default App;

import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Validation/ValidationComponent.js';
import CharComponent from './Char/CharComponent.js';

class App extends Component {
  state = {
    length: 0,
    chars: [],
    value: ''
  }

  textLengthHandler=(event)=>{
    let length = this.state.length.toString().slice();
    let chars = [...event.target.value.split('')];
    
    length = Number(chars.length);
    this.setState({
      length: length,
      chars: chars,
      value: chars.join('')
    });
  }

  removeCharHandler=(charIndex)=>{
    const chars = [...this.state.chars];

    chars.splice(charIndex, 1);
    this.setState({
      length: Number(chars.length),
      chars: chars,
      value: chars.join('')
    })

  }

  render() {
    
    const chars = (
      <div>
      {
        this.state.chars.map((char, index)=>{
          return <CharComponent 
          char={char}
          key={index}
          click={()=>this.removeCharHandler(index)}
          />
        })
      }
      </div>
    );
    
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <h3>My Solution</h3>
        <input type="text" onChange={this.textLengthHandler} value={this.state.value}/>
        <p>Text Length: {this.state.length} </p>
        <ValidationComponent length={this.state.length}/>
        {chars}
      </div>
    );
  }
}

export default App;

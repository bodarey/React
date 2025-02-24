import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {

    Title : 'title'
  }
  handlerClick = () =>{
    const oldtate = this.state.Title 
    const newstate = oldtate + 'changed'
   this.setState(
    {   Title: newstate     }
    
  )
  console.log(`${this.state.Title}`)
  }
  render(){
  return (
     <div>
     
      <button onClick={this.handlerClick} style={{Fontsize:'15px'}}> click </button>
      <h1> {this.state.Title}</h1>
     </div>
  )
}

}


export default App;

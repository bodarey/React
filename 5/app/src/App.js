import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  showNumber(){
    var a,b,c;
    a=b=c=10;
    var first = {
      a: a,
      b: b,
      c: c
    };
    var second ={
    a: 1,
    b:2,
    c:2
    }
    return [first,second];
  }
  getValue(){
  var a,b,c,d;
  b =  Math.floor(Math.random() * 10);
  c = (b > 5).toString();
  d = null;
   
   return [a,b,c,d];
  }
  getResult(){
    var a;
    let b;
    a ='JavaScript';
    b ='Courses';
     return `${a} ${b}`
  }
  getIncrement(){
      let a,x,y;
      a=0;
      ++a;
      ++a;
      ++a;
      x=y=a;

    return x
  }
  converValue(){
    var a,b,c;
    a =  Math.floor(Math.random() * 10);
    b = a.toString();
    c = Boolean(b);
    return Number(c);
  }
  render() {

    return (
      <div style={{'margin-left':'10px'}}>
          1. the results are:<br/>
          a:{this.showNumber()[0].a}   b:{this.showNumber()[0].b}   c:{this.showNumber()[0].c}
          <br/>
          after changing the values, variables are:<br/>
          a:{this.showNumber()[1].a}   b:{this.showNumber()[1].b}   c:{this.showNumber()[1].c}
          <br/><br/><br/>
          2. values of a: <br/>
          {typeof this.getValue()[0]} <br/>
          { this.getValue()[1]} <br/>
          {this.getValue()[2]} <br/>
          {typeof this.getValue()[3]} <br/>  <br/> 
          3. the result of the 3-th exercise:  <br/> 
          {this.getResult()} <br/> 
          4. <br/> 
          {this.getIncrement()}<br/> 
          5. the result for the 4-th exercise: <br/> 
           {this.converValue()}
      </div>
    )
  }

  
  
}

export default App;

import React, { Component } from 'react';

class State extends Component {

  state = {counter:0, color:'white'};

  onInc = () => {
    this.setState({counter:this.state.counter + 1});
  };

  onDec = () => {
    this.state.counter > 0 && this.setState({counter:this.state.counter -1});
  };

  onColorChange = (e) => {
    this.setState({color:e.target.value});
  };

  render(){
    return(
      <div>
        <h1>SOME STATE EXAMPLES...</h1>
        <br/>
        <section>
          <p>the counter is {this.state.counter}</p>
          <p><button onClick={this.onInc}>+</button><button onClick={this.onDec}>-</button></p>
        </section>
        <section>
        <p>the color is <span style={{'background':this.state.color}}>{this.state.color}</span></p>
        <p>
          <select onChange={this.onColorChange}>
            <option>white</option>
            <option>red</option>
            <option>orange</option>
            <option>yellow</option>
            <option>green</option>
            <option>blue</option>
            <option>purple</option>
          </select>
        </p>
        </section>
      </div>
    );
  }
}

export default State;
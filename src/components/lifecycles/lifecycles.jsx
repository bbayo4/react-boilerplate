import React, { Component } from 'react';

class Lifecycles extends Component {

  constructor(){
    super();
    this.state = {boxVisible:false}
  }

  componentWillMount(){
    console.log('componentWillMount()');
  }

  componentDidMount(){
    console.log('componentDidMount()');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate()');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate()');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount()');
  }

  onToggleBox = () => {
    this.setState({boxVisible:!this.state.boxVisible})
  };

  render() {
    return (
      <div>
        <h1>BASIC LIFECYCLE METHODS...</h1>
        {this.state.boxVisible && (<div className="toggle-box"> </div>)}
        <button onClick={this.onToggleBox}>toggle box</button>
      </div>
    );
  }
}

export default Lifecycles;
import React, { Component } from 'react';
import Logo from '../images/logo-siriusxm.png';

import Props from './props/props.jsx';
import State from './state/state.jsx';
import Lifecycles from './lifecycles/lifecycles.jsx';
import Media from './media/media.jsx';
import Spinner from './spinner/spinner.jsx';

class App extends Component {

  state = {sampleComponent: null};

  constructor() {
    super();
    this.someText = "some text was set to me via props!";
    this.someFruits = ['Apples', 'Oranges', 'Pears', 'Limes', 'Grapes'];
    this.someFunc = function (text) {
      alert(text);
    };
  }

  onPropsClick = () => {
    this.setState(
      {sampleComponent:(<Props text={this.someText} list={this.someFruits} func={this.someFunc} comp={<Spinner />} />)}
    );
  };

  onStateClick = () => {
    this.setState({sampleComponent:(<State />)});
  };

  onLifecycleClick = () =>{
    this.setState({sampleComponent:(<Lifecycles />)});
  };

  onMediaClick = () =>{
    this.setState({sampleComponent:(<Media />)});
  };

  onClear = () => {
    this.setState({sampleComponent:null});
  };

  render () {
    return (
      <div className="app">
        <header className="app-header">
          <img src={Logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React!</h1>
        </header>
        <div className="components-wrapper">
          {this.state.sampleComponent}
        </div>
        <div className="control-buttons">
          <button onClick={this.onPropsClick}>Props</button>
          <button onClick={this.onStateClick}>State</button>
          <button onClick={this.onLifecycleClick}>Lifecycles</button>
          <button onClick={this.onMediaClick}>Media</button>
          <button onClick={this.onClear}>Clear</button>
        </div>
      </div>
    );
  }
}

export default App;
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Props extends Component {

  onClick = (msg) => {
    this.props.func(msg);
  };

  render(){
    return(
      <div>
        <h1>BASIC PROPS...</h1>
        <p>{this.props.text}</p>
        <br/>
        <h3>A List!</h3>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            );
          })}
        </ul>
        <button onClick={() => {this.onClick('Hi There!')}}>Click me to fire off a function from a parent component</button>
        <div className="spinner">{this.props.comp}</div>
      </div>
    );
  }
}

Props.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  func: PropTypes.func.isRequired,
  comp: PropTypes.element
};

export default Props;
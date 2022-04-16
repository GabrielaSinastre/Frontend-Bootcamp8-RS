import React, { Component } from 'react';

class TechList extends Component {
  state = {
      techs: [
        'Node.js',
        'ReactJS',
        'React Native'
      ]
  };
  
  render() { // todo metodo de class precisa ter um método render
    console.log(this.state);
    return(
      <ul>
        <li>Node.js</li>
        <li>React</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;

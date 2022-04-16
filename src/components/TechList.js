import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"],
  };

  //esse formato é arrow function para ter acesso ao this e propriedades da classe
  //e pq recebe um evento como parametro
  handleInputChange = (e) => {
    //console.log(e.target.value); //para pegar o valor do input
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ techs: [...this.state.techs, this.state.newTech] });
  };

  handleDelete = (tech) => {
    console.log(tech);
    this.setState({ techs: this.state.techs.filter((t) => t !== tech) });
  };

  //on change, ou seja, conforme o usuario vai inserindo
  render() {
    // todo metodo de class precisa ter um método render
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map((tech) => (
              <li key={tech}>
                {tech}
                <button onClick={() => this.handleDelete(tech)} type="button">
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="sumbit">Enviar</button>
        </form>
      </>
    );
  }
}

export default TechList;

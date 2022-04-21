import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    newTech: "",
    techs: [],
  };

  //conceito de ciclo de vida de um componente
  //executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  //executado sempre que houver alterações nas props ou estados do componente
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  //executado quando o componente deixa de existir
  componentWillUnmount() {}

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
              <TechItem
                key={tech}
                tech={tech}
                onDelete={() => this.handleDelete(tech)}
              />
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

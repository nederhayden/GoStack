import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  // Estado do componente
  state = {
    newTech: "", // variavel que vai armazenar o valor digitado
    techs: [], // variavel com array vazia
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executado sempre que houver alteracoes nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {}

  // pega o valor digitado
  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value }); // alterando o valor da variavel newTech
  };

  // adiciona o item na lista
  handleSubmit = (e) => {
    e.preventDefault(); // anula o comportamento padrao do button (nao vai recarregar a pagina sempre que clicar)

    // cria um novo estado atualizando a lista
    this.setState({
      // Spread Operator: ...this.state.techs - copia tudo que ja tem na lista
      // this.state.newTech - adiciona a nova informacao na lista
      techs: [...this.state.techs, this.state.newTech],
      newTech: "",
    });
  };

  // remove o item da lista
  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter((t) => t !== tech),
    });
  };

  render() {
    return (
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
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;

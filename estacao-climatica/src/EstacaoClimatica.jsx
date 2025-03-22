import { Component } from "react";

export class EstacaoClimatica extends Component {
  state = {
    data: null,
  };

  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ data: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  render() {
    return (
      <div className="card w-100">
        <div className="card-body">
          <div
            className="d-flex align-items-center border rounded mb-2"
            style={{ height: "6rem" }}
          >
            <i className={`fas fa-5x fa-${this.props.icone}`}></i>
            <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
          </div>

          <div>
            {/* renderização condicional */}
            <p className="text-center">
              {this.props.latitude
                ? `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`
                : this.props.mensagemDeErro
                ? `${this.props.mensagemDeErro}`
                : "Clique no botão para saber a sua estação climática"}
            </p>
          </div>

          <button
            className="btn btn-outline-primary w-100 mt-2"
            onClick={this.props.obterLocalizacao}
          >
            Qual a minha estação?
          </button>
        </div>
      </div>
    );
  }
}

export default EstacaoClimatica;

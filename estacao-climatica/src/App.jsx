import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null,
    };
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear();

    const d1 = new Date(anoAtual, 5, 21);
    const d2 = new Date(anoAtual, 8, 24);
    const d3 = new Date(anoAtual, 11, 22);
    const d4 = new Date(anoAtual, 2, 21);

    const estaNoSul = latitude < 0 ? true : false;

    if (data >= d1 && data < d2) {
      return estaNoSul ? "Inverno" : "Verao";
    }

    if (data >= d2 && data < d3) {
      return estaNoSul ? "Primavera" : "Outono";
    }

    if (data >= d3 && data < d4) {
      return estaNoSul ? "Verao" : "Inverno";
    }

    return estaNoSul ? "Outono" : "Primavera";
  };

  icones = {
    Primavera: "flower",
    Verao: "umbrella-beach",
    Outono: "leaf",
    Inverno: "snowflake",
  };

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = new Date();
        const estacao = this.obterEstacao(data, position.coords.latitude);
        const icone = this.icones[estacao];

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone,
        });
      },
      (erro) => {
        this.setState({
          mensagemDeErro: "Tente novamente mais tarde!",
        });
      }
    );
  };

  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-xxl-6">
            <div className="card">
              <div className="card-body">
                <div
                  className="d-flex align-items-center border rounded mb-2"
                  style={{ height: "6rem" }}
                >
                  <i className={`fas fa-5x fa-${this.state.icone}`}></i>
                  <p className="w-75 ms-3 text-center fs-1">
                    {this.state.estacao}
                  </p>
                </div>

                <div>
                  {/* renderização condicional */}
                  <p className="text-center">
                    {this.state.latitude
                      ? `Coordenadas: ${this.state.latitude}, ${this.state.longitude}. Data: ${this.state.data}`
                      : this.state.mensagemDeErro
                      ? `${this.state.mensagemDeErro}`
                      : "Clique no botão para saber a sua estação climática"}
                  </p>
                </div>

                <button
                  className="btn btn-outline-primary w-100 mt-2"
                  onClick={this.obterLocalizacao}
                >
                  Qual a minha estação?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import EstacaoClimatica from "./EstacaoClimatica";
import { Loading } from "./Loading";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacao: null,
  //     data: null,
  //     icone: null,
  //     mensagemDeErro: null,
  //   };

  //   console.log("constructor");
  // }

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null,
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.obterLocalizacao();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
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
            <div className="d-flex align-items-center vh-100">
              {!this.state.latitude && !this.state.mensagemDeErro ? (
                <Loading
                  mensagem={"Por favor, responda à solicitação de localização"}
                />
              ) : this.state.mensagemDeErro ? (
                <p className="border rounded p-2 fs-1 text-center w-100">
                  É preciso permitir acesso à localização para que seja possível
                  mostrar a sua estação climática.
                </p>
              ) : (
                <EstacaoClimatica
                  {...this.state}
                  mensagemDeErro={this.mensagemDeErro}
                  obterLocalizacao={this.obterLocalizacao}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

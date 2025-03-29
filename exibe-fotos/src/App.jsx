import React from "react";
import Busca from "./components/Busca";
import { createCliente } from "pexels";
import env from "react-dotenv";

class App extends React.Component {
  pexelsClient = null;

  componentDidMount() {
    this.pexelsClient = createCliente(env.PEXELS_KEY);
  }

  onBuscaRealizada = (termoDeBusca) => {
    console.log(termoDeBusca);
  };

  render() {
    return (
      <div className="grid justify-content-center">
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
      </div>
    );
  }
}

export default App;

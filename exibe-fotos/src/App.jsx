import React from 'react';
import Busca from './components/Busca';
import pexelsClient from './utils/pexelsClient';
import ListaImagens from './components/ListaImagens';
import PexelsLogo from './components/PexelsLogo';

class App extends React.Component {
  pexelsClient = null;

  state = {
    photos: [],
  };

  onBuscaRealizada = termo => {
    pexelsClient.get(`/search?query=${termo}`).then(result => {
      this.setState({ photos: result.data.photos });
    });
  };

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos
  //     .search({
  //       query: termo,
  //       per_page: 5,
  //     })
  //     .then((result) => this.setState({ photos: result.photos }));
  // };

  render() {
    return (
      <div className="grid justify-content-center">
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1 className="text-center">Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}
              photos={this.state.photos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

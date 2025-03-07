const App = () => {
  return (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <div className="card">
            <div className="card-header text-muted">22/04/2021</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i class="fa-solid fa-headset fa-2xl fa-shake"></i>
              </div>
              <div className="border flex-grow-1 ms-3 py-2">
                <h4 className="text-center">Headset</h4>
                <p className="text-center">
                  Esse headset é Bluetooth
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <div className="card">
            <div className="card-header text-muted">22/04/2021</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i class="fa-solid fa-gamepad fa-2xl fa-shake"></i>
              </div>
              <div className="border flex-grow-1 ms-3 py-2">
                <h4 className="text-center">Gamepad</h4>
                <p className="text-center">
                  Controle Nintendo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <div className="card">
            <div className="card-header text-muted">22/04/2021</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i class="fa-solid fa-hippo fa-2xl fa-shake"></i>
              </div>
              <div className="border flex-grow-1 ms-3 py-2">
                <h4 className="text-center">Hippo</h4>
                <p className="text-center">
                  Hipopótamo Fêmea em tamanho real
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <div className="card">
            <div className="card-header text-muted">22/04/2021</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i class="fa-solid fa-snowman fa-2xl fa-shake"></i>
              </div>
              <div className="border flex-grow-1 ms-3 py-2">
                <h4 className="text-center">Boneco de Neve</h4>
                <p className="text-center">
                  Esse boneco de neve fica balançando sozinho
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

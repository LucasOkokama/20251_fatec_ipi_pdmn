import Cartao from "./Cartao";
import Feedback from "./Feedback";
import Pedido from "./Pedido";

const App = () => {
  const textoOK = "Já chegou";
  const textoNOK = "Ainda nao chegou";
  const funcaoOK = () => alert("Agradecemos o feedback");
  const funcaoNOK = () => alert("Verificaremos o que aconteceu");

  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  );

  return (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              icone="headset"
              titulo="Headset"
              descricao="Headset Bluetooth."
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="23/04/2024">
            <Pedido
              icone="gamepad"
              titulo="Gamepad"
              descricao="Controne Nintendo."
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="24/04/2024">
            <Pedido
              icone="hippo"
              titulo="Hippo"
              descricao="Hipopótamo Fêmea."
            />
            {componenteFeedback}
          </Cartao>
        </div>

        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao cabecalho="25/04/2024">
            <Pedido
              icone="snowman"
              titulo="Snowman"
              descricao="Boneco de neve que treme."
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  );
};

export default App;

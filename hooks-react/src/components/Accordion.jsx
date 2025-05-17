import { useState } from 'react';
import './Accordion.css';
import { Card } from 'primereact/card';

const Accodion = ({ itens }) => {
  const [indiceAtivo, setIndiceAtivo] = useState(null);

  const itemClicado = index => {
    setIndiceAtivo(prev => (prev === index ? null : index));
  };

  const listaCards = itens.map((item, index) => (
    <Card id="accordion" key={index} className="border-1 border-400 p-0">
      <div
        className="flex align-items-center pl-4 pointer cursor-pointer"
        onClick={() => itemClicado(index)}
      >
        {indiceAtivo === index ? (
          <i className="pi pi-angle-down"></i>
        ) : (
          <i className="pi pi-angle-right"></i>
        )}
        <h5 className="ml-2">{item.titulo}</h5>
      </div>
      {indiceAtivo === index && (
        <p className="m-0 mb-4 pl-4">{item.conteudo}</p>
      )}
    </Card>
  ));

  return <div>{listaCards}</div>;
};

export default Accodion;

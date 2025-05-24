import React, { act, useEffect, useState } from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fazerBusca = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: termoDeBusca,
        },
      });

      setResultados(data.query.search);
    };

    if (termoDeBusca) fazerBusca();
  }, [termoDeBusca]);

  return (
    <div>
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          placeholder="Buscar..."
          value={termoDeBusca}
          onChange={e => setTermoDeBusca(e.target.value)}
        />
      </IconField>

      {resultados.map(resultado => (
        <div key={resultado.pageId} className="my-2 border border-1 border-400">
          <div className="border-bottom border border-1 border-400 p-2 text-center font-bold">
            {resultado.title}
          </div>
          <div className="p-2">
            <span
              dangerouslySetInnerHTML={{ __html: resultado.snippet }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Busca;

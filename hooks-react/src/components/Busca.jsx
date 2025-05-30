import React, { act, useEffect, useState } from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
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

    const debounce = setTimeout(() => {
      if (termoDeBusca) fazerBusca();
    }, 1000);

    return () => clearTimeout(debounce);
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
        <div key={resultado.pageid} className="my-2 border border-1 border-400">
          <div className="border-bottom border border-1 border-400 p-2 text-center font-bold">
            {resultado.title}
            <span>
              <Button
                icon="pi pi-send"
                className="ml-3 p-button-rounded p-button-secondary"
                onClick={() => {
                  window.open(
                    `https://en.wikipedia.org?curid=${resultado.pageid}`
                  );
                }}
              />
            </span>
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

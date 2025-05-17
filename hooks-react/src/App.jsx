import Accodion from './components/Accordion';

const itens = [
  {
    titulo: 'Java',
    conteudo:
      'Linguagem compilada e orientada a objetos, amplamente usada em aplicações corporativas e Android.',
  },
  {
    titulo: 'JavaScript',
    conteudo:
      'Linguagem interpretada. Executa do lado do cliente (navegador) e também do lado do servidor (Node.js).',
  },
  {
    titulo: 'Python',
    conteudo:
      'Linguagem interpretada, de fácil leitura e escrita. Muito usada em ciência de dados, automação, back-end e IA.',
  },
  {
    titulo: 'C',
    conteudo:
      'Linguagem compilada, procedural e de baixo nível. Muito usada em sistemas embarcados e desenvolvimento de sistemas operacionais.',
  },
  {
    titulo: 'C++',
    conteudo:
      'Evolução do C com suporte a orientação a objetos. Usada em jogos, sistemas de alto desempenho e engines gráficas.',
  },
  {
    titulo: 'C#',
    conteudo:
      'Linguagem moderna da Microsoft, muito usada no desenvolvimento com .NET e jogos com Unity.',
  },
  {
    titulo: 'TypeScript',
    conteudo:
      'Superset do JavaScript que adiciona tipagem estática. Compila para JavaScript.',
  },
  {
    titulo: 'Kotlin',
    conteudo:
      'Linguagem moderna, concisa e segura. Usada principalmente para desenvolvimento Android.',
  },
  {
    titulo: 'Swift',
    conteudo:
      'Linguagem da Apple usada para desenvolvimento iOS, macOS e outros sistemas da empresa.',
  },
  {
    titulo: 'Go',
    conteudo:
      'Linguagem compilada da Google, com foco em simplicidade e desempenho. Muito usada em back-end e sistemas distribuídos.',
  },
  {
    titulo: 'Ruby',
    conteudo:
      'Linguagem interpretada, conhecida pela sintaxe elegante. Popular no desenvolvimento web com Ruby on Rails.',
  },
  {
    titulo: 'PHP',
    conteudo:
      'Linguagem de script muito usada para desenvolvimento web. Roda do lado do servidor.',
  },
  {
    titulo: 'Rust',
    conteudo:
      'Linguagem de sistemas focada em segurança e desempenho. Considerada moderna e segura para concorrência.',
  },
  {
    titulo: 'R',
    conteudo:
      'Linguagem especializada em estatística e análise de dados. Muito usada na academia e ciência de dados.',
  },
  {
    titulo: 'Shell Script',
    conteudo:
      'Scripts escritos para automação de tarefas no terminal (Linux/Unix).',
  },
  {
    titulo: 'Perl',
    conteudo:
      'Linguagem usada historicamente para scripts e automação de sistemas. Menos popular hoje, mas ainda útil.',
  },
];

const App = () => {
  return (
    <div>
      <Accodion itens={itens} />
    </div>
  );
};

export default App;

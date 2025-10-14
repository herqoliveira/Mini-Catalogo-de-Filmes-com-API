import { useEffect, useState } from 'react';
import filmesData from '../services/movies_api.json';

interface Avaliacoes {
  pessoa_1: {
    nome: string;
    comentario: string;
  };
  pessoa_2: {
    nome: string;
    comentario: string;
  };
  pessoa_3: {
    nome: string;
    comentario: string;
  };
}

interface Filme {
  id: number;
  nome: string;
  imagem: string;
  indicacao: number;
  ano: number;
  genero: string;
  duracao: string;
  descricao: string;
  nota: string;
  avaliacoes: Avaliacoes;
}

function Home() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [modalVisivel, setModalVisivel] = useState<boolean>(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | null>(null);

  useEffect(() => {
    setFilmes(filmesData);
  }, []);

  const abrirModal = (filme: Filme) => {
    setFilmeSelecionado(filme);
    setModalVisivel(true);
  };

  const fecharModal = () => {
    setModalVisivel(false);
    setFilmeSelecionado(null);
  };

  return (
    <>
      {modalVisivel && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 overflow-y-auto z-50">
          <div className="flex justify-center my-20">
            <div className="bg-white min-h-full p-20 max-w-4xl w-full rounded-xl">
              <img src={filmeSelecionado?.imagem} alt={filmeSelecionado?.nome} className='w-full mb-6 rounded-3xl'/>
              <h2 className="text-4xl font-bold mb-5">{filmeSelecionado?.nome}</h2>
              <p className='mb-5 font-bold text-amber-400 text-3xl'>{filmeSelecionado?.nota}</p>
              <p className='mb-5 text-gray-600'>{filmeSelecionado?.indicacao} | {filmeSelecionado?.duracao} | {filmeSelecionado?.ano}</p>
              <p className='mb-5'>{filmeSelecionado?.descricao}</p>
              <h2 className='mb-5 font-bold text-3xl'>Comentários:</h2>
              <div className='flex lg:flex-row md:flex-row flex-col gap-5'>
                <div>
                  <h3 className='font-semibold text-2xl'>{filmeSelecionado?.avaliacoes.pessoa_1.nome}</h3>
                  <p>{filmeSelecionado?.avaliacoes.pessoa_1.comentario}</p>
                </div>
                <div>
                  <h3 className='font-semibold text-2xl'>{filmeSelecionado?.avaliacoes.pessoa_2.nome}</h3>
                  <p>{filmeSelecionado?.avaliacoes.pessoa_2.comentario}</p>
                </div>
                <div>
                  <h3 className='font-semibold text-2xl'>{filmeSelecionado?.avaliacoes.pessoa_3.nome}</h3>
                  <p>{filmeSelecionado?.avaliacoes.pessoa_3.comentario}</p>
                </div>
              </div>
              <div className='flex gap-5'>
                <button className="mt-5 bg-[#4A4DFF] text-white py-2 px-6 rounded-lg hover:bg-[#0F13FC] cursor-pointer">
                  Assistir
                </button>
                <button className="mt-5 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-700 cursor-pointer" onClick={fecharModal}>
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[url(../../public/images/interestelar_carrossel.jpg)] bg-cover h-[100vh] flex flex-col justify-center items-center">
        <h1 className="font-bold lg:text-7xl md:text-5xl text-4xl mt-25 mb-10">INTERESTELAR</h1>
        <button className="bg-[#4A4DFF] text-[#FFF] lg:text-3xl md:text-2xl font-bold lg:px-12 lg:py-5 md:px-10 md:py-4 px-8 py-3 rounded-2xl cursor-pointer transition-all ease-linear duration-300 hover:scale-125 hover:bg-[#0F13FC]">
          Confira!
        </button>
      </div>
      <div className="bg-[#525252] px-15 py-10 text-white">
        <h1 className="font-bold lg:text-7xl md:text-5xl text-4xl mb-10">Filmes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filmes.map((filme) => (
            <div
              key={filme.id}
              className="bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:scale-105 relative"
              onClick={() => abrirModal(filme)}
            >
              <img src={filme.imagem} alt={filme.nome} className="h-full min-w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#030D18] text-gray-300 p-4 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-800 ease-in-out">
                <h2 className="font-bold text-xl text-white">{filme.nome}</h2>
                <p className="text-sm">
                  {filme.indicacao} | {filme.duracao} | {filme.ano}
                </p>
                <p className="text-md mt-2">{filme.genero}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
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


    useEffect(() => {
        setFilmes(filmesData);
    }, []);

    return (
        <>
            <div className='bg-[url(../../public/images/interestelar_carrossel.jpg)] bg-cover h-[100vh] flex flex-col justify-center items-center'>
                <h1 className="font-bold lg:text-7xl md:text-5xl text-4xl mt-25 mb-10">INTERESTELAR</h1>
                <button className="bg-[#4A4DFF] text-[#FFF] lg:text-3xl md:text-2xl font-bold lg:px-12 lg:py-5 md:px-10 md:py-4 px-8 py-3 rounded-2xl cursor-pointer transition-all ease-linear duration-300 hover:scale-125 hover:bg-[#0f13fc]">Confira!</button>
            </div>
            <div className='bg-[#525252] px-15 py-10 text-white'>
                <h1 className="font-bold lg:text-7xl md:text-5xl text-4xl mb-10">Filmes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filmes.map((filme) => (
                        <div key={filme.id} className="bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl relative">
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
    )
}

export default Home;
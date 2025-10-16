import { useEffect, useState } from 'react';
import filmesData from '../services/movies_api.json';

const userData = {
  nome: 'Ana Clara',
  email: 'ana.clara@email.com',
  membroDesde: 'Outubro, 2024',
  imagemPerfil: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
};
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


function Perfil() {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    useEffect(() => {
        const filmesPares = filmesData.filter((filme) => filme.id <= 4);
        setFilmes(filmesPares);
    }, []);

  return (
    <div className="bg-[#525252] min-h-screen px-4 py-10 sm:px-6 lg:px-15 text-white">
      <div className="max-w-7xl mx-auto">
        

        <div className="mt-10 w-xl mx-auto bg-white text-gray-800 rounded-2xl shadow-2xl p-8 mb-12 flex flex-col items-center">
          <img
            src={userData.imagemPerfil}
            alt="Foto do Perfil"

            className="w-32 h-32 rounded-full object-cover border-4 border-[#4A4DFF] mb-4"
          />
          <h1 className="text-4xl font-bold ">{userData.nome}</h1>
          <p className="text-gray-500 mt-1 ">{userData.email}</p>
          <p className="text-gray-500 text-sm mt-2">Membro desde: {userData.membroDesde}</p>

          <div className="flex gap-5 mt-8">
            <button className="bg-[#4A4DFF] text-white py-2 px-6 rounded-lg hover:bg-[#0F13FC] cursor-pointer transition-colors duration-300">
              Editar Perfil
            </button>
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-700 cursor-pointer transition-colors duration-300">
              Sair
            </button>
          </div>
        </div>


        <h2 className="font-bold lg:text-5xl md:text-4xl text-3xl mb-10">Meus Favoritos</h2>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filmes.map((filme) => (
            <div
              key={filme.id}
              className="bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:scale-105 relative"

            >
              <img src={filme.imagem} alt={filme.nome} className="h-full w-full object-cover" />

              <div className="absolute bottom-0 left-0 right-0 bg-[#030D18] text-gray-300 p-4 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-800 ease-in-out">
                <h3 className="font-bold text-xl text-white">{filme.nome}</h3>
                <p className="text-sm">
                  {filme.indicacao}+ | {filme.duracao} | {filme.ano}
                </p>
                <p className="text-md mt-2">{filme.genero}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
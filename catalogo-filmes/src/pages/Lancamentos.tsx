function Lancamentos() {
    return (
        <>
            <div className='bg-[#525252] px-15 py-10 text-white'>
                <div className="mt-10 flex justify-center">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="justify-center px-4 py-2 rounded-2xl bg-[#D9D9D9] text-black placeholder-gray-400 w-150 border-red-500 border-2 focus:border-[#0F13FC] focus:outline-none"
                    />
                </div>
                <div className="flex flex-wrap justify-center mt-10 gap-5 items-center lg:flex-row">
                    <div className="bg-[url('../../public/images/comedia.jpg')] h-44 w-70 lg:w-44 rounded-full flex justify-center items-center group bg-cover no-repeat">
                        <div className="group-hover:visible text-2xl transition-opacity duration-800 font-bold">Comédia</div>
                    </div>
                    <div className="bg-[url('../../public/images/romance.jpg')] h-44 w-70 lg:w-44 rounded-full flex justify-center items-center group bg-cover no-repeat">
                        <div className="group-hover:visible text-2xl transition-opacity duration-800 font-bold">Romance</div>
                    </div>
                    <div className="bg-[url('../../public/images/ficcao.jpg')] h-44 w-70 lg:w-44 rounded-full flex justify-center items-center group bg-cover no-repeat">
                        <div className="group-hover:visible text-2xl transition-opacity duration-800 font-bold">Ficção</div>
                    </div>
                    <div className="bg-[url('../../public/images/acao.jpg')] h-44 w-70 lg:w-44 rounded-full flex justify-center items-center group bg-cover no-repeat">
                        <div className="group-hover:visible text-2xl transition-opacity duration-800 font-bold">Ação</div>
                    </div>
                    <div className="bg-[url('../../public/images/animacao.webp')] h-44 w-70 lg:w-44 rounded-full flex justify-center items-center group bg-cover no-repeat">
                        <div className="group-hover:visible text-2xl transition-opacity duration-800 font-bold">Animação</div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default Lancamentos;
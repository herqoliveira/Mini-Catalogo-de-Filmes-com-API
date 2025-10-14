import { Link } from 'react-router-dom';

function Footer() {

  return (
        <>
            <div className="bg-[#030D18] text-[#B01212] py-10 px-15 flex flex-col items-center gap-5">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 w-full">
                    <div className="flex flex-col justify-center items-center text-center lg:text-start lg:items-start md:text-start md:items-start">
                        <h2 style={{ fontFamily: '"Irish Grover", cursive' }} className="text-2xl font-bold mb-3"><span className='text-[#4A4DFF]'>Cine</span>Box</h2>
                        <p className="text-gray-100 text-sm mb-6 max-w-70">Transformamos filmes em jornadas memoráveis. O <span style={{ fontFamily: '"Irish Grover", cursive' }} className='text-[#B01212]'><span className='text-[#4A4DFF]'>Cine</span>Box</span> é onde a paixão pelo cinema encontra a descoberta.</p>
                        <div className="flex gap-3">
                            <a href="#" className="text-[#B01212] hover:text-[#4A4DFF] h-8 w-8 flex justify-center items-center"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-[#B01212] hover:text-[#4A4DFF] h-8 w-8 flex justify-center items-center"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-[#B01212] hover:text-[#4A4DFF] h-8 w-8 flex justify-center items-center"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-[#B01212] hover:text-[#4A4DFF] h-8 w-8 flex justify-center items-center"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center lg:items-start md:text-start md:items-start">
                        <h3 className="text-[#4A4DFF] text-2xl font-bold mb-3">Sobre</h3>
                        <ul className="space-y-2 text-sm">
                            <li className='hover:text-[#4A4DFF]'><a href="#">Quem somos</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Nossa missão</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Equipe</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Parcerias</a></li>
                            <li className='hover:text-[#4A4DFF]' ><Link to="/Contato">Contato</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center lg:items-start md:text-start md:items-start">
                        <h3 className="text-[#4A4DFF] text-2xl font-bold mb-3">Serviços</h3>
                        <ul className="space-y-2 text-sm">
                            <li className='hover:text-[#4A4DFF]'><a href="#">Streaming de filmes</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Listas personalizadas</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Categorias de filmes</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Avaliações e reviews</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Planos premium</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center lg:items-start md:text-start md:items-start">
                        <h3 className="text-[#4A4DFF] text-2xl font-bold mb-3">Outros</h3>
                        <ul className="space-y-2 text-sm">
                            <li className='hover:text-[#4A4DFF]'><a href="#">Suporte</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Termos de uso</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Política de privacidade</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Blog</a></li>
                            <li className='hover:text-[#4A4DFF]'><a href="#">Comunidade</a></li>
                        </ul>
                    </div>
                </div>

                <p className="text-center text-gray-100 pt-5">© 2025 <span style={{ fontFamily: '"Irish Grover", cursive' }} className='text-[#B01212]'><span className='text-[#4A4DFF]'>Cine</span>Box</span>. Todos os direitos reservados.</p>
            </div>
        </>
  )
}

export default Footer
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Lancamentos from './pages/Lancamentos';
import Lista from './pages/Lista';
import Pesquisar from './pages/Pesquisar';
import Contato from './pages/Contato';
import MenuWeb from './components/MenuWeb';
import MenuMobile from './components/MenuMobile';
import Footer from './components/Footer'
import Perfil from './pages/Perfil';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Router>
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#030D18]/100 to-[#030D18]/0 text-[#B01212] h-20 px-15 flex justify-between items-center"> {/*bg-gradient-to-b from-[#030D18]/100 to-[#030D18]/0*/}
        <h1 style={{ fontFamily: '"Irish Grover", cursive' }} className="text-2xl font-bold"><span className='text-[#4A4DFF]'>Cine</span>Box</h1>
        {isMobile ? <MenuMobile /> : <MenuWeb />}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Lancamentos" element={<Lancamentos />} />
          <Route path="/Lista" element={<Lista />} />
          <Route path="/Pesquisar" element={<Pesquisar />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Contato" element={<Contato />} />

        </Routes>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
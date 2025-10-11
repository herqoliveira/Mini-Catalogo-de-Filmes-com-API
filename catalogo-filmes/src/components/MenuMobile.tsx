import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <button onClick={toggleMenu} className="lg:hidden z-30 relative">
          <i className="fas fa-bars text-[#B01212] text-2xl"></i>
        </button>
      )}


      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-[#030D18] opacity-50 z-10"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-0 right-0 bottom-0 w-1/2 bg-[#030D18] z-20 p-5 shadow-lg flex flex-col">
            <div className="flex justify-end mb-6">
              <button onClick={toggleMenu}>
                <i className="fas fa-times text-[#B01212] text-4xl"></i>
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-[#B01212]">
              <li>
                <NavLink to="/" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#4A4DFF] border-b-2"
                    : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2"
                }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/artistas" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#4A4DFF] border-b-2"
                    : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2"
                }>
                  Lançamentos
                </NavLink>
              </li>
              <li>
                <NavLink to="/musicas" onClick={toggleMenu} className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#4A4DFF] border-b-2"
                    : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2"
                }>
                  Minha Lista
                </NavLink>
              </li>
              <ul className='flex gap-5'>
                    <li>
                        <NavLink to="/playlists" onClick={toggleMenu} className={({ isActive }) =>
                        isActive
                            ? "cursor-pointer text-[#4A4DFF] border-b-2"
                            : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2"
                        }>
                        <a className="h-8 w-8 bg-[#030D18] rounded-full flex justify-center items-center"><i className="fas fa-search"></i></a>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/conta" onClick={toggleMenu} className={({ isActive }) =>
                        isActive
                            ? "cursor-pointer text-[#4A4DFF] border-b-2"
                            : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2"
                        }>
                        <a className="h-8 w-8 bg-[#030D18] rounded-full flex justify-center items-center"><i className="fas fa-user"></i></a>
                        </NavLink>
                    </li>
              </ul>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuMobile;
import { NavLink } from 'react-router-dom';

const MenuWeb = () => {
  return (
    <>
        <nav>
            <ul className="flex gap-7">
                <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive
                        ? "cursor-pointer text-[#4A4DFF] border-b-2"
                        : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2 transition duration-200 ease-in-out"
                    }
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/Lancamentos"
                    className={({ isActive }) =>
                    isActive
                        ? "cursor-pointer text-[#4A4DFF] border-b-2"
                        : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2 transition duration-200 ease-in-out"
                    }
                >
                    Lançamentos
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/Lista"
                    className={({ isActive }) =>
                    isActive
                        ? "cursor-pointer text-[#4A4DFF] border-b-2"
                        : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2 transition duration-200 ease-in-out"
                    }
                >
                    Minha Lista
                </NavLink>
                </li>
            </ul>
        </nav>
        <ul className='flex gap-10'>
            <li>
                <NavLink
                    to="/Pesquisar"
                    className={({ isActive }) =>
                    isActive
                        ? "cursor-pointer text-[#4A4DFF] border-b-2"
                        : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2 transition duration-200 ease-in-out"
                    }
                >
                    <a className="h-8 w-8 bg-[#030D18] rounded-full flex justify-center items-center"><i className="fas fa-search"></i></a>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Conta"
                    className={({ isActive }) =>
                    isActive
                        ? "cursor-pointer text-[#4A4DFF] border-b-2"
                        : "cursor-pointer hover:text-[#4A4DFF] hover:border-b-2 transition duration-200 ease-in-out"
                    }
                >
                    <a className="h-8 w-8 bg-[#030D18] rounded-full flex justify-center items-center"><i className="fas fa-user"></i></a>
                </NavLink>
            </li>
        </ul>
    </>
  );
};

export default MenuWeb;
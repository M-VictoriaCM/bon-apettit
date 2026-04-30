import { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/img/image-logo.png";
import "./navBar.css";

const icons = {
  entradas: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M804-282q17 9 30-4t4-30l-58-108-42 108 66 34Zm-200-38h48l96-238q3-8-1.5-13.5T736-580l-80-32q-9-3-17.5 2T628-596l-24 276Zm-296 0h48l-24-276q-2-11-10.5-15t-17.5-1l-80 32q-8 3-11.5 8.5T212-558l96 238Zm-152 38 66-34-42-108-58 108q-9 17 4 30t30 4Zm280-38h88l30-338q2-9-4.5-15.5T534-680H426q-8 0-14.5 6.5T406-658l30 338ZM138-200q-42 0-70-31.5T40-306q0-12 3.5-23.5T52-352l88-168q-14-40 1-79t53-55l80-32q14-5 28-7t28 1q14-29 39-48.5t57-19.5h108q32 0 57 19.5t39 48.5q14-2 28-.5t28 6.5l80 32q40 16 56 55t-2 77l88 168q6 11 9 23t3 25q0 45-30.5 75.5T814-200q-11 0-22-2.5t-22-7.5l-62-30H250l-56 30q-13 7-27.5 8.5T138-200Zm342-280Z"/>
    </svg>
  ),
  principales: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M200-120v-400q-33 0-56.5-23.5T120-600v-212q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v132h36v-132q0-12 8-20t20-8q12 0 20 8t8 20v212q0 33-23.5 56.5T280-520v400h-80Zm280 0v-404q-42-20-61-62.5T400-676q0-63 31.5-113.5T520-840q57 0 88.5 50.5T640-676q0 47-19 89.5T560-524v404h-80Zm200 0v-720q66 0 113 47t47 113v240h-80v320h-80Z"/>
    </svg>
  ),
  postres: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M482-40 294-400q-71 3-122.5-41T120-560q0-51 29.5-92t74.5-58q18-91 89.5-150.5T480-920q95 0 166.5 59.5T736-710q45 17 74.5 58t29.5 92q0 75-53 119t-119 41L482-40ZM280-480q15 0 29.5-5t26.5-17l22-22 26 16q21 14 45.5 21t50.5 7q26 0 50.5-7t45.5-21l26-16 22 22q12 12 26.5 17t29.5 5q33 0 56.5-23.5T760-560q0-30-19-52.5T692-640l-30-4-2-32q-5-69-57-116.5T480-840q-71 0-123 47.5T300-676l-2 32-30 6q-30 6-49 27t-19 51q0 33 23.5 56.5T280-480Zm202 266 108-210q-24 12-52 18t-58 6q-27 0-54.5-6T372-424l110 210Zm-2-446Z"/>
    </svg>
  ),
  bebidas: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M360-80q-33 0-56.5-23.5T280-160v-240L120-680q-9-20-3-40t26-30q10-5 20.5-7.5T184-760h592q11 0 21.5 2.5T818-750q20 10 26 30t-3 40L680-400v240q0 33-23.5 56.5T600-80H360Zm0-80h240v-240h-240v240Zm-98-480h436l120-160H162l100 160Zm98 480h240-240Z"/>
    </svg>
  ),
};

const navItems = [
  { name: "Entradas",    link: "#entradas",  icon: icons.entradas   },
  { name: "Principales", link: "#principal", icon: icons.principales },
  { name: "Postres",     link: "#postres",   icon: icons.postres    },
  { name: "Bebidas",     link: "#bebidas",   icon: icons.bebidas    },
];

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <div className="flex flex-col justify-center items-center w-8 h-8 gap-[5px]">
    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
  </div>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HEADER UNIVERSAL — logo + nombre siempre visible
          En desktop también muestra los nav links a la derecha
      ══════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/90 backdrop-blur-xl border-b border-white/5 h-16 flex items-center px-6 justify-between">

        {/* Logo + nombre */}
        <Link to="/" className="flex items-center gap-3">
          <div className="container_logo">
            <img src={logo} className="h-10" alt="logo" />
          </div>
          <span className="text-white font-bold tracking-wide text-base md:text-lg">
            Bon Apettit
          </span>
        </Link>

        {/* DESKTOP (lg+): links de navegación inline */}
        <nav className="hidden lg:block">
          <ul className="flex gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group flex items-center gap-2"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.icon}
                  </span>
                  {item.name}
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* TABLET (md – lg): hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hidden md:block lg:hidden cursor-pointer focus:outline-none"
          aria-label="Menú"
        >
          <HamburgerIcon open={isMenuOpen} />
        </button>
      </header>

      {/* Dropdown tablet — sale justo debajo del header */}
      <div
        className={`lg:hidden fixed top-16 left-0 w-full z-40 bg-[#0e0e0e]/95 backdrop-blur-xl border-b border-white/5
          transition-all duration-300 overflow-hidden
          ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col py-2 md:flex sm:hidden">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200"
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE (< md): bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="flex flex-col items-center justify-center gap-1 flex-1 h-full text-gray-500 hover:text-amber-400 active:text-amber-400 transition-colors duration-200 group"
            >
              <span className="group-hover:scale-110 group-active:scale-95 transition-transform duration-150">
                {item.icon}
              </span>
              <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
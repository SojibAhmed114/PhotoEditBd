import { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/services", label: "Services" },
  { id: 3, path: "/about", label: "About Us" },
  { id: 4, path: "/contact", label: "Contact Us" },
  { id: 5, path: "/location", label: "Location" },
];
const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((items) => (
        <li key={items.id} onClick={toggleMenu}>
          <NavLink
            to={items.path}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-purple-600 border px-3 py-2 rounded-full"
                : "hover:text-purple-500"
            }
          >
            {items.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [open , setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu =() =>{
    setOpen(()=>!open);
  } 
  useEffect(()=>{
    const handleScroll = ()=>{
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.addEventListener('scroll', handleScroll);
    }
  },[])
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-400 ease-in-out ${isScrolled ? "bg-white shadow-md": "bg-transparent text-white"}`}
    >
      <nav className="max-w-[1400px] container mx-auto flex justify-between items-center p-4">
        {/* logo */}
        <Link className="font-bold" to="/">
          Photo Edit Bd
        </Link>
        {/* mobile menu toggler */}
        <div 
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-2xl hover:text-purple-500"
        >
          {open ? null : <CgMenuRightAlt />}
        </div>
        {/* desktop menu */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* mobile menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-4 right-4 text-2xl"
            onClick={toggleMenu}
          >
            <CgClose />
          </div>
          <div>
            <NavItems toggleMenu={toggleMenu} />
          </div>
        </div>
        <div className="hidden md:block">card</div>
      </nav>
    </header>
  );
};

export default Navbar;



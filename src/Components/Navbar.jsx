import React from 'react'
import { Link, NavLink } from "react-router-dom";
const navItems = [
  { id:1, path: "/services", label: "Services"},
  { id:2, path: "/about", label: "About Us"},
  { id:3, path: "/contact", label: "Contact Us"},
  { id:4, path: "/location", label: "location"},
]
const NavItems = () =>{
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {navItems.map((items) => (
        <li key={items.id}>
          <NavLink
            to={items.path}
            className={({ isActive }) =>
              isActive ? "font-bold text-purple-600" : "hover:text-purple-500"
            }
          >
            {items.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
const Navbar = () => {
  return (
    <header>
      <nav className="max-w-[1400px] container mx-auto flex justify-between items-center p-4">
        <Link className="font-bold" to="/">
          Photo Edit Bd
        </Link>
        <div className='hidden md:flex'>
          <NavItems />
        </div>
        <div className='hidden md:block'>card</div>
      </nav>
    </header>
  );
}

export default Navbar
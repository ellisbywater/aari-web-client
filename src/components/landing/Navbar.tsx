import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from "react-router";

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = ()=> {
        setNav(!nav)
    }

    const navItems = [
        { id: 1, text: 'Pricing', to: "/pricing"},
        {id: 2, text: 'Features', to: "/features"},
        {id: 3, text: 'Get Started', to: "/signup"},
    ]

    return (
        <div className='bg-slate-900 flex justify-between items-center h-24 w-full mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center'>
        {navItems.map(item => (
          <NavLink
            to={item.to}
            key={item.id}
            className='px-2 py-4 w-[150px] hover:bg-[#00df9a] text-center rounded-xl m-2 cursor-pointer duration-300 hover:text-slate-900'
          >
            {item.text}
          </NavLink>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-900 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <NavLink
            to={item.to}
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </NavLink>
        ))}
      </ul>
    </div>
    )
}
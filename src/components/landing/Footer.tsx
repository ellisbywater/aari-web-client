import { NavLink } from "react-router";


export default function Footer() {
    return (
        <div className={'w-full p-10 bg-gradient-to-r from-[#131e43] to-[#080c1b] h-[400px] flex flex-col justify-center'}>
            <div className={'w-full flex flex-wrap justify-evenly items-center text-gray-50 py-8'}>
                <NavLink to={'/about'} className={'p-2 hover:text-yellow-600'}>About</NavLink>
                <NavLink to={'/services'}  className={'p-2 hover:text-yellow-600'}>Services</NavLink>
                <NavLink to={'/blog'}  className={'p-2 hover:text-yellow-600'}>Blog</NavLink>
                <NavLink to={'/contact-us'}  className={'p-2 hover:text-yellow-600'}>Contact</NavLink>
            </div>
            <div className={'w-full flex flex-row justify-center items-center mt-8'}>
                <p className={'text-gray-50'}>© 2023 Raven & Rhyme</p>
            </div>
        </div>
    )
}
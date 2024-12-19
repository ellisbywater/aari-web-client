import { NavLink } from "react-router";
import { FaChartPie, FaPuzzlePiece, FaChartLine, FaUser, FaChevronRight, FaChevronLeft, FaUserCircle } from "react-icons/fa";
import { MdCandlestickChart } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";

export default function Sidebar() {
    const [expanded, setExpanded] = useState(true)
    return (
        <aside className="h-screen flex max-width-[300px]">
            <nav className="h-full flex flex-col bg-gray-900 border-r border-gray-100">
                <div className="w-full p-4 pb-2 flex justify-between items-center">
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg">
                                {expanded ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                </div>
                <ul className="flex-1 px-3 text-lg">
                    <li className="w-full py-2 my-3">
                        <NavLink to={'/app/positions'} className={"h-full cursor w-full hover:bg-emerald-500 px-4 py-2 rounded"}>
                          <MdCandlestickChart className="inline h-full"/> <span className={`${expanded ? '' : 'hidden'} pl-2`}>Positions</span> 
                        </NavLink>
                    </li>
                    <li className="w-full py-2 my-3">    
                        <NavLink to={'/app/portfolios'} className={"h-full cursor w-full hover:bg-emerald-500 px-4 py-2 rounded"}>
                          <FaChartPie className="inline h-full"/> <span className={`${expanded ? '' : 'hidden'} pl-2`}>Portfolios</span>  
                        </NavLink>
                    </li>
                    <li className="w-full py-2 my-3">
                        <NavLink to={'/app/strategies'} className={"h-full cursor w-full hover:bg-emerald-500 px-4 py-2 rounded"}>
                          <FaChartLine className="inline h-full"/> <span className={`${expanded ? '' : 'hidden'} pl-2`}>Strategies</span>  
                        </NavLink>
                    </li>
                </ul>
                <div className="border-t flex px-3 py-6">
                    <FaUserCircle  className="h-full"/>
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                        <div className="leading-4">
                            <h4 className="font-semibold">constGenius</h4>
                            <span className="text-xs text-gray-600">constgenius@gmail.com</span>
                        </div>
                        <HiDotsVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    )
}
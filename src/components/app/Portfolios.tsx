import { NavLink } from "react-router";

function PortfolioCard() {
    return (
        <div>

        </div>
    )
}

export default function Portfolios(){
    return (
        <div className="w-full h-full col-span-6">
            <div className="w-full h-[150px] bg-gray-900 flex content-center  ">
                <NavLink to={'/app/portfolios/new'} className={'max-h-10 my-auto mx-auto rounded-xl px-5 py-2 bg-emerald-500 hover:bg-emerald-600'}>
                    New Portfolio
                </NavLink>
            </div>
            <div className="w-full p-6">
                <h3 className="text-2xl p-4">Portfolios</h3>
            </div>
            <div className="w-full">

            </div>
        </div>
    )
}
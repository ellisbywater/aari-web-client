import { NavLink } from "react-router";
import { Portfolio } from "../../types";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";
import { SubmitHandler, useForm } from "react-hook-form";

const portfolioMockData: Portfolio[] = [
    {
        id: '',
        name: 'default',
        positions: [],
        total_balance: 203.30,
        cash_balance: 32.20,
        created_at: '',
        updated_at:'',
    }
]

interface PortfolioCardProps {
    balance: number,
    name: string,
    positionCount: number
}


function PortfolioCard({props} : {props: PortfolioCardProps}) {
    return (
        <div className="p-6 w-1/3 rounded shadow-lg text-slate-200 bg-gray-900 flex flex-wrap">
            <div className="inline w-2/3">
                <p className="text-sm py-2">Balance</p>
                <h2 className="font-bold text-3xl h-full">{props.balance}</h2>
            </div>
            
            <div className="inline w-1/3 text-sm font-semibold">
                <p className="text-emerald-600 text-lg mb-4">{props.name}</p>
                <p>Positions {props.positionCount}</p>
            </div>
        </div>
    )
}

export default function Portfolios(){
    const [portfolios, setPortfolios] = useState<Portfolio[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        try {
            
            setPortfolios(portfolioMockData)
            
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
                toast.error(err.message)
            }
        }
    }, [])

    return (
        <div className="w-full h-full col-span-6">
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce} />
            <div className="w-full h-[150px] bg-gray-900 flex content-center">
                <NavLink to={'/app/portfolios/new'} className={'max-h-10 my-auto mx-auto rounded-xl px-5 py-2 bg-emerald-500 hover:bg-emerald-600'}>
                    New Portfolio
                </NavLink>
            </div>
            <div className="w-full p-6">
                <h3 className="text-2xl p-4 font-bold">Portfolios</h3>
            </div>
            <div className="w-full p-10">
                {error && <p className=""></p>}
                {
                    portfolios && portfolios?.length > 0 ? 
                        portfolios?.map(p => {
                            const cardProps: PortfolioCardProps = {
                                name: p.name,
                                balance: p.total_balance,
                                positionCount: p.positions.length
                            }
                            return (
                                <PortfolioCard props={cardProps} />
                            )
                           }) : <p>You haven't created a portfolio yet.</p>
                
                }
            </div>
        </div>
    )
}

interface IPortfolioFormInput {
    name: string,
    balance?: number
}

export function NewPortfolio() {
    const { register, handleSubmit } = useForm<IPortfolioFormInput>()
    const onSubmit: SubmitHandler<IPortfolioFormInput> = (data) => console.log(data)

    return (
        <div className="col-span-6">
            <div className="w-full h-[150px] bg-gray-900 flex items-center">
                <h3 className="text-2xl p-4 w-full text-center ">New Portfolio</h3>
            </div>
            <form className="p-4 w-1/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-2">
                    <label>Name</label>
                    <input type="text" className="w-full p-2 rounded-md border-gray-200 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" {...register("name")}/>
                </div>
                <div className="p-2">
                    <label>Intial Cash Balance</label>
                    <input type="number" className="w-full p-2 rounded-md border-gray-200 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" {...register("balance")}/>
                </div>
            </form>
        </div>
    )
}
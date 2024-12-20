import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { AssetType, Bias } from "../../types/positions";
import { useEffect, useState } from "react";



const mockPositionData: PositionRowItemData[] = [
    {
        id: '',
        ticker: 'BTC',
        bias: 'long',
        price: 106_252.09,
        change: 6.37
    },
    {
        id: '',  
        ticker: 'TSLA',
        bias: 'long',
        price: 106_252.09,
        change: 6.37
    },
    {
        id: '',
        ticker: 'NIFTY',
        bias: 'long',
        price: 106_252.09,
        change: 6.37
    }

]

interface PositionRowItemData {
    id: string,
    ticker: string,
    bias: Bias,
    price: number,
    change: number
}



function PositionRowItem({id, ticker, bias, price, change}: {id: string,ticker: string, bias: Bias, price: number, change: number}) {
    return (
        <NavLink to={`/app/positions/${id}`} className="w-full p-4 bg-gray-900 flex flex-wrap">
            <div className="h-full w-1/4">
                <p>{ticker}</p>
            </div>
            <div className="h-full w-1/4">
                <p>{bias}</p>
            </div>
            <div className="h-full w-1/4">
                <p>{price}</p>
            </div>
            <div className="h-full w-1/4">
                <p>{change}</p>
            </div>
        </NavLink>
    )
}


export default function Positions() {
    const [positions, setPositions] = useState<PositionRowItemData[] | null>(null)
    const [error, setError] = useState<string |null>(null)

    useEffect(() => {
        try {
            setPositions(mockPositionData)
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
                toast.error(err.message)
            }
        }
    }, [])
    return (
        <div className="w-full h-full col-span-6">
            <div className="w-full h-[150px] bg-gray-900 flex content-center  ">
                <NavLink to={'/app/positions/new'} className={'max-h-10 my-auto mx-auto rounded-xl px-5 py-2 bg-emerald-500 hover:bg-emerald-600'}>
                    New Position
                </NavLink>
            </div>
            <div className="w-full p-6">
                <h3 className="text-2xl p-4 font-bold">Positions</h3>
            </div>
            <div className="w-full p-8">
                <div className="w-full grid grid-cols-6 gap-4">
                    {
                        
                    }
                </div>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-lg border-b border-slate-500">
                            <th className="py-2">Ticker</th>
                            <th className="py-2 ">Bias</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">24hr Change</th>
                            <th className="py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="p-2">
                        {
                            mockPositionData && mockPositionData.map(pos => {
                                return  (
                                    <tr className="h-[50px] py-4 mt-4 text-center text-lg">
                                        <td>{pos.ticker}</td>
                                        <td>{pos.bias}</td>
                                        <td>{pos.price}</td>
                                        <td>{pos.change}</td>
                                        <td>
                                            <NavLink to={`/app/positions/${pos.id}`} className={'text-emerald-600 hover:text-emerald-500'}>
                                                View/Edit
                                            </NavLink>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

interface IPositionFormInput {
    ticker: string,
    asset_type: AssetType,
    bias: Bias,
    justification: string,
    initial_investment: number
}

export function NewPosition() {
    const { register, handleSubmit } = useForm<IPositionFormInput>()
    const onSubmit: SubmitHandler<IPositionFormInput> = (data) => console.log(data)

    return (
        <div className="col-span-6 ">
            <div className="w-full h-[150px] bg-gray-900 flex items-center">
                <h3 className="text-2xl p-4 w-full text-center "> New Position</h3>
            </div>
            
            <form className="w-3/4 p-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full py-2">
                    <label htmlFor="ticker" className="block font-medium text-gray-700 dark:text-gray-200">Ticker</label>
                    <input type="text" id="ticker" className="mt-1 p-2 w-1/3 rounded-md border-gray-200 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" 
                    {...register("ticker", {required: true, maxLength: 20})}
                    />
                </div>
                <div className="w-full py-2">
                    <label htmlFor="bias" className="block font-medium text-gray-700 dark:text-gray-200">Bias</label>
                    <select {...register("bias")} className="font-medium bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 p-2 rounded">
                        <option value={"long"}>Long</option>
                        <option value={"short"}>Short</option>
                    </select>
                </div>
                <div className="w-full py-2">
                    <label htmlFor="justification" className="block font-medium text-gray-700 dark:text-gray-200">Justification</label>
                    <textarea className="w-full p-2 rounded-md border-gray-200 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" {...register("justification", {required: true})} />
                </div>
                <div className="w-full py-2">
                    <label htmlFor="initial_investment" className="block font-medium text-gray-700 dark:text-gray-200">Initial Investment</label>
                    <input type="number" id="initial_investment" className="mt-1 p-2 w-1/3 rounded-md border-gray-200 bg-white text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                    {...register("initial_investment", {required: true})}
                    /> 
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-lg rounded mt-4" type="submit">
                    Create
                </button>
            </form>
        </div>
    )
}
import { NavLink } from "react-router";



const mockPositionData = [
    {
        name: 'Bitcoin',
        ticker: 'BTC',
        asset_type: 'crypto',
        bias: 'long',
        price: '106,252.09',
        change: '6.37'
    },
    {
        name: 'Tesla',  
        ticker: 'TSLA',
        asset_type: 'fund',
        bias: 'long',
        price: '106,252.09',
        change: '6.37'
    },
    {
        name: 'NIFTY 50 Index',
        ticker: 'NIFTY',
        asset_type: 'index',
        bias: 'long',
        price: '106,252.09',
        change: '6.37'
    }

]



export default function Positions() {
    return (
        <div className="w-full h-full col-span-6">
            <div className="w-full h-[150px] bg-gray-900 flex content-center  ">
                <NavLink to={'/app/positions/new'} className={'max-h-10 my-auto mx-auto rounded-xl px-5 py-2 bg-emerald-500 hover:bg-emerald-600'}>
                    New Position
                </NavLink>
            </div>
            <div className="w-full p-6">
                <h3 className="text-2xl p-4">Positions</h3>
            </div>
            <div className="w-full p-8">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-lg border-b border-slate-500">
                            <th className="py-2">Ticker</th>
                            <th className="py-2">Asset Type</th>
                            <th className="py-2">Bias</th>
                            <th className="py-2">Price</th>
                            <th className="py-2">24hr Change</th>
                        </tr>
                    </thead>
                    <tbody className="p-2">
                        {
                            mockPositionData && mockPositionData.map(pos => {
                                return  (
                                    <tr className="h-[50px] py-4 mt-4 text-center text-lg">
                                        <td>{pos.ticker}</td>
                                        <td>{pos.asset_type}</td>
                                        <td>{pos.bias}</td>
                                        <td>{pos.price}</td>
                                        <td>{pos.change}</td>
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
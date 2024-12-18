import { NavLink } from "react-router";

export default function Login() {
    return (
        <div className="w-full justify-items-center content-center mx-auto min-h-[800px]">
            <div className="w-2/3 md:w-1/3 p-6 shadow border border-emerald-500 rounded h-[500px] justify-items-center content-center">
                
                <form className="w-full justify-items-center">
                    <div className="w-full my-4">
                        <label htmlFor="useremail" className="block font-medium text-slate-800 dark:text-slate-200">
                            Email
                        </label>
                        <input type="email" id="useremail" placeholder="email@example.com" className="mt-2 p-2 w-full rounded-xl border-gray-200 shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:text-slate-200" />
                    </div>
                    <div className="w-full my-4">
                        <label htmlFor="userpwd" className="block font-medium text-slate-800 dark:text-slate-200">
                            Password
                        </label>
                        <input type="password" id="userpwd" placeholder="email@example.com" className="mt-2 p-2 w-full rounded-xl border-gray-200 shadow-sm dark:border-gray-700 dark:bg-slate-800 dark:text-slate-200" />
                    </div>
                    <button className="bg-emerald-600 mt-2 py-2 px-4 rounded-xl shadow text-lg">Log in</button>
                </form>
                <div className="w-full py-2 justify-items-center mt-4">
                    <p>Don't have an account?</p>
                    <NavLink to={'/signup'} className="text-emerald-600 hover:text-emerald-500 underline">
                        Sign up here!
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
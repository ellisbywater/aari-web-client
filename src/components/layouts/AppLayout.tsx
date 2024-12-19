import { Outlet } from "react-router";
import Sidebar from "../app/Sidebar";

export default function AppLayout() {
    return (
        <div className="w-full h-full bg-slate-900 text-slate-100 flex">
            <Sidebar />
            <div className="text-slate-200 h-screen max-h-screen bg-slate-900 overflow-scroll grid grid-cols-6 gap-4 w-full">
                <Outlet />
            </div>
        </div>
    )
}
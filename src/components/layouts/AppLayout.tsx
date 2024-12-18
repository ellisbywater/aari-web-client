import { Outlet } from "react-router";
import Sidebar from "../app/Sidebar";

export default function AppLayout() {
    return (
        <div className="w-full bg-slate-900 text-slate-100">
            <Sidebar />
            <div className="text-slate-200 h-screen max-h-screen bg-slate-900 overflow-scroll">
                <Outlet />
            </div>
        </div>
    )
}
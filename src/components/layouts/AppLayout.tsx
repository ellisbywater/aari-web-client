import { Outlet } from "react-router";
import Sidebar from "../app/Sidebar";
import { usePocketAuth } from "../../contexts/PocketContext";

export default function AppLayout() {
    return (
        <div className="w-full h-full grid grid-cols-12 bg-black text-slate-100 flex">
            <Sidebar />
            <div className="text-slate-200 h-screen max-h-screen col-span-9 bg-black  col-span-10  gap-4 w-full">
                <Outlet />
            </div>
        </div>
    )
}
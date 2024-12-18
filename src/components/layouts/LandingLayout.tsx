import { Outlet } from "react-router";
import Navbar from "../landing/Navbar";

export default function LandingLayout() {
    return (
        <div className="w-full bg-slate-900 text-slate-100">
            <Navbar />
            <div className="w-full min-h-screen">
                <Outlet/>
            </div>
        </div>
    )
}
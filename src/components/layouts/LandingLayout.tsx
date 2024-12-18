import { Outlet } from "react-router";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

export default function LandingLayout() {
    return (
        <div className="w-full bg-slate-900 text-slate-100 min-h-fit">
            <Navbar />
            <div className="w-full min-h-screen">
                <Outlet/>
            </div>
            <Footer />
        </div>
    )
}
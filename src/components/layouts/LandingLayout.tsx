import { Outlet } from "react-router";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

export default function LandingLayout() {
    return (
        <main className={'bg-black grid grid-cols-1 min-h-screen'}>
            <Navbar />
            <div className={'w-full flex flex-col bg-black'}>
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}
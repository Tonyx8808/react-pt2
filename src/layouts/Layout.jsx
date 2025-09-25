import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Layouts = () => {
    return (
        <>
        <Navbar />
        <div className="page-render-box">
        <Outlet />
        </div>
        <Footer />
        </>
    )
}

export default Layouts
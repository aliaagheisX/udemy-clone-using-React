import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './routes/Home'
export default function App() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

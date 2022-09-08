import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './routes/Home'
export default function App() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

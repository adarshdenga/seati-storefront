import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function Navbar(){
    return(
        <nav className="fixed top-0 z-50 flex flex-row w-full p-6 justify-between items-center">
            <p className="font-playwrite text-xl">Se'ati</p>
            <ul className="flex flex-row gap-6 font-nunito">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
            </ul>
            <div className="flex flex-row gap-6 text-xl">
                <Link to="/cart"><FaCartShopping /></Link>
                <Link to="/"><FaUser /></Link>
            </div>
        </nav>
    )
}
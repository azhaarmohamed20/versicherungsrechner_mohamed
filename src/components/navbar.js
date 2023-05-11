import { NavLink } from "react-router-dom";
import './style.css';

export default function Navbar(){
    return (
        <div className="p-2 w-screen border-b-2 border-blue-600 align-center ">
            <nav className=" max-w-auto" >
                <div>
                    <ul className="flex items-center gap-[14vw]">
                        <p className="text-[24px] font-light text-black mr-[50px]">Versicherungsrechner</p>
                        <li className="text-[25px] font-light" >
                            <NavLink className="text-black aria-[current=page]:text-black text-blue-600" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="text-[25px] font-light">
                            <NavLink className="text-black aria-[current=page]:text-black text-blue-600" to="/rechner" >
                                Rechner
                            </NavLink>
                        </li>
                        <li className="text-[25px] font-light ">
                            <NavLink className="text-black aria-[current=page]:text-black text-blue-600" to="/about" >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
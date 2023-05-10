import { NavLink } from "react-router-dom";
import './style.css';

export default function Navbar(){
    return (
        <div className="ml-[200px] p-3">
            <nav className="max-w-auto" >
                <div>
                    <ul className="flex items-center gap-[14vw]">
                        <li className="text-2xl font-light" >
                            <NavLink className="text-black aria-[current=page]:text-blue-300" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="text-2xl font-light">
                            <NavLink className="text-black aria-[current=page]:text-blue-300" to="/rechner" >
                                Rechner
                            </NavLink>
                        </li>
                        <li className="text-2xl font-light">
                            <NavLink className="text-black aria-[current=page]:text-blue-300" to="/about" >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
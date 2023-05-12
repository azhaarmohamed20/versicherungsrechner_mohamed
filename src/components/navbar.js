import { NavLink } from "react-router-dom";
import './style.css';

export default function Navbar(){
    return (
        <div className=" flex p-2  h-[10vh] border-b-2 border-blue-600 align-center">
            <nav className=" flex w-[80%] m-auto pt-2 ml-[500]  " >
                <div>
                    <ul className="flex items-center gap-[14vw] justify-around">
                        <p className=" text-[18px] font-extrabold text-black mr-[50px]">Versicherungsrechner</p>
                        <li className="text-[18px] font-bold " >
                            <NavLink className="text-black aria-[current=page]:text-black text-blue-600" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="text-[18px] font-bold">
                            <NavLink className="text-black aria-[current=page]:text-black text-blue-600" to="/rechner" >
                                Rechner
                            </NavLink>
                        </li>
                        <li className="text-[18px] font-bold ">
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
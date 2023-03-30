import { NavLink } from "react-router-dom";
import './style.css';

export default function Navbar(){
    return (
        <div>
            <nav>
                <div>
                    <div>
                        <ul>
                            <li>
                                <NavLink id="nav-link" to="/" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink id="nav-link"  to="/rechner" activeClassName="active">
                                    Rechner
                                </NavLink>
                            </li>
                            <li>
                                <NavLink id="nav-link"  to="/about" activeClassName="active">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
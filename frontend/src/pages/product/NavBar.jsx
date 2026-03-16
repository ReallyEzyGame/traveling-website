import { Link } from "react-router-dom";
import "./Product.css";

export function NavBar() {
    return (
        <nav>
            <li className="navbar">
                <ul>
                    <Link to="/destinations">Place</Link>
                </ul>
                <ul>
                    <Link to="/travel">Travel</Link>
                </ul>
                <ul>
                    <Link to="/food">Food</Link>
                </ul>
                <ul>
                    <Link to="/accomodation">Stay</Link>
                </ul>
            </li>
        </nav>
    );
}
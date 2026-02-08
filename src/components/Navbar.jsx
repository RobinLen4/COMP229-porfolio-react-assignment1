import { Link } from 'react-router-dom';
import img_logo from "../assets/logo1.png"


export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img src={img_logo} alt="Logo" className="logo" />
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    );
}

import { Link } from "react-router-dom";
const Navbar = () => {
    return ( <div className="Navbar">
        <h1> <Link to="/">Evey Tickets</Link></h1>
        <div className="links">

            <Link to="/get">Get Ticket</Link>
            <Link to="/scan">Scan Ticket</Link>

        </div>
    </div> );
}
 
export default Navbar;
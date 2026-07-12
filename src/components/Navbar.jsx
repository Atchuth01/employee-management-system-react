import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav className = "navbar">
            <div className = "logo">
                Ems
            </div>
            <div className = "nav-links">
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/employees">Employees</NavLink>
                <NavLink to = "/add-employee">Add Employee</NavLink>

            </div>
        </nav>
    );
}

export default Navbar;
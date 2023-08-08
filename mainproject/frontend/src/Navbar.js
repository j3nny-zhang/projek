import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> PROJEK: <span style={{color: "#9BBBA2"}}>Acountability Tracker</span></h1>

            <div className="links">
                <Link to="/">Homepage</Link>
                <Link to="/createTask" style={{
                    color: "white", 
                    backgroundColor: '#618264',
                    borderRadius: '8px'
                }}>Add Task</Link>
            </div>

        </nav>
    );
}

export default Navbar;
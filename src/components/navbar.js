import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movie Browser</Link>

                <nav className="nav nav-pills nav-fill ">
                    <NavLink className="nav-link" aria-current="page" to="/">Movies</NavLink>
                    <NavLink className="nav-link" to="/Favourite">Favourite List</NavLink>
                    <a className="nav-link disabled">Downloads</a>
                </nav>

                <form className="d-flex">
                    <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success mx-2" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}


export default Navbar;
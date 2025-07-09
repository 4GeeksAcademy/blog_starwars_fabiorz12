const Navbar = () =>{
    return (
        <nav className="navbar navbar-ligth bg-light">
            <div className="container">
                <span>Star Wars</span>
            </div>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Favorites
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item text-muted">No Favorites</li>

                </ul>
            </div>

        </nav>
    )
}

export default Navbar
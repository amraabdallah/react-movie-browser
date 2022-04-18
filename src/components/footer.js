
const Footer = () => {
    return (
        // <div className="navbar navbar-dark bg-dark text-white bottom text-center d-flex justify-content-evenly align-items-center">
            <footer className="navbar-dark bg-dark bottom text-white navbar py-3 d-flex justify-content-evenly align-items-center">
                <div className="col mx-5">
                    <a href="/" className=" mb-3 link-dark text-decoration-none"></a>
                    <p className="text-muted">&copy; 2021</p>
                    <p>All Rights Are Not Reserved</p>
                </div>


                <div className="col">
                    <h5>Products</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h5>About</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                        {/* <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li> */}
                    </ul>
                </div>

            </footer>
    )
}


export default Footer;
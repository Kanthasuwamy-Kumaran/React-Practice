
function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 text-lg-left text-center">
                            <div className="copyright">
                                &copy; Copyright <strong>Vesperr</strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                                <a href="homeintro" className="scrollto">Home</a>
                                <a href="homeabout" className="scrollto">About</a>
                                <a href="home">Privacy Policy</a>
                                <a href="home">Terms of Use</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="8" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    );
}

export default Footer;
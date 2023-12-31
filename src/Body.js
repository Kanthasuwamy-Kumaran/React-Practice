
import image1 from "./assets/img/more-services-1.jpg"; 
import image2 from "./assets/img/more-services-2.jpg"; 
import image3 from "./assets/img/more-services-3.jpg"; 
import image4 from "./assets/img/more-services-4.jpg"; 
import mySvg from "./assets/img/counts-img.svg";


function Body() {
    return (
        <div>
            <section id="hero" class="d-flex align-items-center">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Grow your business with Vesperr</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
                            <div data-aos="fade-up" data-aos-delay="800">
                                <a href="about" class="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            <img src={require("./assets/img/hero-img.png")} class="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>

            </section>

            <main id="main">
                {/* ======= Clients Section ======= */}
                <section id="clients" className="clients clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("./assets/img/clients/client-1.png")} className="img-fluid" alt data-aos="zoom-in" />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("./assets/img/clients/client-2.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={100} />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("./assets/img/clients/client-3.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={200} />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("./assets/img/clients/client-4.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={300} />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("./assets/img/clients/client-5.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={400} />
                            </div>
                            <div className="col-lg-2 col-md-4 col-6">
                                <img src={require("./assets/img/clients/client-6.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={500} />
                            </div>
                        </div>
                    </div>
                </section>{/* End Clients Section */}


                {/* ======= About Us Section ======= */}
                <section id="about" className="about">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>About Us</h2>
                        </div>
                        <div className="row content">
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                    <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                    <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <a href="home" className="btn-learn-more">Learn More</a>
                            </div>
                        </div>
                    </div>
                </section>{/* End About Us Section */}


                {/* ======= Counts Section ======= */}
                <section id="counts" className="counts">
                    <div className="container">
                        <div className="row">
                            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay={150}>
                                <img src={mySvg}
                                alt className="img-fluid" />
                                
                            </div>
                            <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay={300}>
                                <div className="content d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-emoji-smile" />
                                                <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={1} className="purecounter" />
                                                <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-journal-richtext" />
                                                <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
                                                <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-clock" />
                                                <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
                                                <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-md-flex align-items-md-stretch">
                                            <div className="count-box">
                                                <i className="bi bi-award" />
                                                <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                                                <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End .content*/}
                            </div>
                        </div>
                    </div>
                </section>{/* End Counts Section */}


                {/* ======= Services Section ======= */}
                <section id="services" className="services">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="icon"><i className="bx bxl-dribbble" /></div>
                                    <h4 className="title"><a href>Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="icon"><i className="bx bx-file" /></div>
                                    <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="icon"><i className="bx bx-tachometer" /></div>
                                    <h4 className="title"><a href>Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="icon"><i className="bx bx-world" /></div>
                                    <h4 className="title"><a href>Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Services Section */}


                {/* ======= More Services Section ======= */}
                <section id="more-services" className="more-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch">
                                <div className="card"
                                 style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat" }} 
                                 data-aos="fade-up" data-aos-delay={100}>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href>Lobira Duno</a></h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                        <div className="read-more"><a href="home"><i className="bi bi-arrow-right" /> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="card" 
                                style={{ backgroundImage:`url(${image2})`,backgroundRepeat:"no-repeat" }} 
                                data-aos="fade-up" data-aos-delay={200}>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href>Limere Radses</a></h5>
                                        <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                                        <div className="read-more"><a href="home"><i className="bi bi-arrow-right" /> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch mt-4">
                                <div className="card" 
                                style={{ backgroundImage:`url(${image3})`,backgroundRepeat:"no-repeat" }} 
                                data-aos="fade-up" data-aos-delay={100}>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href>Nive Lodo</a></h5>
                                        <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                                        <div className="read-more"><a href="home"><i className="bi bi-arrow-right" /> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-stretch mt-4">
                                <div className="card" 
                                style={{ backgroundImage:`url(${image4})`,backgroundRepeat:"no-repeat" }}
                                 data-aos="fade-up" data-aos-delay={200}>
                                    <div className="card-body">
                                        <h5 className="card-title"><a href>Pale Treda</a></h5>
                                        <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                                        <div className="read-more"><a href="home"><i className="bi bi-arrow-right" /> Read More</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End More Services Section */}


                {/* ======= Features Section ======= */}
                <section id="features" className="features">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Features</h2>
                            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={300}>
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-store-line" style={{ color: '#ffbb2c' }} />
                                    <h3><a href>Lorem Ipsum</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-bar-chart-box-line" style={{ color: '#5578ff' }} />
                                    <h3><a href>Dolor Sitema</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-calendar-todo-line" style={{ color: '#e80368' }} />
                                    <h3><a href>Sed perspiciatis</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="ri-paint-brush-line" style={{ color: '#e361ff' }} />
                                    <h3><a href>Magni Dolores</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-database-2-line" style={{ color: '#47aeff' }} />
                                    <h3><a href>Nemo Enim</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-gradienter-line" style={{ color: '#ffa76e' }} />
                                    <h3><a href>Eiusmod Tempor</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-file-list-3-line" style={{ color: '#11dbcf' }} />
                                    <h3><a href>Midela Teren</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-price-tag-2-line" style={{ color: '#4233ff' }} />
                                    <h3><a href>Pira Neve</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-anchor-line" style={{ color: '#b2904f' }} />
                                    <h3><a href>Dirada Pack</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-disc-line" style={{ color: '#b20969' }} />
                                    <h3><a href>Moton Ideal</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-base-station-line" style={{ color: '#ff5828' }} />
                                    <h3><a href>Verdo Park</a></h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-fingerprint-line" style={{ color: '#29cc61' }} />
                                    <h3><a href>Flavor Nivelanda</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Features Section */}


                {/* ======= Testimonials Section ======= */}
                <section id="testimonials" className="testimonials section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Testimonials</h2>
                            <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
                        </div>
                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">

                                            <img src={require("./assets/img/testimonials/testimonials-1.jpg")} className="testimonial-img"/>
                                            <h3>Saul Goodman</h3>
                                            <h4>Ceo &amp; Founder</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                        <img src={require("./assets/img/testimonials/testimonials-2.jpg")} className="testimonial-img"/>
                                            <h3>Sara Wilsson</h3>
                                            <h4>Designer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                        <img src={require("./assets/img/testimonials/testimonials-3.jpg")} className="testimonial-img"/>
                                            <h3>Jena Karlis</h3>
                                            <h4>Store Owner</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                        <img src={require("./assets/img/testimonials/testimonials-4.jpg")} className="testimonial-img"/>
                                            <h3>Matt Brandon</h3>
                                            <h4>Freelancer</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                        <img src={require("./assets/img/testimonials/testimonials-5.jpg")} className="testimonial-img"/>
                                            <h3>John Larson</h3>
                                            <h4>Entrepreneur</h4>
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                <i className="bx bxs-quote-alt-right quote-icon-right" />
                                            </p>
                                        </div>
                                    </div>
                                </div>{/* End testimonial item */}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>{/* End Testimonials Section */}


                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Portfolio</h2>
                            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                        </div>
                        <div className="row" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={400}>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <img src={require("./assets/img/portfolio/portfolio-1.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-2.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-3.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-4.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-5.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-6.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-7.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-8.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                <img src={require("./assets/img/portfolio/portfolio-9.jpg")} className="img-fluid"/>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Portfolio Section */}


                {/* ======= Team Section ======= */}
                <section id="team" className="team section-bg">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Team</h2>
                            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member-img">
                                        <img src={require("./assets/img/team/team-1.jpg")} className="img-fluid"/>
                                        <div className="social">
                                            <a href><i className="bi bi-twitter" /></a>
                                            <a href><i className="bi bi-facebook" /></a>
                                            <a href><i className="bi bi-instagram" /></a>
                                            <a href><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="member-img">
                                    <img src={require("./assets/img/team/team-2.jpg")} className="img-fluid"/>
                                        <div className="social">
                                            <a href><i className="bi bi-twitter" /></a>
                                            <a href><i className="bi bi-facebook" /></a>
                                            <a href><i className="bi bi-instagram" /></a>
                                            <a href><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="member-img">
                                    <img src={require("./assets/img/team/team-3.jpg")} className="img-fluid"/>
                                        <div className="social">
                                            <a href><i className="bi bi-twitter" /></a>
                                            <a href><i className="bi bi-facebook" /></a>
                                            <a href><i className="bi bi-instagram" /></a>
                                            <a href><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={400}>
                                    <div className="member-img">
                                    <img src={require("./assets/img/team/team-4.jpg")} className="img-fluid"/>
                                        <div className="social">
                                            <a href><i className="bi bi-twitter" /></a>
                                            <a href><i className="bi bi-facebook" /></a>
                                            <a href><i className="bi bi-instagram" /></a>
                                            <a href><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Team Section */}


                {/* ======= Pricing Section ======= */}
                <section id="pricing" className="pricing">
                    <div className="container">
                        <div className="section-title">
                            <h2>Pricing</h2>
                            <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="box" data-aos="zoom-in-right" data-aos-delay={200}>
                                    <h3>Free</h3>
                                    <h4><sup>$</sup>0<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li className="na">Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="home" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                <div className="box recommended" data-aos="zoom-in" data-aos-delay={100}>
                                    <h3>Business</h3>
                                    <h4><sup>$</sup>19<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li className="na">Massa ultricies mi</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="home" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                <div className="box" data-aos="zoom-in-left" data-aos-delay={200}>
                                    <h3>Developer</h3>
                                    <h4><sup>$</sup>29<span> / month</span></h4>
                                    <ul>
                                        <li>Aida dere</li>
                                        <li>Nec feugiat nisl</li>
                                        <li>Nulla at volutpat dola</li>
                                        <li>Pharetra massa</li>
                                        <li>Massa ultricies mi</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="home" className="btn-buy">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* End Pricing Section */}

                {/* ======= F.A.Q Section ======= */}
                <section id="faq" className="faq">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="col-lg-5">
                                <i className="ri-question-line" />
                                <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                </p>
                            </div>
                        </div>{/* End F.A.Q Item*/}
                        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-5">
                                <i className="ri-question-line" />
                                <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                </p>
                            </div>
                        </div>{/* End F.A.Q Item*/}
                        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                            <div className="col-lg-5">
                                <i className="ri-question-line" />
                                <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
                                </p>
                            </div>
                        </div>{/* End F.A.Q Item*/}
                        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
                            <div className="col-lg-5">
                                <i className="ri-question-line" />
                                <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.
                                </p>
                            </div>
                        </div>{/* End F.A.Q Item*/}
                        <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
                            <div className="col-lg-5">
                                <i className="ri-question-line" />
                                <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
                            </div>
                            <div className="col-lg-7">
                                <p>
                                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                </p>
                            </div>
                        </div>{/* End F.A.Q Item*/}
                    </div>
                </section>{/* End F.A.Q Section */}


                {/* ======= Contact Section ======= */}
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="contact-about">
                                    <h3>Vesperr</h3>
                                    <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                                    <div className="social-links">
                                        <a href="home" className="twitter"><i className="bi bi-twitter" /></a>
                                        <a href="home" className="facebook"><i className="bi bi-facebook" /></a>
                                        <a href="home" className="instagram"><i className="bi bi-instagram" /></a>
                                        <a href="home" className="linkedin"><i className="bi bi-linkedin" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                                <div className="info">
                                    <div>
                                        <i className="ri-map-pin-line" />
                                        <p>A108 Adam Street<br />New York, NY 535022</p>
                                    </div>
                                    <div>
                                        <i className="ri-mail-send-line" />
                                        <p>info@example.com</p>
                                    </div>
                                    <div>
                                        <i className="ri-phone-line" />
                                        <p>+1 5589 55488 55s</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay={300}>
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>{/* End Contact Section */}
                
            </main>

        </div>
    );
}

export default Body;
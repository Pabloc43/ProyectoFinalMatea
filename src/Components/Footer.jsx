import React from 'react'
import './footer.css'

export default function Footer() {
    function top(){
        window.scrollTo(0, 0)
    }
  return (
    <footer id="dk-footer"   className="dk-footer">
        <div   className="container ">
            <div   className="row">
                <div   className="dkk col-md-12 col-lg-4 ">
                    <div   className="dk-footer-box-info ">
                        <a href="index.html"   className="footer-logo">
                            <img src="./img/Logo.png" alt="footer_logo" className="img-fluid w-50" ></img>
                        </a>
                        <p   className="footer-info-text">
                        </p>
                        <div   className="footer-social-link">
                            <h3>Follow us</h3>
                            <ul className='links'>
                                <li>
                                    <a href="#">
                                        <i   className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i   className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i   className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i   className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i   className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div   className="col-md-12 col-lg-8">
                    <div   className="row">
                        <div   className="col-md-6">
                            <div   className="contact-us">
                                <div   className="contact-icon">
                                    <i   className="fa fa-map-o" aria-hidden="true"></i>
                                </div>
                                <div   className="contact-info">
                                    <h3>Providencia</h3>
                                    <p>Estados Unidos, 12800 Montevideo</p>
                                </div>
                            </div>
                        </div>
                        <div   className="col-md-6">
                            <div   className="contact-us contact-us-last">
                                <div   className="contact-icon">
                                    <i   className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                <div   className="contact-info">
                                    <h3>+958 99 888 777</h3>
                                    <p>Give us a call</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div   className="row">
                        <div   className="col-md-12 col-lg-6">
                            <div   className="footer-widget footer-left-widget ">
                                <div   className="section-heading">
                                    <h3>Desarrolladores</h3>
                                    <span   className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/gabriel-a-sosa-a8093b238/" target="_blank">Gabriel</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/valentin-carcabelo-105938236/" target="_blank">Valentin</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/pablo-camejo-rodriguez/" target="_blank">Pablo</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div   className="col-md-12 col-lg-6">
                            <div   className="footer-widget">
                                <div   className="section-heading">
                                    <h3>About</h3>
                                    <span   className="animate-border border-black"></span>
                                </div>
                                <p>  Grupo de desarrollo, practicamente "hackers de la vida", que seguimos en formacion, para potenciar e incrementar nuestras habilidades tecnicas y blandas </p>
                                <div action="#">
                                    <div   className="form-row">
                                        <div   className="col dk-footer-form">
                                            <input type="email"   className="form-control text-light" placeholder="Email Address" />
                                            <button type="submit">
                                                <i   className="fa fa-send"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div   className="copyright">
            <div   className="container">
                <div   className="row">
                    <div   className="col-md-6">
                        <span>Creado para Matea 2022 por Gabriel Valentin y Pablo</span>
                    </div>
                    <div   className="col-md-6">
                        <div   className="copyright-menu">
                            <ul>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="back-to-top"   className="back-to-top">
            <button   className="btn btn-dark" title="Back to Top" style={{display: "block"}} onClick={top}>
                <i   className="fa fa-angle-up"></i>
            </button>
        </div>
</footer>

  )
}

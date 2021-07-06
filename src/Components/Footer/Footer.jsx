
import './Footer.css'

function Footer () {

    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-top-content">
                        <div className="footer-top-box">
                            <h5 className="text-primary footer-top-heading">Biz bilan bog'lanish</h5>
                            <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                            <p><i className="fa fa-envelope"></i>info@example.com</p>
                            <div className="social-box">
                                <a className="social-link" target='_blank' href="twitter.com"><i className="fab   fa-twitter"></i></a>
                                <a className="social-link" target='_blank' href="facebook.com"><i className="fab  fa-facebook-f"></i></a>
                                <a className="social-link" target='_blank' href="linkedin.com"><i className="fab  fa-linkedin-in"></i></a>
                                <a className="social-link" target='_blank' href="instagram.com"><i className="fab  fa-instagram"></i></a>
                            </div>
                        </div>

                        <div className="footer-top-box">
                            <h5 className="text-primary footer-top-heading">Bizda mavjud yo'nalishlar</h5>
                            <div>
                                <a className="footer-top-link" href="/"><i className="fa fa-angle-right"></i>Aniq fanlar</a>
                                <a className="footer-top-link" href="/"><i className="fa fa-angle-right"></i>Tabiiy fanlar</a>
                                <a className="footer-top-link" href="/"><i className="fa fa-angle-right"></i>Ijtimoiy gumanitar</a>
                                <a className="footer-top-link" href="/"><i className="fa fa-angle-right"></i>Xorijiy filologiya</a>
                                <a className="footer-top-link" href="/"><i className="fa fa-angle-right"></i>Filologiya</a>
                            </div>
                        </div>

                        <div className="footer-top-box">
                            <h5 className="text-primary footer-top-heading">Saytimiz yangiliklari</h5>
                            <p className='footer-top-text'>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </footer>
    )
}


export default Footer
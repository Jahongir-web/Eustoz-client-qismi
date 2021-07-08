
import './Footer.css'

function Footer () {

    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-top-content">
                        <div className="footer-top-box">
                            <h5 className="text-primary footer-top-heading">Biz bilan bog'lanish</h5>
                            <p><i className="fa fa-map-marker-alt footer-top-icon"></i>48/5, A.Temur, Toshkent, UZB</p>
                            <p><i className="fa fa-phone-alt footer-top-icon"></i><a className='footer-top-link' href="tel:+99899 790 87 49">+99899 790-87-49</a></p>
                            <p><i className="fa fa-envelope footer-top-icon"></i><a className='footer-top-link' href="mailto:jahongirmh@gmail.com">jahongirmh@gmail.com</a></p>
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
                                <a className="science-link" href="/"><i className="fa fa-angle-right footer-top-icon"></i>Aniq fanlar</a>
                                <a className="science-link" href="/"><i className="fa fa-angle-right footer-top-icon"></i>Tabiiy fanlar</a>
                                <a className="science-link" href="/"><i className="fa fa-angle-right footer-top-icon"></i>Ijtimoiy gumanitar</a>
                                <a className="science-link" href="/"><i className="fa fa-angle-right footer-top-icon"></i>Xorijiy filologiya</a>
                                <a className="science-link" href="/"><i className="fa fa-angle-right footer-top-icon"></i>Filologiya</a>
                            </div>
                        </div>

                        <div className="footer-top-box">
                            <h5 className="text-primary footer-top-heading">Saytimiz yangiliklari</h5>
                            <p className='footer-top-text'>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p className='footer-bottom-text'>© <span className="text-primary"> Domain Name</span>. All Rights Reserved. Designed by <span className="text-primary"> Jahongir Codex</span></p>
                </div>
            </div>
            
        </footer>
    )
}


export default Footer
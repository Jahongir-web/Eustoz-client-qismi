
import "./Main.css"

function Main () {

    return (
        <main>
            <div className="main-top">
                <div className="container">
                    <div className="main-content">
                        <p className="main-text">O'rganish uchun eng yaxshi va qulay platforma</p>
                        <h1 className='main-heading'>Uydan chiqmagan holda O'rganishning yangi usuli</h1>
                        <button className='btn-primary'>Batafsil</button>
                    </div>
                </div>
            </div>

            <div className="main-bottom">
                <div className="container">
                    <div className="testimonials">
                        <h4 className='testimonial-top-heading text-primary'>Mulohazalar</h4>
                        <h2 className='testimonial-heading'>Foydalanuvchilar fikrlari bilan tanishing</h2>

                        <ul className="testimonial-list">
                            <li className="testimonial-item">
                                <i className="fa fa-2x fa-quote-left text-primary"></i>
                                <h4 className="testimonial-text">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img className="testimonial-img" src="./images/testimonial-1.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>

                            <li className="testimonial-item">
                                <i className="fa fa-2x fa-quote-left text-primary"></i>
                                <h4 className="testimonial-text">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img className="testimonial-img" src="./images/testimonial-2.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>

                            <li className="testimonial-item">
                                <i className="fa fa-2x fa-quote-left text-primary"></i>
                                <h4 className="testimonial-text">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img className="testimonial-img" src="./images/testimonial-3.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>

                            <li className="testimonial-item">
                                <i className="fa fa-2x fa-quote-left text-primary"></i>
                                <h4 className="testimonial-text">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img className="testimonial-img" src="./images/testimonial-4.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default Main
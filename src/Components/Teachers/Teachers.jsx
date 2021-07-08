
import "./Teachers.css"

function Teachers () {

    return (

        <main className="teachers-section">

            <div className="about-top">
                <div className="container">
                    <h1 className="main-heading about-heading">Ustozlar</h1>  
                    <h2 className='blockquote'>Bizning reytinggi eng baland ustozlarimiz bilan tanishing!</h2> 
                </div>
            </div>

            <div className="main-bottom">
                <div className="container">
                    <div className="testimonials">
                        <h4 className='testimonial-top-heading text-primary'>Ustozlar</h4>
                        <h2 className='testimonial-heading'>Ustozlar bilan tanishing</h2>

                        <ul className="testimonial-list">
                            <li className="teachers-item">
                                <img className="teachers-img" src="./images/testimonial-1.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>

                            <li className="teachers-item">
                                <img className="teachers-img" src="./images/testimonial-2.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>

                            <li className="teachers-item">
                                <img className="teachers-img" src="./images/testimonial-3.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>

                            <li className="teachers-item">
                                <img className="teachers-img" src="./images/testimonial-4.jpg" alt="images"/>
                                <h5 className="testimonial-name">Client Name</h5>
                                <span className='testimonial-profession'>Profession</span>
                            </li>

                            <li className="teachers-item">
                                <img className="teachers-img" src="./images/testimonial-4.jpg" alt="images"/>
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

export default Teachers
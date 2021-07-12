import { useEffect } from "react"
import { Link } from "react-router-dom"

import { useInfo } from '../../Context'

import "./Main.css"

function Main () {

    const [, setLogin, , setRole, , setUsername, , setUserId, , setAdmin, urlServer] = useInfo()

    try {
        useEffect(() => {
            ;(async () => {
                const response = await fetch(`${urlServer}/`, {
                    method: 'get',
                    headers: {access_token: window.localStorage.getItem('access_token')},
                })
                const json = await response.json()
                if(json.user_id) {
                    window.localStorage.setItem('user_id', json.user_id)
                    window.localStorage.setItem('username', json.username)
                    setUserId(json.user_id)
                    setLogin(true)
                    setUsername(json.username)
                    if(json.userrole === 'teacher') {
                        setAdmin(false)
                        setRole(true)
                    } else if(json.userrole === 'admin') {
                        setAdmin(true)
                    } else {
                        setAdmin(false)
                        setRole(false)
                    }
                }
            })()
        })
        
    } catch (error) {
        console.log(error.message)
    }
   


    return (
        <main className='main-section'>
            <div className="main-top">
                <div className="container">
                    <div className="main-content">
                        <p className="main-text">O'rganish uchun eng yaxshi va qulay platforma</p>
                        <h1 className='main-heading'>Uydan chiqmagan holda O'rganishning yangi usuli</h1>
                        <Link to='/about' className='btn-primary'>Batafsil</Link>
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
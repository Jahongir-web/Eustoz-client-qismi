import { useState } from 'react'

import './Questions.css'

function Questions () {

    const [answer, setAnswer] = useState(false)

    return (
        <main>
            <div className="about-top">
                <div className="container">
                    <h1 className="main-heading about-heading">Savol yo'llash</h1>
                </div>
            </div>

            <div className="main-bottom">
                <div className="container">

                    {
                        answer === false && (

                            <div className="questions-content">
                            
                                <div className="testimonials questions-left-box">
                                    <h4 className='testimonial-top-heading text-primary'>Savol yo'llash</h4>

                                    <div className="questions-form-box">
                                        <form className='questions-form' aria-label='form for questions' action="">
                                            <input className='questions-input' aria-label='input for name' type="text" name='title' placeholder='Mavzu' required/>

                                            <select className='questions-input' name="science" id="questions-select">
                                                <option value="">Fanni tanlang</option>
                                                <option value="matematika">Matematika</option>
                                                <option value="fizika">Fizika</option>
                                                <option value="kimyo">Kimyo</option>
                                            </select>


                                            <textarea className='questions-input' name="content" id="" cols="30" rows="10" required placeholder='Savolingizni kiriting'>
                                                
                                            </textarea>

                                            <label className='questions-input questions-label-photo' htmlFor="questions-photo"><i className='fa fa-2x fa-camera font-icon'></i> <p>Rasm yuklash</p> </label>
                                            <input id='questions-photo' className='questions-input' aria-label='input for email' type="file" name='photo'/>

                                            <button className='btn-primary' type='submit'>Savolni Jo'natish</button>
                                        </form>
                                    </div>
                                </div>


                                <div className="questions-history">
                                    <h2 className='testimonial-top-heading text-primary'>Savollar tarixi</h2>
                                    <ul className="questions-list">
                                        <li className="questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <div className='questions-item-bottom-box'>
                                                    <p className='questions-item-data'>2021.06.18</p>
                                                    <button onClick={() => setAnswer(true)} className="view-btn">Javobni Ko'rish</button>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className='questions-item-data'>2021.06.18</p>
                                            </div>
                                        </li>

                                        <li className="questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className='questions-item-data'>2021.06.18</p>
                                            </div>
                                        </li>
                                        
                                        <li className="questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className='questions-item-data'>2021.06.18</p>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        )
                    }



                    {
                        answer && (
                            <div className="question-card">
                                <p className="question-card-date">12-07-2021</p>
                                <h2 className='question-card-title'>Lorem ipsum dolor sit amet.</h2>
                                <img className='question-card-image' src="./images/course.jpg" alt="images" />
                                <p className="question-card-content">Lorem ipsum dolor, sit amet consectetur adipisicingelit. Deleniti molestiae odit natus voluptas inventore possimus officia sequi harum quis, abodio, asperiores esse voluptatibus reprehenderit?</p>
                                <div className="question-card-btn-box">
                                    <button className='btn-primary'>Foydali bo'ldi</button>
                                    <button onClick={() => setAnswer(false)} className='btn-primary'>Yopish</button>
                                </div>
                            </div>

                        )
                    }




                </div>
            </div>

        </main>
    )
}


export default Questions
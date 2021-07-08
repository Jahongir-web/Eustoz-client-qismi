import { useState } from 'react'

import './Answers.css'

function Answers () {

    const [questions, setQuestions] = useState(false)
    const [viewQuestion, setViewQuestion] = useState(false)
    const [answer, setAnswer] = useState(false)

    return (
        <main>
            <div className="about-top">
                <div className="container">
                    <div className="answer-top-box">
                        <h1 className="main-heading about-heading">Savolar</h1>

                        <ul className="question-categories-list">
                            <li onClick={() => setQuestions(true)} className="question-categories-item">
                                <p className='question-categories-subject'>Matematika</p> 
                                <p className='question-categories-count'>25</p>
                            </li>
                            <li className="question-categories-item">
                                <p className='question-categories-subject'>Fizika</p> 
                                <p className='question-categories-count'>18</p>
                            </li>
                            <li className="question-categories-item">
                                <p className='question-categories-subject'>Kimyo</p> 
                                <p className='question-categories-count'>21</p>
                            </li>
                            <li className="question-categories-item">
                                <p className='question-categories-subject'>Tarix</p> 
                                <p className='question-categories-count'>12</p>
                            </li>
                            <li className="question-categories-item">
                                <p className='question-categories-subject'>Biologiya</p> 
                                <p className='question-categories-count'>15</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="main-bottom">
                <div className="container">

                    <div className="answer-content">

                        {
                            questions && (

                                <div className="questions-history">
                                    <h2 className='testimonial-top-heading text-primary'>Savollar ro'yhati</h2>
                                    <ul className="answer-questions-list">
                                        <li className="questions-item answer-questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <div className='questions-item-bottom-box'>
                                                    <p className='questions-item-data'>2021.06.18</p>
                                                    <button onClick={() => {
                                                        setViewQuestion(true)
                                                        setQuestions(false)
                                                    }} className="view-btn">Ko'rish</button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="questions-item answer-questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className='questions-item-data'>2021.06.18</p>
                                            </div>
                                        </li>
                                        <li className="questions-item answer-questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className='questions-item-data'>2021.06.18</p>
                                            </div>
                                        </li>
                                        <li className="questions-item answer-questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className='questions-item-data'>2021.06.18</p>
                                            </div>
                                        </li>
                                        <li className="questions-item answer-questions-item">
                                            <img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>
                                            <div className="questions-item-box">
                                                <p className='questions-item-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                <p className='questions-item-data'>2021.06.18</p>
                                            </div>
                                        </li>

                                        
                                    </ul>

                                </div>
                            )
                        }

                        {
                            viewQuestion && (
                                <div className="question-card">
                                    <p className="question-card-date">12-07-2021</p>
                                    <h2 className='question-card-title'>Lorem ipsum dolor sit amet.</h2>
                                    <img className='question-card-image' src="./images/course.jpg" alt="images" />
                                    <p className="question-card-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti molestiae odit natus voluptas inventore possimus officia sequi harum quis, ab odio, asperiores esse voluptatibus reprehenderit?</p>
                                    <div className="question-card-btn-box">
                                        <button onClick={() => setAnswer(true)} className='btn-primary'>Javob</button>
                                        <button onClick={() => {
                                            setViewQuestion(false)
                                            setQuestions(true)
                                            setAnswer(false)
                                        }} className='btn-primary'>Yopish</button>
                                    </div>
                                </div>

                            )
                        }
                    
                        
                        {
                            answer && (
                                <div className="testimonials questions-left-box answer-form">
                                    <h4 className='testimonial-top-heading text-primary'>Javob yo'llash</h4>

                                    <div className="questions-form-box">
                                        <form className='questions-form' aria-label='form for questions' action="">
                                        
                                            <textarea className='questions-input' name="content" id="" cols="30" rows="10" required placeholder='Javobingizni kiriting'>
                                                
                                            </textarea>

                                            <label className='questions-input questions-label-photo' htmlFor="questions-photo"><i className='fa fa-2x fa-camera font-icon'></i> <p>Rasm yuklash</p> </label>
                                            <input id='questions-photo' className='questions-input' aria-label='input for email' type="file" name='photo'/>

                                            <div className="answer-form-btn-box">
                                                <button className='btn-primary' type='submit'>Jo'natish</button>
                                                <button onClick={() => setAnswer(false)} className='btn-primary'>X</button>

                                            </div>
                                        </form>
                                    </div>
                                </div>

                            )
                        }


                        
                    </div>



                </div>
            </div>

        </main>
    )
}


export default Answers
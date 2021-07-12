import { useState, useEffect, useRef } from 'react'

import { useInfo } from '../../Context'

import './Answers.css'

function Answers () {

    const contentRef = useRef()
    const fileRef = useRef()

    const [, , , , , , userId, , , , urlServer] = useInfo()

    const [questions, setQuestions] = useState(false)
    const [viewQuestion, setViewQuestion] = useState(false)
    const [answer, setAnswer] = useState(false)
    const [info, setInfo] = useState([])
    const [data, setData] = useState([])
    const [viewTask, setViewTask] = useState({date: '123', title: 'hello', photo: './images/course.jpg', content: 'world', question_id: 0})


    try {
        useEffect(() => {
            ;(async () => {
                const response = await fetch(`${urlServer}/questions/info`, {
                    method: 'get',
                    // headers: {id: userId}
                })
                const json = await response.json()
                setInfo(json.data)
            })()
        }, [userId, answer, urlServer])
        
    } catch (error) {
        console.error(error.message)
    }

    return (
        <main>
            <div className="about-top">
                <div className="container">
                    <div className="answer-top-box">
                        <h1 className="main-heading about-heading">Savolar</h1>

                        <ul className="question-categories-list">
                            {
                                info && info.map((e, i) => {
                                    return(
                                        <li key={i} onClick={() => {
                                            setQuestions(true)
                                            try {
                                                ;(async () => {
                                                    const response = await fetch(`${urlServer}/questions/subject`, {
                                                        method: 'get',
                                                        headers: {subject: e.subject}
                                                    })
                                                    const json = await response.json()
                                                    setData(json.data)
                                                })()
                                            } catch (error) {
                                                console.error(error.message)
                                            }

                                         }} className="question-categories-item">
                                            <p className='question-categories-subject'>{e.subject}</p> 
                                            <p className='question-categories-count'>{e.count}</p>
                                        </li>
                                    )
                                })
                            }
                            
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
                                        {
                                            data && data.map((d, i) => {
                                                return(
                                                    <li key={i} className="questions-item answer-questions-item">
                                                        {
                                                            d.photo ? (<img className='questions-item-img' src={`${urlServer}/images/${d.photo}`} alt="images" width='150px'/>) : (<img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>)
                                                        }
                                                        <div className="questions-item-box">
                                                            <p className='questions-item-text'>{d.title}</p>
                                                            <div className='questions-item-bottom-box'>
                                                                <p className='questions-item-data'>{d.date}</p>
                                                                <button onClick={() => {
                                                                    setViewQuestion(true)
                                                                    setQuestions(false)
                                                                    setViewTask({date: d.date, title: d.title, photo: d.photo, content: d.content, question_id: d.question_id})
                                                                }} className="view-btn">Ko'rish</button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                        
                                    </ul>

                                </div>
                            )
                        }

                        {
                            viewQuestion && (
                                <div className="question-card">
                                    <p className="question-card-date">{viewTask.date}</p>
                                    <h2 className='question-card-title'>{viewTask.title}</h2>
                                    {
                                        viewTask.photo && (
                                            <img className='question-card-image' src={`${urlServer}/images/${viewTask.photo}`} alt="images" />
                                        )
                                    }
                                    <p className="question-card-content">{viewTask.content}</p>
                                    <div className="question-card-btn-box">
                                        <button id={viewTask.question_id} onClick={(e) => setAnswer(true)} className='btn-primary'>Javob</button>
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
                                        <form className='questions-form' aria-label='form for questions' action="" onSubmit={async (e) => {
                                            e.preventDefault()
                                            const formData = new FormData()
                                            formData.append('content', contentRef.current.value)
                                            formData.append('id', userId)
                                            formData.append('question_id', viewTask.question_id)
                                            try {
                                                formData.append('photo', fileRef.current.files[0])
                                            } catch (error) {
                                                console.log(error.message)   
                                            }

                                            const res = await fetch(`${urlServer}/answer`, {
                                                method: 'post',
                                                body: formData,
                                                redirect: 'follow'
                                            })
    
                                            let json = await res.json()
                                            alert(json.message)
                                            contentRef.current.value = null
                                            fileRef.current.value = null
                                            setAnswer(false)

                                        }}>
                                        
                                            <textarea ref={contentRef} className='questions-input' name="content" id="" cols="30" rows="10" required placeholder='Javobingizni kiriting'>
                                                
                                            </textarea>

                                            <label className='questions-input questions-label-photo' htmlFor="questions-photo"><i className='fa fa-2x fa-camera font-icon'></i> <p>Rasm yuklash</p> </label>
                                            <input ref={fileRef} id='questions-photo' className='questions-input' aria-label='input for email' type="file" name='photo'/>

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
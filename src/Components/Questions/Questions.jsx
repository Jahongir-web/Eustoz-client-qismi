import { useState, useRef, useEffect } from 'react'

import { useInfo } from '../../Context'

import './Questions.css'

function Questions () {

    const [view, setView] = useState(false)
    const [questions, setQuestions] = useState([])
    const [update, setUpdate] = useState(false)

    const [answer, setAnswer] = useState({date: '123', title: 'hello', photo: './images/course.jpg', content: 'world', id: 0, question_id: 0})

    const [, , , , , , userId, , , , urlServer] = useInfo()

    const titleRef = useRef()
    const subjectRef = useRef()
    const contentRef = useRef()
    const fileRef = useRef()
    const formRef = useRef()

    try {
        useEffect(() => {
            ;(async () => {
                const response = await fetch(`${urlServer}/questions`, {
                    method: 'get',
                    headers: {id: userId}
                })
                const json = await response.json()
                setQuestions(json.data)
            })()
        }, [userId, update, urlServer])
        
    } catch (error) {
        console.error(error.message)
    }


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
                        view === false && (

                            <div className="questions-content">
                            
                                <div className="testimonials questions-left-box">
                                    <h4 className='testimonial-top-heading text-primary'>Savol yo'llash</h4>

                                    <div className="questions-form-box">
                                        <form ref={formRef} className='questions-form' aria-label='form for questions' action="" onSubmit={async (e) => {
                                            e.preventDefault()
                                            const formData = new FormData()
                                            formData.append('title', titleRef.current.value)
                                            formData.append('subject', subjectRef.current.value)
                                            formData.append('content', contentRef.current.value)
                                            formData.append('id', userId)
                                            try {
                                                formData.append('photo', fileRef.current.files[0])
                                            } catch (error) {
                                                console.log(error.message)   
                                            }

                                            const res = await fetch(`${urlServer}/question`, {
                                                method: 'post',
                                                body: formData,
                                                redirect: 'follow'
                                            })
    
                                            let json = await res.json()
                                            alert(json.message)
                                            titleRef.current.value = null
                                            subjectRef.current.value = ''
                                            contentRef.current.value = null
                                            fileRef.current.value = null
                                            setUpdate(!update)
                                        }}>
                                            <input ref={titleRef} className='questions-input' aria-label='input for name' type="text" name='title' placeholder='Mavzu' required/>

                                            <select ref={subjectRef} className='questions-input' name="science" id="questions-select" required>
                                                <option value="">Fanni tanlang</option>
                                                <option value="matematika">Matematika</option>
                                                <option value="fizika">Fizika</option>
                                                <option value="kimyo">Kimyo</option>
                                            </select>


                                            <textarea ref={contentRef} className='questions-input' name="content" id="" cols="30" rows="10" required placeholder='Savolingizni kiriting'>
                                                
                                            </textarea>

                                            <label className='questions-input questions-label-photo' htmlFor="questions-photo"><i className='fa fa-2x fa-camera font-icon'></i> <p>Rasm yuklash</p> </label>
                                            <input ref={fileRef} id='questions-photo' className='questions-input' aria-label='input for email' type="file" name='photo'/>

                                            <button className='btn-primary' type='submit'>Savolni Jo'natish</button>
                                        </form>
                                    </div>
                                </div>


                                <div className="questions-history">
                                    <h2 className='testimonial-top-heading text-primary'>Savollar tarixi</h2>
                                    <ul className="questions-list">
                                        {
                                            questions && questions.map((q, i) => {
                                                return(
                                                    <li key={i} className="questions-item">
                                                        {
                                                            q.photo ? (<img className='questions-item-img' src={`${urlServer}/images/${q.photo}`} alt="images" width='150px'/>) : (<img className='questions-item-img' src="./images/about.jpg" alt="images" width='150px'/>)
                                                        }
                                                       
                                                        <div className="questions-item-box">
                                                            <p className='questions-item-text'>{q.title}</p>
                                                            <div className='questions-item-bottom-box'>
                                                                <p className='questions-item-data'>{q.question_date}</p>
                                                                {
                                                                    q.teacher_id && (
                                                                        <button onClick={() => {
                                                                            setView(true)
                                                                            setAnswer({date: q.answer_date, title: q.title, photo: q.answer_photo, content: q.answer_content, id: q.answer_id, question_id: q.question_id})
                                                                        }} className="view-btn">Javobi</button>
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>

                                </div>
                            </div>
                        )
                    }



                    {
                        view && (
                            <div className="question-card">
                                <p className="question-card-date">{answer.date}</p>
                                <h2 className='question-card-title'>{answer.title}</h2>
                                {
                                    answer.photo && (
                                        <img className='question-card-image' src={`${urlServer}/images/${answer.photo}`} alt="images" />
                                    )
                                }
                                <p className="question-card-content">{answer.content}</p>
                                <div className="question-card-btn-box">
                                    <button id={answer.id} className='btn-primary' onClick={(e) => {
                                        try {                                            
                                            ;(async () => {
                                                const response = await fetch(`${urlServer}/score`, {
                                                    method: 'post',
                                                    headers: {id: e.target.id}
                                                })
                                                const json = await response.json()
                                                alert(json.message)
                                                setView(false)
                                            })()
                                            
                                        } catch (error) {
                                            console.log(error.message)
                                        }
                                    }}>Foydali bo'ldi</button>
                                    <button onClick={(e) => {
                                        try {                                            
                                            ;(async () => {
                                                const response = await fetch(`${urlServer}/answer/delete`, {
                                                    method: 'post',
                                                    headers: {question_id: answer.question_id}
                                                })
                                                const json = await response.json()
                                                alert(json.message)
                                                await setView(false)
                                            })()
                                            
                                        } catch (error) {
                                            console.log(error.message)
                                        }
                                        setView(false)

                                    }} className='btn-primary'>Befoyda O'chirish</button>
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
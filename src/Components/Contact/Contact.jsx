
import { useRef, useState, useEffect } from "react"
import "./Contact.css"

import { useInfo } from '../../Context'


function Contact () {

    const [, , , , , , , , admin, , urlServer] = useInfo()

    const [messages, setMessages] = useState()
    const [update, setUpdate] = useState(false)

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    try {
        useEffect(() => {
            ;(async () => {
                const response = await fetch(`${urlServer}/messages`, {
                    method: 'get',
                })
                const json = await response.json()
                setMessages(json.messages)
            })()
        }, [admin, update, urlServer])
        
    } catch (error) {
        console.log(error.message)
    }

    return (

        <main>
            <div className="about-top">
                <div className="container">
                    <h1 className="main-heading about-heading">{admin ? "Xabarlar" : "Bog'lanish"}</h1>  
                    <h2 className='blockquote'>{admin ? "Foydalanuvchilardan kelgan xabarlar!" : "Sizning fikringiz biz uchun muhim."}</h2> 
                </div>
            </div>

            <div className="main-bottom">
                <div className="container">

                    {
                        admin ? (
                            <>
                            <div className="testimonials">
                        <h4 className='testimonial-top-heading text-primary'>Xabarlar</h4>
                            
                        <ul className="testimonial-list">
                            {
                                messages && messages.map((t, i) => {
                                    return(
                                        <li key={i} className="teachers-item">
                                    
                                            <h5 className="testimonial-name">{t.author_name}</h5>
                                            <span className='testimonial-profession'>{t.message}</span> <br />
                                            <span className='testimonial-reyting'>Email: {t.author_email}</span>
                                            { admin && (<button id={t.message_id} className='delete-btn' onClick={(e) =>{
                                                ;(async () => {
                                                    const response = await fetch(`${urlServer}/message/delete`, {
                                                        method: 'post',
                                                        headers: {id: e.target.id}
                                                    }) 
                                                    const json = await response.json()
                                                    alert(json.message)                                                 
                                                    setUpdate(!update)
                                                })()
                                            }}>Delete</button>)}
                                        </li>
                                    )
                                })
                            }                            
                        </ul>
                    </div>
                            </>
                        ) : (
                            <>
                            <div className="testimonials">
                                <h4 className='testimonial-top-heading text-primary'>Bog'lanish</h4>
                                <h2 className='testimonial-heading'>Fikr va takliflaringiz</h2>
                            </div>

                            <div className="contact-form-box">
                                <form className='contact-form' aria-label='form for contact' action="" onSubmit={async (e) => {
                                    e.preventDefault()
                                    const formData = new FormData()
                                    formData.append('name', nameRef.current.value)
                                    formData.append('email', emailRef.current.value)
                                    formData.append('message', messageRef.current.value)
                                                                
                                    const res = await fetch(`${urlServer}/message`, {
                                        method: 'post',
                                        body: formData,
                                        redirect: 'follow'
                                    })
            
                                    let json = await res.json()
                                    alert(json.message)
                                    nameRef.current.value = null
                                    emailRef.current.value = null
                                    messageRef.current.value = null
                                
                                }}>
                                    <input ref={nameRef} className='contact-input' aria-label='input for name' type="text" name='name' placeholder='Ismingiz' required/>
                                    <input ref={emailRef} className='contact-input' aria-label='input for email' type="email" name='email' placeholder='Email manzilingiz' required/>

                                    <textarea ref={messageRef} className='contact-input' name="textarea" id="" cols="30" rows="10" required placeholder='Xabaringizni kiriting'>
                                        
                                    </textarea>

                                    <button className='btn-primary' type='submit'>Xabarni Jo'natish</button>
                                </form>
                            </div>
                            </>
                        )
                    }
                    


                </div>
            </div>

        </main>
    )
}


export default Contact
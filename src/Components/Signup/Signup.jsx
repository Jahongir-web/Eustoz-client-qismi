import { useState, useRef } from 'react'

import './Signup.css'

function Signup () {

    const [show, setShow] = useState(false)

    const fileRef = useRef()
    const nameRef = useRef()
    const surnameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confPasswordRef = useRef()
    const roleRef = useRef()
    const subjectRef = useRef()
    

    return (
        <main>
            <div className="about-top">
                <div className="container">
                    <div className="signup-content">

                        <div className="signup-left-box">
                            <h2 className='signup-first-heading'>Ro'yhatdan o'tish nima beradi?</h2>
                            <h1 className="signup-second-heading">99% izlagan javobni topasiz</h1>  
                            <p className='signup-text'>Siz ro'yhatdan o'tish orqali saytimiz imkoniyatlaridan to'liq foydalanishingiz mumkin. Sizga quyidagi imkoniyatlar taqdim qilinadi:</p> 
                            <p className='signup-last-text'><i className="fa fa-check"></i>Ustozlardan savollarga javob olish</p>
                            <p className='signup-last-text'><i className="fa fa-check"></i>Masalalarni muhokama qilish</p>
                            <p className='signup-last-text'><i className="fa fa-check"></i>Ustoz sifatida daromad topish</p>
                        </div>

                        <div className="signup-right-box">

                            <form className='signup-form' onSubmit={async (e) => {
                                e.preventDefault()

                                const formData = new FormData()

                                formData.append('name', nameRef.current.value)
                                formData.append('surname', surnameRef.current.value)
                                formData.append('email', emailRef.current.value)
                                formData.append('password', passwordRef.current.value)
                                formData.append('role', roleRef.current.value)
                                try {
                                    formData.append('subject', subjectRef.current.value)               
                                } catch (error) {
                                    console.log(error.message)
                                }

                                try {
                                    formData.append('photo', fileRef.current.files[0])                  
                                } catch (error) {
                                    console.log(error.message)
                                }

                                if (passwordRef.current.value === confPasswordRef.current.value) {
                                    const res = await fetch('http://localhost:4001/signup', {
                                        method: 'post',
                                        body: formData,
                                        redirect: 'follow'
                                    })
    
                                    let json = await res.json()
                                    alert(json.message)
    
                                    if(json.accessToken) {
                                        window.localStorage.setItem('access_token', json.accessToken)
                                        // setLogin(true)
                                        // history.pushState('/')
                                    }
                                } else {
                                    alert("Parolni turlicha kirittingiz, iltimos diqqatli bo'ling")
                                }


                            }}>
                                <h2 className='signup-form-heading'>Ro'yhatdan o'tish</h2>
                                <input ref={nameRef} className='signup-input' type="text" name='name' placeholder='Ismingiz' required/>
                                <input ref={surnameRef} className='signup-input' type="text" name='surname' placeholder='Familiyangiz' required/>
                                <input ref={emailRef} className='signup-input' type="email" name='email' placeholder='Email' required/>
                                <input ref={passwordRef} className='signup-input' type="password" name='password' placeholder='Parol kiriting' required/>
                                <input ref={confPasswordRef} className='signup-input' type="password" name='confirmPassword' placeholder='Parolni takrorlang' required/>
                                
                                <select ref={roleRef} onChange={(e) => {
                                    if (e.target.value === 'teacher') {
                                        setShow(true)
                                    } else {
                                        setShow(false)
                                    }
                                }} name="role" id="signup-role">
                                    <option value="">Kim sifatida</option>
                                    <option value="teacher">Ustoz</option>
                                    <option value="student">O'quvchi</option>
                                </select>

                                {
                                    show && (
                                        <select ref={subjectRef} name="subject" id="signup-subject">
                                            <option value="">Qaysi fandan</option>
                                            <option value="matematika">Matematika</option>
                                            <option value="kimyo">Kimyo</option>
                                            <option value="musiqa">Musiqa</option>
                                        </select>
                                    )
                                }

                                
                                <label className='signup-input-label' htmlFor="signup-photo"><i className='fa fa-1x fa-camera signup-photo-icon'></i>Rasmingizni yuklang</label>

                                <input ref={fileRef} id='signup-photo' type="file" name='photo' />

                                <button type='submit' className='signup-btn'>Ro'yhatdan o'tish</button>

                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>

    )
}

export default Signup
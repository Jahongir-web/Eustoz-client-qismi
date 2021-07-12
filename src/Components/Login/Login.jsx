import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useInfo } from '../../Context'

function Login () {

    const [, setLogin, , , , , , , , , urlServer] = useInfo()

    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()

    return (
        <main>
            <div className="about-top">
                <div className="container">
                    <div className="signup-content">

                        <div className="signup-left-box">
                            <h2 className='signup-first-heading'>Ro'yhatdan o'tish nima beradi?</h2>
                            <h1 className="signup-second-heading">Kirish</h1>  
                            <p className='signup-text'>Siz ro'yhatdan o'tish orqali saytimiz imkoniyatlaridan to'liq foydalanishingiz mumkin. Sizga quyidagi imkoniyatlar taqdim qilinadi:</p> 
                            <p className='signup-last-text'><i className="fa fa-check"></i>Ustozlardan savollarga javob olish</p>
                            <p className='signup-last-text'><i className="fa fa-check"></i>Masalalarni muhokama qilish</p>
                            <p className='signup-last-text'><i className="fa fa-check"></i>Ustoz sifatida daromad topish</p>
                        </div>

                        <div className="signup-right-box">

                            <form className='signup-form' action="" onSubmit={async (e) => {
                                e.preventDefault()

                                const formData = new FormData()

                                formData.append('email', emailRef.current.value)
                                formData.append('password', passwordRef.current.value)

                                const res = await fetch(`${urlServer}/login`, {
                                    method: "post",
                                    body: formData,
                                    redirect: 'follow'
                                })

                                let json = await res.json()
                                
                                if(json.accessToken) {
                                    window.localStorage.setItem('access_token', json.accessToken)
                                    setLogin(true)
                                    history.push('/')
                                }
                                alert(json.message)

                            }}>
                                <h2 className='signup-form-heading'>Kirish</h2>
                                <input ref={emailRef} className='signup-input' type="email" name='email' placeholder='Email' required/>
                                <input ref={passwordRef} className='signup-input' type="password" name='password' placeholder='Parolni kiriting' required/>
                                <button className='signup-btn'>Kirish</button>

                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Login
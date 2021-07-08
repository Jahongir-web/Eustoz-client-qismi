

import './Signup.css'

function Signup () {

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

                            <form className='signup-form' action="">
                                <h2 className='signup-form-heading'>Ro'yhatdan o'tish</h2>
                                <input className='signup-input' type="text" name='name' placeholder='Ismingiz' required/>
                                <input className='signup-input' type="text" name='surname' placeholder='Familiyangiz' required/>
                                <input className='signup-input' type="email" name='email' placeholder='Email' required/>
                                <input className='signup-input' type="password" name='password' placeholder='Parol kiriting' required/>
                                <input className='signup-input' type="password" name='confirm-password' placeholder='Parolni takrorlang' required/>
                                
                                <select name="role" id="signup-role">
                                    <option value="">Kim sifatida</option>
                                    <option value="teachers">Ustoz</option>
                                    <option value="student">O'quvchi</option>
                                </select>

                                <select name="subject" id="signup-subject">
                                    <option value="">Qaysi fandan</option>
                                    <option value="matematika">Matematika</option>
                                    <option value="kimyo">Kimyo</option>
                                    <option value="musiqa">Musiqa</option>
                                </select>
                                
                                <label className='signup-input-label' htmlFor="signup-photo"><i className='fa fa-1x fa-camera signup-photo-icon'></i>Rasmingizni yuklang</label>

                                <input id='signup-photo' type="file" name='signup-photo' />

                                <button className='signup-btn'>Ro'yhatdan o'tish</button>

                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>

    )
}

export default Signup
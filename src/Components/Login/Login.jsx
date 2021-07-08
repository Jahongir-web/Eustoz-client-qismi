

function Login () {

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

                            <form className='signup-form' action="">
                                <h2 className='signup-form-heading'>Kirish</h2>
                                <input className='signup-input' type="text" name='name' placeholder='Ismingiz' required/>
                                <input className='signup-input' type="password" name='password' placeholder='Parolni kiriting' required/>
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
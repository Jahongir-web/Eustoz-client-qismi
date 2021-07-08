
import './About.css'

function About () {

    return (
        <main className='about-section'>
            <div className="about-top">
                <div className="container">
                    <h1 className="main-heading about-heading">Shiorimiz</h1>  
                    <h2 className='blockquote'>Ilmni fursat bo'lganda o'rganaverish kerak. Chunki ilm zarur bo'lgan paytda fursat topilmasligi mumkin. <p className='author'>Abdulloh ibn Mas'ud</p></h2> 
                </div>
            </div>

            <div className="about-bottom">
                <div className="container">
                    <div className="about-bottom-content">
                        <div className="about-img-box">
                            <img className='about-img' src="./images/about.jpg" alt="images" />
                        </div>
                        <div className="about-right-box">
                            <h5 className='about-bottom-heading'>Biz haqimizda</h5>
                            <h1 className='about-bottom-second-heading'>O'rganishning inavatsion usuli</h1>
                            <p className='about-bottom-text'>Assalomu alaykum. Ushbu sayt ilm olish va o'rgatish istagida bo'lgan barcha turdagi insonlar uchun mo'ljallangan bo'lib, siz uyingizdan chiqmagan holda o'zingizni qiynayotgan masala, misol, yoki savollarga javob topishingiz va bilgan bilimingizni boshqalarga o'rgatib qo'shimcha daromadga ega bo'lishingiz mumkin. Buning uchun siz o'qituvchi yoki o'quvchi sifatida saytimizdan ro'yhatdan o'tishingiz kerak bo'ladi. Sizda o'qtuvchilarning oldiga borib ilm olish imkoni yo'qmi, yoki pandemiya sababli borib yurgan kurslaringiz to'xtab qoldimi, siqilishga hojat yo'q. Bizning platformamizda o'z ishining ustasi bo'lgan mutaxassis o'qtuvchilar va turli kasb egalari sizlarning savollaringizga javob berishga tayyorlar. Sizda savol, masala yoki misol bormi? u holda pastdagi tugmani bosing va hoziroq savolingizni yo'llang</p>

                            <button className='btn-primary'>Savol yo'llash</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </main>
    )
}


export default About
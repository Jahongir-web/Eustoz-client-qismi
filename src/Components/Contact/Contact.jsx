
import "./Contact.css"

function Contact () {

    return (

        <main>
            <div className="about-top">
                <div className="container">
                    <h1 className="main-heading about-heading">Bog'lanish</h1>  
                    <h2 className='blockquote'>Sizning fikringiz biz uchun muhim.</h2> 
                </div>
            </div>

            <div className="main-bottom">
                <div className="container">
                    <div className="testimonials">
                        <h4 className='testimonial-top-heading text-primary'>Bog'lanish</h4>
                        <h2 className='testimonial-heading'>Fikr va takliflaringiz</h2>
                    </div>

                    <div className="contact-form-box">
                        <form className='contact-form' aria-label='form for contact' action="">
                            <input className='contact-input' aria-label='input for name' type="text" name='name' placeholder='Ismingiz' required/>
                            <input className='contact-input' aria-label='input for email' type="email" name='email' placeholder='Email manzilingiz' required/>

                            <textarea className='contact-input' name="textarea" id="" cols="30" rows="10" required placeholder='Xabaringizni kiriting'>
                                
                            </textarea>

                            <button className='btn-primary' type='submit'>Xabarni Jo'natish</button>
                        </form>
                    </div>


                </div>
            </div>

        </main>
    )
}


export default Contact
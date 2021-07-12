import { useEffect, useState } from "react"

import { useInfo } from '../../Context'



function Students () {

    const [, , , , , , , , admin, , urlServer] = useInfo()

    const [update, setUpdate] = useState(false)

    const [students, setStudents] = useState()

    try {
        useEffect(() => {
            ;(async () => {
                const response = await fetch(`${urlServer}/students`, {
                    method: 'get',
                })
                const json = await response.json()
                setStudents(json.students)
            })()
        }, [admin, update, urlServer])
        
    } catch (error) {
        console.log(error.message)
    }

    return (

        <main className="teachers-section">

            <div className="about-top">
                <div className="container">
                    <h1 className="main-heading about-heading">O'quvchilar</h1>  
                    <h2 className='blockquote'>Bizning eng faol o'quvchilarimiz bilan tanishing!</h2> 
                </div>
            </div>

            <div className="main-bottom">
                <div className="container">
                    <div className="testimonials">
                        <h4 className='testimonial-top-heading text-primary'>O'quvchilar</h4>
                        <h2 className='testimonial-heading'>O'quvchilar bilan tanishing</h2>
                            
                        <ul className="testimonial-list">
                            {
                                students && students.map((t, i) => {
                                    return(
                                        <li key={i} className="teachers-item">
                                            <img className="teachers-img" src={`${urlServer}/images/${t.avatar}`} alt="images"/>
                                            <h5 className="testimonial-name">{t.first_name + ' ' + t.last_name }</h5>
                                            <span className='testimonial-profession'>Email: {t.email}</span> <br />
                                            <span className='testimonial-reyting'>Reyting: {t.score || 0}</span>
                                            { admin && (<button id={t.user_id} className='delete-btn' onClick={(e) =>{
                                                ;(async () => {
                                                    const response = await fetch(`${urlServer}/student/delete`, {
                                                        method: 'post',
                                                        headers: {id: e.target.id}
                                                    }) 
                                                    const json = await response.json()
                                                    alert(json.message)                                                  
                                                    setUpdate(!update)
                                                    console.log(update)
                                                })()
                                            }}>Delete</button>)}
                                        </li>
                                    )
                                })
                            }                            
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Students
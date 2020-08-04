import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/55148969?s=460&u=c29ccd3ce08289dad985aa917f076e3100dc1b52&v=4" alt="Maria"></img>
                        <div>
                            <strong>Maria Paula</strong>
                            <span>Math</span>
                        </div>
                    </header>

                    <p>
                    Teaching is a rewarding experience. 
                    <br /><br />
                    I teach so I can learn about the world and all of those infinite possibilities that brand new minds bring to me each and every day. 
                    </p>

                    <footer>
                        <p>
                            Price/hour
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Contact Me

                        </button>
                    </footer>

                </article>
    )
}
export default TeacherItem
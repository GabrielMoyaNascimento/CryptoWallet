import React from 'react'
import user1 from '../../images/patrick.png'
import user2 from '../../images/nan.jpg'
import './Testimonials.css'


const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Opiniões</h2>
                    <p>O que dizem a nosso respeito na WEB</p>
                </div>
                <div className="cust-container">
                    <img src={user1} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>André L.</span> Youtuber.</p>
                    <p>Plataforma intuitiva e diferente das outras.</p>
                </div>

                <div className="cust-container">
                    <img src={user2} alt="Avatar" style={{width:"90px"}}/>
                    <p><span>Rebecca F.</span> Repórter</p>
                    <p>Nunca tinha me interessado pelas moedas digitais, mas
                        a plataforma mudou minha opinião.</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;
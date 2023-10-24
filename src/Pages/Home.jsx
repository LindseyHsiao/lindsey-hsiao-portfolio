import portfolioPic from '../assets/images/portfolioPic.png'

export default function Home() {
    return (
        <section className="home">
            <div className="home-div-left">
                <h1 className='home-title'>Full Stack Web Developer</h1>
                <h2 className="home-text">
                    With experience in React, Mongo DB, Express and Node.js as a full stack develper, I look forward to  
                    
                </h2>
                
                <button className='home-button'>Lets Connect!</button>
            </div>
            <div className="home-div-right">
                <img src={portfolioPic} alt="Lindsey" />
            </div>

        </section>

    )
}
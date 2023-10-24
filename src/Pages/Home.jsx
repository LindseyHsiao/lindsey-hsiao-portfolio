import portfolioPic from '../assets/images/portfolioPic.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="home">
            <div className="home-div-left">
                <h1 className='home-title'>Full Stack Web Developer</h1>
                <h2 className="home-text">
                    With experience in React, Mongo DB, Express and Node.js as a full stack develper, I look forward to seeing what we can build together. 
                    
                </h2>
                <Link to="/lindsey-hsiao-portfolio/Contact">
                {/* <a href='mailto:lindsey350@aol.com'> */}

                <button className='home-button'>Lets Connect!</button>
                {/* </a> */}
                </Link>
            </div>
            <div className="home-div-right">
                <img src={portfolioPic} alt="Lindsey" />
            </div>

        </section>

    )
}
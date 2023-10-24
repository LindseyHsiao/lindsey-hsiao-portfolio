import portfolioPic from '../assets/images/portfolioPic.png'

export default function Home() {
    return (
        <section className="home">
            <div className="home-div-left">
                <h1 className="home-text">
                    Hi, my name is Lindsey and Im excited to put my skills as a full stack develper to work for you!
                </h1>
                
                <button className='home-button'>Lets Connect!</button>
            </div>
            <div className="home-div-right">
                <img src={portfolioPic} alt="Lindsey" />
            </div>

        </section>

    )
}
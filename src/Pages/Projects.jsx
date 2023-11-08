import runBuddy from '../assets/images/runbuddy.png'
import onespark from '../assets/images/onespark.png'
import janJennings from '../assets/images/janJenningsScreenShot.png'
import odaly from '../assets/images/odalyScreenShot.png'

const projects = [
    {
        title: 'Jan Jennings- Orlando Harpist',
        img: janJennings,
        description: "front end site for business development, HTML, CSS, JavaScript, React, Node.js",
        link: 'https://janjennings.vercel.app/'
    },
    {
        title: 'One Spark',
        img: onespark,
        description: 'Fullstack MERN flip card game application',
        link: 'https://one-spark-03f39da04cc1.herokuapp.com/'
    },
    {
        title: 'OT Wealthness',
        img: odaly,
        description: 'Fullstack MERN blog',
        link: 'https://shielded-thicket-31431-759032547906.herokuapp.com/'
    },
    {
        title: 'One Spark',
        img: onespark,
        description: 'description',
        link: 'https://heartlandyogadevesh.vercel.app/'
    },
]

export default function Projects() {
    return (
        <section className='projects'>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '0 0 40%' }}>
                <h1>Portfolio</h1>
            </div> */}
            <div className='project-text'>
                <h1>Projects</h1>
            </div>
            {/* <div style={{flex: '0 0 38%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '2% 0'}}>
            {projects.map((item, i) => (
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}} key={i}>
                    <img src={item.img} alt="" width={100}/>
                    <div>
                        <h3>{item.title}</h3>
                    </div>

                </a>
            ))}
                
            </div> */}

            <div className='card' >
                {projects.map((item, i) => (
                    <div className='project-cards'>
                        <a href={item.link} >
                            <img src={item.img} alt="item image" style={{ width: '100%', verticalAlign: 'bottom' }} />
                            <div className='container'>
                                <h4><b>{item.title}</b></h4>
                                <p>{item.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>

    )
}
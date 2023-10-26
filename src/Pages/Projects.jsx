import runBuddy from '../assets/images/runbuddy.png'
import onespark from '../assets/images/onespark.png'

const projects = [
    {
        title: 'Run Buddy',
        img: runBuddy,
        description: "description",
        link: 'link'
    },
    {
        title: 'One Spark',
        img: onespark,
        description: 'description',
        link: 'link'
    },
    {
        title: 'One Spark',
        img: onespark,
        description: 'description',
        link: 'link'
    },
    {
        title: 'One Spark',
        img: onespark,
        description: 'description',
        link: 'link'
    },
]

export default function Projects() {
    return (
        <section style={{ display: 'flex', }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '0 0 60%' }}>
                <h1>Portfolio</h1>
            </div>
            <div style={{flex: '0 0 38%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '2% 0'}}>
            {projects.map((item, i) => (
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}} key={i}>
                    <img src={item.img} alt="" width={100}/>
                    <div>
                        <h3>{item.title}</h3>
                    </div>

                </a>
            ))}
                {/* <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}}>test</a>
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}}>test</a>
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}}>test</a> */}
            </div>
        </section>

    )
}
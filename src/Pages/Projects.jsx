
// const projects = [
//     {
//         title: title,
//         img: img,
//         description: description,
//         link: link
//     },
//     {
//         title: title,
//         img: img,
//         description: description,
//         link: link
//     },
// ]

export default function Projects() {
    return (
        <section style={{ display: 'flex', }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '0 0 60%' }}>
                <h1>Portfolio</h1>
            </div>
            {/* {projects.map((item, i) => (

            ))} */}
            <div style={{flex: '0 0 38%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '2% 0'}}>
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}}>test</a>
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}}>test</a>
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}}>test</a>
                <a href="#" style={{border: 'black solid 2px', minHeight: '150px', maxHeight: '150px', backgroundColor: 'red', margin: '2px', flexBasis: '45%'}}>test</a>
            </div>
        </section>

    )
}
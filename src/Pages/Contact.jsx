import linkedIn from '../assets/icons/linkedinIcon.png'
import gitHub from '../assets/icons/githubIcon.png'
import email from '../assets/icons/emailIcon.png'


export default function Contact(){
    return(
        <>
        <a className='icon' href='https://github.com/LindseyHsiao'>
            <img src={email} alt="linkedIn" className='icon' />
        </a>

        <a href='https://github.com/LindseyHsiao'>
            <img src={linkedIn} alt="linkedIn" className='color: white' />
        </a>

        <a href='https://github.com/LindseyHsiao'>
            <img src={gitHub} alt="linkedIn" className='color: white' />
        </a>

        
</>

    )
}
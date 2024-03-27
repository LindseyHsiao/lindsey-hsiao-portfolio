// import linkedIn from '../assets/icons/linkedinIcon.png'
// import gitHub from '../assets/icons/githubIcon.png'
// import email from '../assets/icons/emailIcon.png'


import {
    FaLinkedin,
    FaGithub,
    FaEnvelopeOpen
} from 'react-icons/fa'


export default function Contact() {
    return (
        <div className='contact-page'>
            <div className='contact-text'>
                <h1>Lets connect!</h1>
            </div>
            <div className='contact-icons'>
                <a className='icon' href='mailto:lindsey350@aol.com'>
                    <FaEnvelopeOpen size={70}/>
                </a>

                <a className='icon' href='https://www.linkedin.com/in/lindsey-hsiao/' target="_blank">
                <FaLinkedin  size={70}/>
                </a>

                <a className='icon' href='https://github.com/LindseyHsiao' target="_blank">
                <FaGithub size={70} />
                </a>
            </div>
        </div>




    )
}
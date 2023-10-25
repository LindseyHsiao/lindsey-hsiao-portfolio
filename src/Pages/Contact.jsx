import linkedIn from '../assets/icons/linkedinIcon.png'
import gitHub from '../assets/icons/githubIcon.png'
import email from '../assets/icons/emailIcon.png'


export default function Contact() {
    return (
        <div className='contact-page'>
            <div className='contact-text'>
                <h1>Lets connect!</h1>
            </div>
            <div className='contact-icons'>
                <a className='icon' href='mailto:lindsey350@aol.com'>
                    <img src={email} alt="email" className='icon' />
                </a>

                <a className='icon' href='https://www.linkedin.com/in/lindsey-hsiao/'>
                    <img src={linkedIn} alt="linkedIn"  />
                </a>

                <a className='icon' href='https://github.com/LindseyHsiao'>
                    <img src={gitHub} alt="github"  />
                </a>
            </div>
        </div>




    )
}
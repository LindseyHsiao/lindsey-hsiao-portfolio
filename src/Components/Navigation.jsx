import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="nav">
            <Link to="/lindsey-hsiao-portfolio/" className="site-title">Lindsey Hsiao</Link>
            <ul>
                <li>
                    <Link to="/lindsey-hsiao-portfolio/Projects">Projects</Link>
                    </li>
                    <li>
                    <Link to="/lindsey-hsiao-portfolio/Resume">Resume</Link>
                    </li>
                    <li>
                    <Link to="/lindsey-hsiao-portfolio/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
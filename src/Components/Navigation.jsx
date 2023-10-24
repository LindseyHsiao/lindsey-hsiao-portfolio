import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Lindsey Hsiao</Link>
            <ul>
                <li>
                    <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                    <Link to="/Resume">Resume</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
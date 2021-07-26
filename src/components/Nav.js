import './styles/Nav.css';
import { SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
const Nav = ()=>{
    return(
        <div className='nav-browser'>
            <div className="nav-icons-container">
                <ul>
                    <li>
                        <a
                         href="https://www.linkedin.com/"
                        target="_self"
                        >
                        <SiLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/" target="_self">
                        <SiGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_self">
                        <SiTwitter />
                        </a>
                    </li>
                </ul>
        </div>

        <div className="nav-pages-container">
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Projects</a>
                    </li>
                    <li>
                        <a>Contact </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
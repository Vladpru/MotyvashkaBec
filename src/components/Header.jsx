import'./Header.css';
import { useState } from 'react';

export const Header = ({ scrollToSection, refs }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleMenuClick = (ref) => {
        scrollToSection(ref);
        setMenuOpen(false); // Закриває меню після кліку
    };

    return (
        <div className="header_container">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <a onClick={() => handleMenuClick(refs.topRef)}>
                            <img src="images/BEClogo2.svg" alt="logo" className="logo_img" />
                        </a>
                    </div>

                    <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={handleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`menu ${menuOpen ? 'menu_open' : ''}`}>
                        <li className="menu_elem">
                            <a onClick={() => handleMenuClick(refs.topRef)}>Welcome</a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => handleMenuClick(refs.aboutRef)}>About/Why me</a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => handleMenuClick(refs.whyRef)}>Why BEC</a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => handleMenuClick(refs.skillsRef)}>Skills</a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => handleMenuClick(refs.answersRef)}>Answers</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}
import'./Header.css';

export const Header = ({ scrollToSection, refs }) => {

    return (
        <div className="header_container">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <a onClick={() => scrollToSection(refs.topRef)}>
                            <img src="images/BEClogo2.svg" alt="logo" className="logo_img" />
                        </a>
                    </div>
                    <ul className="menu">
                        <li className="menu_elem">
                            <a onClick={() => scrollToSection(refs.topRef)}>
                                Welcome
                            </a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => scrollToSection(refs.aboutRef)}>
                                About/Why me
                            </a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => scrollToSection(refs.whyRef)}>
                                Why BEC
                            </a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => scrollToSection(refs.skillsRef)}>
                                Skills
                            </a>
                        </li>
                        <li className="menu_elem">
                            <a onClick={() => scrollToSection(refs.answersRef)}>
                                Answers
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}
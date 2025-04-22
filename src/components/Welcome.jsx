import { Parallax } from 'react-parallax';
import "./Welcome.css"

export const Welcome = () => (
    <section className="about">
        <Parallax
                bgImage="./images/bgg.jpg" 
                strength={300}
                className="about_top_parallax"
                >
                <div className="about_top">
                    <div className="about_top_left">
                    <h2 className="top_left_title">
                        Привіт, Денис <br />
                        Мене звати Влад, і це мій мотиваційний лист на посаду IT responsible!!
                    </h2>
                    <p className="top_left_text">
                        <span>BEC</span> - це найкращий та найцікавіший івент, адже він тримає
                        в собі справжню інженерну атмосферу та командну енергію, і я хочу
                        стати його частиною, аби зробити його незабутнім для всіх учасників.
                    </p>
                    </div>
                    <div className="about_top_right">
                    <img
                        className="about_top_right_img"
                        src="./images/me_top.jpg"
                        alt="me"
                    />
                    </div>
                </div>
        </Parallax>
    </section>
);
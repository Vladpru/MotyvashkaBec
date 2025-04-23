import { Parallax } from 'react-parallax';
import "./Welcome.css"

export const Welcome = () => (
    <section className="about">
        <Parallax
                bgImage="./images/bg_bec.jpg" 
                strength={300}
                className="about_top_parallax"
                >
                <div className="about_top">
                    <div className="about_top_left">
                    <h2 className="top_left_title">
                        <span>Привіт, Денисе!</span><br />
                        Мене звати Влад, і це мій мотиваційний лист на посаду IT responsible!!
                    </h2>
                    <p className="top_left_text">
                        Як всі знають <span>BEC</span> — це найкращий та найцікавіший івент, адже він тримає
                        в собі справжню інженерну атмосферу та командну енергію, і я хочу
                        стати його частиною, аби зробити його незабутнім для всіх учасників.
                    </p>
                    </div>
                </div>
        </Parallax>
    </section>
);
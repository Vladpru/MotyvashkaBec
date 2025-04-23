    import "./About.css"
    import { forwardRef, useRef } from 'react';
    import { useOnScreen } from "../hooks/UseOnScreen";

    export const About = forwardRef((props, ref) => {

        const [prosRef1, isVisible1] = useOnScreen(0.2);
        const [prosRef2, isVisible2] = useOnScreen(0.2);
        const [prosRef3, isVisible3] = useOnScreen(0.2);
        const [prosRef4, isVisible4] = useOnScreen(0.2);
        
        return (
        <section className="about">
            <div className="ref_about_point" ref={ref}></div>
            <div className="about_me">
                <div className="about_me_top">
                    <div className="about_me_left">
                        <h1 className="about_me_title">
                            Хто я
                        </h1>
                        <p className="about_me_text">
                            Моє захоплення ІТ почалося ще зі шкільних уроків по Scratch, вже у п’ятому класі я 
                        “програмував” різні програмки. У 15 років я познайомився з HTML і CSS, відтоді 
                        програмування стало невід’ємною частиною мого життя. Зараз я впевнено працюю з 
                        React та різними js-бібліотеками, які допоможуть при подальшій розробці. Також маю
                        досвід розробки fullstack-сайтів. Наразі я не просто вмотивований – я горю бажанням
                        застосувати свої знання на практиці, брати участь у реальному проєкті й 
                        розвиватися щодня. Я повністю готовий вкладати максимум зусиль у свій розвиток і
                        результат команди.
                        Взявши КТ у Олексія Татарчинського та в тебе, я повністю ознайомлений зі своїми обов’язками, такими як верстка сайту івенту, розробка брошури та бота; підтримка команди в технічних питаннях під час кортіми та на самому івенті. 
                        <br></br><br></br>
                        Потрапивши в BEST, я зрозумів наскільки великі можливості саморозвитку відкриваються кожному. У першу чергу я прагну організувати бездоганний BEC. І звісно бажаю внести свій слід у розвиток ІТ у BESTі. Також завжди готовий підтримати кортіму, допомагати у виконанні їхніх тасок. 
                        <br></br><br></br>
                        Для мене важливий справжній командний дух – я ціную комунікацію і щиро прагну створювати навколо себе дружню атмосферу. Маю велике бажання працювати над чимось справді важливим, чимось більшим, ніж просто лабораторні роботи з програмування.
                        </p>
                    </div>
                    <div className="about_me_img">
                        <img src="./images/me.jpg" alt="me" />
                    </div>
                </div>
                <div className="about_me_bottom">
                    <h1 className="bottom_title">
                        Чому я
                    </h1>
                    <ul className="bottom_pros">
                        <div className={`bottom_pro ${isVisible1 ? 'fade-in' : ''}`} ref={prosRef1}>
                            <img className="bottom_pro_img" src="images/BEClogo1.svg" alt="logoBec" />
                            <li className="bottom_pros_text">
                            Завжди оптимістичний. Моя сильна сторона, яку я вважаю важливою не лише для розбудови команди, а й для підтримки її духу на всіх етапах. Як погано б ситуація не складалась, завжди знайду або допоможу знайти раціональний підхід, без негативу. 
                            </li>
                        </div>
                        <div className={`bottom_pro ${isVisible2 ? 'fade-in' : ''}`} ref={prosRef2}>
                            <img className="bottom_pro_img" src="images/BEClogo1.svg" alt="logoBec" />
                            <li className="bottom_pros_text">
                            Відповідальний. За весь час свого навчання та й загалом життя, ніколи не пропускав дедлайни, і не збираюсь змінювати це. Розумію, що від кожного та від мене включно буде залежати весь івент. Також вмію приймати рішення у складних ситуаціях брати на себе ініціативу, щоб забезпечити успішне виконання поставлених завдань.
                            </li>
                        </div>
                        <div className={`bottom_pro ${isVisible3 ? 'fade-in' : ''}`} ref={prosRef3}>
                            <img className="bottom_pro_img" src="images/BEClogo1.svg" alt="logoBec" />
                            <li className="bottom_pros_text">
                            Комунікабельний. Я легко підтримую діалоги та обговорення на будь-які теми. Люблю працювати в команді, а спільна робота над івентом мотивує ще більше.
                            </li>
                        </div>
                        <div className={`bottom_pro ${isVisible4 ? 'fade-in' : ''}`} ref={prosRef4}>
                            <img className="bottom_pro_img" src="images/BEClogo1.svg" alt="logoBec" />
                            <li className="bottom_pros_text">
                            Flexibility. Відкритий до нових знайомств, легко підтримую діалог на будь-які теми. Мені приємно працювати з людьми, обмінюватися ідеями та разом працювати над досягненням спільних цілей, також можу вкрасти тобі конус).
                            </li>
                        </div>
                    </ul> 
                </div>
            </div>
        </section>
        );
    });
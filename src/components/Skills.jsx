import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Skills.css'

export const Skills = forwardRef((props, ref) => (
    <section className="skills" ref={ref}>
        <h1 className="skills_title title">
            Мої навички
        </h1>
        <div className="skills_swiper">
            <Swiper
             modules={[Autoplay]}
             spaceBetween={0}
             slidesPerView={4}
             loop={true}
             autoplay={{
                delay: 1500,
                disableOnInteraction: false,
             }}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
             className='swiper'
            >
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/cpp.svg" alt="C++" />
            <p className="slide_label">C++</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/html.svg" alt="HTML" />
            <p className="slide_label">HTML</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/git.svg" alt="GIT" />
            <p className="slide_label">Git</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/css.svg" alt="CSS" />
            <p className="slide_label">CSS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/javascript.svg" alt="JavaScript" />
            <p className="slide_label">JavaScript</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/react.svg" alt="React" />
            <p className="slide_label">React</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/python.svg" alt="Python" />
            <p className="slide_label">Python</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide_card">
            <img className="slide_card_img" src="/images/postgresql.svg" alt="PostgreSQL" />
            <p className="slide_label">PostgreSQL</p>
          </div>
        </SwiperSlide>
           
            </Swiper>
        </div>
    </section>
));
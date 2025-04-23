import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import './Skills.css';

const skillsData = [
  { img: '/images/cpp.svg', alt: 'C++', label: 'C++' },
  { img: '/images/git.svg', alt: 'Git', label: 'Git' },
  { img: '/images/html.svg', alt: 'HTML', label: 'HTML' },
  { img: '/images/css.svg', alt: 'CSS', label: 'CSS' },
  { img: '/images/javascript.svg', alt: 'JavaScript', label: 'JavaScript' },
  { img: '/images/react.svg', alt: 'React', label: 'React' },
  { img: '/images/python.svg', alt: 'Python', label: 'Python' },
  { img: '/images/postgresql.svg', alt: 'PostgreSQL', label: 'PostgreSQL' },
];

export const Skills = forwardRef((props, ref) => (
  <section className="skills" ref={ref}>
    <h1 className="skills_title title">Мої навички</h1>
    <div className="skills_swiper">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={() => console.log('skill slide change')}
        className="swiper"
      >
        {skillsData.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="slide_card">
              <img className="slide_card_img" src={skill.img} alt={skill.alt} />
              <p className="slide_label">{skill.label}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  </section>
));

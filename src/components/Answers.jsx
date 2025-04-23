import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import './Answers.css';

export const Answers = forwardRef((props, ref) => (
  <section className="answers" ref={ref}>
    <h1 className="answers_title title">Відповіді на запитання</h1>
    <div className="answers_swiper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        onSlideChange={() => console.log('answer slide change')}
        className="swiper_ans"
      >
        <SwiperSlide className="answers_slide">
          <div className="answers_card">
            <h2 className="answers_card_title">
              На скільки ти оцінюєш свій вільний час по шкалі від 1 до 10, скільки часу готовий виділити на кортіму?
            </h2>
            <p className="answers_card_text">
              Я оцінюю свій вільний час на 8. Загалом готовий виділити стільки часу, скільки буде потрібно. Під час навчання легко зможу поєднати кортіму з навчанням. У будь-який момент готовий підлаштовувати свій графік під потреби кортіми.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="answers_slide">
          <div className="answers_card">
            <h2 className="answers_card_title">
              На який пріоритет поставиш BEC, якщо потрапиш в команду?
            </h2>
            <p className="answers_card_text">
              Якщо я попаду в кортіму, то BEC для мене буде на першому пріоритеті. Готовий адаптувати інші справи, щоб повністю сфокусуватись на команді та тасках. Я вмію планувати час і вже зараз бачу, як BEC органічно вписується в мій ритм життя. Це не частина – це центр.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="answers_slide">
          <div className="answers_card">
            <h2 className="answers_card_title">
              Твої плани на найближчі 5 місяців?
            </h2>
            <p className="answers_card_text">
              Літом я зможу бути у Львові у будь-який момент, при потребі можу залишатися на тиждень і більше. Оскільки я з Рівного, для мене сісти на електричку – 2 години й вже на місці. Паралельно літом планую знайти роботу на півставки, але це не завадить моїй активності.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="answers_slide">
          <div className="answers_card">
            <h2 className="answers_card_title">
              Що хочеш отримати/набути/розвинути за час кортіми?
            </h2>
            <p className="answers_card_text">
              У кортімі я хочу не просто бути частиною процесу, а максимально вирости — як в особистому, 
              так і в командному плані. Першочергово хочу навчитися працювати у справжній команді, кайфово
              затімбілдитись і розірвати цей івент. Саме BEC я бачу як середовище, де кожен щиро залучений
              у спільну справу. Прагну навчитися якісній комунікації – коли можна вирішувати складні 
              моменти конструктивно, без негативу.  
              <br></br>
            </p>
              <p className="answers_card_text">Не менш важливо для мене –  поглибити свої знання в ІТ: попрактикуватися на 
              реальних задачах, тестувати себе в умовах, де важлива швидкість, чіткість і надійність рішень.
              </p>
              <p className="answers_card_text"> Найголовніше – я хочу додати до своєї бестівської історії цю неймовірну
              можливість організації BEC’у,  прожити її з кайфом, з новими знайомствами, приколами 
              та досвідом, який запам’ятається на роки.
              </p>
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  </section>
));

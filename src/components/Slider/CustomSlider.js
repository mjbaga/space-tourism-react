import { useRef, useState, createRef } from 'react';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CustomSlider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const CustomSlider = ({items}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef(null);

  const paginateHandler = (e) => {
    const index = e.currentTarget.getAttribute("data-index");
    swiperRef.current.swiper.slideTo(index);
    setActiveSlide(parseInt(index));
  }

  const slideChangeHandler = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  }

  const navBtnRefs = useRef([]);

  navBtnRefs.current = items.map((_, i) => navBtnRefs.current[i] ?? createRef());

  return (
    <div className={`${styles["custom-slider"]}`}>
      <div className={styles["custom-slider__content"]}>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          ref={swiperRef}
          onSlideChange={slideChangeHandler}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className={styles["content-info"]}>
              <header>
                <h2 className="fs-600 d-block uppercase ff-serif text-faded-white-2">{item.role}</h2>
                <p className="uppercase fs-700 ff-serif">{item.name}</p>
              </header>
              <p className="text-accent fs-400">{item.bio}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles["custom-slider__image"]}>
        {items.map((item, i) => (
          <picture key={i} className={activeSlide === i ? styles.active : ''}> 
            <source srcSet={item.images.webp} type="image/webp" />
            <img src={item.images.png} alt={item.name} />
          </picture>
        ))}
      </div>
      
      <div className={`dot-indicators flex ${styles.dots}`}>
        {items.map((item, i) => (
          <button 
            key={i} 
            data-index={i} 
            onClick={paginateHandler} 
            role="tab" 
            aria-selected={activeSlide === i ? true : false}
            ref={navBtnRefs.current[i]}
          >
            <span className="sr-only">{item.name}</span>
          </button>
        ))}
      </div>
    </div>    
  )
}

export default CustomSlider;
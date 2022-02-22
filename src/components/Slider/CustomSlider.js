import { useRef, useState, createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CustomSlider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { moveTabs } from 'CustomFunctions';

const CustomSlider = ({items, title}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const swiperRef = useRef(null);

  const navBtnRefs = useRef([]);
  navBtnRefs.current = items.map((_, i) => navBtnRefs.current[i] ?? createRef());

  const paginateHandler = (e) => {
    const index = e.currentTarget.getAttribute("data-index");
    swiperRef.current.swiper.slideTo(index);
    setActiveSlide(parseInt(index));
  }

  const slideChangeHandler = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  }

  // Implementing second variation of tab arrow keys navigation where tab group and tabs are in same component
  const keyDownHandler = (e) => {
    const index = e.currentTarget.getAttribute("data-index");
    const tab = moveTabs(navBtnRefs.current.length, parseInt(index), e.keyCode);

    if(tab.update) {
      deselectTab(navBtnRefs.current[index]);
      selectTab(navBtnRefs.current[tab.newIndex]);
    }
  }

  const deselectTab = (currenBtnRef) => {
    currenBtnRef.current.setAttribute("tabindex", -1);
  }

  const selectTab = (currenBtnRef) => {
    currenBtnRef.current.setAttribute("tabindex", 0);
    currenBtnRef.current.focus();
  }

  return (
    <div className={`${styles["custom-slider"]}`}>
      <div className={`dot-indicators flex ${styles.dots}`} role="tablist" aria-label={title}>
        {items.map((item, i) => (
          <button 
            key={i} 
            data-index={i} 
            onClick={paginateHandler} 
            onKeyDown={keyDownHandler}
            role="tab" 
            aria-selected={activeSlide === i ? true : false}
            aria-controls={item['tab-id']}
            ref={navBtnRefs.current[i]}
            data-image={item['image-id']}
            tabIndex={activeSlide === i ? 0 : -1}
          >
            <span className="sr-only">{item.name}</span>
          </button>
        ))}
      </div>

      <div className={styles["custom-slider__content"]}>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          ref={swiperRef}
          onSlideChange={slideChangeHandler}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className={styles["content-info"]} role="tabpanel" id={item['tab-id']} tabIndex={activeSlide === i ? 0 : -1}>
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
          <picture key={i} className={activeSlide === i ? styles.active : ''} id={item['image-id']}> 
            <source srcSet={item.images.webp} type="image/webp" />
            <img src={item.images.png} alt={item.name} />
          </picture>
        ))}
      </div>
    </div>    
  )
}

export default CustomSlider;
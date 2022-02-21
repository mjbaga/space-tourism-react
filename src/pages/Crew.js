import Header from 'components/layout/Header';
import styles from './Crew.module.css';

const Crew = () => {

  return (
    <div className={`${styles['crew']} image-background`}>
      <Header />
      <main className={`flow grid-container ${styles["grid-container--crew"]}`}>
        <h1 className={`${styles['title']} numbered-title`}><span aria-hidden="true">02</span>Meet your crew</h1>
        <div className={`dot-indicators flex ${styles.dots}`}>
          <button><span className="sr-only">Slide title</span></button>
          <button><span className="sr-only">Slide title</span></button>
          <button><span className="sr-only">Slide title</span></button>
          <button><span className="sr-only">Slide title</span></button>
        </div>
        <article>
          <header>
            <h2 className="fs-600 d-block uppercase ff-serif text-faded-white-2">Commander</h2>
            <p className="uppercase fs-700 ff-serif">Douglas Hurley</p>
          </header>
          <p className="text-accent fs-400">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </article>
        <picture className={styles["image-container"]}>
          <source srcSet={require("images/crew/image-douglas-hurley.webp")} type="image/webp" />
          <img src={require("images/crew/image-douglas-hurley.png")} alt="Commander Douglas Hurley" />
        </picture>
        
      </main>
    </div>
  )
}

export default Crew;
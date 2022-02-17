
import styles from './Destination.module.css';

import Header from 'components/layout/Header';
import NavMenu from 'components/ui/NavMenu';

const Destination = () => {

  return (
    <div className={`${styles['destination']} image-background`}>
      <Header />
      <main className={`flow grid-container ${styles["grid-container--destination"]}`}>
        <h1 className={`${styles['title']} numbered-title`}><span aria-hidden="true">01</span>Pick your destination</h1>
        <img src={require("images/destination/image-moon.png")} alt="Moon" />
        <NavMenu
          navItems={[ 
            {
              text: 'Moon',
              active: true
            },
            {
              text: 'Mars',
            },
            {
              text: 'Europa'
            },
            {
              text: 'Titan'
            }
          ]} 

          classes={`flex ${styles["tab-list"]}`}
          gap="1rem"
        />
        <article className={styles["destination-info"]}>
          <h2 className="uppercase fs-800 ff-serif">Moon</h2>
          <p className="text-accent fs-400">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <div className={`flex ${styles["destination-meta"]}`}>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Avg. Distance</h3>
              <p class="ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Est. Travel Time</h3>
              <p class="ff-serif uppercase">3 days</p>
            </div>
          </div>
        </article>
{/*           
        <article className="destination-info">
          <h2 className="uppercase fs-800 ff-serif">Mars</h2>
          <p className="text-accent fs-400">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
          <div className={`flex ${styles["destination-meta"]}`}>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Avg. Distance</h3>
              <p class="ff-serif uppercase">225 mil. km</p>
            </div>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Est. Travel Time</h3>
              <p class="ff-serif uppercase">9 months</p>
            </div>
          </div>
        </article>

        <article className="destination-info">
          <h2 className="uppercase fs-800 ff-serif">Europa</h2>
          <p className="text-accent fs-400">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
          <div className={`flex ${styles["destination-meta"]}`}>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Avg. Distance</h3>
              <p class="ff-serif uppercase">628 mil. km</p>
            </div>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Est. Travel Time</h3>
              <p class="ff-serif uppercase">3 years</p>
            </div>
          </div>
        </article>

        <article className="destination-info">
          <h2 className="uppercase fs-800 ff-serif">Titan</h2>
          <p className="text-accent fs-400">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
          <div className={`flex ${styles["destination-meta"]}`}>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Avg. Distance</h3>
              <p class="ff-serif uppercase">1.6 bil. km</p>
            </div>
            <div>
              <h3 className="text-accent uppercase ff-sans-cond fs-200">Est. Travel Time</h3>
              <p class="ff-serif uppercase">7 years</p>
            </div>
          </div>
        </article> */}
      </main>
    </div>
  )
}

export default Destination;
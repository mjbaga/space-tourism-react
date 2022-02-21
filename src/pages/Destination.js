
import styles from './Destination.module.css';

import Header from 'components/layout/Header';
import TabMenu from 'components/ui/TabMenu';
import { useState } from 'react';
import TabPanel from 'components/ui/TabPanel';

const DESTINATIONS = [
  {
    "name": "Moon",
    "images": {
      "png": require("images/destination/image-moon.png"),
      "webp": require("images/destination/image-moon.webp")
    },
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  },
  {
    "name": "Mars",
    "images": {
      "png": require("images/destination/image-mars.png"),
      "webp": require("images/destination/image-mars.webp")
    },
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  },
  {
    "name": "Europa",
    "images": {
      "png": require("images/destination/image-europa.png"),
      "webp": require("images/destination/image-europa.webp")
    },
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
  {
    "name": "Titan",
    "images": {
      "png": require("images/destination/image-titan.png"),
      "webp": require("images/destination/image-titan.webp")
    },
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
];

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);

  const navSelectHandler = (tab) => {
    setActiveTab(tab);
  }

  let navItems = [];
  DESTINATIONS.forEach((item, i) => {
    const tab = {
      name: item.name,
      tabPanelId: `tab-panel-${i}`,
      id: `tab-${i}`,
    }

    navItems.push(tab);
  })

  return (
    <div className={`${styles['destination']} image-background`}>
      <Header />
      <main className={`flow grid-container ${styles["grid-container--destination"]}`}>
        <h1 className={`${styles['title']} numbered-title`}><span aria-hidden="true">01</span>Pick your destination</h1>

        {/* Images are outside of TabPanel because of design constraints (for now) */}
        {DESTINATIONS.map((item, i) => (
          <picture key={i} hidden={activeTab !== i ? true : false }>
            <source srcSet={item.images.webp} type="image/webp" />
            <img src={item.images.png} alt={item.name} />
          </picture>
        ))}
        
        <TabMenu
          navItems={navItems}

          activeTab={activeTab}
          onNavSelect={navSelectHandler}
          classes={`${styles["tab-list"]}`}
          gap="1rem"
        />

        {DESTINATIONS.map((item, i) => (
          <TabPanel id={`tab-panel-${i}`} key={i} index={i} info={item} classes={styles["destination-info"]} activeTab={activeTab} />
        ))}

      </main>
    </div>
  )
}

export default Destination;
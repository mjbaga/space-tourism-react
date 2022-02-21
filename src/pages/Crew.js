import Header from 'components/layout/Header';
import CustomSlider from 'components/Slider/CustomSlider';
import styles from './Crew.module.css';

const CREW = [
  {
    "name": "Douglas Hurley",
    "images": {
      "png": require("images/crew/image-douglas-hurley.png"),
      "webp": require("images/crew/image-douglas-hurley.webp")
    },
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "images": {
      "png": require("images/crew/image-mark-shuttleworth.png"),
      "webp": require("images/crew/image-mark-shuttleworth.webp")
    },
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "images": {
      "png": require("images/crew/image-victor-glover.png"),
      "webp": require("images/crew/image-victor-glover.webp")
    },
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "images": {
      "png": require("images/crew/image-anousheh-ansari.png"),
      "webp": require("images/crew/image-anousheh-ansari.webp")
    },
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
];

const Crew = () => {

  return (
    <div className={`${styles['crew']} image-background`}>
      <Header />
      <main className={`flow grid`}>
        <div className="container">
          <h1 className={`${styles['title']} numbered-title`}><span aria-hidden="true">02</span>Meet your crew</h1>
        </div>
        <CustomSlider items={CREW} />
        
      </main>
    </div>
  )
}

export default Crew;
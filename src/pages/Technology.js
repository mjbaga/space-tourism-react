import Page from 'components/common/Page';
import TabMenu from 'components/layout/TabMenu';
import TabPanel from 'components/layout/TabPanel';
import { useState } from 'react';
import styles from './Technology.module.css';
import MediaQuery from 'react-responsive';

const TECH = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": require("images/technology/image-launch-vehicle-portrait.jpg"),
      "landscape": require("images/technology/image-launch-vehicle-landscape.jpg")
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    "tab-id": "vehicle-tab",
    "image-id": "vehicle-image",
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": require("images/technology/image-spaceport-portrait.jpg"),
      "landscape": require("images/technology/image-spaceport-landscape.jpg")
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    "tab-id": "spaceport-tab",
    "image-id": "spaceport-image",
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": require("images/technology/image-space-capsule-portrait.jpg"),
      "landscape": require("images/technology/image-space-capsule-landscape.jpg")
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    "tab-id": "capsule-tab",
    "image-id": "capsule-image",
  }
];

const Technology = () => {
  const [activeTab, setActiveTab] = useState(0);

  const navSelectHandler = (index) => {
    setActiveTab(index);
  }

  return (
    <Page wrapClass={styles.tech} mainClass={`grid-container ${styles['grid-container--tech']}`}>
      <h1 className={`${styles['title']} numbered-title`}><span aria-hidden="true">03</span>Space Launch 101</h1>

      <TabMenu
        navItems={TECH}

        activeTab={activeTab}
        onNavSelect={navSelectHandler}
        classes={`${styles["tab-list"]}`}
        gap="1rem"
        type="number"
      />

      {TECH.map((item, i) => (
        <picture key={i} hidden={activeTab !== i ? true : false }>
          <MediaQuery maxWidth={1023}>
            <img src={item.images.landscape} alt={item.name} />
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <img src={item.images.portrait} alt={item.name} />
          </MediaQuery>
        </picture>
      ))}

      {TECH.map((item, i) => (
        <TabPanel id={`tab-panel-${i}`} key={i} index={i} info={item} classes={`${styles["tech-info"]} flow`} activeTab={activeTab} >
          <p className="text-accent fs-600 uppercase ff-sans-cond">The terminology...</p>
          <h2 className="uppercase fs-700 ff-serif">{item.name}</h2>
          <p className="text-accent fs-400">{item.description}</p>
        </TabPanel>
      ))}
    </Page>
  )
}

export default Technology;
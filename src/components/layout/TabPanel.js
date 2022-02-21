
import styles from './TabPanel.module.css';

const TabPanel = ({info, id, index, classes, activeTab}) => {
  const { name, description, distance, travel} = info;

  return (
    <article id={id} className={`${styles["tab-panel"]} ${classes ? classes : ''}`} hidden={activeTab !== index ? true : false } role="tabpanel" tabIndex={activeTab !== index ? -1 : 0}>
      <h2 className="uppercase fs-800 ff-serif">{name}</h2>
      <p className="text-accent fs-400">{description}</p>
      <div className={`flex ${styles["tab-panel-meta"]}`}>
        <div>
          <h3 className="text-accent uppercase ff-sans-cond fs-200">Avg. Distance</h3>
          <p className="ff-serif uppercase">{distance}</p>
        </div>
        <div>
          <h3 className="text-accent uppercase ff-sans-cond fs-200">Est. Travel Time</h3>
          <p className="ff-serif uppercase">{travel}</p>
        </div>
      </div>
    </article>
  )
}

export default TabPanel;
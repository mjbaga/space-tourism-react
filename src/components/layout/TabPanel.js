
const TabPanel = ({ classes, id, activeTab, index, children, }) => {

  return (
    <article 
      id={id} 
      className={`${classes ? classes : ''}`} 
      hidden={activeTab !== index ? true : false } 
      role="tabpanel" 
      tabIndex={activeTab !== index ? -1 : 0}
    >
      {children}
    </article>
  )
}

export default TabPanel;
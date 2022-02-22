import styles from './TabMenu.module.css';

import { useRef, createRef } from 'react';

import Tab from 'components/layout/Tab';
import { moveTabs } from 'CustomFunctions';

const TabMenu = (props) => {
  const { navItems, classes, gap, activeTab } = props;

  const tabRefs = useRef([]);

  tabRefs.current = navItems.map((_, i) => tabRefs.current[i] ?? createRef());

  const clickItemHandler = (index) => {
    props.onNavSelect(index);
  }

  // Implementing first variation of tab arrow keys navigation where tab group and tabs are separate components
  // EDIT: Refactored into a reusable function: arrowKeysTabPress
  const arrowPressHandler = (index, keyCode) => {
    let tab = moveTabs(tabRefs.current.length, index, keyCode);

    if(tab.update) {
      tabRefs.current[index].current.deselect();
      tabRefs.current[tab.newIndex].current.select();
    }
  }

  return (
    <ul className={`${styles['tab-menu']} ${classes ? classes : ''} flex`} style={{ '--gap': gap }} role="tablist">
      {navItems.map((item, i) => <Tab key={i} index={i} item={item} selectedTab={activeTab} handleChange={clickItemHandler} onArrowChange={arrowPressHandler} ref={tabRefs.current[i]} />)}
    </ul>
  )
}

export default TabMenu;
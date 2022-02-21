import styles from './TabMenu.module.css';

import { useRef, createRef } from 'react';

import Tab from 'components/layout/Tab';

const TabMenu = (props) => {
  const { navItems, classes, gap, activeTab } = props;

  const tabRefs = useRef([]);

  tabRefs.current = navItems.map((_, i) => tabRefs.current[i] ?? createRef());

  const clickItemHandler = (index) => {
    props.onNavSelect(index);
  }

  const arrowPressHandler = (index, keyCode) => {
    const keydownLeft = 37;
    const keydownRight = 39;
    let newIndex = 0;

    if(!(keyCode === keydownLeft || keyCode === keydownRight))
      return false;

    if(keyCode === keydownLeft)
      newIndex = index <= 0 ? tabRefs.current.length - 1 : index - 1;

    if(keyCode === keydownRight)
      newIndex = index >= (tabRefs.current.length - 1) ? 0 : index + 1;

    tabRefs.current[index].current.deselect();
    tabRefs.current[newIndex].current.select();
  }

  return (
    <ul className={`${styles['tab-menu']} ${classes ? classes : ''} flex`} style={{ '--gap': gap }} role="tablist">
      {navItems.map((item, i) => <Tab key={i} index={i} item={item} selectedTab={activeTab} handleChange={clickItemHandler} onArrowChange={arrowPressHandler} ref={tabRefs.current[i]} />)}
    </ul>
  )
}

export default TabMenu;